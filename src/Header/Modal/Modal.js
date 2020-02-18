import React, { Fragment, Component } from "react";
import ModalContent from "./ModalContent";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
  }

  showModal = () => {
    this.setState({ isShown: true });
  };

  closeModal = () => {
    this.setState({ isShown: false });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.showModal}>{this.props.buttonText}</button>

        {this.state.isShown ? (
          <ModalContent
            closeModal={this.closeModal}
            addNewBook={this.props.addNewBook}
          />
        ) : (
          <Fragment />
        )}
      </Fragment>
    );
  }
}

export default Modal;
