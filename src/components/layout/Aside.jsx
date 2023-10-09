import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./aside.css";

const Aside = () => {
  return (
    <Fragment>
      <div className="aside">
        <div className="navigation">
          <div>
            <NavLink className="regularAsideLink" to="/">
              <div className="aside-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="path"
                    d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
                    fill="white"
                  />
                  <path
                    d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
                    fill="black"
                  />
                </svg>
              </div>
              <span>Home</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="regularAsideLink" to="/shorts">
              <div className="aside-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    className="path1"
                    d="M9.99995 14.65V9.34999L15 12L9.99995 14.65ZM17.77 10.32C17 9.99999 16.57 9.81999 16.57 9.81999L18 9.05999C19.84 8.09999 20.53 5.82999 19.56 3.99999C18.59 2.16999 16.32 1.46999 14.49 2.43999L5.99995 6.93999C4.70995 7.61999 3.92995 8.97999 3.99995 10.43C4.06995 11.85 4.92995 13.1 6.21995 13.68C6.24995 13.69 7.41995 14.18 7.41995 14.18L5.99995 14.93C4.16995 15.9 3.46995 18.17 4.43995 20C5.40995 21.83 7.67995 22.53 9.50995 21.56L18.01 17.06C19.3 16.38 20.07 15.02 20 13.57C19.93 12.15 19.06 10.89 17.77 10.32ZM17.54 16.18L9.03995 20.68C7.69995 21.39 6.02995 20.88 5.31995 19.54C4.60995 18.2 5.11995 16.53 6.45995 15.82L8.49995 14.74V13.53L7.80995 13.25L6.69995 12.79C5.70995 12.38 5.04995 11.44 4.99995 10.38C4.94995 9.31999 5.51995 8.31999 6.45995 7.81999L14.96 3.31999C16.3 2.60999 17.97 3.11999 18.68 4.45999C19.39 5.79999 18.88 7.46999 17.54 8.17999L15.5 9.25999V10.47L17.3 11.21C18.29 11.62 18.95 12.56 19 13.62C19.05 14.68 18.48 15.68 17.54 16.18Z"
                    fill="black"
                  />
                  <path
                    className="path"
                    d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
                  ></path>
                </svg>
              </div>
              <span>Shorts</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="regularAsideLink" to="/subscriptions">
              <div className="aside-icon">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <path
                    className="path"
                    d="M20 7H4V6h16v1zm2 2v12H2V9h20zm-7 6-5-3v6l5-3zm2-12H7v1h10V3z"
                    fill="white"
                  ></path>
                  <path
                    className="path2"
                    d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span>Subscriptions</span>
            </NavLink>
          </div>
          <div className="libraries">
            <NavLink className="regularAsideLink" to="/libraries">
              <div className="aside-icon">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <path
                    className="path"
                    d="M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-4 7.5L11 7v7l6-3.5z"
                    fill="white"
                  ></path>
                  <path
                    className="path2"
                    d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <span>Libraries</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="regularAsideLink" to="/history">
              <div className="aside-icon">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <path
                    className="path"
                    d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 2C8.73 2 5.8 3.44 4 5.83V3.02H2V9h6V7H5.62C7.08 5.09 9.36 4 12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8H2c0 5.51 4.49 10 10 10s10-4.49 10-10S17.51 2 12 2z"
                    fill="white"
                  ></path>
                  <path
                    className="path2"
                    d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
                  ></path>
                </svg>
              </div>
              <span>History</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              className="regularAsideLink"
              to="https://studio.youtube.com/channel/UCeZEQZ9FjmqpgCy58mZdQEA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
            >
              <div className="aside-icon">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <path
                    d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <span>Your videos</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="regularAsideLink" to="/watchLater">
              <div className="aside-icon">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <path
                    className="path"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.97 14.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7z"
                    fill="white"
                  ></path>
                  <path
                    className="path2"
                    d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <span>Watch later</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="regularAsideLink" to="/likedVideos">
              <div className="aside-icon">
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                  }}
                >
                  <path className="path" d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" fill="white"></path>
                  <path className="path2" d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                </svg>
              </div>
              <span>Liked videos</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Aside;
