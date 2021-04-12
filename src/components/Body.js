import {Component} from "react";

class Body extends Component {
    render() {
        return (
            <div className={"App-body"}>
                {this.props.Title}
            </div>
        );
    }
}

export default Body
