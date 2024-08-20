// src/App.js
import React from 'react';
import MyNavbar from './components/Navbar';  // Import your Navbar component
import Card from './components/cards/Card';

function App() {
  const cardData = [
  {
    id: 1,
    CardTitle: "My name is Umar",
    cardDesc: "The weather today is nice",
    cardImg: "/logo192.png"
  },
  {
    id: 2,
    CardTitle: "My name is Umar",
    cardDesc: "The weather today is nice",
    cardImg: "/logo192.png"
  },
  {
    id: 3,
    CardTitle: "My name is Umar",
    cardDesc: "The weather today is nice",
    cardImg: "/logo192.png"
  },
]
  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h1>Welcome to My App</h1>
        {/* Other components or content */}
      </div>
    </>
  );
}

export default App;
