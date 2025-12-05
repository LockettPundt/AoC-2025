export const cafeteria = (input: string[], findAllRangeIds = false) => {
  const [rangeStrings, numbers] = input.map((item) => item.split(/\n/g));
  const ranges = rangeStrings.map((rangeString) =>
    rangeString.split("-").map(Number)
  );

  const numberIsInRange = (
    number: number,
    ranges: number[][]
  ): { range?: number[]; rangeIndex: number } => {
    let rangeIndex = 0;
    const range = ranges.find((range, index) => {
      const [low, high] = range;
      // Check if number is in range (not adjacent, just overlapping)
      if (number >= low && number <= high) {
        rangeIndex = index;
        return true;
      } else {
        return false;
      }
    });
    return {
      range,
      rangeIndex,
    };
  };

  if (findAllRangeIds) {
    const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);
    let mergedRanges: number[][] = [];
    
    for (const [low, high] of sortedRanges) {
      if (mergedRanges.length === 0) {
        mergedRanges.push([low, high]);
      } else {
        const lastRange = mergedRanges[mergedRanges.length - 1];
        const [, lastHigh] = lastRange;

        if (low <= lastHigh) {
          lastRange[1] = Math.max(lastHigh, high);
        } else {
          mergedRanges.push([low, high]);
        }
      }
    }
    
    const total = mergedRanges.reduce((sum, [low, high]) => {
      return sum += (high - low) + 1;
    }, 0);

    return total;
  } else {
    return numbers.reduce((sum, numberString) => {
      if (numberIsInRange(Number(numberString), ranges).range) {
        sum += 1;
      }
      return sum;
    }, 0);
  }
};
