import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const myItem = "Mike";

  return (
    <div>
      {/*<CountButton incrementBy={5} buttonColor="grey" /> */}
      <h2>Search Bar React Practice</h2>
      <SearchBar
        products={[
          "tooth paste",
          "tooth brush",
          "mouth wash",
          "dental floss",
          "mouth guard",
        ]}
      />
      <SearchBar
        products={[
          "leather jacket",
          "bike helmet",
          "brake pad",
          "leather boot",
          "leather pants",
        ]}
      />
    </div>
  );
};

export default App;
