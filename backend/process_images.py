import os
from google.cloud import vision
from google.oauth2 import service_account

current_directory = os.path.dirname(os.path.abspath(__file__))
# Construct the complete file path for your Google Cloud service account key JSON file
file_name = os.path.join(current_directory, 'corded-pivot-403608-8bbffa01aba8.json')

# Set the path to your Google Cloud service account key JSON file
os.environ["GOOGLE_APP_CREDENTIALS"] = file_name

def extract_text_from_image(image_file):
    # Initialize the Vision API client
    client = vision.ImageAnnotatorClient()

    # Read the image file
    content = image_file.read()

    # Perform OCR (text detection) on the image
    image = vision.Image(content=content)
    response = client.text_detection(image=image)

    # Extract text from the response
    texts = response.text_annotations
    if texts:
        extracted_text = texts[0].description

        # Split the text into lines
        lines = extracted_text.split('\n')

        # Concatenate the lines into a single line
        concatenated_text = ' '.join(lines)

        return concatenated_text.upper()
    else:
        return "No text found in the image."
