import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import ImagePreview from './components/ImagePreview';
import FileInput from './components/FileInput';
import TextResponse from './components/TextResponse';
import './App.css';

const App = () => (
  <AppProvider>
    <div className="container">
      <Header />
      <div className="content">
        <ImagePreview />
        <FileInput />
        <TextResponse />
      </div>
    </div>
  </AppProvider>
);

export default App;
