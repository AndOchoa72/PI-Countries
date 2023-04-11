import style from './ActivityCard.module.css';
import { Link } from 'react-router-dom';
import { getActivity } from '../../redux/actions';
import { useDispatch } from 'react-redux';
//import store from '../../redux/store';

const ActivityCard = (ac) => {
  const dispatch = useDispatch();
  return(
    <Link to = {`/activity/${ac.id}`}>
      <div className={style.anActivityCard}
        onClick={() => {
          dispatch(getActivity(ac.id))}}>
    {//    <p>Id: {ac.id}</p>
    }
        <h1>{ac.name}</h1>
        <p>Description: {ac.description}</p>
        <p>Difficulty: {ac.difficulty}</p>
        <p>Duration: {ac.duration}</p>
        <p>Season: {ac.season}</p>
      </div>
    </Link>
  )
};

export default ActivityCard;
