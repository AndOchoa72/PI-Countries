import './ActivitiesView.module.css';
import ActivitiesContainer from
'../../components/ActivitiesContainer/ActivitiesContainer.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActivities } from '../../redux/actions';

const ActivitiesView = () => {
  
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

export default ActivitiesView;
