import jsonData from "../../services/data.json";
import {Col, Row, Space} from "antd";
import ImageMaker from "../../components/ImageMaker";
import Text from "antd/es/typography/Text";
import {differentFormatDateTime} from "../../services/helper";
import "../../main.scss"

const SliderTopMain = () => {
    return (
        <Space direction="vertical">
            <Row gutter={16}>
                {
                    jsonData?.slice(0,1)?.map((item, index) => {
                        return (
                            <Col span={24} key={index}>
                                <ImageMaker url={item?.photo} width={250}/>
                            </Col>
                        )})
                }
            </Row>
            <Row gutter={16}>
                {
                    jsonData?.slice(-1)?.map((item, index) => {
                        return (
                            <Col span={24} key={index}>
                                <Space direction="vertical">
                                    <ImageMaker url={item?.photo} width={250}/>
                                    <Text>{item?.title}</Text>
                                </Space>
                            </Col>
                        )})
                }
            </Row>
            <Row gutter={16} className="main_sub_layout">
                {
                    jsonData?.slice(0,1)?.map((item, index) => {
                        return (
                            <Col span={24} key={index}>
                                <Row gutter={16} className="main_sub_layout">
                                    <Col span={8}>
                                        <Space direction="vertical">
                                            <ImageMaker url={item?.photo} width={80}/>
                                            <span>{differentFormatDateTime(item?.time)} ঘন্টা আগে </span>
                                        </Space>
                                    </Col>
                                    <Col span={16}>
                                        <Text>{item?.title}</Text>
                                    </Col>
                                </Row>

                            </Col>
                        )
                    })
                }
            </Row>
            <Row gutter={16} className="main_sub_layout">
                {
                    jsonData?.slice(-2, -1)?.map((item, index) => {
                        return (
                            <Col span={24} key={index}>
                                <Row gutter={16} className="main_sub_layout">
                                    <Col span={16}>
                                        <Text>{item?.title}</Text>
                                    </Col>
                                    <Col span={8}>
                                        <ImageMaker url={item?.photo} width={80}/>
                                    </Col>
                                </Row>

                            </Col>
                        )
                    })
                }
            </Row>
        </Space>
    );
}

export default SliderTopMain;
