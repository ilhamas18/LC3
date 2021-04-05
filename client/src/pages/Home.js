import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showProfiles } from '../store/actions/profiles';
import Profiles from '../components/Profiles';

function Home() {
  const profiles = useSelector(state => state.ProfilesReducer.profiles)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showProfiles())
  }, [dispatch])

  return (
    <Profiles profiles={profiles}/>
  )
}

export default Home;