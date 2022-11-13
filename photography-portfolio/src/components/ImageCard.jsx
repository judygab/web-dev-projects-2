import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    // y: 50,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const ImageCard = ({ imgUrl }) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="img-card"
    >
      <img src={imgUrl} alt="collection"></img>
    </motion.div>
  );
};

export default ImageCard;
