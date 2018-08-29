import React from 'react';
import { connect } from 'dva';
import SearchForm from '../components/SearchForm';
import styles from './IndexPage.css';

const IndexPage = ({ dispatch }) =>  {

  function handleSearch(txid) {
    window.location = `/#/tx/${txid}`;
  }

  return (
    <div className={styles.normal}>

      <div  className={styles.search_main} >
        <div className={styles.logo}></div>
        <div className={styles.search_big}>        
            <SearchForm  onSearch={handleSearch} />     
        </div>
        
      </div>

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
