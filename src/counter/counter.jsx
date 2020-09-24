import React, { Component } from 'react'
import './counter.css'
import propTypes from 'prop-types'


export default class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }

        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
        this.reset = this.reset.bind(this)
    }



    render() {
        return (
            <div className="CounterButton">
                <Counter by={1} incmethod={this.increament} decmethod={this.decreament}></Counter>
                <Counter by={5} incmethod={this.increament} decmethod={this.decreament}></Counter>
                <Counter by={10} incmethod={this.increament} decmethod={this.decreament}></Counter>

                <span className="count" >{this.state.counter}</span>
                <div>
                    <button onClick={this.reset} className="reset">Reset</button>
                </div>

            </div>

        );
    }
    increament(by) {

        /*  this.setState({
              counter: this.state.counter + by
          }) */

        /*  this.setState(
  
              () => { return { counter: this.state.counter + by } }) */

        this.setState(

            (previous) => { return { counter: previous.counter + by } })





        console.log(`Increamented from parent -- ${by}`)
    }
    decreament(by) {

        /*  this.setState({
              counter: this.state.counter + by
          }) */

        /*  this.setState(
  
              () => { return { counter: this.state.counter + by } }) */

        this.setState(

            (previous) => { return { counter: previous.counter - by } })





        console.log(`Decreamented from parent -- ${by}`)
    }

    reset() {
        this.setState(

            { counter: 0 })
    }
}


class Counter extends Component {
    constructor() {
        super();
        // this.state = {                          //No need of duplicate method in child component
        //     counter: 0,
        //     secondCounter: 100
        // }
        this.increament = this.increament.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    render() {
        return <div className="Counter">
            {/* <button onClick={this.increament}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button> */}

            <button onClick={()=>this.props.incmethod(this.props.by)}>+{this.props.by}</button>
            <button onClick={()=>this.props.decmethod(this.props.by)}>-{this.props.by}</button>


            {/* <span className="count" >{this.state.counter}</span> */}
            {/* <span className="count">{this.state.secondCounter}</span> */}

        </div>

    }
    increament() {

        /*  this.setState({
              counter: this.state.counter + this.props.by,
  
          }) */


        /*  this.setState(
              (prev) => { return { counter: prev.counter + this.props.by } }
          ) */


        this.props.incmethod(this.props.by)
        console.log('Increamented in child')
    }
    decrement() {

        /*  this.setState({
              counter: this.state.counter + this.props.by,
  
          }) */


        /* this.setState(
             (prev) => { return { counter: prev.counter - this.props.by } }
         ) */


        this.props.decmethod(this.props.by)
        console.log('Decreamented in child')
    }

}



Counter.defaultProps = {
    by: 1
}

Counter.propTypes = {
    by: propTypes.number
}

