import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

export default function CreateProjectModal(props: Props) {
  const handleClose = () => {
    props.setVisible(false);
  };
  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>プロジェクト名</Form.Label>
            <Form.Control type="text" placeholder="プロジェクト名" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button variant="primary" onClick={handleClose}>
          プロジェクト作成
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
