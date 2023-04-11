import style from './ActivityDetail.module.css';
import { useSelector } from 'react-redux';

const ActivityDetail = () => {
  const ac = useSelector( state => state.anActivity );
//  console.log(ac.id);

  return(
    <div className={style.anActivityDetail} >
      <p>Id: {ac.id}</p>
      <p>name: {ac.name}</p>
      <p>desc: {ac.description}</p>
      <p>dif: {ac.difficulty}</p>
      <p>dur: {ac.duration}</p>
      <p>seas: {ac.season}</p>
    </div>
  )
};

export default ActivityDetail;

