import React, { useState, useEffect } from "react";
import "../body.css";
import { getDetail } from "../Api";
import { Link } from "react-router-dom";

function Detail({ match }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getData = async () => {
    const datas = await getDetail(match.params.id);
    setData(datas);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <div style={{ backgroundColor: "#000000", height: "auto" }}>
            <div style={{ backgroundColor: "#595959", height: "5vh", width: "100%" }}>
              <Link to="/">
                <p style={{ color: "#fff", margin: 0 }}>홈</p>
              </Link>
            </div>
            <div style={{ width: "1440px", height: "auto", margin: "0 auto" }}>
              <img
                src={data.medium_cover_image}
                alt=""
                style={{ margin: "0px 100px 20px 120px" }}
              />
              <img src={data.background_image} style={{ display: "inline-block", marginTop: "30px" }} />
              <div style={{ height: "auto" }}>
                <p style={{ color: "#ffffff", fontSize: 30, fontWeight: 1000, margin: "30px 0 0 120px" }}>
                  {data.title} <span style={{ marginLeft: "20px", fontSize: 15 }}>출시연도 : {data.year}</span>
                  <span style={{ marginLeft: "20px", fontSize: 15 }}>상영시간 : {data.runtime} 분  </span>
                  <span style={{ marginLeft: "20px", fontSize: 15 }}>장르 : {data.genres[0]}</span>
                </p>
                {data.description_full.length != 0 ? (<p style={{ color: "#ffffff", margin: 0, fontSize: 18, fontWeight: 1000, margin: "30px 0 30px 120px" }}>
                  {data.description_full}
                </p>
                ) : (<p style={{ color: "#ffffff", margin: 0, fontSize: 20, fontWeight: 1000, margin: "30px 0 30px 120px" }}>줄거리가 없습니다.</p>)}
              </div>
            </div>
          </div>

        </>
      ) : (
          "loading..."
        )
      }
    </>
  );
}

export default Detail;
