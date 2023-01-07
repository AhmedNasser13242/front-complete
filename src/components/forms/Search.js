import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  let history = useNavigate();
  const redirect = (path) => {
    history(path);
  };

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    redirect(`/shop?${text}`);
  };

  return (
    <form className="nav-bar form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
