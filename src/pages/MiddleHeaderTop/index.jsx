import jsonData from "../../services/data.json";
import {Col, Row, Space} from "antd";
import TitleMaker from "../../components/TitleMaker";
import DescriptionMaker from "../../components/DescriptionMaker";
import {differentFormatDateTime} from "../../services/helper";
import '../../main.scss'

const MiddleHeaderTop = () => {
    return (
        <Row gutter={16} className="main_sub_layout">
            {
                jsonData?.slice(2,5)?.map((item, index) => {
                    return (
                        <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8} key={index}>
                            <Space direction="vertical">
                                <TitleMaker size={5} title={item?.title}/>
                                <DescriptionMaker description={item?.description}/>
                                <span>{differentFormatDateTime(item?.time)} ঘন্টা আগে </span>
                            </Space>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default MiddleHeaderTop;
