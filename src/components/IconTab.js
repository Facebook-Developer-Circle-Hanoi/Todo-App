import React, { Component } from 'react';
import { Image } from 'react-native';

export default class IconTab extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Image
            style={{ width: 25, height: 25 }}
            source={{ uri: this.props.src}}/>
        )
    }
}