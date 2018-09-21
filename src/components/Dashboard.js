import React, { PureComponent } from 'react';
import { Card, Col, Row} from 'antd';
import styles from './Dashboard.css';


export default class Dashboard extends PureComponent {

  render() {
    const { lastBlock} = this.props || {};
    return ( 
      <div className={styles.dashboard}>
        <Row gutter={11} className={styles.header_main}>
            <Col span={5} style={{ width: 246 }}>
              <Card title="Last Block" >
                 Height: {lastBlock.height}
               </Card>
            </Col>
            <Col span={5} style={{ width: 246 }}>
               <Card title="Transactions">
                 TXs: {lastBlock.tx_count} 
               </Card>
            </Col>      
            <Col span={5} style={{ width: 246 }}>
               <Card title="Nodes">
                 5
               </Card>
            </Col>
            <Col span={5} style={{ width: 246 }}>
              <Card title="Channel">
                 tradechannel
               </Card>
            </Col>
        </Row>
      </div>
    )
  }
}


