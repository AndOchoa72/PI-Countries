import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return(
    <div className={style.mainContainer}>
      <Link to='/home'>COUNTRIES Home</Link>
      <Link to='/activities'>ACTIVITIES Mgr</Link>
    </div>
  )
}

export default NavBar;
