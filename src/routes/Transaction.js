import React, { PureComponent } from 'react';
import { connect } from 'dva';
import SearchForm from '../components/SearchForm';
import TransactionDetail from '../components/TransactionDetail';
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
    return (<div> Not Found</div>);
  }

  render() {
    var txid = this.props.match.params.txid || null;

    return (
      <div className={styles.big_wrap}>
        <div className={styles.header_wrap}>
          <div className={`${styles.header_main} ${styles.clear}`}>
            <div className={styles.logo_box}>
              <img src="https://hyperledger-fabric.readthedocs.io/en/release-1.2/_images/hyperledger_fabric_logo_color.png" alt=""/> 
              <span>BlockChain Explorer</span>
            </div>
            <div className={styles.search_box}> 
               <SearchForm  onSearch={this.onSearch} defaultValue={txid}></SearchForm>
            </div>
           
          </div>
        </div>
        <div className={styles.result_pane}> {this.content()}</div>
      </div>
    );
  }
}