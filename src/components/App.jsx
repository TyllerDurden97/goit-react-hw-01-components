import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import user from '../user.json';
import stats from '../data.json';
import friends from '../friends.json';
import items from '../transactions.json';


export const App = () => {
   return (
      <>
         <Profile
            username={user.username} 
            tag={user.tag} 
            avatar={user.avatar}
            location={user.location} 
            followers={user.stats.followers} 
            views={user.stats.views} 
            likes={user.stats.likes}
         /> 
         <Statistics
            stats={stats}
            // title="Upload stats"
         />
         <FriendList
            friends={friends} />
         <TransactionHistory
            items={items} />
      </>
  );
};


  