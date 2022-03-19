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
                        <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8} key={index}>
                            <Row gutter={16} className="main_sub_layout">
                                <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
                                    <Space direction="vertical">
                                        <ImageMaker url={item?.photo} width={150}/>
                                        <span>{differentFormatDateTime(item?.time)} ঘন্টা আগে </span>
                                    </Space>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}>
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
