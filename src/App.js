import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
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
                {Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩',
                    SubTitle:"단축 URL : ",
                    SubLink:"https://me2.do/xWNMi3gu",
                    SubContents:"https://me2.do/xWNMi3gu"}

                // ,{Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩',
                //     SubTitle:"단축 URL : ",
                //     SubLink:"https://me2.do/xWNMi3gu",
                //     SubContents:"https://me2.do/xWNMi3gu"}
            ]
            ,tech_high_list:[
                "java","html","css3","jquery","git","js","mysql"
            ]
            ,tech_mid_list:[
                "nodejs","react"
            ]
            ,tech_low_list:[
                "redux","objective_c"
            ]
        }
    }

    render() {
        console.log("박정수 포트폴리오!")
        return (
            <div className="App">
                <Header />
                <div className="App-mainbody">
                    <div style={{paddingTop : "30px",backgroundColor: "rgb(2,29,46)"}}></div>
                    <Body Title={"신규 작성중인 페이지로 실시간 업데이트 중입니다."} />
                    <Body Title={"마지막 업데이트 일자 : 2021-04-29 18:00"} />
                    <Home Title={"안녕하세요 박정수입니다."}/>
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
                    <h1>Footer(수정예정)</h1>
                    <Footer />
                </div>
            </div>
        );
    }
}


export default App;
