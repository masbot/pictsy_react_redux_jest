import React from 'react';

const ImageItem = (props) => (
    <div className="image-item">
        <img src={`/public/assets/images/${props.url}`} alt="cat pic" onClick={() => props.onClickImage(props.image)}/>
    </div>
)

export default ImageItem;