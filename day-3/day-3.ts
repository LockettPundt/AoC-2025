export const lobby = (batteryBanks: string[]) => {
  return batteryBanks.reduce((sum, bank) => {
    let tens = 0;
    let ones = 0;
    for (let i = 0; i < bank.length; i++) {
      const batteryNumber = Number(bank[i]);
      if (batteryNumber > tens && i < bank.length - 1) {
        tens = batteryNumber;
        ones = 0;
      } else if (batteryNumber > ones) {
        ones = batteryNumber;
      }
    }
    return (sum += Number(String(tens) + String(ones)));
  }, 0);
};
