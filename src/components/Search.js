import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Search = ({searchUsers}) => {
  const [userText, setUserText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    searchUsers(userText);
    setUserText('');
  }

  const onChange = (e) => {
    setUserText(e.target.value);
  }

  return (
    <div className="form">
      <Form onSubmit={onSubmit}>
        <Form.Control 
          type="text" 
          name="userText" 
          placeholder="Search user" 
          value={userText} 
          onChange={onChange} 
          autoFocus 
        />
        
        <Button variant="primary" type="submit" block style={{marginTop: '0.5rem'}}>
          Search
        </Button>
      </Form>
    </div>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired
}

export default Search;
