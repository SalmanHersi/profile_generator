const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function generateProfile() {
  console.log("Let's create your online profile!");

  const name = await askQuestion(
    "What's your name? Nicknames are also acceptable :) "
  );
  const activity = await askQuestion("What's an activity you like doing? ");
  const music = await askQuestion(`What do you listen to while ${activity}? `);
  const meal = await askQuestion(
    "Which meal is your favourite (e.g., dinner, brunch, etc.)? "
  );
  const favoriteFood = await askQuestion(
    `What's your favourite thing to eat for ${meal}? `
  );
  const sport = await askQuestion("Which sport is your absolute favourite? ");
  const superpower = await askQuestion(
    "What is your superpower? In a few words, tell us what you are amazing at! "
  );

  const profileDescription = `
Name: ${name}
Loves: Listening to ${music} while ${activity}
Favorite Meal: ${meal}
Favorite Food: ${favoriteFood}
Favorite Sport: ${sport}
Superpower: ${superpower}
  `;

  console.log(profileDescription);

  rl.close();
}

generateProfile();
