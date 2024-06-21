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


const App = () => (
  <AppProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/teacher/dashboard" element={<DashboardPageTeacher />} />
        <Route path="/student/class/dashboard" element={<DashboardPageStudent />} />
        <Route path="/teacher or student/class/subject/homework" element={<HomeworkPage />} />
        <Route path="/teacher/class/subject/homeworks" element={<AllHomeworksPageTeacher />} />
        <Route path="/student/class/subject/homeworks" element={<AllHomeworksPageStudent/>} />
        <Route path="/teacher/dashboard/create" element={<CreateHomeworkPage/>} />
      </Routes>
    </Router>
  </AppProvider>
);

export default App;
