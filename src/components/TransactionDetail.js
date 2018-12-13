import React, { PureComponent } from 'react';

import styles from './TransactionDetail.css';

export default class Transaction extends PureComponent {

  render() {
    const tranaction = this.props.tranaction
    return ( 

      <div className={styles.tab_content}> 
        <p>BlockNum: {tranaction.block_info.number}</p> 
        <p>BlockHash: {tranaction.block_info.current_hash}</p>
        <p>PreviousBlockHash: {tranaction.block_info.previous_hash}</p>
        <div> Txid: {tranaction.tx_id}</div>
        <div> UserHash: {tranaction.key}</div>
        <div> OrderHash: {tranaction.value}</div>
        <div> Channel: {tranaction.channel_id}</div>
        <div> Status: {tranaction.validation_code_name}</div>
        <div> Timestamp : {tranaction.timestamp.seconds}</div>
      </div>
    )
  }
}