import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, width1, height1, ...props }) => (
  <iframe
    title="youtube video"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    width={width1 ? width1 : "100%"}
    height={height1 ? height1 : "100%"}
    {...props}
  />
);
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default YoutubeEmbed;
