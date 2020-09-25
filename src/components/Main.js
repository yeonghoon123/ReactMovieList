import React, { useState, useEffect } from "react";
import "../body.css";
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
      <div
        style={{
          backgroundColor: "#595959",
          height: "5vh",
          position: "sticky",
          top: "0%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <p style={{ color: "#fff", margin: 0 }}>홈</p>
        </Link>
        <input />
      </div>
      <div style={{ backgroundColor: "#000" }}>
        {loading === false ? (
          <div>
            <MovieList data={data} />
            {Array(30)
              .fill()
              .map((x, index) => (
                <div style={{ display: "block" }}>
                  <button style={styles.MouseOver} onClick={() => onePage(index + 1)}>
                    {index + 1}
                  </button>
                </div>
              ))}
          </div>
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
    </>
  );
}

export default Main;
