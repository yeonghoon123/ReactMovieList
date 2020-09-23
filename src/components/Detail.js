import React, { useState, useEffect } from "react";
import { getDetail } from "../Api";
import { Link } from "react-router-dom";
import "../body.css";

function Detail({ match }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const datas = await getDetail(Number(match.params.id));
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading === false ? (
        <div style={{ backgroundColor: "#000", height: "100vh" }}>
          <div style={{ backgroundColor: "#595959", height: 40 }}>
            <Link to="/">
              <p style={{ color: "#fff", margin: 0 }}>홈</p>
            </Link>
          </div>
          <div style={{ width: "80vh", textAlign: "center", display: "inline-block" }}>
            <img
              src={data.medium_cover_image}
              style={{
                marginLeft: "250px",
                display: "block",
              }}
            />
            <p
              style={{
                fontWeight: 1000,
                fontSize: 30,
                justifyContent: "center",
                color: "#fff",
              }}
            >
              {data.title_long}
            </p>
            <p style={{ color: "#fff", justifyContent: "center" }}>
              평점 {data.rating} 상영시간 {data.runtime}분
            </p>
          </div>
          <img
            src={data.background_image}
            style={{ marginTop: 100, marginTop: 30, height: "50vh", width: "50%" }}
          />

          <p
            style={{
              display: "flex",
              color: "#fff",
              marginBottom: 0,
            }}
          >
            장르
          </p>
          {data.genres.map((item) => {
            return (
              <p
                style={{
                  color: "#fff",
                  marginBottom: 0,
                }}
              >
                {item}
              </p>
            );
          })}
          <p style={{ color: "#fff" }}>언어 : {data.language}</p>
          <p style={{ color: "#fff" }}>다운로드 수 : {data.download_count}</p>
          <p style={{ color: "#fff" }}>내용 : {data.description_full}</p>
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
    </>
  );
}

export default Detail;
