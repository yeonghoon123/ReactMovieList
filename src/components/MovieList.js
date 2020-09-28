import React from "react";
import { Link } from "react-router-dom";

// 영화 리스트

function MovieList({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} style={{ display: "inline-block" }}>
          <Link to={"/Detail/" + item.id}>
            <img
              src={item.medium_cover_image}
              style={{ margin: 30, width: 230, height: 345 }}
            />
          </Link>
          <p style={{ textAlign: "center", color: "#fff" }}>
            {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}
          </p>
        </div>
      ))}
    </>
  );
}

export default MovieList;
