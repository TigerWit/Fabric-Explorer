import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card, List } from 'antd';
import styles from './BlockList.css';


export default class BlockList extends PureComponent {

  render() {
    const { blocks } = this.props;
    return ( 
       <Card title="Blocks">
          <List
          bordered
          dataSource={blocks}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
              title={ <div>Height: <Link to={`/block/${item.block_num}`}>{item.block_num}</Link> TXs: {item.tx_count} <div className={styles.time}> CreatedAt: {item.created}</div> </div> }
              description={<div className={styles.description}> {`Hash: ${item.block_hash}`}</div> }
              />
           </List.Item>
          )}
          />
       </Card>
    )
  }
}


