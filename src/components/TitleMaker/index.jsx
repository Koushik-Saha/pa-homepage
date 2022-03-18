import {Typography} from "antd";

const { Title } = Typography;

const TitleMaker = (props) => {
    return (
        <Title level={props.size}>{props?.title}</Title>
    );
}

export default TitleMaker;
