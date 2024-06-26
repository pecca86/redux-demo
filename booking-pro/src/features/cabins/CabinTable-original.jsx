// import styled from 'styled-components';
// import Menus from '../../ui/Menus';
import { toast } from "react-hot-toast";
import { getCabins, deleteCabin } from '../../services/apiCabins';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import TableRow from "./TableRow";
import { useDeleteCabin } from './hooks/UseDeleteCabin';


function CabinTable() {

  const { isDeleting, removeCabin } = useDeleteCabin();
  
  const { data, isLoading, error } = useQuery(
    {
      queryKey: ['cabins'],
      queryFn: getCabins,
    }
  )

  if (isLoading || isDeleting) return <p>Loading...</p>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Discount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((cabin) => (
            <>
              <TableRow key={cabin.id} selected={cabin}>
                  <td>{cabin.name}</td>
                  <td>{cabin.max_capacity}</td>
                  <td>{cabin.regular_price}€</td>
                  <td>{cabin.discount}€</td>
                  <td><button onClick={() => removeCabin(cabin.id)} >Delete</button></td>
              </TableRow>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CabinTable;
