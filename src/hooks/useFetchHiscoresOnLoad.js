import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchHiscores } from '../store/user/character';

export default function useFetchHiscoresOnLoad() {
  const characterState = useSelector(state => state.character);
  useEffect(() => fetchHiscores(characterState), []);
}
