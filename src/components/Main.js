import React, { useState, useEffect } from "react";
import "../css/main.css";
import { getMovies } from "../Api";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onePage = async (Page) => {
    setLoading(true);
    const datas = await getMovies(Page);
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    onePage(1);
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#1a1a1a" }}>
        {loading === false ? (
          <div>
            <div className="TopBar">
              <Link to="/">
                <p style={{ color: "#fff", margin: 0 }}>홈</p>
              </Link>
              <input />
            </div>
            <MovieList data={data} />
            {Array(30)
              .fill()
              .map((x, index) => (
                <div style={{ display: "block" }}>
                  <button className="pagebtn" onClick={() => onePage(index + 1)}>
                    {index + 1}
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <div className="loadingDiv">
            <p className="loadingP">loading now....</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
