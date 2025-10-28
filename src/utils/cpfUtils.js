export function generateCPF() {
  const cpfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // for (let i = 0; i < 9; i++) {
  //   cpfArray.push(Math.floor(Math.random() * 10));
  // }

  let count = 10;

  cpfArray.forEach((number, index) => {
    cpfArray[index] = number * count;

    count--;
  })

  const CPFSum = cpfArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const firstCheckDigit = CPFSum % 11;

  if (firstCheckDigit < 2) {
    cpfArray.push(0)
  } else {
    cpfArray.push(11 - firstCheckDigit);
  }

  console.log("cpfArray =>", cpfArray);
}