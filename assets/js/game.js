window.alert("This is an alert! JavaScript is running! This Site will use this alert to simulate the game, also see console.");
// this creates a function named "fight"

let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
const playerAttack = 10;
let playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
const enemyAttack = 12;

console.log(enemyNames, enemyHealth, enemyAttack);

for (let i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(`${enemyNames[i]} is at ${i} index`);
};


const fight = (enemyName) => {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    const promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      const confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        // subtract money from playerMoney for skipping
        playerMoney -= 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth -= playerAttack;
    console.log(
      `${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died!`);

      // award player money for winning
      playerMoney += 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth -= enemyAttack;
    console.log(
      `${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(`${playerName} has died!`);
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(`${playerName} still has ${playerHealth} health left.`);
    }
  }
}; // end of fight function

const startGame = function () {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  // fight each enemy-robot by looping over them and fighting them one at a time
  for (let i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert(`Welcome to Robot Gladiators! Round ${i + 1}`);

      // pick new enemy to fight based on the index of the enemyNames array
      let pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  endGame();
}

const endGame = function () {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert(`Great job, you've survived the game! You now have a score of ${playerMoney}.`);
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  let playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();