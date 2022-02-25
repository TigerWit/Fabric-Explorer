import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import styles from './Header.css';


export default class Header extends PureComponent {

  render() {
    const {onSearch, txid} = this.props;
    return ( 
      <div className={styles.header_wrap}>
        <div className={`${styles.header_main} ${styles.clear}`}>
          <div className={styles.logo_box}>
            <Link to='/'>
              <img src="https://hyperledger-fabric.readthedocs.io/en/release-1.2/_images/hyperledger_fabric_logo_color.png" alt=""/> 
              <span>BlockChain Explorer</span>
            </Link>
          </div>
          <div className={styles.search_box}> 
             <SearchForm  onSearch={onSearch} defaultValue={txid}></SearchForm>
          </div>
         
        </div>
      </div>
    )
  }
}


