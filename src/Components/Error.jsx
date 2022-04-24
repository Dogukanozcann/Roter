import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

const styles = StyleSheet.create({
  h1: {
    fontSize: "7.5em",
    margin: "15px 0px",
    fontWeight: "bold"
  },
  h2: {
    fontWeight: "bold"
  }
});
const Error = () => {
  return (
    <div class="col-md-6 align-self-center">
      <h1 className={css(styles.h1)}>404!</h1>
      <h2 className={css(styles.h2)}>Oh! you're lost.</h2>
      <p>
        Sorry the page not found.
      </p>
    </div>
  );
};

export default Error;
