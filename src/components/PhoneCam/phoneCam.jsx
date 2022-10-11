import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";


const videoConstraints = {
    width: 420,
    height: 720
};

const Component = () => {
    const camera = useRef(null);
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [image, setImage] = useState(null);

  
    return (
        <>
      <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} height={720}  width={420}  videoConstraints={videoConstraints} />
        <img src={image} alt='Image preview' />
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