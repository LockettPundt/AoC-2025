export const printingDepartment = (input: string[]) => {
  const paperRoll = "@";
  return input.reduce((paperTotal, gridRow, gridIndex, gridArray) => {
    return (paperTotal += gridRow
      .split("")
      .reduce((rowSum, current, rowIndex, rowArray) => {
        if (current === paperRoll) {
          const adjacentPositions = [
            ...((gridArray?.[gridIndex - 1] ?? "")
              .split("")
              .slice(rowIndex > 0 ? rowIndex - 1 : rowIndex, rowIndex + 2) ??
              []), // * above
            rowArray?.[rowIndex + 1], // * right
            rowArray?.[rowIndex - 1], // * left
            ...((gridArray?.[gridIndex + 1] ?? "")
              .split("")
              .slice(rowIndex > 0 ? rowIndex - 1 : rowIndex, rowIndex + 2) ??
              []), // * below
          ].filter((x) => x === paperRoll);

          if (adjacentPositions.length < 4) {
            rowSum += 1;
          }
        }
        return rowSum;
      }, 0));
  }, 0);
};
