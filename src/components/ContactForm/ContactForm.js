import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';

function ContactForm() {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeTel = e => {
    setTel(e.target.value);
  };

  const onAdd = (name, tel) => dispatch(actions.ADD(name, tel));

  const onCheckforUniqName = name => {
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (uniqName) {
      alert(`${name} is already in contacts`);
      reset();
      return false;
    }
    if (!(name && tel)) {
      alert('Empty field');
      return false;
    }

    return dispatch(actions.UNIQNAME(name));
  };

  const formatNumber = tel => {
    const arr = tel.split('');
    return `+38 (${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}-${arr[8]}${arr[9]}`;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const checkUniqName = onCheckforUniqName(name);
    if (!checkUniqName) return;

    const telephone = formatNumber(tel);
    onAdd(name, telephone);
    reset();
  };

  const reset = () => {
    setName('');
    setTel('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Введите имя"
          onChange={handleChangeName}
        />
        <input
          type="tel"
          name="tel"
          value={tel}
          pattern="[0-9]{10}"
          placeholder="067 123 45 67"
          minLength="10"
          maxLength="10"
          onChange={handleChangeTel}
        />
        <input type="submit" value="Сохранить контакт" />
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func,
  onCheckforUniqName: PropTypes.func,
};

export default ContactForm;

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onAdd: (name, tel) => dispatch(actions.ADD(name, tel)),
//   onCheckforUniqName: name => dispatch(actions.UNIQNAME(name)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
