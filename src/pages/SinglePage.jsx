import { useParams } from "react-router-dom";
import SingleCard from "../components/card/singleCard/SingleCard";
import { useEffect, useState } from "react";
import request from "../server";
import { api_key, partSearch } from "../const/params";

const SinglePage = () => {
  const { vidId } = useParams();
  console.log(vidId);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const {
          data: { items },
        } = await request.get(`videos?${api_key}&id=${vidId}&${partSearch}`);
        setData(items);
        console.log(items);
        console.log(items.snippet?.localized.title);
      };

      getData();
    } catch (err) {
      console.log(err);
    }
  }, [vidId]);

  return (
    <section>
      {data.map((data, i) => (
        <SingleCard
          key={i}
          id={data.id}
          title={
            data.snippet?.localized
              ? data.snippet.localized?.title
              : data.snippet?.title
          }
          channelTitle={data.snippet?.channelTitle}
          image={data.snippet.thumbnails.maxres.url}
          viewCount={data.statistics?.viewCount}
          dimension={
            data?.contentDetails ? data.contentDetails?.dimension : null
          }
        />
      ))}
    </section>
  );
};

export default SinglePage;
