import GalleryItem from '../GalleryItem/GalleryItem'
import React from 'react';
import './GalleryList.css'

function GalleryList({ gallery }) {
    return (
        <div ClassName={'container'}>
            {gallery.map(image =>
                (<GalleryItem
                    key={image.id}
                    image={image}
                />)
            )}
        </div>
    )
}

export default GalleryList;