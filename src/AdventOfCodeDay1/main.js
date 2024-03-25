import fs from 'node:fs';

export function foo() {
  const file = fs.readFileSync('./file.txt', 'utf8');
  const arrayFile = file.split('\n');
  console.log(arrayFile);
  const alors = arrayFile
    .filter((line) => !!line)
    .map((line) => transformStringToNumber(line));
  console.log({ alors });
  const onlyLineDigit = arrayFile
    .filter((line) => !!line)
    .map((line) => transformStringToNumber(line))
    .filter((line) => line.length > 0)
    .map((line) => String(line[0]) + String(line[line.length - 1]))
    .reduce((acc, l) => acc + Number(l), 0);
  console.log(onlyLineDigit);
}

const stringNumber = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero',
};

function transformStringToNumber(s) {
  let all = [];
  const arrayString = s.split('');
  for (let i = 0; i < arrayString.length; i++) {
    if (!isNaN(arrayString[i])) {
      all.push(arrayString[i]);
      continue;
    }
    if (isNumberInString('1', s, i, all)) {
      continue;
    }
    if (isNumberInString('2', s, i, all)) {
      continue;
    }
    if (isNumberInString('3', s, i, all)) {
      continue;
    }
    if (isNumberInString('4', s, i, all)) {
      continue;
    }
    if (isNumberInString('5', s, i, all)) {
      continue;
    }
    if (isNumberInString('6', s, i, all)) {
      continue;
    }
    if (isNumberInString('7', s, i, all)) {
      continue;
    }
    if (isNumberInString('8', s, i, all)) {
      continue;
    }
    if (isNumberInString('9', s, i, all)) {
      continue;
    }
    if (isNumberInString('0', s, i, all)) {
      continue;
    }
  }
  return String(all[0]) + String(all[all.length - 1]);
}

function isNumberInString(number, arrayString, i, all) {
  if (arrayString.slice(i, i + stringNumber[number].length).match(stringNumber[number])) {
    all.push(number);
    return true;
  }
  return false;
}

foo();
