import {Component} from "react";
import {Divider} from "antd";

export default class Home extends Component {
    render() {
        return (
            <div className="App-home">
                <div style={{backgroundColor : "rgba(255,255,255,0.95)"}}>
                    <h1>About Me<br/></h1>
                    함께 일하고 싶은 개발자가 되기 위해 노력하는 박정수입니다.<br/>
                    정보의 공유와 소통, 상호 존중을 중시하며,<br/>문서화와 기록에 노력하고 있습니다.
                    <Divider orientation="center" style={{fontSize : "26px"}}>이런 일을 해봤습니다.</Divider>
                    <ul style={{textAlign : "left"}}>
                        <li>SSL 인증서 관련 작업</li>
                        <li>IOT 연동(스캐너, 프린터, 전등, 콘센트, 에어컨 등)</li>
                        <li>Cross browsing issue 처리(Safari, Chrome, Explorer 등)</li>
                        <li>다양한 Library 활용 (Calendar, Excel, 등)</li>
                        <li>결제처리(결제 및 결제 전 후 로그&연산처리 등)</li>
                        <li>short url 자동화 처리</li>
                        <li>Jenkins를 통한 파이프라인으로 배포자동화(CI/CD)</li>
                        <li>웹앱개발(Android/IOS앱배포), 푸시알림, 버전 업데이트 관리 등..</li>
                    </ul>
                </div>
            </div>
        );
    }
}
