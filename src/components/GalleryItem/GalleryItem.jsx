import { useEffect, useState } from 'react';

function GalleryItem({ image }) {

    const { imageSelected, setImageSelected } = useState(false);
    const { spaceRendering, setSpaceRendering } = useState("");

    console.log(image.name, "imageSelected state is", imageSelected)

    const handleClick = () => {
        setImageSelected(!imageSelected);
    }

    const spaceCondRender = () => {
        if (imageSelected === false) {
            console.log(image.name, "show picture")
            // setSpaceRendering(
                // )
            } else {
                // setSpaceRendering(
                    console.log(image.name, "show description")
                    // <p>{image.name}</p>
                    // )
                }
            }
            
            spaceCondRender()
            
            return (
                <>
            <div onClick={handleClick}>
            {imageSelected ? <img src={image.url} alt={image.name}></img> : <p>description here</p>}
                </div>
                {/* // {spaceRendering}; */}
        </>
    )
}

export default GalleryItem;