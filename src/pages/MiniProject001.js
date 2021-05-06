import '../App.css';
import Header from "../components/Header";
import Body from "../components/Body";
import {Component} from "react";
import InnerHeader from "../components/InnerHeader";
import {Button} from "antd";

export default class MiniProject001 extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-mainbody">
                    <InnerHeader/>

                    <div>
                        <a
                            href="https://play.google.com/store/apps/details?id=socket.androidtown.org.learningassistance"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button type="primary"
                                    style={{marginTop : '15px', marginBottom : '15px'}}
                            >
                                플레이스토어에서 확인하기
                            </Button>
                        </a>

                    </div>

                    <img style={{width : '60%'}} src={process.env.PUBLIC_URL + '/images/miniproject001_high.png'}></img>>
                </div>
            </div>
        );
    }
}
