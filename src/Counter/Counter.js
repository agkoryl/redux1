import React from 'react';
import {connect} from 'react-redux';

import './Counter.css';
import {inc, dec, reset} from '../store/counter';

class Counter extends React.Component {
    render() {
        return (
            <div className="counter-display">
                <div>Current state: {this.props._value}</div>
                <button className="counter-button button-add" onClick={this.props._increment}>+</button>
                <button className="counter-button button-substract" onClick={this.props._decrement}>-</button>
                <button className="counter-button button-reset" onClick={this.props._reset}>RESET</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _value: state.counter
})

const mapDispatchToProps = dispatch => ({
    _increment: ()=> dispatch(inc()),
    _decrement: ()=> dispatch(dec()),
    _reset: ()=> dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);