import './App.css';
import {Component} from "react";
import Main from "./pages/Main";
import MiniProject001 from "./pages/MiniProject001";
import MiniProject002 from "./pages/MiniProject002";
import {Route, Switch, Link} from "react-router-dom";

class App extends Component {
    render() {
        console.log("박정수 포트폴리오!")
        return (
            <div className="App">
                <Switch>
                    <Route path="/build/miniproject001"><MiniProject001></MiniProject001></Route>
                    <Route path="/build/miniproject002"><MiniProject002></MiniProject002></Route>
                    <Route path=""><Main></Main></Route>
                    <Route path="/"><h1>주소를 확인해주세요!</h1></Route>
                </Switch>
            </div>
        );
    }
}


export default App;
