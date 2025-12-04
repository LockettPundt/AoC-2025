export const printingDepartment = (
  input: string[][],
  partTwo: {
    removePaperRolls: boolean;
    total: number;
  } = {
    removePaperRolls: false,
    total: 0,
  }
) => {
  const paperRoll = "@";
  let paperTotal = 0;
  const { removePaperRolls, total } = partTwo;

  let grid = input;

  for (let gridIndex = 0; gridIndex < grid.length; gridIndex++) {
    let rowSum = 0;
    let gridRow = grid[gridIndex];

    for (let rowIndex = 0; rowIndex < gridRow.length; rowIndex++) {
      const current = gridRow[rowIndex];
      if (current === paperRoll) {
        const adjacentPositions = [
          ...((grid?.[gridIndex - 1] ?? []).slice(
            rowIndex > 0 ? rowIndex - 1 : rowIndex,
            rowIndex + 2
          ) ?? []), // * above
          gridRow?.[rowIndex + 1] ?? "out of bounds right", // * right
          gridRow?.[rowIndex - 1] ?? "out of bounds left", // * left
          ...((grid?.[gridIndex + 1] ?? []).slice(
            rowIndex > 0 ? rowIndex - 1 : rowIndex,
            rowIndex + 2
          ) ?? []), // * below
        ].filter((x) => x === paperRoll);

        if (adjacentPositions.length < 4) {
          rowSum += 1;
          if (removePaperRolls) {
            grid[gridIndex].splice(rowIndex, 1, "x");
          }
        }
      }
    }
    paperTotal += rowSum;
  }

  if (removePaperRolls) {
    if (paperTotal === 0) {
      return total;
    } else {
      return printingDepartment(grid, {
        removePaperRolls: true,
        total: paperTotal + total,
      });
    }
  }

  return paperTotal;
};
