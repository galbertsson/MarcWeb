export const letterCase = (text: string) => {
  let isAfterSpace = true;
  let newString = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' || text[i] === '_') {
      isAfterSpace = true;
      newString += ' ';
    } else if (text[i] === text[i].toLocaleUpperCase()) {
      newString += ' ';
      newString += text[i];
      isAfterSpace = false;
    } else {
      newString += isAfterSpace ? text[i].toUpperCase() : text[i].toLowerCase();
      isAfterSpace = false;
    }
  }
  return newString;
};
