import React from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";

function Movies({ search, Searching, data, onePage }) {
  return (
    <>
      <div>
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
        <div style={{ textAlign: "center" }}>
          <MovieList data={data} />
          <div>
            {Array(30)
              .fill()
              .map((x, index) => (
                <div style={{ display: "inline-block" }}>
                  <button className="pagebtn" onClick={() => onePage(index + 1)}>
                    {index + 1}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
