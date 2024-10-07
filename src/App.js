import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CourseCard from './components/CourseCard';
import CourseDetails from './components/CourseDetails';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn React from scratch.', price: 19.99 },
  { id: 2, title: 'JavaScript Mastery', description: 'Become a JavaScript pro.', price: 24.99 },
  { id: 3, title: 'CSS in Depth', description: 'Master CSS for modern web development.', price: 14.99 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart([...cart, course]);
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<CourseCard courses={courses} addToCart={addToCart} />} />
        <Route path="/course/:id" element={<CourseDetails courses={courses} addToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
