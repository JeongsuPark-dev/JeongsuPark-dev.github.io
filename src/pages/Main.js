import '../App.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Body from "../components/Body";
import Home from "../components/Home";
import Nav from "../components/Nav";
import {Component} from "react";
import ForState from "../components/ForState";
import Project from "../components/Project";
import Technology from "../components/Technology";
import {Link} from "react-router-dom";


let stack = 0;

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /**
             * outer_link : Project 중 외부링크들
             * inner_link : Project 중 내부링크들
             * tech_high_list : Skills 상
             * tech_mid_list : Skills 중
             * tech_low_list : Skills 하
             */

            outer_link: [
                {
                    Link: "https://me2.do/xWNMi3gu", Title: '네이버 클론코딩',
                    SubTitle: "단축 URL : ",
                    SubLink: "https://me2.do/xWNMi3gu",
                    SubContents: "https://me2.do/xWNMi3gu"
                }

                ,{Link:"https://me2.do/xWNMi3gu", Title:'네이버 클론코딩22',
                    SubTitle:"단축 URL : ",
                    SubLink:"https://me2.do/xWNMi3gu",
                    SubContents:"https://me2.do/xWNMi3gu"}
            ],
            inner_link: [
                {Title : "미니프로젝트 001", Link : "MiniProject001"},
                {Title : "미니프로젝트 002", Link : "MiniProject002"}
            ]
            , tech_high_list: [
                "java", "html", "css3", "jquery", "git", "js", "mysql"
            ]
            , tech_mid_list: [
                "nodejs", "react"
            ]
            , tech_low_list: [
                "redux", "objective_c"
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

                    <Project
                        outer_link = {this.state.outer_link}
                        inner_link = {this.state.inner_link}
                    />
                    <li><Link to="/topics">TOPICS</Link></li>
                    <h1>Footer(수정예정)</h1>
                    <Footer />
                </div>
            </div>
        );
    }

}
