import './Activities.module.css';
import ActivitiesContainer from
'../../components/ActivitiesContainer/ActivitiesContainer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActivities } from '../../redux/actions';

const Activities = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <>
      <h1>This is the Activities Manager view</h1>
      <ActivitiesContainer />
    </>
  )
};

export default Activities;
