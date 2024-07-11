document.getElementById('textInput').addEventListener('input', () => {
    const text = document.getElementById('textInput').value;
  
    if (text.trim() === "") {
        document.getElementById('wordCount').textContent = `Words: 0`;
        document.getElementById('sentenceCount').textContent = `Sentences: 0`;
        document.getElementById('characterCount').textContent = `Characters (excluding spaces): 0`;
        document.getElementById('characterIncludingSpacesCount').textContent = `Characters (including spaces): 0`;
        document.getElementById('uniqueWordCount').textContent = `Unique words: 0`;
        return;
    }
  
    const wordCount = countWords(text);
    const sentenceCount = countSentences(text);
    const characterCount = countCharacters(text);
    const characterIncludingSpacesCount = countCharactersIncludingSpaces(text);
    const uniqueWordCount = countUniqueWords(text);
  
    document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
    document.getElementById('sentenceCount').textContent = `Sentences: ${sentenceCount}`;
    document.getElementById('characterCount').textContent = `Characters (excluding spaces): ${characterCount}`;
    document.getElementById('characterIncludingSpacesCount').textContent = `Characters (including spaces): ${characterIncludingSpacesCount}`;
    document.getElementById('uniqueWordCount').textContent = `Unique words: ${uniqueWordCount}`;
  });
  
  function countWords(text) {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  }
  
  function countSentences(text) {
    const sentences = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0);
    return sentences.length;
  }
  
  function countCharacters(text) {
    return text.replace(/\s+/g, '').length;
  }
  
  function countCharactersIncludingSpaces(text) {
    return text.length;
  }
  
  function countUniqueWords(text) {
    const words = text.split(/\s+/).map(word => word.toLowerCase().replace(/[^\w\s]/g, ''));
    const uniqueWords = new Set(words.filter(word => word.length > 0));
    return uniqueWords.size;
  }
  