import GalleryItem from '../GalleryItem/GalleryItem'
import React from 'react';
import './GalleryList.css'

function GalleryList({ gallery, addLike, deleteImage}) {
    return (

        // The gallery array is looped through for each item in the GalleryItem component
        <div className={'container'}>
            {gallery.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                    addLike={addLike}
                    deleteImage={deleteImage}
                />)
            )}
        </div>
    )
}

export default GalleryList;