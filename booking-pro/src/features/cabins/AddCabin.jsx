import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {

  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <button>Show the cock!</button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
