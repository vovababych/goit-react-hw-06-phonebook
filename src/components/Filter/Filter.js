import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, onFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(actions.FILTER(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
