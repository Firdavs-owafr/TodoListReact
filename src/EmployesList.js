import React,{ Component } from "react";
import EmployesItemss from './EmployesItemss'

class EmployesList extends Component {
    render() {
        const { data,onChangeIncrease,onDelete } = this.props
        let arr = data.map((employ) => {
            let { id,name, completed } = employ
            
               return <EmployesItemss
                id={id}
                name={name}
                key={id}
                completed={completed}
                onChangeIncrease={(id,incr) => onChangeIncrease(id,incr)}
                onDelete={(id) => onDelete(id)}
            />
        })
        return (
            <div className="create-ul">
                {arr}   
            </div>
        )
    }
}

export default EmployesList;