import {Col, Row, Space} from "antd";

import jsonData from '../../services/data.json';
import TitleMaker from "../../components/TitleMaker";
import DescriptionMaker from "../../components/DescriptionMaker";

const MainHeaderTop = () => {

    return (
        <Row gutter={16}>
            {
                jsonData?.slice(0,2)?.map((item, index) => {
                    console.log(item)
                    return (
                        <Col span={12} key={index}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Space direction="vertical">
                                        <TitleMaker title={item?.title}/>
                                        <DescriptionMaker description={item?.description}/>
                                    </Space>
                                </Col>
                                <Col span={12}>

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
