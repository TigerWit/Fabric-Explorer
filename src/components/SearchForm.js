import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const Search = Input.Search;
const SearchForm = ({ onSearch, defaultValue }) => {
  return (
    <Search
      placeholder="input txid"
      enterButton="Search"
      size="large"
      defaultValue={defaultValue}
      onSearch={value => onSearch(value)}
    />  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  txid: PropTypes.string,
};

export default SearchForm;
