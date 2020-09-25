import React, { useState, useEffect } from "react";
import "../css/body.css";
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
      <div className="TopBar">
        <Link to="/">
          <p style={{ color: "#fff", margin: 0 }}>홈</p>
        </Link>
        <input />
      </div>
      <div style={{ backgroundColor: "#000" }}>
        {loading === false ? (
          <div>
            <MovieList data={data} />
            <div style={{ textAlign: "center" }}>
              {Array(30)
                .fill()
                .map((x, index) => (
                  <div style={{ display: "inline-block" }}>
                    <button style={{ background: "none", color: "white", border: "none", cursor: "pointer", marginRight: "5px" }} onClick={() => onePage(index + 1)}>{index + 1}</button>
                  </div>
                ))}
            </div>
          </div>
        ) : (
            <div
              style={{
                backgroundColor: "#000000",
                height: "100vh",
              }}
            >
              <p className="lodingP">loading now....</p>
            </div>
          )}
      </div>
    </>
  );
}

export default Main;
