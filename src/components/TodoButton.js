import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Theme from '../Theme/Color';

export default class TodoButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress} style={styles.todoButton}>
                <Text style={styles.buttonContent}>{this.props.content}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoButton: {
        backgroundColor: Theme.COLORS.PRIMARY,
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,

        elevation: 5,
    },
    buttonContent: {
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase"
    }
});