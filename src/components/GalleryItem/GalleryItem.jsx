import './GalleryItem.css'
import {useState} from 'react';

function GalleryItem({image, addLike, deleteImage}) {

    const [imageSelected, setImageSelected] = useState(true);
    // const { spaceRendering, setSpaceRendering } = useState("");

    console.log(image.name, "imageSelected state is", imageSelected)

    const handleClick = () => {
        setImageSelected(!imageSelected);
    }

    const handleLike = () => {
        console.log('like button clicked for id', image.id)
        addLike(image);
    }

    const handleDelete = () => {
        console.log('deleting', image.id)
        deleteImage(image.id)
    }

    return (
        <div className={'contents'}>
            <div className={'thumbnail'} onClick={handleClick}>
                {imageSelected ? <img src={image.url} alt={image.name}></img> : <h3>{image.name}</h3>}
            </div>
            <div className={'buttons'}>
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {image.likes === 0 && <p>No likes yet...</p>}
            {image.likes === 1 && <p>1 person likes this</p>}
            {image.likes > 1 && <p>{image.likes} people like this!</p>}
        </div>
    )
}

export default GalleryItem;