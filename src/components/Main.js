import React, { useState, useEffect } from "react";
import "../body.css";
import { getMovies } from "../Api";
import { Link } from "react-router-dom";

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
      <div style={{ backgroundColor: "#000000" }}>
        {loading === true ? (
          data.map((item) => (
            <div key={item.id} style={{ display: "inline-block" }}>
              <Link to={"/Detail/" + item.id}>
                <img src={item.medium_cover_image} style={{ margin: 15 }} />
              </Link>
              <p style={{ textAlign: "center", color: "#ffffff" }}>
                {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title}
              </p>
            </div>
          ))
        ) : (
          <div style={{ height: "100vh" }}>
            <p
              style={{
                color: "#ffffff",
                fontSize: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 0,
              }}
            >
              영화 불러오는 중!!!
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
