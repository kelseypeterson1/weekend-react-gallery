import { useEffect, useState } from 'react';
import axios from 'axios';

function GalleryForm({fetchGallery}) {

    const [newImageName, setNewImageName] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');

    const handleSubmit = (event) => {
        console.log('Clicked Submit');
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                name: newImageName,
                url: newImageUrl
            }
        })
            .then((response) => {
                console.log('Response:', response);
                fetchGallery();
                //Clear Inputs & State
                setNewImageName('');
                setNewImageUrl('');
            })
            .catch(function (error) {
                console.log('Error adding image in GalleryForm.jsx', error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    onChange={(event) => setNewImageName(event.target.value)}
                    value={newImageName}
                />
                <label>URL:</label>
                <input
                    onChange={(event) => setNewImageUrl(event.target.value)}
                    value={newImageUrl} />
                <button type="submit">Add New Image</button>
            </form>
        </>
    );
}

export default GalleryForm;