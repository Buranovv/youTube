import { Fragment, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./header.css";
import { DataContext } from "../../context/DataContext";

const Header = () => {
  const { search, handleSearch } = useContext(DataContext);

  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center ">
              <div className="same p-2">
                <LazyLoadImage
                  effect="blur"
                  src="/images/menu.svg"
                  alt="menu"
                />
              </div>
              <a className="logo-box" href="/">
                <LazyLoadImage
                  effect="blur"
                  src="/images/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="d-flex align-items-center gap-3">
              <form className="d-flex">
                <input
                  value={search}
                  onChange={handleSearch}
                  className="search-input"
                  type="text"
                  placeholder="Search"
                />
                <button className="search-btn">
                  <LazyLoadImage
                    effect="blur"
                    src="/images/search.svg"
                    alt="search"
                  />
                </button>
              </form>
              <div className="regular-box mic">
                <LazyLoadImage
                  effect="blur"
                  src="/images/mic.svg"
                  alt="microphone"
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="regular-box same">
                <LazyLoadImage
                  effect="blur"
                  src="/images/create-vid.svg"
                  alt="create-vid"
                />
              </div>
              <div className="regular-box same">
                <LazyLoadImage
                  effect="blur"
                  src="/images/bell.svg"
                  alt="bell"
                />
              </div>
              <div className="avatar-box">
                <LazyLoadImage
                  effect="blur"
                  className="avatar"
                  alt="Avatar image"
                  height="32"
                  width="32"
                  src="https://yt3.ggpht.com/qbDdFi_TLjZGck1bkwomPqSP8DtqoHf8dcXiqSKPK-7ZOoG9yWpdEFHQpWGd01OQDrMwk2q6A4U=s88-c-k-c0x00ffffff-no-rj"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
