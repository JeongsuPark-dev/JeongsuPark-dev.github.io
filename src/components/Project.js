import {Component} from "react";
import {Col, Row, Divider} from "antd";
import {Link} from "react-router-dom";

class Project extends Component {
    render() {
        let lists = [];
        let data = this.props.outer_link;
        let inner_link = this.props.inner_link;
        let i = 0;
        while (i<data.length){
            lists.push(
                <div>
                    <ul>
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
                    </ul>
                    <br/>
                </div>
        )
            i+=1;
        }
        i=0;
        while (i<inner_link.length){
            lists.push(
                <div>
                    <ul>
                        <li key={inner_link[i].Title}><Link
                            to={inner_link[i].Link}>
                            {inner_link[i].Title}
                        </Link>
                        </li>
                    </ul>
                    <br/>
                </div>
            )
            i+=1;
        }

        return (
            <div className="App-Nav">
                <h1>Mini Project</h1>
                <ul style={{margin:"0px"}}>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default Project;
