import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const EmotionRecognition = () => {
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState('');

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');
      startVideo();
    };

    const startVideo = () => {
      navigator.getUserMedia(
        { video: {} },
        stream => (videoRef.current.srcObject = stream),
        err => console.error(err)
      );
    };

    videoRef.current.addEventListener('play', () => {
      const canvas = faceapi.createCanvasFromMedia(videoRef.current);
      document.body.append(canvas);

      const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

        if (detections.length > 0) {
          const mostLikelyEmotion = Object.entries(detections[0].expressions).reduce((a, b) => a[1] > b[1] ? a : b);
          setEmotion(mostLikelyEmotion[0]);
        }
      }, 100);
    });

    loadModels();
  }, []);

  return (
    <div>
      <h1>Emotion Recognition</h1>
      <video ref={videoRef} autoPlay muted width="720" height="560" />
      <p>Recognized Emotion: {emotion}</p>
    </div>
  );
};

export default EmotionRecognition;
