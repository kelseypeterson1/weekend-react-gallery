function GalleryItem({image}) {
    return (
        <div>
            <img src={image.url} alt={image.name}></img>
        </div>
    )
}

export default GalleryItem;