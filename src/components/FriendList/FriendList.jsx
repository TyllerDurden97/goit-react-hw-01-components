import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types';


export const FriendList = ({friends}) => {
   return (
      <ul className={css.friendList}>
         {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
               key={id}
               avatar={avatar}
               name={name}
               isOnline={isOnline}
            />
         ))}    
      </ul>)
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
   PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired
      }).isRequired
   ).isRequired,
};