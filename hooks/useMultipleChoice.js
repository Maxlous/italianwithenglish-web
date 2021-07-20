export const useMultipleChoice = (data) => {
  const randomIntWord = function () {
    return Math.floor(Math.random() * data.length);
  };

  let correctWord = randomIntWord();

  const wordA = () => {
    let num = randomIntWord();
    while (num === correctWord) {
      num = randomIntWord();
    }
    return num;
  };

  let w1 = wordA();

  const wordB = () => {
    let num = randomIntWord();
    while (num === correctWord || num === w1) {
      num = randomIntWord();
    }
    return num;
  };

  let w2 = wordB();

  const wordC = () => {
    let num = randomIntWord();
    while (num === correctWord || num === w1 || num === w2) {
      num = randomIntWord();
    }
    return num;
  };

  let w3 = wordC();

  const wordD = () => {
    let num = randomIntWord();
    while (num === correctWord || num === w1 || num === w2 || num === w3) {
      num = randomIntWord();
    }
    return num;
  };

  let w4 = wordD();

  const randomPlaceArrForWords = [correctWord, w1, w2, w3, w4];

  const getRandomPlaceForWords = function () {
    return Math.floor(Math.random() * randomPlaceArrForWords.length);
  };

  const place1W = () => {
    return getRandomPlaceForWords();
  };

  let place1word = place1W();

  const place2W = () => {
    let num = getRandomPlaceForWords();
    while (num === place1word) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place2word = place2W();

  const place3W = () => {
    let num = getRandomPlaceForWords();
    while (num === place1word || num === place2word) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place3word = place3W();

  const place4W = () => {
    let num = getRandomPlaceForWords();
    while (num === place1word || num === place2word || num === place3word) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place4word = place4W();

  const place5W = () => {
    let num = getRandomPlaceForWords();
    while (
      num === place1word ||
      num === place2word ||
      num === place3word ||
      num === place4word
    ) {
      num = getRandomPlaceForWords();
    }
    return num;
  };

  let place5word = place5W();

  const question = data[correctWord].italian;

  const firstOption = data[randomPlaceArrForWords[place1word]].english;

  const secondOption = data[randomPlaceArrForWords[place2word]].english;

  const thirdOption = data[randomPlaceArrForWords[place3word]].english;

  const fourthOption = data[randomPlaceArrForWords[place4word]].english;

  const fifthOption = data[randomPlaceArrForWords[place5word]].english;

  return {
    question,
    firstOption,
    secondOption,
    thirdOption,
    fourthOption,
    fifthOption,
  };
};
