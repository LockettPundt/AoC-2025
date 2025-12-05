export const cafeteria = (input: string[], findAllRangeIds = false) => {
  const [ranges, numbers] = input.map((item) => item.split(/\n/g));
  const numberIsInRange = (numberString: string) =>
    ranges.find((range) => {
      const [low, high] = range.split("-").map(Number);
      const number = Number(numberString);
      if (number >= low && number <= high) {
        return true;
      } else {
        return false;
      }
    });
  return numbers.reduce((sum, numberString) => {
    if (numberIsInRange(numberString)) {
      sum += 1;
    }
    return sum;
  }, 0);
};
