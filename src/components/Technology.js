import {Component} from "react";
import {Col, Row, Divider} from "antd";


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
                <Col span={6}>
                    <img
                        className="Tech_img"
                        src={process.env.PUBLIC_URL + '/images/' + get_tech_high_list[i] +'.png'}></img>
                </Col>
            )
            i+=1;
        }
        i = 0 ;
        while (i<get_tech_mid_list.length){
            tech_mid_lists.push(
                <Col span={6}>
                    <img
                        className="Tech_img"
                        src={process.env.PUBLIC_URL + '/images/' + get_tech_mid_list[i] +'.png'}></img>
                </Col>
            )
            i+=1;
        }
        i = 0 ;
        while (i<get_tech_low_list.length){
            tech_low_lists.push(
                <Col span={6}>
                    <img
                        className="Tech_img"
                        src={process.env.PUBLIC_URL + '/images/' + get_tech_low_list[i] +'.png'}></img>
                </Col>
            )
            i+=1;
        }

        return (
            <div className="App-technology" style={{marginBottom:"10px", marginLeft : "14vw", marginRight:"14vw"}}>
                <h1>기술 숙련도</h1>
                <Divider orientation="center" style={{fontSize : "26px"}}>상</Divider>
                <Row gutter={[8,16]} justify="space-around" align="middle">
                    {tech_high_lists}
                </Row>
                <Divider orientation="center" style={{fontSize : "26px"}}>중</Divider>
                <Row gutter={[8,16]} justify="space-around" align="middle">

                    {tech_mid_lists}
                </Row>
                <Divider orientation="center" style={{fontSize : "26px"}}>하</Divider>
                <Row gutter={[8,16]} justify="space-around" align="middle">
                    {tech_low_lists}
                </Row>
            </div>
        );
    }
}

export default Technology
