import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Score.css';
import sample1 from "../Assets/Img/sample1.jpeg";
import sample2 from "../Assets/Img/sample2.jpg";
import sample3 from "../Assets/Img/sample3.jpg";
import sample4 from "../Assets/Img/sample4.jpg";
import sample5 from "../Assets/Img/sample6.jpg";
import sample6 from "../Assets/Img/sample5.jpg";

const Score = () => {
  // const location = useLocation();
  // const data = location.state.data; // Access the passed data

  const userId = useParams().uid; //to access useid for sending to backend for searching

  const navigate = useNavigate();
  const [previousScores, setPreviousScores] = useState([]);

  useEffect(() => {
    // Fetch previous scores from MongoDB or use dummy data
    const dummyData = [
      { studentImage: sample1, originalImage: sample2, score: 80 },
      { studentImage: sample3, originalImage: sample4, score: 75 },
      { studentImage: sample5, originalImage: sample6, score: 90 },
    ];
    setPreviousScores(dummyData);
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Calculate the result and total score
  // const result = data.result;
  // const total = data.total;

  return (
    <div className="score-container">
      <div className="score">
        <h1>Your final score is:</h1>
        <div className="circle">
          {/* {result}/{total} */}
          10/35
        </div>
        <button className="score-blue-button" onClick={handleGoBack}>
          Back
        </button>
      </div>

      <div className="previous-scores">
        <h2>Previous Scores:</h2>
        <table className="score-table">
          <thead>
            <tr>
              <th>Student Image</th>
              <th>Original Image</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {previousScores.map((score, index) => (
              <tr key={index}>
                <td><img src={score.studentImage} alt={`Student ${index + 1}`} /></td>
                <td><img src={score.originalImage} alt={`Original ${index + 1}`} /></td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Score;
