import './App.css';
import {Image, Layout} from "antd";
import MainHeaderTop from "./pages/MainHeaderTop";
import SubHeaderDown from "./pages/SubHeaderDown";
import MiddleHeaderTop from "./pages/MiddleHeaderTop";
import LastHeaderBanner from "./pages/LastHeaderBanner";
import Text from "antd/es/typography/Text";
import SliderTopMain from "./pages/SliderTopMain";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
      <div className="container">
          <Layout>
              <Header>
                  <div className="align_details">
                      <Image src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg" alt="ImageLogo"/>
                  </div>
              </Header>
              <Layout>
                  <Content>
                      <MainHeaderTop/>
                      <MiddleHeaderTop />
                      <SubHeaderDown />
                      <LastHeaderBanner />
                  </Content>
                  <Sider>
                      <SliderTopMain/>
                  </Sider>
              </Layout>
              <Footer>
                  <Text type="secondary">স্বত্ব © ২০২২ প্রথম আলো সম্পাদক ও প্রকাশক: মতিউর রহমান</Text>
              </Footer>
          </Layout>
      </div>
  );
}

export default App;
