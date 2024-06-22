

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [responses, setResponses] = useState([]); // Use an array to store multiple responses
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); // Use an array to store multiple images
  const [text, setText] = useState('');

  const value = {
    responses,
    setResponses,
    loading,
    setLoading,
    images,
    setImages,
    text,
    setText,
  };

  return React.createElement(AppContext.Provider, { value }, children);
};
