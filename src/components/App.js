import React, { Component } from 'react';
import ImageList from './ImageList';
import ImageCloseUp from './ImageCloseUp';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCloseUp: false,
            closeUpImage: {}
        }

        this.onClickImage = this.onClickImage.bind(this);
    }

    onClickImage = (image) => {
        if(this.state.showCloseUp == false){
            this.setState( prevState => ({ showCloseUp: !prevState.showCloseUp, closeUpImage: image }) );            
        } else {
            this.setState( prevState => ({ showCloseUp: !prevState.showCloseUp, closeUpImage: {} }) );            
        }
    }

    showOverlay() {
        if(this.state.showCloseUp) {
            return <div className="overlay" onClick = {() => this.onClickImage()}></div>;
        }
    }

    showCloseUp() {
        if(this.state.showCloseUp) {
            return <ImageCloseUp image={this.state.closeUpImage} onClickImage={this.onClickImage}/>
        }
    }

    render() {
        return (
            <div className="container">
                {this.showOverlay()}
                <ImageList onClickImage={this.onClickImage} />
                {this.showCloseUp()}
            </div>
        )
    }
}

export default App;