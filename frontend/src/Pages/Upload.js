import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.css';

const Upload = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  function uploadmcq() {
    navigate("/upload/uploadpaper", { state: { type: "mcq" } });
  }

  function uploadfb() {
    navigate("/upload/uploadpaper", { state: { type: "tf" } });
  }

  function uploadoneword() {
    navigate("/upload/uploadpaper", { state: { type: "oneword" } });
  }

  function uploadmatch() {
    navigate("/upload/uploadpaper", { state: { type: "para" } });
  }

  const DUMMY_UPLOAD ={ user: 'u1' }

  return (
    <div className='upload-container'>
      <div className='upload-wrapper'>
        <div className="upload">
          <div className="buttons">
            <button className="white-button" onClick={uploadmcq}>MCQ</button>
            <button className="white-button" onClick={uploadfb}>T/F</button>
            <button className="white-button" onClick={uploadoneword}>One Word</button>
            <button className="white-button" onClick={uploadmatch}>Theoretical Answer</button>
          </div>
          <div className="instructions">
            <h2>Introduction:</h2>
            <p>Welcome to Exam Paper Checker, your one-stop solution for automatically grading and comparing student answer sheets with the original answer key. Follow these simple steps to make the most of our service.</p>

            <h2>Step 1: Register or Log In</h2>
            <ul>
              <li>If you're a new user, start by registering for an account or log in if you already have one.</li>
              <li>Make sure to use a valid email address for communication and account recovery.</li>
            </ul>

            <h2>Step 2: Uploading Student Answer Sheet</h2>
            <ul>
              <li>Click on the "Upload Student Answer Sheet" button on the homepage.</li>
              <li>You can upload your student's answer sheet in one of the following formats: PDF or image (JPEG, PNG).</li>
              <li>Ensure that the answer sheet is clear, well-lit, and the entire content is visible.</li>
            </ul>

            <h2>Step 3: Uploading Original Answer Sheet</h2>
            <ul>
              <li>Click on the "Upload Original Answer Sheet" button on the homepage.</li>
              <li>Upload the original answer key in PDF or image format.</li>
              <li>Make sure it's a high-quality and clear representation of the correct answers.</li>
            </ul>

            <h2>Step 4: Select Exam Settings</h2>
            <ul>
              <li>Provide details about the exam you want to check, such as the total number of questions, marking scheme, and other specific instructions.</li>
              <li>This helps our system accurately grade the student's answers.</li>
            </ul>

            <h2>Step 5: Start the Grading Process</h2>
            <ul>
              <li>Once both answer sheets are uploaded and exam settings are specified, click the "Start Grading" button.</li>
              <li>Our system will automatically compare the student's answers with the original key and generate a report.</li>
            </ul>

            <h2>Step 6: Review the Results</h2>
            <ul>
              <li>After the grading process is complete, you will be presented with a detailed report, including scores and areas where the student performed well or needs improvement.</li>
              <li>You can download or print the report for your records.</li>
            </ul>

            <h2>Tips for Successful Uploading</h2>
            <ul>
              <li>Ensure good lighting and a clear focus when taking photos of answer sheets.</li>
              <li>Make sure the entire page is visible and that the image is not distorted or blurred.</li>
              <li>For PDFs, make sure they are legible and not password-protected.</li>
              <li>Double-check the exam settings to avoid errors in grading.</li>
            </ul>

            <h2>Contact Support</h2>
            <p>If you encounter any issues or have questions, feel free to contact our support team at [support@email.com] for assistance.</p>

          </div>
        </div>
        <button className="blue-button" onClick={handleGoBack}>Back</button>
      </div>
    </div>
  );
};

export default Upload;
