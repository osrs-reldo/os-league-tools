import React from "react";
import { Card, Image } from "react-bootstrap";
import Map from '../resources/img/map-all.png';
import MapAsgarnia from '../resources/img/map-asgarnia.png';
import MapDesert from '../resources/img/map-desert.png';
import MapFremennik from '../resources/img/map-fremennik.png';
import MapKandarin from '../resources/img/map-kandarin.png';
import MapKaramja from '../resources/img/map-karamja.png';
import MapMisthalin from '../resources/img/map-misthalin.png';
import MapMorytania from '../resources/img/map-morytania.png';
import MapTirannwn from '../resources/img/map-tirannwn.png';
import MapWilderness from '../resources/img/map-wilderness.png';
import { isRegionUnlocked } from '../util/region-util';

const MAX_WIDTH = 1433;

export default function RegionMap({ unlockedRegions }) {
    const mapImgStyle = { zIndex: 2, position: 'absolute' };
    return (
        <Card bg='dark' style={{ maxWidth: MAX_WIDTH, border: '0px' }}>
            <Image fluid src={Map} alt='' style={{ ...mapImgStyle, position: 'relative', zIndex: 1 }} />
            <Image fluid src={MapMisthalin} alt='' style={mapImgStyle} />
            {isRegionUnlocked('asgarnia') && <Image fluid src={MapAsgarnia} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('desert') && <Image fluid src={MapDesert} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('fremennik') && <Image fluid src={MapFremennik} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('kandarin') && <Image fluid src={MapKandarin} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('karamja') && <Image fluid src={MapKaramja} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('morytania') && <Image fluid src={MapMorytania} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('tirannwn') && <Image fluid src={MapTirannwn} alt='' style={mapImgStyle} />}
            {isRegionUnlocked('wilderness') && <Image fluid src={MapWilderness} alt='' style={mapImgStyle} />}
        </Card>
    );
}