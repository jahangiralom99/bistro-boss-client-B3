import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-96 text-center mx-auto">
      <p className="text-[#D99904] italic font-semibold text-[20px]">
        {heading}
      </p>
      <hr className="border-2 mx-auto" /> <br />
      <h1 className="text-4xl font-bold">{subHeading}</h1> <br />
      <hr className="border-2 mx-auto" /> <br /> <br />
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.node,
  subHeading: PropTypes.node,
};

export default SectionTitle;
