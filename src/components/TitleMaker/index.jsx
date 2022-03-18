import {Typography} from "antd";

const { Title } = Typography;

const TitleMaker = (props) => {
    return (
        <Title level={4}>{props?.title}</Title>
    );
}

export default TitleMaker;
