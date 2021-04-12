import {Component} from "react";
import logo from "../logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    React로 만든 박정수 포트폴리오
                </p>
                <a
                    className="App-link"
                    href="https://github.com/JeongsuPark-dev/JeongsuPark-dev.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Source Code
                </a>
            </header>
        );
    }
}

export default Header
