import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#151515",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <img src={logo} alt="" height={45} /> <h3>CloneTube</h3>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
