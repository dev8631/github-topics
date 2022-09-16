import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import Search from "./Search";

export default function Layout() {
  const [searchValue, setSearchValue] = useState("react");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    if (value.length >= 3) {
      setSearchValue(value);
      navigate("/");
    } else setSearchValue("react");
  };

  return (
    <div data-testid={"layout-component"}>
      <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
        <Search handleSearch={handleSearch} />
      </Paper>
      <Container maxWidth="lg">
        <Outlet context={{ searchValue: searchValue }} />
      </Container>
    </div>
  );
}
