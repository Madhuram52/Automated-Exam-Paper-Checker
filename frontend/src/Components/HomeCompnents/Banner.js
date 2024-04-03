import React from 'react';
import './Banner.css';
import backgrounimage from '../../Assets/Img/Black_background.jpeg';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate()
    function upload() {
        navigate("/123/upload");
      }
    return (
        <div className="item-container">
            <img src={backgrounimage} className='bgimage'></img>
            <div className="items">
                <p className="mainline">EXAM PAPER CHECKER</p>
                <button className="glow-on-hover" type="button" onClick={upload}>Let's Connect!</button>
            </div>
        </div>
    );
}

export default Banner;