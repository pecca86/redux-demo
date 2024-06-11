// import styled from 'styled-components';
// import Menus from '../../ui/Menus';
import { toast } from "react-hot-toast";
import { getCabins, deleteCabin } from '../../services/apiCabins';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import TableRow from "./TableRow";
import { useDeleteCabin } from './hooks/UseDeleteCabin';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';


function CabinTable() {

  const [searchParams] = useSearchParams();

  const { isDeleting } = useDeleteCabin();
  
  const { data, isLoading, error } = useQuery(
    {
      queryKey: ['cabins'],
      queryFn: getCabins,
    }
  )

  if (isLoading || isDeleting) return <p>Loading...</p>

  // FILTERING
  const filterValue = searchParams.get('filter') || 'all';
  let filteredData;

  if (filterValue === 'discount') {
    filteredData = data.filter((cabin) => cabin.discount > 0);
  } else {
    filteredData = data;
  }


  // SORTING
  const sortValue = searchParams.get('sort') || 'name-asc';
  filteredData.sort((a, b) => {
    const [field, order] = sortValue.split('-');
    if (order === 'asc') {
      return a[field] > b[field] ? 1 : -1;
    } else {
      return a[field] < b[field] ? 1 : -1;
    }
  });

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
          </tr>
        </thead>
        <tbody>
          {filteredData.map((cabin) => (
            <Menus key={cabin.id}>
              <TableRow key={cabin.id} selected={cabin}>
                  <td>{cabin.name}</td>
                  <td>{cabin.max_capacity}</td>
                  <td>{cabin.regular_price}€</td>
                  <td>{cabin.discount}€</td>
              </TableRow>
            </Menus>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CabinTable;
