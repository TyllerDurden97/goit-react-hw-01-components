import css from './FriendListItem.module.css'
// import PropTypes from 'prop-types';


export const FriendListItem = ({ id, avatar, name, isOnline }) => {
   return (      
   <li    
      className={css.friendItem}>
         { isOnline ? (
            <span className={css.spanStatusOnline}></span>) : (
            <span className={css.spanStatus}></span>)}
         <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
         <p className={css.friendName}>{name}</p>
   </li>)       
}