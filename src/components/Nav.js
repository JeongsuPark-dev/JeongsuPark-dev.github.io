import {Component} from "react";

class Nav extends Component {
    render() {
        return (
            <nav className={"App-Nav"}>
                <div className={"App-list"}>
                    {/*list item*/}
                    {/*<li><a*/}
                    {/*    className="App-link"*/}
                    {/*    href="https://me2.do/xWNMi3gu">*/}
                    {/*    네이버 클론코딩*/}
                    {/*</a>*/}

                    <li><a
                        className="App-link"
                        target="_blank"
                        href={this.props.Link}>
                        {this.props.Title}
                    </a>
                    </li>

                    {this.props.SubTitle}<a
                    className="App-link"
                    target="_blank"
                    href={this.props.SubLink}>
                    {this.props.SubContents}
                </a>
                </div>
            </nav>
        );
    }
}

export default Nav;
