import React from "react";

function Search({newSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={newSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
