import React, { useState } from 'react';

const Itinerary = () => {
    const [itineraries, setItineraries] = useState([]);  // State to store itinerary items
    const [inputValue, setInputValue] = useState("");   // State to store the current input value

    // Function to handle input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission from reloading the page
        if (!inputValue.trim()) return; // Prevent adding empty items
        setItineraries([...itineraries, inputValue]); // Add new item to the itineraries array
        setInputValue(""); // Reset input field after submission
    };

    return (
        <div className="max-w-md mx-auto mt-10 space-y-4">
            <form onSubmit={handleSubmit} className="flex space-x-3">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add new itinerary"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Add
                </button>
            </form>
            {itineraries.length > 0 && (
                <ul className="list-disc pl-5">
                    {itineraries.map((itinerary, index) => (
                        <li key={index} className="text-gray-700">{itinerary}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Itinerary;
