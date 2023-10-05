<script>
        const words = ['JAVASCRIPT', 'HTML', 'CSS', 'PYTHON', 'REACT', 'NODEJS'];
        let chosenWord = words[Math.floor(Math.random() * words.length)]; // Uses the random index obtained to select a random element from the "words" array. 
        let guessedLetters = [];
        let attempts = 5;

        function displayWord() {
          let display = '';
          for (let i = 0; i < chosenWord.length; i++) {
            if (guessedLetters.includes(chosenWord[i])) {
              display += chosenWord[i]; // If the character is in guessedLetters, append that character to the display string.
            } else {
              display += '_'; // If not, append an underscore (_).
            }
            display += ' '; // After processing each character in the chosenWord, append a space to separate the characters in the display.
          }
          document.getElementById('word-display').textContent = display; //This sets the displayed content in the HTML to the formatted word with guessed letters and underscores, thus rendering to the user.
        }

        function guessLetter() {
          const guessInput = document.getElementById('guess-input'); // Get the guessed letter input
          const guess = guessInput.value.toUpperCase(); // convert guessed letter to uppercase

          if (guessedLetters.includes(guess)) { //Check if the letter has already been guessed
            document.getElementById('message').textContent = 'You already guessed that letter!';
            return;
          }

          guessedLetters.push(guess); // If the letter is not a repeat guess, add the guess to the guessedLetters array
          guessInput.value = ''; // and clears the input field.

          if (!chosenWord.includes(guess)) {
            attempts--; // if the guessed letter is not part of the chosen word, decrement the attempts counter.
          }

          document.getElementById('attempt-count').textContent = attempts; // update the attempt count display in the HTML with the current attempts left.

          if (attempts === 0) { // check if the attempts have reached zero. If so, display a message that the game is over, showing the correct word
            document.getElementById('message').textContent = 'Oops! Game over! The word was: ' + chosenWord;
            document.getElementById('guess-input').disabled = true; // disable further input
          } else {
            displayWord(); // If the attempts are not zero, call a function displayWord() to update the displayed word

            if (!document.getElementById('word-display').textContent.includes('_')) { //  if the word has been fully guessed
              document.getElementById('message').textContent = 'Wow, you guessed the right word!'; // display a victory message
              document.getElementById('guess-input').disabled = true; // disable further input
            }
          }
        }

        displayWord();

    </script>
