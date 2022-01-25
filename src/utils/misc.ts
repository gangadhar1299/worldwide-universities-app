export function abbreviate(sentence: string) {
  return sentence
    .split(" ")
    .map((word) => word[0])
    .join("");
}

export function getRandomColor() {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}
