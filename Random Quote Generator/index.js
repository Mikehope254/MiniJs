const quotes = [
  "I'm not arguing, I'm just explaining why I'm right.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  while (true) {
    const randomIndex = Math.ceil(Math.random() * quotes.length);

    if (usedIndexes.has(randomIndex)) {
      continue;
    }

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
  }
}
