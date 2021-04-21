import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Component} from "react";
import ForState from "./components/ForState";
import MiniProject from "./components/Project";
import Technology from "./components/Technology";


let stack = 0;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //Nav에 포함될 항목들
            navcontents:[
                {Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩111',
                    SubTitle:"단축 URL : ",
                    SubLink:"https://me2.do/xWNMi3gu",
                    SubContents:"https://me2.do/xWNMi3gu"},

                {Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩222',
                    SubTitle:"단축 URL : ",
                    SubLink:"https://me2.do/xWNMi3gu",
                    SubContents:"https://me2.do/xWNMi3gu"}
            ]
            ,tech_high_list:[
                "html","css3","jquery","git","js","mysql"
            ]
            ,tech_mid_list:[
                "nodejs","react","jquery"
            ]
            ,tech_low_list:[
                "redux"
            ]
        }
    }

    render() {
        console.log("박정수 포트폴리오!")
        return (
            <div className="App">
                <Header />
                <Body Title={"This is body"} />
                <Body/>
                <Technology
                    tech_high_list = {this.state.tech_high_list}
                    tech_mid_list = {this.state.tech_mid_list}
                    tech_low_list = {this.state.tech_low_list}
                />
                <ForState
                    onChangePage={function (e) {
                        stack++;
                    }.bind(this)}
                />
                <MiniProject
                    data = {this.state.navcontents}
                    // Link={"https://me2.do/xWNMi3gu"}
                    // Title={'네이버 클론코딩'}
                    // SubTitle={"단축 URL : "}
                    // SubLink={"https://me2.do/xWNMi3gu"}
                    // SubContents={"https://me2.do/xWNMi3gu"}
                />

                <Footer />
            </div>
        );
    }
}


export default App;
