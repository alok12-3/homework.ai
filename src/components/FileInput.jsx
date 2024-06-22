
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import useOCR from '../hooks/useOcr';


const FileInput = () => {
  const { setImages } = useContext(AppContext);
  const { fetchOcr } = useOCR();

  const handleFileChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-100 p-4 w-full max-w-md mx-auto">
      <input
        type="file"
        id="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file"
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Choose Images
      </label>
      <button
        onClick={fetchOcr}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Submit
      </button>
    </div>
  );
};

export default FileInput;
