import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import FieldList from './components/FieldList';
import AddField from './components/AddField';
import UpdateField from './components/UpdateField';
import AIInsights from './components/AIInsights';
import Payment from './components/Payment';
import Home from './components/Home';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import PaymentResult from './components/PaymentResult';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const AppContent = () => {
  const location = useLocation();
  const showNavbar = [
    '/fields',
    '/add-field',
    '/update-field',
    '/ai-insights',
    '/payment',
    '/home',
  ].some(path => location.pathname.startsWith(path));

  return (
    <>
      {showNavbar && <Navbar />}
      <ToastContainer />
      <div className="container mx-auto">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/fields" element={<ProtectedRoute element={FieldList} />} />
          <Route path="/add-field" element={<ProtectedRoute element={AddField} />} />
          <Route path="/update-field/:id" element={<ProtectedRoute element={UpdateField} />} />
          <Route path="/ai-insights/:fieldId" element={<ProtectedRoute element={AIInsights} />} />
          <Route path="/payment" element={<ProtectedRoute element={Payment} />} />
          <Route path="/payment-result" element={<ProtectedRoute element={PaymentResult}/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

