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
import Checker from './usp/Checker';

const App = () => {


  return (
    <AppProvider>
      <Router >
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
          <Route path="/demo" element={<Checker />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
