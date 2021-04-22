import {Component} from "react";
import {Col, Row, Divider} from "antd";

class MiniProject extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
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

        return (
            <div className={"App-Nav"}>
                <h1>Mini Project</h1>
                <ul style={{margin:"0px"}}>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default MiniProject;
