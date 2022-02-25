import React, { PureComponent } from 'react';
import { List} from 'antd';
import { Link } from 'react-router-dom';

import styles from './BlockDetail.css';

export default class BlockDetail extends PureComponent {

  render() {
    const block = this.props.block
    return ( 

      <div className={styles.tab_content}> 
        <p>BlockNum: {block.block_info.block_num}</p> 
        <p>BlockHash: {block.block_info.block_hash}</p>
        <p>PreviousHash: {block.block_info.pre_hash}</p>
        <p>CreatedAt: {block.block_info.created}</p>
       <List  
       	  header={<div>Transactions</div>}   
          footer={<div></div>}
          bordered
          dataSource={block.block_info.tx_ids}
      	  renderItem={item => (<List.Item>
      	  	<List.Item.Meta
              description={<div className={styles.tx_link}> <Link to={`/tx/${item}`}>{item}</Link></div> }
              />
      	  	</List.Item>
      	  )}
        />  
      </div>
    )
  }
}