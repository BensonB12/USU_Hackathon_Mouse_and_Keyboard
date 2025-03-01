export const GenerateRandomLetter = () => {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Generates a random letter from a-z
};

export const GenerateId = () => {
  return "id" + Math.floor(Math.random() * 999999);
};
