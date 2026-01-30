import { useEffect } from 'react';

/**
 * Listen for clicks either within or outside of a target element.
 * Adapted from https://stackoverflow.com/a/42234988
 * @param targetRef Ref of element to listen to
 * @param callback Called with event payload when listener is invoked
 * @param inverse Set to true to listen outside the element instead of within it. Default false.
 */
export default function useClickListener(targetRef, callback, inverse = false) {
  useEffect(() => {
    function handleClick(event) {
      if (targetRef.current && targetRef.current.contains(event.target) !== inverse) {
        callback(event);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => {
      // unbind on clean up
      document.removeEventListener('mousedown', handleClick);
    };
  }, [targetRef]);
}
