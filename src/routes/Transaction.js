import React, { PureComponent } from 'react';
import { connect } from 'dva';
import TransactionDetail from '../components/TransactionDetail';
import Header from '../components/Header';
import styles from './Transaction.css';

@connect(({ transaction }) => ({
  transaction
}))
export default class Transaction extends PureComponent {

  onSearch = (txid) => { 
    const { dispatch } = this.props;
    dispatch({
      type: 'transaction/fetchTransaction',
      payload: txid,
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    var txid = this.props.match.params.txid;
    dispatch({
      type: 'transaction/fetchTransaction',
      payload: txid,
    });
  }

  content = () => {
    const data = this.props.transaction.data || null;
    if (data && data.status.code === 200) {
      return <TransactionDetail tranaction={data.tx_info}/>;
    }
    if (data && data.status.code !== 200) {
      return (<div> Not Found </div>);
    }   
  }

  render() {
    var txid = this.props.match.params.txid || null;

    return (
      <div className={styles.big_wrap}>
        <Header onSearch={this.onSearch} txid={txid} />
        <div className={styles.result_pane}> {this.content()} </div>
      </div>
    );
  }
}