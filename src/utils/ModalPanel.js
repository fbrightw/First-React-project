import React from 'react';
import {Modal} from "react-bootstrap";

function ModalPanel(props) {

  return (
      <Modal show={props.isClicked}  onHide={() => props.onPlusClick(!props.isClicked)}>
          <Modal.Header closeButton>
            <Modal.Title>Additional tasks</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
      </Modal>
  );
}

export default ModalPanel;