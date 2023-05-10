import { filterContacts } from 'components/slices/Slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const Filter = ({ value }) => {
  const [filter, setFilter] = useState(``);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    dispatch(filterContacts(newFilter));
  };
  return (
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
export default Filter;
