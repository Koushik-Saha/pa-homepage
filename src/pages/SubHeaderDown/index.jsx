import jsonData from "../../services/data.json";
import {Col, Row, Space} from "antd";
import TitleMaker from "../../components/TitleMaker";
import {differentFormatDateTime} from "../../services/helper";
import ImageMaker from "../../components/ImageMaker";

const SubHeaderDown = () => {
    return (
        <Row gutter={16} className="main_sub_layout">
            {
                jsonData?.slice(0,6)?.map((item, index) => {
                    return (
                        <Col span={8} key={index}>
                            <Row gutter={16} className="main_sub_layout">
                                <Col span={8}>
                                    <Space direction="vertical">
                                        <ImageMaker url={item?.photo} width={150}/>
                                        <span>{differentFormatDateTime(item?.time)} ঘন্টা আগে </span>
                                    </Space>
                                </Col>
                                <Col span={16}>
                                    <Space direction="vertical">
                                        <TitleMaker size={5} title={item?.title}/>
                                    </Space>
                                </Col>
                            </Row>

                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default SubHeaderDown;
