import React from 'react';

const SearchInput = props => (

    <form onSubmit={props.handleSubmit.bind(this)}>
        <label>
          Category:
          <input type="text" value={props.value} onChange={props.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>


)

export default SearchInput;
