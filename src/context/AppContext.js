// import React, { createContext, useState } from 'react';

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState('');

//   const value = {
//     response,
//     setResponse,
//     loading,
//     setLoading,
//     image,
//     setImage,
//     text,
//     setText,
//   };

//   return React.createElement(AppContext.Provider, { value }, children);
// };


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
