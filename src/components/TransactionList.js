import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card, List} from 'antd';
import styles from './TransactionList.css';


export default class TransactionList extends PureComponent {

  render() {
  	const { transactions } = this.props;
    return ( 
       <Card title="Transactions">
       <List      
          footer={<div></div>}
          bordered
          dataSource={transactions}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
              title={ <div>Block: {item.block_num}  <div className={styles.time}> CreatedAt: {item.created}</div> </div> }
              description={<div className={styles.tx_link}> <Link to={`/tx/${item.tx_id}`}>{item.tx_id}</Link></div> }
              />
           </List.Item>
          )}
        />

       </Card>
    )
  }
}


