import {Component} from "react";

class Body extends Component {
    render() {
        return (
            <body className={"App-body"}>
            <div>{this.props.Title}</div>
            </body>
        );
    }
}

export default Body
