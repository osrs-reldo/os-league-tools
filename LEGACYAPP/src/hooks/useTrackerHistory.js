import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCompleted, toggleTodo } from '../store/tasks/tasks';

const MAX_HISTORY_SIZE = 10;

export default function useTrackerHistory() {
  const [history, setHistory] = useState([]);
  const dispatch = useDispatch();
  const [historyStackIdx, setHistoryStackIdx] = useState(0);
  const canUndo = history.length > 0 && historyStackIdx < history.length;
  const canRedo = historyStackIdx > 0;

  const regionState = useSelector(state => state.unlocks.regions);

  const addHistory = (taskId, fieldName) => {
    setHistory(prevHistory => {
      const historySlice = prevHistory.slice(historyStackIdx, MAX_HISTORY_SIZE);
      return [{ taskId, fieldName }, ...historySlice];
    });
    setHistoryStackIdx(0);
  };

  const undo = () => {
    if (!canUndo) {
      return;
    }
    const itemToUndo = history[historyStackIdx];
    switch (itemToUndo.fieldName) {
      case 'completed': {
        dispatch(toggleCompleted({ taskId: itemToUndo.taskId, regions: regionState }));
        break;
      }
      case 'todo': {
        dispatch(toggleTodo({ taskId: itemToUndo.taskId, regions: regionState }));
        break;
      }
      default: {
        break;
      }
    }
    setHistoryStackIdx(historyStackIdx + 1);
  };

  const redo = () => {
    if (!canRedo) {
      return;
    }
    const itemToRedo = history[historyStackIdx - 1];
    switch (itemToRedo.fieldName) {
      case 'completed': {
        dispatch(toggleCompleted({ taskId: itemToRedo.taskId, regions: regionState }));
        break;
      }
      case 'todo': {
        dispatch(toggleTodo({ taskId: itemToRedo.taskId, regions: regionState }));
        break;
      }
      default: {
        break;
      }
    }
    setHistoryStackIdx(historyStackIdx - 1);
  };

  return {
    canUndo,
    canRedo,
    addHistory,
    undo,
    redo,
  };
}
