import React, { useState, useCallback, useEffect } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Cropper from "react-easy-crop";
export const CropImage = ({ img, data, setData, setCropState, setImg }) => {
  const [src, setSrc] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [cropedAreaPixels, setCropedAreaPixels] = useState(null);
 


  const onCropComplete = useCallback((a,croppedAreaPixels) => {
    setCropedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    try {
      const cropedImgeUrl = await getCroppedImg(src,cropedAreaPixels); 
      urlToFile(cropedImgeUrl);
      setCropState(false);
    } catch (error) {
      console.log(error);
    }
  };

  const urlToFile = async (url) => {
    const blob = await (await fetch(url)).blob(); 
    const file = new File([blob], img.name, );
    setData({...data, image:file });
  };

  useEffect(() => {
    const link = URL.createObjectURL(img);
    setSrc(link);
  }, [img]);
  return (
    <div className="crop-container">
      <Cropper
        className="cropper"
        image={src}
        crop={crop}
        zoom={1}
        aspect={16/9}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
      />

      <div className="crop-actions">
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {
              setCropState(false);
              setImg(null);
              setData({ ...data, image: null });
            }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleCrop();
            }}
            endIcon={<SendIcon />}
          >
            Continue
          </Button>
        </Stack>
      </div>
    </div>
  );
};

const createImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', error => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
    image.src = url
  })

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 */
export default async function getCroppedImg(imageSrc, pixelCrop) {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  canvas.width = pixelCrop.width
  canvas.height = pixelCrop.height
  const ctx = canvas.getContext('2d')

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // As Base64 string 
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(URL.createObjectURL(file))
    }, 'image/jpeg')
  })
}