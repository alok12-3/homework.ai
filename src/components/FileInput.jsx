import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import useOCR from '../hooks/useOcr';
import './FileInput.css';

const FileInput = () => {
  const { setImage } = useContext(AppContext);
  const { fetchOcr } = useOCR();

  return (
    <div className="file-input">
      <input type="file" id="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <label htmlFor="file">Choose an Image</label>
      <button onClick={fetchOcr}>OCR</button>
    </div>
  );
};

export default FileInput;
