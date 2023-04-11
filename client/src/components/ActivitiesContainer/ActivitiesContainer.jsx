import ActivityCard from '../ActivityCard/ActivityCard.jsx';
import style from './ActivitiesContainer.module.css';
import { useSelector } from 'react-redux';

const ActivitiesContainer = () => {

  const allActivities =
    useSelector( state => state.allActivities );

  return(
    <div className={style.acContainer}>
      {allActivities.map(ac => {
//        console.log(JSON.stringify(ac));
        return <ActivityCard
          key={'act' + ac.id}
          id={ac.id}
          name={ac.name}
          description={ac.description}
          difficulty={ac.difficulty}
          duration={ac.duration}
          season={ac.season}
        />
      })}
    </div>
  )
};

export default ActivitiesContainer;
