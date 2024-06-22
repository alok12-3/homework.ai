<<<<<<< HEAD
// import React from 'react';
// import { AppProvider } from './context/AppContext';
// import Header from './components/Header';
// import ImagePreview from './components/ImagePreview';
// import FileInput from './components/FileInput';
// import TextResponse from './components/TextResponse';
// import './App.css';

// const App = () => (
//   <AppProvider>
//     <div className="container">
//       <Header />
//       <div className="content">
//         <ImagePreview />
//         <FileInput />
//         <TextResponse />
//       </div>
//     </div>
//   </AppProvider>
// );

// export default App;

import React, { useState } from 'react';
import FileInput from './components/FileInput';
import ImagePreview from './components/ImagePreview';
import TextResponse from './components/TextResponse';
import { AppContext } from './context/AppContext';
import './App.css';
import Header from './components/Header';

const App = () => {
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
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomeworkPage from './pages/HomeworkPage';
import DashboardPageTeacher from './pages/DashboardPageTeacher';
import DashboardPageStudent from './pages/DashboardPageStudent';
import AllHomeworksPageTeacher from './pages/AllHomeworksPageStudent';
import AllHomeworksPageStudent from './pages/AllHomeworksPageTeacher';
import CreateHomeworkPage from './pages/CreateHomeworkPage';

const App = () => {
  const basename = import.meta.env.VITE_PUBLIC_URL || "/homework.ai/";

  return (
    <AppProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/teacher/dashboard" element={<DashboardPageTeacher />} />
          <Route path="/student/class/dashboard" element={<DashboardPageStudent />} />
          <Route path="/teacher or student/class/subject/homework" element={<HomeworkPage />} />
          <Route path="/teacher/class/subject/homeworks" element={<AllHomeworksPageTeacher />} />
          <Route path="/student/class/subject/homeworks" element={<AllHomeworksPageStudent />} />
          <Route path="/teacher/dashboard/create" element={<CreateHomeworkPage />} />
        </Routes>
      </Router>
    </AppProvider>
>>>>>>> 2a43ef633d95cdd0c4fca278b6499120743ea142
  );
};

export default App;
