// complete the given function
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the cleaned string is the same forward and backward
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

function checkPalindrome() {
  const input = document.getElementById('stringInput').value;
  const resultDiv = document.getElementById('result');

  if (input.trim() === '') {
    resultDiv.textContent = 'Please enter a valid string.';
    resultDiv.style.color = 'red';
    return;
  }

  const isPalin = isPalindrome(input);
  if (isPalin) {
    resultDiv.textContent = `"${input}" is a palindrome.`;
    resultDiv.style.color = 'green';
  } else {
    resultDiv.textContent = `"${input}" is not a palindrome.`;
    resultDiv.style.color = 'red';
  }
}

