module.exports = () => input => `more than ${timeAndUnits(input)} ago`;

function timeAndUnits(input) {
  const seconds = Math.floor((new Date().getTime() - input) / 1000),
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24),
        weeks = Math.floor(days / 7),
        months = Math.floor(days / 30),
        years = Math.floor(days / 365);

  if (years > 0) return `${years} years`;
  if (months > 0) return `${months} months`;
  if (weeks > 0) return `${weeks} weeks`;
  if (days > 0) return `${days} days`;
  if (hours > 0) return `${hours} hours`;
  if (minutes > 0) return `${minutes} minutes`;

  return `${seconds} seconds`;
}