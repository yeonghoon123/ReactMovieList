import React, { useState, useEffect } from "react";
import "../body.css";
import { getMovies } from "../Api";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

function Main() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const datas = await getMovies();
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "#595959",
          height: "5vh",
          position: "sticky",
          top: "0%",
        }}
      >
        <Link to="/">
          <p style={{ color: "#fff", margin: 0 }}>홈</p>
        </Link>
      </div>
      <div style={{ backgroundColor: "#000" }}>
        {loading === false ? (
          <MovieList data={data} />
        ) : (
          <div
            style={{
              backgroundColor: "#000000",
              height: "100vh",
            }}
          >
            <p
              style={{
                color: "#ffffff",
                fontSize: 30,
                margin: 0,
                display: "flex",
                justifyContent: "center",
                paddingTop: "45vh",
              }}
            >
              loading now....
            </p>
          </div>
        )}
      </div>
      <button>다음페이지</button>
    </>
  );
}

export default Main;
