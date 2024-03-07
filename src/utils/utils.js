export const objectFunctionRunner = async (obj, params) => {
  const objKeys = Object.keys(obj);

  for (let index = 0; index < objKeys.length; index += 1) {
    const rule = objKeys[index];

    if (typeof obj[rule] === 'function') {
      await obj[rule](params);
    }
  }
};
export const turkishToUpper = string => {
  let letters = {İ: 'i', I: 'ı', Ş: 'ş', Ğ: 'ğ', Ü: 'ü', Ö: 'ö', Ç: 'ç'};
  string = string.replace(/(([İIŞĞÜÇÖ]))/g, function (letter) {
    return letters[letter];
  });
  return string.toUpperCase();
};
