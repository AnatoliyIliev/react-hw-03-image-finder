import { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDoun);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDoun);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
