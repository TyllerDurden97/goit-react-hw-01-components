import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
   return (
      <table  className={css.transactionTab}>
         <thead className={css.transactionTabHead}>
            <tr className={css.tableHeadRow}>
               <th className={css.tableHeader}>Type</th>
               <th className={css.tableHeader}>Amount</th>
               <th className={css.tableHeader}>Currency</th>
            </tr>
         </thead>

         <tbody className={css.tableBody}>
            {items.map(({ id, type, amount, currency }) => (
               <tr key={id} className={css.tableRow}>
                  <td className={css.tableBodyItem}>{type}</td>
                  <td className={css.tableBodyItem}>{amount}</td>
                  <td className={css.tableBodyItem}>{currency}</td>
               </tr>))}
         </tbody>
      </table>
   )
};


TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
   PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
      }).isRequired
   ).isRequired,
};
