const dataNAV = [
    {
      name: 'B-INCOMESSF',
      nav: 10.0548,
    },
    {
      name: 'BM70SSF',
      nav: 9.9774,
    },
    {
      name: 'BEQSSF',
      nav: 11.247,
    },
    {
      name: 'B-FUTURESSF',
      nav: 11.443,
    },
];

const searchValue = (data) => {
    const input = process.argv[2];
    let fund = '';
    for(let i = 0;i < data.length;i++) {
        if(dataNAV[i].name === input) {
            fund = data[i].nav;
            break;
        } else {
            fund = "No data";
        }
    }
    return fund;
}
const answer = searchValue(dataNAV);
console.log(answer);