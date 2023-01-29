import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="flex justify-center m-1">
    <div className="container max-w-7xl">
      <iframe
        className="flex w-full h-[720px] pt-16 px-16 mb-16 aspect-w-16 aspect-h-9"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded trailer"
        modestbranding="1"
        //autoplay="0"
      />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
