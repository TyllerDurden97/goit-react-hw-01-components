import PropTypes from 'prop-types';
import css from './Statistics.module.css'


export const Statistics = (title, stats) => {
   return (<section className={css.statSection}>     
      {title && <h2 className={css.statTitle}>{title}</h2>}      
      <ul className={css.statList}>
         {stats.map(({ id, label, percentage }) => (
         <li key={id} className={css.statItem}>
            <span className={css.statLabel}>{label}</span>
            <span className={css.statPercentage}>{percentage}%</span>
            </li>)
         )}      
      </ul>
   </section>);
};

Statistics.propTypes = {
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   percentage: PropTypes.string.isRequired,
   title: PropTypes.string
};