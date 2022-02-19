import { useEffect, useState } from 'react';
import axios from 'axios';
import './GalleryForm.css';

function GalleryForm({ fetchGallery }) {

    // Use states defined
    const [newImageName, setNewImageName] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');

    // Function runs when the "add new image" button is clicked
    const handleSubmit = (event) => {
        console.log('Clicked Submit');
        event.preventDefault();

        // POST function which sends images to the server based on user input
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                name: newImageName,
                url: newImageUrl
            }
        })
            // If response is received from the server...
            .then((response) => {
                console.log('Response:', response);
                // The DOM rerenders the gallery
                fetchGallery();
                // Clear inputs & states
                setNewImageName('');
                setNewImageUrl('');
            })
            // if a response is NOT received from the server, an error is logged
            .catch(function (error) {
                console.log('Error adding image in GalleryForm.jsx', error);
            });
    };

    return (
        // Input fields
        <form onSubmit={handleSubmit}>
            {/* The state variables change with each keystroke as users type in the input fields */}
            <input
                placeholder="Name"
                onChange={(event) => setNewImageName(event.target.value)}
                value={newImageName}
            />
            {/* The state variables change with each keystroke as users type in the input fields */}
            <input
                className="url"
                placeholder="URL"
                onChange={(event) => setNewImageUrl(event.target.value)}
                value={newImageUrl} 
            />
            <button type="submit">Add New Image</button>
        </form>
    );
}

export default GalleryForm;