import { Parallax } from "react-parallax";
import PropTypes from 'prop-types';


const Cover = ({ img, heading }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="Our menu"
        strength={-200}
      >
        <div className="hero md:h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content bg-[#15151563]">
            <div className="max-w-md p-3">
              <h1 className="mb-5 text-5xl font-bold italic">{heading}</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

Cover.propTypes = {
  img: PropTypes.node,
  heading: PropTypes.node,
};

export default Cover;
