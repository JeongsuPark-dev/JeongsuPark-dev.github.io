import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Body Title={"This is body"}></Body>
                <Body></Body>
                <Nav
                    Link={"https://me2.do/xWNMi3gu"}
                    Title={'네이버 클론코딩'}
                    SubTitle={"단축 URL : "}
                    SubLink={"https://me2.do/xWNMi3gu"}
                    SubContents={"https://me2.do/xWNMi3gu"}
                ></Nav>

                <Nav
                    Title={"예정1"}
                ></Nav>

                <Nav
                    Title={"예정2"}
                ></Nav>

                <Nav
                    Title={"예정3"}
                ></Nav>

                <Nav
                    Title={"예정4"}
                ></Nav>
                <Footer></Footer>
            </div>
        );
    }
}






export default App;
