import GalleryItem from '../GalleryItem/GalleryItem'
import React from 'react';

function GalleryList({ gallery }) {
    return (
        <>
            {gallery.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                />)
            )}
        </>
    )
}

export default GalleryList;