import React, {Component} from "react";
import "./navBar.css"

class NavBar extends Component {
    constructor (props){
        super(props);

        this.state = {
            navStyle: {
                transform: "translateX(100%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                right: "0px",
                touchAction: "pan-y"
            }
        };
        this.slideOutMenu = this.slideOutMenu.bind(this);
        this.returnMenu = this.returnMenu.bind(this);
    }
    slideOutMenu(){
        const shadowBox = {...this.state.dragStyle};
        delete shadowBox.right;
        this.setState({
            navStyle: {
                transform: "translateX(0%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                left: "0px",
                width: "50%",
                transitionDuration: "0.25s"
            }
        });
    }

    returnMenu(){
        const shadowBox = {...this.state.dragStyle};
        delete shadowBox.left;
        delete shadowBox.width;
        this.setState({
            navStyle: {
                transform: "translateX(100%)"
            },
            dragStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                right: "0px"
            }
        });
    }
    render() {
        return (
            <nav>
                <div className="amber nav-wrapper">
                    <a href="#!" className="brand-logo">Menu</a>
                    <a href="#" className="right button-collapse" onClick={this.slideOutMenu}>
                        <i className="material-icons amber-text text-darken-3">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Account</a></li>
                        <li><a href="#">New Event</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div>
                        <ul className="side-nav right-aligned" style={this.state.navStyle}>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">New Event</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div onClick={this.returnMenu} className="drag-target" style={this.state.dragStyle}></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;