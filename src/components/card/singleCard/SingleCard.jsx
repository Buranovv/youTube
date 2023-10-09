import { LazyLoadImage } from "react-lazy-load-image-component";

import "./singleCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCard = ({
  // id,
  title,
  channelTitle,
  image,
  // viewCount,
  // dimension,
}) => {
  //   let viewCountCompres;

  //   if (viewCount < 1000) {
  //     viewCountCompres = viewCount;
  //   } else if ((viewCount > 1000) & (viewCount < 1000000)) {
  //     viewCountCompres = Math.round(viewCount / 1000);
  //   } else if (viewCount > 1000000) {
  //     viewCountCompres = Math.round(viewCount / 1000000);
  //   }

  //   let newDimension;
  //   let result;
  //   if (dimension !== null) {
  //     result = dimension.split("");

  //     if (result.includes("d")) {
  //       newDimension = result[0] * 24;
  //     }
  //   }

  return (
    <Link>
      <div className="singleCard">
        <div className="vid-box">
          <LazyLoadImage
            effect="blur"
            width="100%"
            height="480"
            src={image}
            alt=""
          />
        </div>
        <h5 className="cardTitle mt-3">{title}</h5>
        <div className="cardBody d-flex align-items-start">
          <div className="d-flex align-items-end">
            <div>
              <LazyLoadImage
                effect="blur"
                className="channelLogo me-3"
                draggable="false"
                alt=""
                width="40"
                src="https://yt3.ggpht.com/ytc/APkrFKYlTiqwaRoBU1LsXTibh59l3zQRXhkTOwwX3dTZ=s68-c-k-c0x00ffffff-no-rj"
              />
            </div>
            <div className="content-box d-flex flex-column me-5">
              <a className="channelName" href="/">
                {channelTitle}
              </a>
              <p>Subscribers</p>
            </div>
            <button className="subscribe">Subscribe</button>
          </div>
          <div className=""></div>
        </div>
      </div>
    </Link>
  );
};

SingleCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  channelTitle: PropTypes.string,
  viewCount: PropTypes.string,
  dimension: PropTypes.string,
};

export default SingleCard;
