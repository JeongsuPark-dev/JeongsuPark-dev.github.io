import {Component} from "react";
import {Col, Row, Divider} from "antd";
import {Link} from "react-router-dom";

class Project extends Component {
    render() {
        let lists = [];
        let data = this.props.outer_link;
        let inner_link = this.props.inner_link;
        let i = 0;
        while (i < data.length) {
            lists.push(
                <div>
                    <li key={data[i].Title}><a
                        className="App-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={data[i].Link}>
                        {data[i].Title}
                    </a>
                    </li>
                    {data[i].SubTitle}<a
                    className="App-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data[i].SubLink}>
                    {data[i].SubContents}
                </a>
                    <br/>
                    <img src={process.env.PUBLIC_URL + '/images/' + data[i].Image + '.png'}></img>
                    <br/>
                </div>
            )
            i += 1;
        }
        i = 0;
        while (i < inner_link.length) {
            lists.push(
                <div>
                    <li key={inner_link[i].Title}><Link
                        to={inner_link[i].Link}>
                        {inner_link[i].Title}
                    </Link>
                    </li>
                    <img src={process.env.PUBLIC_URL + '/images/' + inner_link[i].Link + '.png'}></img>>
                    <br/>
                </div>
            )
            i += 1;
        }

        return (
            <div className="App-Nav">
                <h1>Mini Project</h1>
                <ul style={{margin: "0px"}}>
                    <Row gutter={[8, 16]} justify="space-around" align="middle">
                        {lists}
                    </Row>
                </ul>
            </div>
        );
    }
}

export default Project;
