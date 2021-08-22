import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepoAsync } from "./repoSlice";

const Repository = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const repeo = useSelector(({ repo }) => {
    return repo.mostStarRepo;
  });

  const searchRepo = () => {
    if (name) {
      dispatch(fetchRepoAsync(name));
    } else {
      alert("请输入框架名称！");
    }
  };
  return (
    <>
      <input
        type="text"
        onKeyDown={(e) => e.keyCode === 13 && searchRepo()}
        value={name}
        onChange={(e) => setName(e.target.value.trim())}
      />
      <button onClick={searchRepo}>search</button>&nbsp;&nbsp;
      <span>
        github most star repo is:{" "}
        <a href={repeo.html_url}>{repeo.full_name}</a>
      </span>
    </>
  );
};

export default Repository;
