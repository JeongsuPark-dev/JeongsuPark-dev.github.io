import '../App.css';
import Header from "../components/Header";
import Body from "../components/Body";
import {Component} from "react";
import InnerHeader from "../components/InnerHeader";

export default class MiniProject002 extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <div className="App">
                <InnerHeader/>
                <img style={{width : '60%'}} src={process.env.PUBLIC_URL + '/images/miniproject002_high.png'}></img>>
                </div>
            </div>
        );
    }
}
