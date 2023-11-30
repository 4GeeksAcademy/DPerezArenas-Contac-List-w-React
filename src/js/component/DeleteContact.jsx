import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const DeleteContact = () => {

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>If you delete this thing the entire universe will go down!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">On no!</Button>
          <Button variant="secondary">Yes baby!</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
