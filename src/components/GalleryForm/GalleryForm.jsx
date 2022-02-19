import { useEffect, useState } from 'react';
import axios from 'axios';
import './GalleryForm.css';

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
                <input
                    placeholder="Name"
                    onChange={(event) => setNewImageName(event.target.value)}
                    value={newImageName}
                />
                <input
                    className="url"
                    placeholder="URL"
                    onChange={(event) => setNewImageUrl(event.target.value)}
                    value={newImageUrl} />
                <button type="submit">Add New Image</button>
            </form>
        </>
    );
}

export default GalleryForm;