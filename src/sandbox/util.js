const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// eslint-disable-next-line import/prefer-default-export
export function countdown(endDate, startDate = new Date()) {
    const remainingTime = endDate - startDate;
    if (remainingTime < 0) {
        return null;
    }
    const days = Math.floor(remainingTime / DAY);
    const hours = Math.floor((remainingTime % DAY) / HOUR);
    const minutes = Math.floor((remainingTime % HOUR) / MINUTE);
    const seconds = Math.floor((remainingTime % MINUTE) / SECOND);
    return `${days}d:${hours}h:${minutes}m:${seconds}s`;
}
