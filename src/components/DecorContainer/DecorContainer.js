import PropTypes from 'prop-types';
import s from './DecorContainer.module.css';

function DecorContainer({ title, children }) {
  return (
    <>
      <section className={s.decor}>
        <div className={s.leftDecor}></div>
        <div className={s.rightDecor}></div>
        <div className={s.circleDecor}></div>
        <div className={s.innerDecor}>
          <h3 className={s.titleDecor}>{title}</h3>
          {children}
        </div>
      </section>
    </>
  );
}

DecorContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default DecorContainer;
