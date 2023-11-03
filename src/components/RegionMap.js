import React from 'react';
import images from '../assets/images';

const MAX_WIDTH = 1433;
const MAX_HEIGHT = 859;

// TODO fix image overlay/resizing issues
// eslint-disable-next-line no-unused-vars
export default function RegionMap({ unlockedRegions }) {
  //   const mapImgStyle = { zIndex: 2, position: 'absolute', top: 0, left: 0 };
  return (
    <div style={{ maxWidth: MAX_WIDTH, maxHeight: MAX_HEIGHT, width: '100%', height: '100%' }}>
      <img src={images['map-all.png']} alt='' style={{ zIndex: 1, position: 'relative' }} />
      {/* <img src={images['map-misthalin.png']} alt='' style={mapImgStyle} />
      <img src={images['map-karamja.png']} alt='' style={mapImgStyle} /> */}
      {/* {isRegionUnlocked('Asgarnia', unlockedRegions) && (
          <img src='/img/map-asgarnia.png' alt='' style={mapImgStyle} />
      )}
      {isRegionUnlocked('Desert', unlockedRegions) && (
          <img src='/img/map-desert.png' alt='' style={mapImgStyle} />
      )}
      {isRegionUnlocked('Fremennik', unlockedRegions) && (
          <img src='/img/map-fremennik.png' alt='' style={mapImgStyle} />
      )}
      {isRegionUnlocked('Kandarin', unlockedRegions) && (
          <img src='/img/map-kandarin.png' alt='' style={mapImgStyle} />
      )}
      {isRegionUnlocked('Morytania', unlockedRegions) && (
          <img src='/img/map-morytania.png' alt='' style={mapImgStyle} />
      )}
      {isRegionUnlocked('Tirannwn', unlockedRegions) && (
          <img src='/img/map-tirannwn.png' alt='' style={mapImgStyle} />
      )}
      {isRegionUnlocked('Wilderness', unlockedRegions) && (
          <img src='/img/map-wilderness.png' alt='' style={mapImgStyle} />
      )} */}
    </div>
  );
}
