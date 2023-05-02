import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export const Statistics = ({ stats, title }) => {
   return (
      <section className={css.statSection}>     
      {title && <h2 className={css.statTitle}>{title}</h2>}      
         <ul className={css.statList}>
         {stats.map(({ id, label, percentage }) => (
            <li
               key={id}
               className={css.statItem}
               style= {{backgroundColor: randomColor()}}>
            <span className={css.statLabel}>{label}</span>
            <span className={css.statPercentage}>{percentage}%</span>
            </li>)
         )}      
      </ul>
   </section>);
};

Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
   PropTypes.shape({
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
      }).isRequired
   ).isRequired,
};

function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}