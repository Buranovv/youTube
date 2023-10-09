import { Fragment, useContext } from "react";

import MainCard from "../components/card/mainCard/MainCard";
import { Col, Row, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { DataContext } from "../context/DataContext";

import "../css/homePage.css";

const HomePage = () => {
  const { allData, hasMore, fetchData, error, setSearch } =
    useContext(DataContext);

  const clickk = (e) => {
    setSearch(e.target.outerText.toLowerCase());
  };

  return (
    <Fragment>
      <section className="home">
        <div className="searchSuggests d-flex align-items-center gap-2">
          <div defaultValue="" onClick={clickk}>
            All
          </div>
          <div defaultValue="music" onClick={clickk}>
            Music
          </div>
          <div defaultValue="gaming" onClick={clickk}>
            Gaming
          </div>

          <div defaultValue="mixes" onClick={clickk}>
            Mixes
          </div>
          <div defaultValue="live" onClick={clickk}>
            Live
          </div>
          <div defaultValue="sci-fi films" onClick={clickk}>
            Sci-fi films
          </div>
          <div defaultValue="sports" onClick={clickk}>
            Sports
          </div>
          <div defaultValue="trailers" onClick={clickk}>
            Trailers
          </div>
          <div defaultValue="Gadjets" onClick={clickk}>
            Gadjets
          </div>
          <div defaultValue="Bitcoin" onClick={clickk}>
            Bitcoin
          </div>
          <div defaultValue="Football" onClick={clickk}>
            Football
          </div>
          <div defaultValue="Podcasts" onClick={clickk}>
            Podcasts
          </div>
          <div defaultValue="Courses" onClick={clickk}>
            Courses
          </div>
          <div defaultValue="Comedy" onClick={clickk}>
            Comedy
          </div>
        </div>
        <div className="cards">
          <InfiniteScroll
            dataLength={allData.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            loader={<Spinner className="loader" animation="grow" />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b></b>
              </p>
            }
          >
            <Row lg={3} className="gy-3">
              {error ? (
                <p>{error}</p>
              ) : (
                allData.map((data, i) => (
                  <Col key={i}>
                    <MainCard
                      id={data.id}
                      title={
                        data.snippet.localized
                          ? data.snippet?.localized.title
                          : data.snippet.title
                      }
                      channelTitle={data.snippet?.channelTitle}
                      image={
                        data.snippet?.thumbnails.standard
                          ? data.snippet?.thumbnails.standard.url
                          : data.snippet?.thumbnails.medium.url
                      }
                      viewCount={data.statistics?.viewCount}
                      dimension={
                        data?.contentDetails
                          ? data.contentDetails?.dimension
                          : null
                      }
                    />
                  </Col>
                ))
              )}
            </Row>
          </InfiniteScroll>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
