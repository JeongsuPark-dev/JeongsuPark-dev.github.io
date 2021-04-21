import {Component} from "react";


class Technology extends Component {
    render() {
        // console.log("console test")
        let tech_high_lists = [];
        let tech_mid_lists = [];
        let tech_low_lists = [];
        let get_tech_high_list = this.props.tech_high_list;
        let get_tech_mid_list = this.props.tech_mid_list;
        let get_tech_low_list = this.props.tech_low_list;
        let i = 0;

        while (i<get_tech_high_list.length){
            tech_high_lists.push(
            <img
                className={"Tech_img"}
                src={process.env.PUBLIC_URL + '/images/' + get_tech_high_list[i] +'.png'}></img>
            )
            i+=1;
        }
        i = 0 ;
        while (i<get_tech_mid_list.length){
            tech_mid_lists.push(
                <img
                    className={"Tech_img"}
                    src={process.env.PUBLIC_URL + '/images/' + get_tech_mid_list[i] +'.png'}></img>
            )
            i+=1;
        }
        i = 0 ;
        while (i<get_tech_low_list.length){
            tech_low_lists.push(
                <img
                    className={"Tech_img"}
                    src={process.env.PUBLIC_URL + '/images/' + get_tech_low_list[i] +'.png'}></img>
            )
            i+=1;
        }

        return (
            <div className={"App-technology"}>
                <h1>기술 숙련도</h1>
                <div className={"Tech-component"}>
                    <b2>상</b2>
                    {tech_high_lists}
                </div>
                <div className={"Tech-component"}>
                    <b2>중</b2>
                    {tech_mid_lists}
                </div>
                <div className={"Tech-component"}>
                    <b2>하</b2>
                    {tech_low_lists}
                </div>
            </div>
        );
    }
}

export default Technology
