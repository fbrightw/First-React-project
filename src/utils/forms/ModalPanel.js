import React from 'react';
import {Modal} from "react-bootstrap";
import Task from "../../components/sections/todotasks/tasks/Task";

function ModalPanel(props) {

  return (
      <Modal show={props.isClicked}  onHide={() => props.onPlusClick(!props.isClicked)}>
          <Modal.Header closeButton>
            <Modal.Title>Additional tasks1</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {props.children}
          </Modal.Body>
      </Modal>
  );
}

export default ModalPanel;