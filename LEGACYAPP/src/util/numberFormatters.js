const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function getTimeUnits(timestamp) {
  return {
    days: Math.floor(timestamp / DAY),
    hours: Math.floor((timestamp % DAY) / HOUR),
    minutes: Math.floor((timestamp % HOUR) / MINUTE),
    seconds: Math.floor((timestamp % MINUTE) / SECOND),
  };
}

export function durationAsCountdown(endDate, startDate = Date.now()) {
  const remainingTime = endDate - startDate;
  if (remainingTime < 0) {
    return null;
  }
  const { days, hours, minutes, seconds } = getTimeUnits(remainingTime);
  return `${days}d:${hours}h:${minutes}m:${seconds}s`;
}

export function durationAsRelativeTime(endDate, startDate = Date.now()) {
  if (!endDate) {
    return 'Never';
  }

  const timeDiff = Math.abs(endDate - startDate);
  const outputPrefix = endDate > startDate ? 'in ' : '';
  const outputSuffix = endDate > startDate ? '' : ' ago';
  const { days, hours, minutes, seconds } = getTimeUnits(timeDiff);
  if (days > 0) {
    return `${outputPrefix} ${days} day(s) ${outputSuffix}`;
  } else if (hours > 0) {
    return `${outputPrefix} ${hours} hour(s) ${outputSuffix}`;
  } else if (minutes > 0) {
    return `${outputPrefix} ${minutes} minute(s) ${outputSuffix}`;
  } else if (seconds > 0) {
    return `${outputPrefix} ${seconds} second(s) ${outputSuffix}`;
  }
  return 'Just now';
}
/**
 * Formats a number into a locale string
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @param {*} number
 * @param {*} options
 * @returns
 */
export function numberWithCommas(number, options) {
  return number.toLocaleString(undefined, { ...options });
}
