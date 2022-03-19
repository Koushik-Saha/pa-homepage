import {Col, Row, Space} from "antd";

import jsonData from '../../services/data.json';
import TitleMaker from "../../components/TitleMaker";
import DescriptionMaker from "../../components/DescriptionMaker";
import {differentFormatDateTime} from "../../services/helper";
import ImageMaker from "../../components/ImageMaker";
import '../../main.scss'

const MainHeaderTop = () => {

    return (
        <Row gutter={16} className="main_sub_layout">
            {
                jsonData?.slice(0,2)?.map((item, index) => {
                    return (
                        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12} key={index}>
                            <Row gutter={16}>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                                    <Space direction="vertical">
                                        <TitleMaker size={4} title={item?.title}/>
                                        <DescriptionMaker description={item?.description}/>
                                        <span>{differentFormatDateTime(item?.time)} ঘন্টা আগে </span>
                                    </Space>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                                    <ImageMaker url={item?.photo} width={250}/>
                                </Col>
                            </Row>

                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default MainHeaderTop;
