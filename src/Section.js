import { Component } from 'react';
import './Section.scss'
import Footer from './Footer';
import EmployesList from './EmployesList';

class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'JavaScript',
                    completed: false,
                },
                {
                    id: 2,
                    name: 'React',
                    completed: false,
                },
                {
                    id: 3,
                    name: 'VueJS',
                    completed: false,
                },
            ]
        }
    }

    onChangeIncrease = (id,incr) => {
        this.setState(( {data} ) => {
            let newData = data.map((item) => {
                if(item.id === id){
                    item.completed = incr
                }
                return item
            })
            return {data: [...newData]}
        }) 
    }

    onDelete = (id) => {
        this.setState(( {data} ) => {
            let newData = data.filter(item => item.id !== id)
            return {data: [...newData]}
        })
    }


     clickDelete = () => {
        this.setState(({data}) => {
            let deletee = this.state.data.filter((elem) => {
                return !elem.completed 
            })
            return {data : [...deletee]}
        })
    }

    render() {
        const {data} = this.state

        let filterData = data.filter(item => !item.completed).length

        // let clickDelete = data.filter(item => item.completed).length

        return (
            <div className="Section">
                <EmployesList 
                    data={data}
                    onChangeIncrease={this.onChangeIncrease}
                    onDelete={this.onDelete}
                />
                <Footer 
                    filterData={filterData}
                    clearCompleted={this.clickDelete}
                />
            </div>
        )

    }
}
export default Section;