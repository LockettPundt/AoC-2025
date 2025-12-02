export const giftShop = (input: string[], matchAll = false): number => {
  let result = 0;

  for (const range of input) {
    const [start, end] = range.split("-").map(Number);
    for (let i = start; i <= end; i ++) {
      const numberString = String(i);
      if (matchAll) {
        const match = numberString.match(/^(.+)\1+$/);
        if (match) {
          result += i;
        }
      } else {
        const middleIndex = Math.floor(numberString.length / 2);
        const firstHalf = numberString.substring(0, middleIndex);
        const lastHalf = numberString.substring(middleIndex);
        if (firstHalf === lastHalf) {
          result += i;
        }
      }
    }
  }
  return result;
}