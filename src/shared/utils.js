export function randInt(l, r) {  // return integer in range of [l, r)
  return l + Math.floor(Math.random() * (r - l));
}

export function sleep(ms) {
  return new Promise(res => {
    setTimeout(res, ms, true);
  });
}
