import './GalleryItem.css'
import { useEffect, useState } from 'react';

function GalleryItem({ image }) {

    const [imageSelected, setImageSelected] = useState(false);
    // const { spaceRendering, setSpaceRendering } = useState("");

    console.log(image.name, "imageSelected state is", imageSelected)

    const handleClick = () => {
        setImageSelected(!imageSelected);
    }


    return (
        <>
            <div className={'thumbnail'} onClick={handleClick}>
                {imageSelected ? <img src={image.url} alt={image.name}></img> : <h3>description here</h3>}
            </div>
        </>
    )
}

export default GalleryItem;