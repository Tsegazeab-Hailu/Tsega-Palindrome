// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    // FILL IN
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}
