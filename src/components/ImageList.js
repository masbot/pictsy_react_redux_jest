import React, { Component } from 'react';
import ImageItem from './ImageItem';
import data from './data.json';

class ImageList extends Component {

    render() {
        return (
            <div className="image-list">
                {
                    data.images.map(image => {
                        return <ImageItem key={image.id} url={image.url} image={image} onClickImage={this.props.onClickImage}/>
                    })
                }
            </div>
        )
    }
}

export default ImageList;