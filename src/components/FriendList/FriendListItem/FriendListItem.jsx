import css from './FriendListItem.module.css'
// import PropTypes from 'prop-types';


export const FriendListItem = ({ avatar, name, isOnline }) => {
   return (      
   <li     
      className={css.friendItem}>
         {console.log(isOnline)}
         {{ isOnline } = true ? (
            <span className={css.spanStatusOnline}>on</span>) : (
            <span className={css.spanStatus}>off</span>)}
         <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
         <p className={css.friendName}>{name}</p>
   </li>)       
}