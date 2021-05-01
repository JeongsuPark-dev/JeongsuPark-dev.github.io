import '../App.css';
import Header from "../components/Header";
import Body from "../components/Body";
import {Component} from "react";

export default class MiniProject001 extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-mainbody">
                    <div style={{paddingTop : "30px",backgroundColor: "rgb(2,29,46)"}}></div>
                    <Body Title={"신규 작성중인 페이지로 실시간 업데이트 중입니다."} />
                    <Body Title={"마지막 업데이트 일자 : 2021-04-29 18:00"} />

                    <a>TestTestTestTestTestTestTestTestTestTest</a>
                </div>
            </div>
        );
    }

}
