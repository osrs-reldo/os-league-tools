import React, { useEffect, useState, useRef } from 'react';
import images from '../assets/images';
import { NONE_REGION_ID, regionsById } from '../data/regions';

const MAX_WIDTH = 1939;
const MAX_HEIGHT = 859;
const HEIGHT_WIDTH_RATIO = MAX_HEIGHT / MAX_WIDTH;

export default function RegionMap({ unlockedRegions }) {
  const [scaledHeight, setScaledHeight] = useState(0);
  const wrapperRef = useRef();
  const regionsToShow = unlockedRegions.filter(id => id !== NONE_REGION_ID).map(id => regionsById[id]);

  useEffect(() => {
    const observer = new ResizeObserver(entries => setScaledHeight(entries[0].contentRect.width * HEIGHT_WIDTH_RATIO));
    observer.observe(wrapperRef.current);
    return () => wrapperRef.current && observer.unobserve(wrapperRef.current);
  }, []);

  const mapImgStyle = { zIndex: 2, position: 'absolute', top: 0, left: 0 };
  return (
    <div
      style={{
        maxWidth: MAX_WIDTH,
        maxHeight: MAX_HEIGHT,
        width: '100%',
        height: Number.isNaN(scaledHeight) ? 0 : scaledHeight,
        zIndex: 1,
        position: 'relative',
      }}
      ref={wrapperRef}
    >
      <img src={images['map-all.png']} alt='' style={mapImgStyle} />
      {regionsToShow.map(region => (
        <img src={region.map} alt='' style={mapImgStyle} />
      ))}
    </div>
  );
}
