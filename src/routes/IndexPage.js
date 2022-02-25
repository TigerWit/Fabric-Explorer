import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import styles from './IndexPage.css';
import { Layout, Col, Row} from 'antd';
import  Dashboard  from '../components/Dashboard';
import BlockList from '../components/BlockList';
import TransactionList from '../components/TransactionList';


const { Content } = Layout;


@connect(({ dashboard }) => ({
  dashboard
}))
export default class IndexPage extends PureComponent {

  handleSearch(txid) {
    window.location = `/explorer/#/tx/${txid}`;
  }



  componentDidMount() {
    this.loopData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.requestRef);
  }


  loopData = () => {
    const { dispatch } = this.props;

    this.requestRef = requestAnimationFrame(() => {
      this.timer = setTimeout(() => {
        dispatch({
          type: 'dashboard/fetchLastBlock',
        });
        this.loopData();
      }, 4000);
    })
  };

  render() {
    const data = this.props.dashboard || {};
    const lastBlock = data.lastBlock || {}
    const blocks = data.blocks || {}
    const transactions = data.transactions || {}
    return (
      <div className={styles.normal}>
        <Header onSearch={this.handleSearch}></Header>
        <Layout >
          <Content style={{ padding: '30px' }}> 
            <Dashboard lastBlock={lastBlock}></Dashboard>
            <div className={styles.content} >
              <Row gutter={11} >
                <Col span={1} style={{ width: 590}}>
                  <BlockList blocks={blocks}></BlockList>
                </Col>
                <Col span={1} style={{ width: 590}}>
                  <TransactionList transactions={transactions}></TransactionList>
                </Col>
              </Row>
              
            </div>
          </Content>
          
        </Layout>

      </div>
    );
  }
}

IndexPage.propTypes = {
};
 
