import React, { useState } from 'react';
import FileInput from '../components/FileInput';
import ImagePreview from '../components/ImagePreview';
import TextResponse from '../components/TextResponse';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';

const Checker = () => {
  const [images, setImages] = useState([]);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ images, setImages, responses, setResponses, loading, setLoading }}>
      <div>
        <Header/>
      <div className="app-container flex h-screen bg-blue-100">
        <div className="w-1/2 flex flex-col items-center p-1 overflow-y-auto">
          <FileInput />
          <ImagePreview />
        </div>
        <div className="w-1/2 p-4 overflow-y-auto">
          <TextResponse />
        </div>
      </div>
      </div>
    </AppContext.Provider>
  )
}

  export default Checker;
