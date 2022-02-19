import './GalleryItem.css'
import { useEffect, useState } from 'react';

function GalleryItem({ image }) {

    const [imageSelected, setImageSelected] = useState(true);
    // const { spaceRendering, setSpaceRendering } = useState("");

    console.log(image.name, "imageSelected state is", imageSelected)

    const handleClick = () => {
        setImageSelected(!imageSelected);
    }

    const handleLike = () => {
        console.log('like button clicked')
    }


    return (
        // <div className={'contents'}>
        <div className={'contents'}>
            <div className={'thumbnail'} onClick={handleClick}>
                {imageSelected ? <img src={image.url} alt={image.name}></img> : <h3>{image.name}</h3>}
            </div>
            <div className={'button'}>
            <button onClick={handleLike}>like</button>
            </div>
        </div>
        //  </div>
    )
}

export default GalleryItem;