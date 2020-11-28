import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { isRegionUnlocked } from '../util/region-util';

const MAX_WIDTH = 1433;

export default function RegionMap({ unlockedRegions }) {
    const mapImgStyle = { zIndex: 2, position: 'absolute' };
    return (
        <Card bg='dark' style={{ maxWidth: MAX_WIDTH, border: '0px' }}>
            <Image fluid src='/img/map-all.png' alt='' style={{ ...mapImgStyle, position: 'relative', zIndex: 1 }} />
            <Image fluid src='/img/map-misthalin.png' alt='' style={mapImgStyle} />
            <Image fluid src='/img/map-karamja.png' alt='' style={mapImgStyle} />
            {isRegionUnlocked('Asgarnia', unlockedRegions) && (
                <Image fluid src='/img/map-asgarnia.png' alt='' style={mapImgStyle} />
            )}
            {isRegionUnlocked('Desert', unlockedRegions) && (
                <Image fluid src='/img/map-desert.png' alt='' style={mapImgStyle} />
            )}
            {isRegionUnlocked('Fremennik', unlockedRegions) && (
                <Image fluid src='/img/map-fremennik.png' alt='' style={mapImgStyle} />
            )}
            {isRegionUnlocked('Kandarin', unlockedRegions) && (
                <Image fluid src='/img/map-kandarin.png' alt='' style={mapImgStyle} />
            )}
            {isRegionUnlocked('Morytania', unlockedRegions) && (
                <Image fluid src='/img/map-morytania.png' alt='' style={mapImgStyle} />
            )}
            {isRegionUnlocked('Tirannwn', unlockedRegions) && (
                <Image fluid src='/img/map-tirannwn.png' alt='' style={mapImgStyle} />
            )}
            {isRegionUnlocked('Wilderness', unlockedRegions) && (
                <Image fluid src='/img/map-wilderness.png' alt='' style={mapImgStyle} />
            )}
        </Card>
    );
}
