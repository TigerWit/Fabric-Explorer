import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { List} from 'antd';
import Header from '../components/Header';
import styles from './Node.css';

const data = [
  "104.218.164.40 UK",
  "47.52.189.167 HK",
  "47.52.46.221 HK",
  "128.1.38.187 Singapore",
];


@connect(({ node }) => ({
 node 
}))
export default class Node extends PureComponent {

  onSearch = (txid) => { 
    const { dispatch } = this.props;
    dispatch({
      type: 'block/fetchTransaction',
      payload: txid,
    });
  }

  render() {

    return (
      <div className={styles.big_wrap}>
        <Header onSearch={this.onSearch} txid={null} />
        <div className={styles.result_pane}>

          <div className={styles.tab_content}>
           <List  
            className={styles.tab_content}
            header={<div>Nodes</div>}   
            footer={<div></div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>
              <List.Item.Meta
                description={item}
                />
              </List.Item>
            )}
          />
          </div>

        </div>
      </div>
    );
  }
}