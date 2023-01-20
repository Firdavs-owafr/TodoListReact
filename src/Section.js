import { Component } from 'react';
import './Section.scss'
import Footer from './Footer';
import EmployesList from './EmployesList';
import Form from './Form';

class Section extends Component {
    constructor(props){
        super(props);   
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
            ],
            dataId: 3,
            searchValue: ''
        }
        this.setDataa = this.setDataa.bind(this)
    }

    setDataa(arg){
        let newData = [...this.state.data, {...arg, id: this.state.dataId + 1}]
        this.setState(( { dataId,data } ) => {
            return {data: newData,dataId: dataId + 1}
        })
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
            let deletee = data.filter((elem) => {
                return !elem.completed 
            })
            return {data : [...deletee]}
        })
    }

    allActive = () => {
        console.log('active');
        this.setState(({data}) => {
            let active = data.filter((elem) => {
                return !elem.completed 
            })
            return {data : [...active]}
        })
    }

    clearCom = () => {
        console.log('compl');
        this.setState(({data}) => {
            let active = data.filter((elem) => {
                return !elem.completed 
            })
            return {data : [...active]}
        })
    }

    render() {
        const {data} = this.state;

        let filterData = data.filter(item => !item.completed).length

        return (
            <>
                <Form 
                    setData={this.setDataa}
                />
                <div className="Section">                
                    <EmployesList 
                        data={data}
                        onChangeIncrease={this.onChangeIncrease}
                        onDelete={this.onDelete}
                    />
                    <Footer 
                        filterData={filterData}
                        clearCompleted={this.clickDelete}
                        allActive={this.allActive}
                        clearCom={this.clearCom}
                    />
                </div>
            </>
        )

    }
}
export default Section;