import {Component} from "react";

class ForState extends Component {

    render() {
        return (
            <div onClick={function (e) {
                this.props.onChangePage()
                }.bind(this)}>
            </div>
        );
    }
}

export default ForState
