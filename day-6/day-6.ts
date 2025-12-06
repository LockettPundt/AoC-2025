export const trashCompactor = (input: string[], rightToLeft = false) => {
  const homeworkSheet = input.map(row => row.trim().split(/\s+/g));
  const totalColumns = homeworkSheet[0].length;
  const rowsToCalculate = homeworkSheet.length - 1;
  const operatorRow = homeworkSheet[rowsToCalculate];

  let total = 0;
  for(let i = 0; i < totalColumns; i++) {
    const operator = operatorRow[i];
    const numbers: string[] = [];
    for (let j = 0; j < rowsToCalculate; j++) {
      numbers.push(homeworkSheet[j][i])
    }

    total += numbers.reduce((subTotal, numString) => {
      const num = Number(numString);
      if (operator === "*") {
        if (subTotal == 0) {
          subTotal++;
        }
        subTotal *= num;
      } else if (operator === "+") {
        subTotal += num;
      }
      return subTotal;
    }, 0)
  }

  return total;
}