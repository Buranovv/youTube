import { createContext, useEffect, useState } from "react";
import request from "../server";
import PropTypes from "prop-types";
import {
  api_key,
  chart,
  maxResults,
  partSearch,
  partVid,
} from "../const/params";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [allData, setAllData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [nextPageToken, setNextPageToken] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const getData = async () => {
        const {
          data,
          data: { items },
        } = await request.get(
          `${search !== "" ? "search" : "videos"}?${api_key}&${maxResults}&${
            search !== "" ? `q=${search}` : chart
          }&${search !== "" ? partSearch : partVid}`
        );  

        console.log(data);

        setAllData(items);
        setNextPageToken(data.nextPageToken);
      };
      getData();
    } catch (err) {
      setError(err);
    }
  }, [search]);

  const fetchData = async () => {
    if (allData.length < 200) {
      try {
        const {
          data,
          data: { items },
        } = await request.get(
          `${
            search !== "" ? "search" : "videos"
          }?${api_key}&pageToken=${nextPageToken}&${maxResults}&${
            search !== "" ? `q=${search}` : chart
          }&${search !== "" ? partSearch : partVid}`
        );

        setAllData([...allData, ...items]);
        setNextPageToken(data.nextPageToken);
      } catch (err) {
        setError(err);
      }

      console.log(allData);
    } else {
      setHasMore(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const state = {
    allData,
    hasMore,
    fetchData,
    error,
    handleSearch,
    search,
    setSearch,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
  children: PropTypes.node,
};

export default DataContextProvider;
