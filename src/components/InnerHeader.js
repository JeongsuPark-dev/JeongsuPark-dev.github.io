import {Component} from "react";
import logo from "../logo.svg";
import Moment from "react-moment";
import { Button } from "antd";
import Body from "./Body";

export default class InnerHeader extends Component {
    render() {
        return (
            <div className="App-mainbody">
                <div style={{paddingTop : "30px",backgroundColor: "rgb(2,29,46)"}}></div>
                <Body Title={"신규 작성중인 페이지로 실시간 업데이트 중입니다."} />
                <Body Title={"마지막 업데이트 일자 : 2021-05-07 02:35"} />
            </div>
        );
    }
}
