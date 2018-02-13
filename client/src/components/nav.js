import React, {Component} from 'react';
import MaterialIcon, { colorPallet } from 'material-icons-react';
import Logo from '../assets/images/date-night-small.png'

class Nav extends Component {
    constructor (props){
        super(props);
        this.state = {
            sidenav: 0
        }
    }

    sideNav(){

    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper amber">
                    <a href="#!" className="brand-logo"><img className='logoImg' src={Logo} alt="Date Night"/></a>
                    <a href="#!" data-activates="mobile-demo" className="button-collapse">
                        <MaterialIcon icon='menu' size='small'/>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">New Event</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li>
                            <a href="#">Account</a>
                        </li>
                        <li>
                            <a href="#">New Event</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav