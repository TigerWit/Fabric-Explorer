import React, { PureComponent } from 'react';
import { connect } from 'dva';
import BlockDetail from '../components/BlockDetail';
import Header from '../components/Header';
import styles from './Block.css';

@connect(({ block }) => ({
 block 
}))
export default class Block extends PureComponent {

  onSearch = (txid) => { 
    const { dispatch } = this.props;
    dispatch({
      type: 'block/fetchTransaction',
      payload: txid,
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    var blockNum = this.props.match.params.blockNum;
    dispatch({
      type: 'block/fetchBlock',
      payload: blockNum,
    });
  }

  content = () => {
    const block = this.props.block || {};
    if (block.status && block.status.code === 200) {
      return <BlockDetail block={block}/>;
    }
    if (block.status && block.status.code !== 200) {
      return (<div> Not Found</div>);
    }
  }

  render() {

    return (
      <div className={styles.big_wrap}>
        <Header onSearch={this.onSearch} txid={null} />
        <div className={styles.result_pane}> {this.content()} </div>
      </div>
    );
  }
}