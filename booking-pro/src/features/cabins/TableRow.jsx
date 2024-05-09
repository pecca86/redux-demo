import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

const TableRow = ({ children, selected }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <tr>
                {children}
                <td><button onClick={() => setShowForm(show => !show)}>Edit</button></td>
            </tr>
            {showForm && <CreateCabinForm selectedCabin={selected}/>}
        </>
    );
}

export default TableRow;
