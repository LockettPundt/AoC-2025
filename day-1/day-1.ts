export const secretEntrance = (
  input: string[],
  countAllRevolutions = false
) => {
  return input.reduce(
    (result, current) => {
      const [direction, ...numbers] = current.split("");
      const clicks = Number(numbers.join(""));
      const number = clicks % 100;
      const totalRevolutions = Math.floor(clicks / 100);

      let newLocation;
      if (direction === "L") {
        newLocation = result.currentPoint - number;

        if (newLocation === 0) {
          result.currentPoint = 0;
          result.zeroHits += 1;
        } else if (newLocation < 0) {
          if (countAllRevolutions && result.currentPoint !== 0) {
            result.zeroHits += 1;
          }
          result.currentPoint = 100 - Math.abs(newLocation);
        } else {
          result.currentPoint = newLocation;
        }
      } else {
        newLocation = result.currentPoint + number;

        if (newLocation >= 100) {
          result.currentPoint = newLocation - 100;
          if (countAllRevolutions) {
            result.zeroHits += 1;
          } else if (result.currentPoint === 0) {
            result.zeroHits += 1;
          }
        } else {
          result.currentPoint = newLocation;
        }
      }

      if (countAllRevolutions) {
        result.zeroHits += totalRevolutions;
      }

      return result;
    },
    {
      zeroHits: 0,
      currentPoint: 50,
    }
  ).zeroHits;
};
