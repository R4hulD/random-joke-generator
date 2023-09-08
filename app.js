// // Array of jokes
// const jokes = [
//   "Why don't scientists trust atoms? Because they make up everything!",
//   "Parallel lines have so much in common. It’s a shame they’ll never meet.",
//   "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  
//   // Add more jokes here
// ];

// // Function to generate a random joke
// function getRandomJoke() {
//   const randomIndex = Math.floor(Math.random() * jokes.length);
//   return jokes[randomIndex];
// }

// // Event listener for clicking the dice icon
// const diceIcon = document.querySelector('.dice-img');
// diceIcon.addEventListener('click', () => {
//   const quoteElement = document.querySelector('.jokes');
//   quoteElement.textContent = getRandomJoke();
// });


// Function to fetch a random joke from the JokeAPI
async function fetchRandomJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();

    if (data.type === 'single') {
      return data.joke;
    } else if (data.type === 'twopart') {
      return `${data.setup} ${data.delivery}`;
    } else {
      return 'Failed to fetch a joke. Please try again later.';
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
    return 'Failed to fetch a joke. Please try again later.';
  }
}

// Event listener for clicking the dice icon
const diceIcon = document.querySelector('.dice-img');
diceIcon.addEventListener('click', async () => {
  const randomJokeElement = document.querySelector('.jokes');
  const joke = await fetchRandomJoke();
  randomJokeElement.textContent = joke;
});


