import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.filter);
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
