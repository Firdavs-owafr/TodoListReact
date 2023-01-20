import './Main.scss'
import logo from './img/Combined Shape.svg'
import React,{ Component } from 'react'

class Main extends Component {
    
    render() {
        return (
            <div className="Main">
                <div className="header">
                <h1>TODO</h1>
                <img src={logo} alt="Logo" />
                </div>
            </div>
        )
    }
}
export default Main;