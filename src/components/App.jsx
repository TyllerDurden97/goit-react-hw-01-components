import  user from '../user.json';
import stats from '../data.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';


export const App = () => {
   return (
      <div>
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
            id={stats.id}
            label={stats.label}
            percentage={stats.percentage}
         />
      </div>
  );
};


  