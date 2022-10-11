import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";

const videoConstraints = {
    width: 420,
    height: 720,
    facingMode: "user"
};


const Component = () => {
    const camera = useRef(null);
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [image, setImage] = useState(null);

  
    return (
        <>
      <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
        <img src={image} alt='Image preview' height={720}  width={420}  videoConstraints={videoConstraints}/>
        <button
          onClick={() => {
              const photo = camera.current.takePhoto();
              setImage(photo);
          }}
        />
        <button
          hidden={numberOfCameras <= 1}
          onClick={() => {
            camera.current.switchCamera();
          }}
        />
        </>
    )
        }

export default Component;