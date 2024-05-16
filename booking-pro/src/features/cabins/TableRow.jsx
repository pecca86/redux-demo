import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { useDeleteCabin } from './hooks/UseDeleteCabin';
import { useCloseModal } from "../../hooks/useCloseModal";
import Menus from "../../ui/Menus";

const TableRow = ({ children, selected }) => {
    const { removeCabin } = useDeleteCabin();
    useCloseModal();

    const btnStyle = {
        "margin": "10px",
        "padding": "2px",
        "background": "white",
        "border": "none"
    }

    return (
        <>
            <tr>
                {children}
                <td>
                    <Modal>
                        <Menus.Menu>
                            <Menus.Toggle id={selected.id} />
                            <Menus.List id={selected.id}>
                                <Modal>
                                    <Modal.Open opens='cabin-form'>
                                        <button className="menu-btn" style={btnStyle}>Edit</button>
                                    </Modal.Open>
                                    <Modal.Window name={'cabin-form'}>
                                        <CreateCabinForm selectedCabin={selected} />
                                    </Modal.Window>
                                </Modal>

                                <Modal>
                                    <Modal.Open opens='cabin-form'>
                                        <button className="menu-btn" style={btnStyle}>Delete</button>
                                    </Modal.Open>
                                    <Modal.Window name={'cabin-form'}>
                                        <>
                                            <p>Are you sure you want to delete the cabin?</p>
                                            <button onClick={() => removeCabin(selected.id)}>Yes</button>
                                        </>
                                    </Modal.Window>
                                </Modal>
                            </Menus.List>
                        </Menus.Menu>
                    </Modal>
                </td>
            </tr>
        </>
    );
}

export default TableRow;
