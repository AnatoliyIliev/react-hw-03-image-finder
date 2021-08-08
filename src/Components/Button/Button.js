import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

class Button extends Component {
  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <div className={styles.Center}>
        <button
          type="button"
          className={styles.Button}
          onClick={this.props.onFetch}
        >
          Load more
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  onFetch: PropTypes.func.isRequired,
};

export default Button;
