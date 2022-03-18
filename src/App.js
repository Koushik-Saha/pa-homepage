import './App.css';
import {Layout} from "antd";
import MainHeaderTop from "./pages/MainHeaderTop";
import SubHeaderDown from "./pages/SubHeaderDown";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
      <Layout>
          <Header>Header
          </Header>
          <Layout>
              <Content>
                  <MainHeaderTop/>
                  <SubHeaderDown />
              </Content>
              <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
      </Layout>
  );
}

export default App;
