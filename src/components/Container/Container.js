import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ title, children }) {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Container;
