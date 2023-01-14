import { Component } from "react";
// import ovalImg from './img/linier-gradient.svg';
import close from './img/close.svg'

import './Section.scss'

class EmployesItemss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: false
        }
    }

    chaneIncreaseState = () => {
        this.setState(({completed}) => {
            return { completed: !completed }
        })
        this.props.onChangeIncrease(this.props.id, !this.state.completed)
    }


    render() {
        let clazzz = 'li'

        if(this.state.completed){
             clazzz += ' center-linie'
        }

        return (
            <ul>  
            <div className='li-item' >
                <div className={clazzz} onClick={this.chaneIncreaseState}>
                    {/* <img src={ovalImg} alt="" /> */}
                    <span className="oval"></span>
                    <li>{this.props.name}</li>
                </div>
                    <img src={close} alt="" onClick={() => this.props.onDelete(this.props.id)} /> 
            </div>
           
    </ul>
        )
    }
}

export default EmployesItemss;