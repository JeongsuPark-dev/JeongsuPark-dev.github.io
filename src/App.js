import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Component} from "react";
import ForState from "./components/ForState";
import MiniProject from "./components/Project";

let stack = 0;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //Nav에 포함될 항목들
            navcontents:[
                {Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩',
                    SubTitle:"단축 URL : ",
                    SubLink:"https://me2.do/xWNMi3gu",
                    SubContents:"https://me2.do/xWNMi3gu"},

                {Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩',
                    SubTitle:"단축 URL : ",
                    SubLink:"https://me2.do/xWNMi3gu",
                    SubContents:"https://me2.do/xWNMi3gu"}
            ]
        }
    }

    render() {
        console.log("박정수 포트폴리오!")
        return (
            <div className="App">
                <Header></Header>

                <Body Title={"This is body"}></Body>
                <Body></Body>
                <ForState
                    onChangePage={function (e) {
                        stack++;
                    }.bind(this)}
                ></ForState>
                <MiniProject
                    data = {this.state.navcontents}
                    // Link={"https://me2.do/xWNMi3gu"}
                    // Title={'네이버 클론코딩'}
                    // SubTitle={"단축 URL : "}
                    // SubLink={"https://me2.do/xWNMi3gu"}
                    // SubContents={"https://me2.do/xWNMi3gu"}
                ></MiniProject>

                <Footer></Footer>
            </div>
        );
    }
}


export default App;
