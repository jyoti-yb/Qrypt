import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';
import Chat from './components/pages/Chat'; // Import the Chat component
import { auth } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <Router>
      <div className="App">
        <ConditionalNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/chat"
            element={user ? <Chat /> : <Navigate to="/welcome" />} // Protected Chat route
          />
          <Route
            path="/welcome"
            element={
              !user ? <SignUp /> : <Navigate to="/" /> // Redirect authenticated users to home
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Component to conditionally render the Navbar
function ConditionalNavbar() {
  const location = useLocation();

  // Only render Navbar if the path is not "/chat"
  if (location.pathname !== '/chat') {
    return <Navbar />;
  }

  return null;
}

export default App;
