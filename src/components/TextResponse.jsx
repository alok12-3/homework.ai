import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './TextResponse.css';

const TextResponse = () => {
  const { response, loading } = useContext(AppContext);

  return (
    <div className="text-response">
      <p>{loading ? 'Loading...' : <span dangerouslySetInnerHTML={{ __html: response }} />}</p>
    </div>
  );
};

export default TextResponse;
