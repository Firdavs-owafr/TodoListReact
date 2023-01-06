import './Footer.scss'


export default function Footer () {
    return (
        <div className="Footer">
            <div className='items'> <span>3</span> items left  </div>
            <div className="text-tab">
                    <ul>
                        <li>All</li>    
                        <li>Active</li>    
                        <li>Completed</li>   
                         
                    </ul>               
            </div>
            <div className="clear">Clear Completed</div>
        </div>
    )
}