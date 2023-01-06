import './Section.scss'
import Footer from './Footer';
import ovalImg from './img/linier-gradient.svg'

export default function Section () {
    return (
        <div className="Section">
                <div className="create-ul">
                <ul>
                    <div className="create_title">
                        <img src={ovalImg} alt="" />
                        <li>Complete online JavaScript course</li>
                    </div>
                    <div className="close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#5B5E7E"/>
                    </svg>  
                    </div>
                </ul>
                <ul>
                    <div className="create_title">
                        <div className="oval"></div>
                        <li>Jog around the park 3x </li>
                    </div>
                    <div className="close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#5B5E7E"/>
                    </svg>  
                    </div>
                </ul>
                <ul>
                    <div className="create_title">
                    <div className="oval"></div>
                        <li>10 minutes meditation</li>
                    </div>
                    <div className="close">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#5B5E7E"/>
                    </svg>  
                    </div>
                </ul>
                </div>
            <Footer/>
        </div>
    )
}