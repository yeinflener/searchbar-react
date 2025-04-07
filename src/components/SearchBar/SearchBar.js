import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  //const searchValue = "you r a great teacher";

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  //console.log(shouldDisplayButton);

  /*console.log(
    products.filter((prod) => {
      return prod.includes("");
    })
  );
  */
  const filteredProducts = props.products.filter((prod) => {
    return prod.includes(searchValue);
  });

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {/*searchValue*/}
      {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
      <ul>
        {filteredProducts.map((prod) => {
          return <li key={prod}>{prod}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
