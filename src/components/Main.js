import React, { useState, useEffect } from "react";
import "../css/main.css";
import { Link } from "react-router-dom";
import { getMovies } from "../Api";
import Movies from "./Movies";

export default function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const onePage = async (Page) => {
    setLoading(true);
    const datas = await getMovies(Page);
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    onePage(1);
  }, []);

  // 검색 기능
  const Searching = (e) => {
    setSearch(e.target.value);
    const SearchData = data.filter((item) => {
      return item.title.indexOf(e.target.value) > -1;
    });
    setFiltered(SearchData);
  };

  return (
    <>
      <div style={{ backgroundColor: "#1a1a1a" }}>
        {loading === false ? (
          filtered.length === 0 ? (
            search.length === 0 ? (
              <Movies
                search={search}
                Searching={Searching}
                data={data}
                onePage={onePage}
              />
            ) : (
              <>
                <div className="TopBar">
                  <Link to="/">
                    <p style={{ color: "#fff", margin: 0 }}>홈</p>
                  </Link>
                  <input
                    placeholder="영화 제목을 입력해주세요!"
                    value={search}
                    onChange={(e) => Searching(e)}
                  />
                </div>
                <div className="loadingDiv">
                  <p className="loadingP">No Searching!!</p>
                </div>
              </>
            )
          ) : (
            <Movies
              search={search}
              Searching={Searching}
              data={filtered}
              onePage={onePage}
            />
          )
        ) : (
          <div className="loadingDiv">
            <p className="loadingP">loading now....</p>
          </div>
        )}
      </div>
    </>
  );
}
