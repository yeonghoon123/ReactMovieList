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
      <div style={{ backgroundColor: "#595959", height: 40 }}>
        <Link to="/">
          <p style={{ color: "#fff", margin: 0 }}>홈</p>
        </Link>
      </div>
      <div style={{ backgroundColor: "#000" }}>
        {loading === false ? (
          data.map((item) => (
            <div key={item.id} style={{ display: "inline-block" }}>
              <Link to={"/Detail/" + item.id}>
                <img src={item.medium_cover_image} style={{ margin: 15 }} />
              </Link>
              <p style={{ textAlign: "center", color: "#fff" }}>
                {item.title.length > 15
                  ? item.title.slice(0, 15) + "..."
                  : item.title}
              </p>
            </div>
          ))
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
