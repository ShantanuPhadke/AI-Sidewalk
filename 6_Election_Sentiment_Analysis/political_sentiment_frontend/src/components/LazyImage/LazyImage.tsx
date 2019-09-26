// Necessary Imports
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface LazyImageProps {
    // All the image specific props
    imageSrc: string;
    height: number;
    width: number;
    // All of the link specific props
    linkSrc: string;
    linkSrcExtraInfo: string;
    linkStyleClass: string;
}

interface LazyImageState {
    //empty for now
}

class LazyImage extends React.Component<LazyImageProps, LazyImageState> {
    //constructor for class
    constructor(){
        super({imageSrc: 'default' ,height: 0 ,width: 0 ,linkSrc: 'default', linkSrcExtraInfo: "default extra", linkStyleClass: "link"}, null);
    }

    render() {
        return (
            <div>
                <LazyLoadImage src={this.props.imageSrc} height={this.props.height} width={this.props.width}/>
                <br/><a className={this.props.linkStyleClass} href={this.props.linkSrc}>{this.props.linkSrcExtraInfo}</a>
            </div>
        )
    }
}

export default LazyImage;