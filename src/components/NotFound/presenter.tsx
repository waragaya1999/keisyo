import React from "react"
import { useNavigate } from "react-router-dom"

export const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="wrap">
      <div className="bg" style={{ minHeight: window.innerHeight }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header className="header">
            <img
              src="https://uma-keisyo.com/images/logo.svg"
              className="logo"
              onClick={() => navigate("/")}
            />
          </header>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#dcdbe6",
              border: "#a1a0b5 2px solid",
              borderRadius: "1rem",
              margin: "0 auto",
              marginTop: "8vh",
            }}
          >
            {window.innerWidth > 600 ? (
              <>
                <img
                  src="https://uma-keisyo.com/images/agemasen!.png"
                  className="notFoundImg"
                  style={{ width: "15%", padding: "5rem 2rem" }}
                />
                <div
                  style={{
                    width: "60%",
                    textAlign: "left",
                    paddingTop: "2rem",
                  }}
                >
                  <p style={{ fontSize: "3rem" }}>404 Not Found</p>
                  <hr style={{ margin: "1rem 0 2rem 0" }} />
                  <p style={{ fontSize: "2.4rem" }}>
                    ご指定のURLが間違っています！
                  </p>
                </div>
              </>
            ) : (
              <>
                <img
                  src="https://uma-keisyo.com/images/agemasen!.png"
                  className="notFoundImg"
                  style={{
                    width: "15%",
                    height: "intrinsic",
                    padding: "2rem 1.4rem",
                  }}
                />
                <div
                  style={{
                    width: "60%",
                    textAlign: "left",
                    paddingTop: "1rem",
                  }}
                >
                  <p style={{ fontSize: "1.6rem" }}>404 Not Found</p>
                  <hr style={{ margin: "0.5rem 0" }} />
                  <p style={{ fontSize: "1.2rem" }}>
                    ご指定のURLが間違っています！
                  </p>
                </div>
              </>
            )}
            <img
              src="https://uma-keisyo.com/images/NotFound.svg"
              className="notFoundImg"
              style={{
                width: "25%",
                alignSelf: "flex-start",
                padding: "1rem",
              }}
            />
          </div>
        </div>
        <footer>©2023 ケイショウチェッカー All Rights Reserved.</footer>
      </div>
    </div>
  )
}
