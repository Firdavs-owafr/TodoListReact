import React,{ Component } from 'react';
import './Footer.scss'


class Footer extends Component {
   render(props){
    // console.log(this.props);
    const {filterData,clearCompleted} = this.props;
    return (
        <div className="Footer">
            <div className='items'> <span>{filterData}</span> items left  </div>
            <div className="text-tab">
                    <ul>
                        <li>All</li>    
                        <li>Active</li>    
                        <li>Completed</li>   
                         
                    </ul>               
            </div>
            <div className="clear" onClick={clearCompleted}>Clear Completed</div>
        </div>
    )
   }
}
export default Footer;