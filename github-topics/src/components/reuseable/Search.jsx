import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";

export default function Search({ handleSearch }) {
  const [searchString, setSearchString] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setSearchString("");
    } else setSearchString(value);
  };

  useEffect(() => {
    if (searchString.length >= 1) {
      setTimeout(() => {
        handleSearch(searchString);
      }, 500);
    }
  }, [handleSearch, searchString]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.handleSearch(searchString);
  // };
  return (
    <Box
      sx={{ ml: 1, flex: 1 }}
      component="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        value={searchString}
        onChange={handleChange}
        placeholder="Type to search github topics"
        inputProps={{
          "aria-label": "search github topic",
          sx: {
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "5px 10px",
            width: "20em",
          },
          "data-testid": "search-input",
        }}
      />
      {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
    </Box>
  );
}
