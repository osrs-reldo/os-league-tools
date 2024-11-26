import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHiscores } from '../store/user/character';

export default function useFetchHiscoresOnLoad() {
  const characterState = useSelector(state => state.character);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHiscores(characterState));
  }, []);
}
