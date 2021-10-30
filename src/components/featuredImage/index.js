import * as React from "react";

import Container from "../container";

import * as styles from "./styles.module.scss";

const featuredImage = () => {
  return (
    <div className={styles.featuredImage}>
      <Container size="medium">
        <img src="https://source.unsplash.com/random" alt="test image" />
      </Container>
    </div>
  );
};

export default featuredImage;
