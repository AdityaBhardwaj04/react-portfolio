import LogoTitle from '../../assets/images/logo-adi.png';
import Hero from '../../assets/images/Humaaans - Space.png'
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm  
                    <img src={LogoTitle} alt="developer"/>
                    ditya,
                    <br/>
                    a web developer
                </h1>
                <h2>Frontend Developer | Cyber Security Enthusiast</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div>
                <img src={Hero} alt="hero" className="hero"/>
            </div>
        </div>
    )
}

export default Home