import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function CabinTableOperations() {
  return (
    <TableOperations>
      {/* We could do these two as compound components as well, but let's keep it simple, and let's also explore different ways of achieving the same thing */}
      <Filter
        filterField='filter'
        options={[
          { value: 'all', label: 'All' },
          { value: 'discount', label: 'With discount' },
        ]}
      />

      <SortBy
        options={[
          { value: 'name-asc', label: 'Sort by name (A-Z)' },
          { value: 'name-desc', label: 'Sort by name (Z-A)' },
          { value: 'regular_price-asc', label: 'Sort by price (low first)' },
          {
            value: 'regular_price-desc',
            label: 'Sort by price (high first)',
          },
          { value: 'max_capacity-asc', label: 'Sort by capacity (low first)' },
          {
            value: 'max_capacity-desc',
            label: 'Sort by capacity (high first)',
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
