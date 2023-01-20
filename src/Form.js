import React,{ Component } from "react";
import './Form.scss'

class Form extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
        }
        this.onChangeNameInput = this.onChangeNameInput.bind(this)
        this.sendEmployeesInfo = this.sendEmployeesInfo.bind(this)
    }

    onChangeNameInput(e) {
        this.setState(( { name } ) => {
            return {name: e.target.value}
        })
    }
    
    sendEmployeesInfo (e) {
        e.preventDefault();
        let data = {
            name: this.state.name,
            completed: false,
        }

        if(this.state.name){
            this.props.setData(data)
        }

        this.setState(({name}) => {
            return {name: ''}
        })

    }

    render() {
        return(
            <form  
                    className="input"
                    onSubmit={this.sendEmployeesInfo}
                   >
                        <div className='oval'></div>
                        <input 
                            type="text" 
                            placeholder='Create a new todo…'
                            onChange={this.onChangeNameInput}
                            value={this.state.name}
                        />  
                        <button type='submit'>Click</button>
                </form>
        )
    }
}

export default Form;