import './App.css';
import {Layout} from "antd";
import MainHeaderTop from "./pages/MainHeaderTop";
import SubHeaderDown from "./pages/SubHeaderDown";
import MiddleHeaderTop from "./pages/MiddleHeaderTop";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
      <div className="container">
          <Layout>
              <Header>Header</Header>
              <Layout>
                  <Content>
                      <MainHeaderTop/>
                      <MiddleHeaderTop />
                      <SubHeaderDown />
                  </Content>
                  <Sider>Sider</Sider>
              </Layout>
              <Footer>Footer</Footer>
          </Layout>
      </div>
  );
}

export default App;
