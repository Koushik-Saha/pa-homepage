import jsonData from "../../services/data.json";
import {Col, Row, Space} from "antd";
import ImageMaker from "../../components/ImageMaker";
import Text from "antd/es/typography/Text";

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
        </Space>
    );
}

export default SliderTopMain;
