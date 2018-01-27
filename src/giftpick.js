// start with a list of members of the family.

// Dad side
const dadSideNames = ['Adam',
  'Jon',
  'Jaelyn',
  'Lauren',
  'Teri',
  'Bob',
  'Chris',
  'Isa',
  'Karen',
  'Tim',
  'Kim',
  'Bill',
  'Laura',
  'Matthew',
  'Kirk',
  'LoriAnn',
  'Rachel',
  'Sarah',
  'Travis',
  'Steve',
  'Anthony',
  'Nicole',
  'Michael',
  'Betty',
  'Gina',
  'Ryan',
  ];
//
const momSideNames = ['Adam',
  'Jon',
  'Jaelyn',
  'Lauren',
  'Mercedes',
  'Hugh',
  'Kristy',
  'Chris',
  'Michael',
  'Samantha',
  ];

const randomizeNames = (listOfNames) => {

  let randomListOfNames = [];

  while (listOfNames.length > 0) {

    let nameIndex = Math.floor(Math.random()*listOfNames.length);
    randomListOfNames.push(listOfNames[nameIndex]);
    listOfNames.splice(nameIndex,1);

  }

  return randomListOfNames;
}

function print(variableName,text) {
  console.log(`${variableName} value is: ${text}`);
};

function printBreak() {
  console.log('********************************');

}

const printBuyersAndReceivers = randomizedListOfNames => {

    for (let dyadIndex = 0; dyadIndex < randomizedListOfNames.length -1; dyadIndex++) {

      console.log(randomizedListOfNames[dyadIndex] + " buys for " + randomizedListOfNames[dyadIndex+1]);
        //console.log(pairs[pairsIndex][0] + " buys for " + pairs[pairsIndex][1]);
    }
    console.log(randomizedListOfNames[randomizedListOfNames.length-1] + " buys for " + randomizedListOfNames[0]);
};

let momFinal = randomizeNames(momSideNames);
let dadFinal = randomizeNames(dadSideNames);

printBreak();
printBuyersAndReceivers(momFinal);
printBreak();
printBuyersAndReceivers(dadFinal);
printBreak();
