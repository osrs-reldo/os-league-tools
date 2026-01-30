const BASE_URL = process.env.REACT_APP_RELDO_URL || 'http://localhost:8080';

export default async function getHiscores(rsn, handleResultCallback) {
  if (!rsn) {
    handleResultCallback({
      success: false,
      message: 'No username provided',
    });
  }

  const url = `${BASE_URL}/hiscores/${rsn}`;
  await fetch(url)
    .then(res => res.json())
    .then(
      result => {
        let hiscores;
        if (result?.status === 404) {
          hiscores = {
            success: false,
            message: `Username "${rsn}" not found.`,
          };
        } else if (!result || result.error) {
          console.warn(result.error);
          hiscores = {
            success: false,
            message: 'Unable to retrieve hiscores, please try again later.',
          };
        } else {
          hiscores = {
            success: true,
            hiscores: result,
          };
        }
        handleResultCallback(hiscores);
      },
      error => {
        console.warn(error);
        handleResultCallback({
          success: false,
          message: 'Unable to retrieve hiscores, please try again later.',
        });
      }
    );
}
