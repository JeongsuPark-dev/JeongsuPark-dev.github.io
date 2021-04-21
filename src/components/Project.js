import {Component} from "react";

class MiniProject extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while (i<data.length){
            lists.push(
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
        )

            i+=1;
        }

        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default MiniProject;
