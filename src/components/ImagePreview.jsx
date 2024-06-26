
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ImagePreview = () => {
  const { images } = useContext(AppContext);

  return (
    <div className="image-preview flex flex-col items-center w-full max-w-md mx-auto mt-4">
      {images.map((image, index) => (
        <div key={index} className="mb-4 w-full">
          <img
            src={URL.createObjectURL(image)}
            alt={`Selected ${index + 1}`}
            className="object-cover w-full h-auto rounded shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagePreview;
