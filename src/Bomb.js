import React, { Component } from "react";

export default class Bomb extends Component{
    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        return(
            this.state.secondsLeft !== 0 ? <h2>{this.state.secondsLeft} seconds left before I go boom!</h2> : <h2>Boom!</h2>
        )
    }
}