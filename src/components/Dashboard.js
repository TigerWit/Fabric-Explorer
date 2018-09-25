import React, { PureComponent } from 'react';
import { Card, Col, Row} from 'antd';
import { Link } from 'react-router-dom';
import styles from './Dashboard.css';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

export default class Dashboard extends PureComponent {

  render() {
    const { lastBlock } = this.props || {};
    // const { show } = this.props || true;
    const height = lastBlock.height || 0;
    const tx_count = lastBlock.tx_count || 0;

    return ( 
      <div className={styles.dashboard}>
        <Row gutter={11} className={styles.header_main}>
            <Col span={5} style={{ width: 295 }}>
              <Card title="Last Block" >
                Height: <Texty className={styles.texty}>{height.toString()}</Texty>  
               </Card>
            </Col>
            <Col span={5} style={{ width: 295 }}>
               <Card title="Transactions">
                 TXs: <Texty className={styles.texty}>{tx_count.toString()}</Texty>
               </Card>
            </Col>      
            <Col span={5} style={{ width: 295 }}>
               <Card title="Nodes">
                <Link to={'/node'}>5</Link> 
               </Card>
            </Col>
            <Col span={5} style={{ width: 295 }}>
              <Card title="Channel">
                 tradechannel
               </Card>
            </Col>
        </Row>
      </div>
    )
  }
}


