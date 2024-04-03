from flask import Flask, request, jsonify
from flask_cors import CORS
from process_images import extract_text_from_image
from check_answer import check_answer
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# MongoDB configuration
client = MongoClient('mongodb://localhost:27017/')
db = client['your_database_name']  # Change 'your_database_name' to your database name
users_collection = db['users']

@app.route('/api/upload', methods=['POST'])
def upload_images_route():
    try:
        # Get the 'type' value from formData
        image_type = request.files.get('type')
        original_image = request.files.get('originalImage')
        student_image = request.files.get('studentImage')

        if not (original_image and student_image):
            response_data = {'message': 'Both originalImage and studentImage are required.'}
            return jsonify(response_data), 400

        original_text = extract_text_from_image(original_image)
        student_text = extract_text_from_image(student_image)

        result,total=check_answer(image_type, original_text,student_text)

        print("you obtained ",result," out of ",total)
        response_data = {
            'message': 'Images uploaded and processed successfully',
            'total': total,
            'result': result
        }
        return jsonify(response_data), 200

    except Exception as e:
        response_data = {'message': f'Upload and processing failed: {str(e)}'}
        return jsonify(response_data), 500
    
@app.route('/api/signup', methods=['POST'])
def signup_route():
    try:
        # Extract user data from the request
        data = request.json
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        # Basic validation
        if not (name and email and password):
            return jsonify({'message': 'Name, email, and password are required.'}), 400

        # Check if the user already exists
        if users_collection.find_one({'email': email}):
            return jsonify({'message': 'User with this email already exists.'}), 400

        # Insert the user into the database
        user_data = {'name': name, 'email': email, 'password': password}
        users_collection.insert_one(user_data)

        return jsonify({'message': 'User registered successfully.'}), 201

    except Exception as e:
        response_data = {'message': f'Signup failed: {str(e)}'}
        return jsonify(response_data), 500
    
# @app.route('/api/login', methods=['POST'])
# def login_route():
#     try:
#         # Extract user data from the request
#         data = request.json
#         email = data.get('email')
#         password = data.get('password')

#         # Check if the user exists in the database
#         user = users_collection.find_one({'email': email})
#         if not user or not check_password_hash(user['password'], password):
#             return jsonify({'message': 'Invalid email or password.'}), 401

#         # Generate JWT token
#         token = jwt.encode({
#             'user_id': str(user['_id']),
#             'exp': datetime.utcnow() + TOKEN_EXPIRATION_TIME
#         }, app.config['SECRET_KEY'], algorithm='HS256')

#         return jsonify({'token': token.decode('utf-8')}), 200

#     except Exception as e:
#         response_data = {'message': f'Login failed: {str(e)}'}
#         return jsonify(response_data), 500

if __name__ == '__main__':
    app.run()
