import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = e => dispatch(actions.FILTER(e.target.value));

  return (
    <>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Поиск по имени ..."
        onChange={onFilter}
        autoComplete="off"
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;

// const mapStateToProps = state => ({
//   filter: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onFilter: e => dispatch(actions.FILTER(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
