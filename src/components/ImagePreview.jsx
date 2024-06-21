import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ImagePreview = () => {
  const { image } = useContext(AppContext);

  return (
    <div className="image-preview">
      {image && <img src={URL.createObjectURL(image)} alt="Selected" />}
    </div>
  );
};

export default ImagePreview;
