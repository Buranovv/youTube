import { LazyLoadImage } from "react-lazy-load-image-component";

import "./mainCard.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MainCard = ({ id, title, channelTitle, image, viewCount, dimension }) => {
  let viewCountCompres;

  if (viewCount < 1000) {
    viewCountCompres = viewCount;
  } else if ((viewCount > 1000) & (viewCount < 1000000)) {
    viewCountCompres = Math.round(viewCount / 1000);
  } else if (viewCount > 1000000) {
    viewCountCompres = Math.round(viewCount / 1000000);
  }

  let newDimension;
  let result;
  if (dimension !== null) {
    result = dimension.split("");

    if (result.includes("d")) {
      newDimension = result[0] * 24;
    }
  }

  return (
    <Link to={`home/${id}`}>
      <div className="mainCard">
        <div className="vid-box">
          <LazyLoadImage
            effect="blur"
            width="400"
            height="225"
            src={image}
            alt=""
          />
        </div>
        <div className="cardBody d-flex align-items-start">
          <div>
            <LazyLoadImage
              effect="blur"
              className="channelLogo me-3"
              draggable="false"
              alt=""
              width="36"
              src="https://yt3.ggpht.com/ytc/APkrFKYlTiqwaRoBU1LsXTibh59l3zQRXhkTOwwX3dTZ=s68-c-k-c0x00ffffff-no-rj"
            />
          </div>
          <div className="pe-4">
            <h5 className="cardTitle">{title}</h5>
            <a className="channelName" href="/">
              {channelTitle}
            </a>
            <div className="d-flex align-items-center gap-1">
              <span>
                {viewCountCompres}
                <span>
                  {viewCountCompres > 100 && viewCountCompres < 1000 ? "K" : ""}
                  {viewCountCompres > 0 && viewCountCompres < 100 ? "M" : ""}
                </span>{" "}
                views
              </span>
              <span>•</span>
              <span>{newDimension} hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

MainCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  channelTitle: PropTypes.string,
  viewCount: PropTypes.string,
  dimension: PropTypes.string,
};

export default MainCard;
