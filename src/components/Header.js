import {Component} from "react";
import logo from "../logo.svg";
import Moment from "react-moment";
import { Button } from "antd";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p style={{margin:"0px"}}>
                    박정수 포트폴리오
                </p>
                <a
                    href="https://github.com/JeongsuPark-dev/JeongsuPark-dev.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button type="danger">
                        Source Code
                    </Button>
                </a>
                <Moment
                    className="Fix_Right_Top"
                    format={"YY/MM/DD hh:mm:ss"} interval={1000}
                ></Moment>
            </header>
        );
    }
}

export default Header
