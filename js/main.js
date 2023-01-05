function getRandomIntegerNumber(from, to) {
  if (from < 0 || to < 0) {
    return undefined;
  }

  if (from > to) {
    [from, to] = [to, from];
  }

  if (from === to) {
    return from;
  }

  from = Math.ceil(from);
  to = Math.ceil(to);

  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getRandomFloatNumber(from, to, digits) {
  if (from < 0 || to < 0) {
    return undefined;
  }

  if (from > to) {
    [from, to] = [to, from];
  }

  if (from === to) {
    return from;
  }

  const result = Math.random() * (to - from) + from;

  return result.toFixed(digits);
}

getRandomIntegerNumber(1, 10);
getRandomFloatNumber(0.1, 0.4, 3);
