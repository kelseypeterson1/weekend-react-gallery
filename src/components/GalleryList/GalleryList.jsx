import GalleryItem from '../GalleryItem/GalleryItem'
import React from 'react';
import './GalleryList.css'

function GalleryList({ gallery, addLike}) {
    return (
        <div className={'container'}>
            {gallery.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                    addLike={addLike}
                />)
            )}
        </div>
    )
}

export default GalleryList;