const quotes = [
  "I'm not arguing, I'm just explaining why I'm right.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "I used to think I was indecisive, but now I'm not too sure.",
  "Common sense is like deodorant. The people who need it most never use it.",
  "I’m on a seafood diet. I see food and I eat it.",
  "My therapist says I have a preoccupation with vengeance. We'll see about that.",
  "Behind every great man is a woman rolling her eyes.",
  "I can't believe I forgot to go to the gym today. That's seven years in a row now.",
  "If at first you don't succeed, then skydiving definitely isn't for you.",
  "I'm writing a book. I've got the page numbers done",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIndex)) continue;

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
  }
}
