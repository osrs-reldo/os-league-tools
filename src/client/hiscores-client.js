import {
    // deleteFromLocalStorage,
    getFromLocalStorage,
    SESSIONSTORAGE_KEYS,
    // updateLocalStorage,
} from '../util/legacy/browser-util';

// const HOSTNAME = 'https://os-league-tools-api.herokuapp.com';

// eslint-disable-next-line no-unused-vars
export async function getHiscores(rsn) {
    // const url = `${HOSTNAME}/hiscores/${rsn}`;
    // let hiscores;
    // await fetch(url)
    //     .then(res => res.json())
    //     .then(
    //         result => {
    //             if (result.status && result.status === 404) {
    //                 hiscores = {
    //                     success: false,
    //                     message: `Username "${rsn}" not found.`,
    //                 };
    //                 deleteFromLocalStorage(SESSIONSTORAGE_KEYS.HISCORES_CACHE, true);
    //             } else {
    //                 hiscores = {
    //                     success: true,
    //                     hiscores: result,
    //                 };
    //                 updateLocalStorage(SESSIONSTORAGE_KEYS.HISCORES_CACHE, result, () => {}, true);
    //             }
    //         },
    //         error => {
    //             console.warn(error);
    //             hiscores = {
    //                 success: false,
    //                 message: `Unable to retrieve hiscores, please try again later.`,
    //             };
    //             deleteFromLocalStorage(SESSIONSTORAGE_KEYS.HISCORES_CACHE, true);
    //         }
    //     );
    // return hiscores;
    return {
        success: false,
        message: `Hiscores functionality is currently unavailable due to website construction. Sorry for the inconvenience!`,
    };
}

export function getCachedHiscores() {
    return getFromLocalStorage(SESSIONSTORAGE_KEYS.HISCORES_CACHE, null, true);
}
