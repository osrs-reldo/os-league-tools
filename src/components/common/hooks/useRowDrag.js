import { useDrag } from 'react-dnd';

export default function useRowDrag(type, index) {
  return useDrag({
    type,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
}
