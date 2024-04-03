import cv2
import pytesseract

def detect_text(image_path):
  """
  Detects text in an image using OpenCV and prints the extracted text to the console.

  Args:
      image_path (str): Path to the image file.

  Returns:
      None
  """

  # Load the image
  img = cv2.imread(image_path)

  # Check if image loading was successful
  if img is None:
      print(f"Error: Could not read image from '{image_path}'.")
      return

  # Convert to grayscale
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

  # Apply bilateral filtering to reduce noise
  bilateral = cv2.bilateralFilter(gray, 11, 17, 17)

  # Find edges using Sobel filter
  edges = cv2.Sobel(bilateral, cv2.CV_64F, 1, 0, ksize=3)
  edges = cv2.convertScaleAbs(edges, alpha=1.0, beta=0.0)  # Convert to CV_8UC1

  # Apply Otsu's thresholding to isolate potential text regions
  thresh = cv2.threshold(edges, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

  # Find contours in the thresholded image
  cnts = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)[0]
  cnts = cnts if len(cnts) == 2 else cnts[1]  # Handle OpenCV version differences

  # Loop through contours, draw bounding boxes, and extract text
  for c in cnts:
    x, y, w, h = cv2.boundingRect(c)
    cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

    # Extract text from the bounded region using Tesseract-OCR
    text = pytesseract.image_to_string(img[y:y+h, x:x+w])
    print(text)

  # Display the image with bounding boxes (optional for visualization)
  # cv2.imshow("Text Detection", img)
  # cv2.waitKey(0)

# Replace 'path/to/your/image.jpg' with your image path
image_path = 'D:/Web Devlopment/EPC/EPC/backend/images/original_para.png'
detect_text(image_path)

cv2.destroyAllWindows()