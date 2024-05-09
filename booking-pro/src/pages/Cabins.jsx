import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useState } from "react";

function Cabins() {

  const [showCock, setShowCock] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        <button onClick={()=> setShowCock(cock => !cock)}>Show the cock!</button>
        {showCock && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
