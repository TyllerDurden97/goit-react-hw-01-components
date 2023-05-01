import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import  user from '../user.json';
import stats from '../data.json';



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
      </>
  );
};


  