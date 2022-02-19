import './GalleryItem.css'
import {useState} from 'react';

function GalleryItem({image, addLike, deleteImage}) {

    // New use states defined
    const [imageSelected, setImageSelected] = useState(true);

    // This function is triggered by the user clicking the picture
    // It changes the use state
    const handleClick = () => {
        setImageSelected(!imageSelected);
    }

    // This function is triggered when the like button is pressed
    // It calls the addLike() function brought down from App.jsx
    const handleLike = () => {
        console.log('like button clicked for id', image.id)
        addLike(image);
    }
    
    
    // This function is triggered when the delete button is pressed
    // It calls the deleteImage() function brought down from App.jsx
    const handleDelete = () => {
        console.log('deleting', image.id)
        deleteImage(image.id)
    }

    return (
        // Rendered on the DOM
        <div className={'contents'}>

            {/* When the image is clicked, the imageSelected state is toggled between true and false */}
            {/* If the imageSelected state is true, the picture is displayed */}
            {/* If the imageSelected state is false, the description of the image is displayed */}
            <div className={'thumbnail'} onClick={handleClick}>
                {imageSelected ? <img src={image.url} alt={image.name}></img> : <h3>{image.name}</h3>}
            </div>

            {/* Like and delete buttons rendered */}
            <div className={'buttons'}>
                <button variant="contained" onClick={handleLike}>Like</button>
                <button variant="contained" onClick={handleDelete}>Delete</button>
            </div>

            {/* Likes are rendered onto the DOM */}
            {/* The wording changes depending on the number of likes */}
            {image.likes === 0 && <p>No likes yet...</p>}
            {image.likes === 1 && <p>1 person likes this</p>}
            {image.likes > 1 && <p>{image.likes} people like this!</p>}
        </div>
    )
}

export default GalleryItem;