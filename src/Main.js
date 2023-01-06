import './Main.scss'
import logo from './img/Combined Shape.svg'

export default function Main() {
    return (
        <div className="Main">
            <div className="header">
            <h1>TODO</h1>
            <img src={logo} alt="Logo" />
            </div>
            <div className="input">
                    <div className='oval'></div>
                    <input type="text" placeholder='Create a new todo…'/>
            </div>
        </div>
    )
}