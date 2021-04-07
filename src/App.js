import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Body></Body>
                <Nav></Nav>
                <Footer></Footer>
            </div>
        );
    }
}

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

class Body extends Component {
    render() {
        return (
            <body className={"App-body"}>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            <div>This is body</div>
            </body>
        );
    }
}

class Nav extends Component {
    render() {
        return (
            <nav className={"App-Nav"}>
                <div>this is nav</div>
                <div className={"App-list"}>
                    <ul>
                        {/*list item*/}
                        <li><a
                            className="App-link"
                            href="https://me2.do/xWNMi3gu">
                            네이버 클론코딩
                        </a>
                        </li>
                        단축 URL : <a
                            className="App-link"
                            target="_blank"
                            href="https://me2.do/xWNMi3gu">
                            https://me2.do/xWNMi3gu
                        </a>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className={"App-footer"}>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
                <div>this is footer</div>
            </footer>
        );
    }
}

export default App;
