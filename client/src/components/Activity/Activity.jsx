import style from './Activity.module.css';

const Activity = (ac) => {
//  console.log(JSON.stringify(ac));
  return(
    <div className={style.anActivity}>
      <p>Id: {ac.id}</p>
      <p>name: {ac.name}</p>
      <p>description: {ac.description}</p>
      <p>difficulty: {ac.difficulty}</p>
      <p>duration: {ac.duration}</p>
      <p>season: {ac.season}</p>
    </div>
  )
};

export default Activity;
