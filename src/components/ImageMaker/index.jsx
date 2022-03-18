import {Image} from "antd";

const ImageMaker = (props) => {
    return (
        <Image
            width={props?.width}
            src={props?.url}
        />
    );
}

export default ImageMaker;
