// import styled from 'styled-components';
// import Menus from '../../ui/Menus';
import { toast } from "react-hot-toast";
import { getCabins, deleteCabin } from '../../services/apiCabins';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import TableRow from "./TableRow";


function CabinTable() {

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(
    {
      queryKey: ['cabins'],
      queryFn: getCabins,
    }
  )

  const deleteAction = useMutation(
    {
      mutationKey: ['deleteCabin'],
      mutationFn: (id) => deleteCabin(id),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['cabins']
        });
        toast.success('Cabin deleted');
      },
      onError: (err) => toast.error(err.message)
    }
  )

  if (isLoading || deleteAction.isLoading) return <p>Loading...</p>

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
                  <td><button onClick={() => deleteAction.mutate(cabin.id)} >Delete</button></td>
              </TableRow>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CabinTable;
