import {Typography} from "antd";

const { Text, Paragraph } = Typography;

const DescriptionMaker = (props) => {
    return (
        <Paragraph ellipsis={{rows: 2, expandable: true, symbol: '...' }}>
            {/*<Text type="secondary">{props?.description}</Text>*/}
            {props?.description}
        </Paragraph>
    );
}

export default DescriptionMaker;
