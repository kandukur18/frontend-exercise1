import React, { useState } from "react";
import Form from "./components/Form";
import DataTable from "./components/DataTable";

const App = () => {
  const [showMainPage, setShowMainPage] = useState(false); // State to toggle between Hero and Main Page

  const handleGetStarted = () => {
    setShowMainPage(true); // Show the main page on button click
  };

  const [data, setData] = useState([]);

  const handleDataSubmit = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showMainPage ? (
        <>
          {/* Main Page */}
          <nav className="bg-blue-600 text-white shadow-md py-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
              <h1 className="text-2xl font-bold">SmartInput</h1>
              <ul className="flex space-x-6">
                <li>
                  <a href="#features" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main id="features" className="flex-grow bg-gray-100 py-10 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Form onSubmit={handleDataSubmit} />
                <DataTable data={data} onDelete={handleDelete} />
              </div>
            </div>
          </main>

          <footer id="contact" className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto text-center">
              <p>© 2024 SmartInput. All rights reserved.</p>
              <ul className="flex justify-center space-x-6 mt-4">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </>
      ) : (
        <>
          
          <header
            id="home"
            className="relative bg-cover bg-center min-h-screen text-white flex items-center justify-center"
            style={{
              backgroundImage: "url('/tech-background.jpg')", // Path to the image in the public folder
            }}
          >
           
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h1 className="text-5xl font-extrabold">Welcome to SmartInput</h1>
              <p className="mt-4 text-lg">
                Simplifying data management with intuitive tools for a better experience.
              </p>
              {/* Call-to-Action Button */}
              <button
                onClick={handleGetStarted}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Get Started
              </button>
            </div>
          </header>
        </>
      )}
    </div>
  );
};

export default App;
