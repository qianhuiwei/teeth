import React from 'react';
import Webcam from "react-webcam";
import { ReactQrCode } from '@devmehq/react-qr-code';
import CapturedImg from './CapturedImg';
import { useState } from 'react';
import { useRef } from 'react';

// TO DO
// Lifecycle: when render the component, load the pic data & check if all pics got url
// if so, jump to the next page

function Camera() {
    const [switchCamera, setSwitchCamera] = useState(false);
    
    const videoConstraints = {
        facingMode: switchCamera ? { exact: "environment" } : "user" 
      };

    const picsData = [
        { id: 0, src: "", active: true },
        { id: 1, src: "", active: false },
        { id: 2, src: "", active: false },
        { id: 3, src: "", active: false }
    ];

    const [pics, setPics] = useState(picsData);
    const webcamRef = useRef(null);

    const flipCamera = () => {
        setSwitchCamera(!switchCamera);
    }

    // find the pic by id and update its active status
    const updateActive = (id) => {
        const updatedPics = pics.map((pic) => {
            if (pic.id === id) {
                return { ...pic, active: true };
            } else {
                return { ...pic, active: false };
            }
        });
        setPics(updatedPics);
    }

    // update the active pic
    const updatePic = () => {
        const newSrc = webcamRef.current.getScreenshot();

        const updatedPics = pics.map((pic) => {
            if (pic.active) {
                return { ...pic, src: newSrc };
            }
            return pic;
        });
        setPics(updatedPics);
    };

    const renderedPics = pics.map((pic, index) => {
        return <CapturedImg src={pic.src} id={pic.id} active={pic.active} onClick={updateActive} key={index} />
    });

    const handleChange = (e) => {
        const newSrc = URL.createObjectURL(e.target.files[0]);

        const updatedPics = pics.map((pic) => {
            if (pic.active) {
                return { ...pic, src: newSrc };
            }
            return pic;
        });
        setPics(updatedPics);
    }

    return (
        <div>
            <div style={{ display: "flex", marginBottom: "40px" }}>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>個人資料</div>
                <div style={{ margin: "8px", borderBottom: "2px solid blue" }}>關於您的笑容問題</div>
                <div style={{ margin: "8px", borderBottom: "2px solid lightblue" }}>微笑預約</div>
            </div>

            <ReactQrCode value={window.location.href} />
            <div>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    height={500}
                    width={570}
                    videoConstraints={videoConstraints}
                />
            </div>

            <div style={{width:"600px", height:"200px"}}>
                {renderedPics}
            </div>
            <button onClick={updatePic}>Capture photo</button>
            <button onClick={flipCamera}>Front Camera</button>
            <input type="file" onChange={handleChange} />
        </ div>
    );
}

export default Camera;


