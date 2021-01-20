import { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
// import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm({ onAdd, onCheckforUniqName }) {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeTel = e => {
    setTel(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // const checkUniqName = onCheckforUniqName(name);
    // if (!checkUniqName) return;

    // if (!(name && tel)) {
    //   alert('Empty field');
    //   return;
    // }

    onAdd(name, tel);
    reset();
  };

  const reset = () => {
    setName('');
    setTel('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="tel"
          value={tel}
          onChange={handleChangeTel}
        />
      </label>
      <button className={s.btnAddContact} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func,
  onCheckforUniqName: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onAdd: (name, tel) => dispatch(actions.addContact(name, tel)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
