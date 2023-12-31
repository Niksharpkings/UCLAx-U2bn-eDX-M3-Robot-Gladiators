"use strict";
alert(`Site hostname: ${location.hostname}
This is an alert! JavaScript is running! This Site will use this alert to simulate the game, also see console.`);
// function to generate a random numeric value
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// function to set name
const getPlayerName = function () {
  // Check if player name is already stored in local storage
  let playerName = localStorage.getItem("PlayerName");
  // If not present or blank, prompt the user for a name
  while (!playerName) {
    playerName = prompt("What is your robot's name?");
    // If the user pressed Cancel or closed the prompt without entering a name
    if (playerName === null || playerName.trim() === "") {
      alert("Invalid entry. Please enter a name.");
    }
  }
  // Store the entered name in local storage
  localStorage.setItem("PlayerName", playerName);
  console.log(`Your robot's name is ${playerName}`);
  return playerName;
};

const fightOrSkip = () => {
  let promptFight;
  // Use a switch statement for user choice
  do {
    promptFight = prompt('Would you like to FIGHT or SKIP this battle? Enter 1 for "FIGHT" or 2 for "SKIP".');
    if (!promptFight) {
      alert("You need to provide a valid answer! Please try again.");
    }
  } while (!promptFight);
  // Convert user input to a number
  const choice = parseInt(promptFight);
  switch (choice) {
    case 1:
      // User chose to fight
      return false;
    case 2:
      // User chose to skip
      const confirmSkip = confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        alert(`${playerInfo.playerName} has decided to skip this fight. Goodbye!`);
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        return true;
      }
      // If user cancels skipping, go back to asking to fight or skip
      break;
    default:
      alert("Invalid choice. Please enter 1 for FIGHT or 2 for SKIP.");
      // If the choice is not 1 or 2, go back to asking to fight or skip
      break;
  }
  // If none of the valid options were chosen, repeat the loop
  return fightOrSkip();
};

const performPlayerAttack = (player, enemy) => {
  const damage = randomNumber(player.attack - 3, player.attack);
  enemy.health = Math.max(0, enemy.health - damage);
  console.log(`%c${player.playerName} attacked ${enemy.enemyName}. ${enemy.enemyName} now has ${enemy.health} health remaining.`, "color: yellow; font-style: italic; background-color: blue;padding: 2px");
};

const performEnemyAttack = (enemy) => {
  const damage = randomNumber(enemy.attack - 3, enemy.attack);
  playerInfo.health = Math.max(0, playerInfo.health - damage);
  console.log(`%c${enemy.enemyName} attacked ${playerInfo.playerName}. ${playerInfo.playerName} now has ${playerInfo.health} health remaining.`, "color: yellow; font-style: italic; background-color: blue;padding: 2px");
};

const checkBattleOutcome = (enemy) => {
  if (enemy && enemy.health <= 0) {
    alert(`${enemy.enemyName} has died!`);
    playerInfo.money += 20;
  } else {
    alert(`${enemy.enemyName} still has ${enemy.health} health left.`);
  }
};
// fight function (now with parameter for enemy's object holding name, health, and attack values)
const fight = (enemy) => {
  // keep track of who goes first
  let isPlayerTurn = Math.random() > 0.5;
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
      performPlayerAttack(playerInfo, enemy);
      checkBattleOutcome(enemy);
    } else {
      performEnemyAttack(enemy);
      if (playerInfo.health <= 0) {
        alert(`${playerInfo.playerName} has died!`);
        break;
      } else {
        alert(`${playerInfo.playerName} still has ${playerInfo.health} health left.`);
      }
    }
    isPlayerTurn = !isPlayerTurn;
  }
};


const startGame = (player, enemies) => {
  // reset player stats
  player.reset();
  // fight each enemy-robot by looping over them and fighting them one at a time
  for (let i = 0; i < enemyInfo.length; i++) {
    console.log(playerInfo);
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      alert(`Welcome to Robot Gladiators! Round ${i + 1}`);
      //debugger;
      // pick new enemy to fight based on the index of the enemyNames array
      const pickedEnemyObj = enemyInfo[i];
      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      console.log(pickedEnemyObj);
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
      // pass the playerInfo.money variable's value into the fight function, where it will assume the value of the enemy.enemyName parameter
      fight(pickedEnemyObj);
      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        let storeConfirm = confirm("The fight is over, visit the store before the next round?");
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
      // if player isn't alive, stop the game
    } else {
      alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  endGame(playerInfo);
};

const endGame = (player) => {
  alert("The game has now ended. Let's see how you did!");
  let highScore = localStorage.getItem("HighScore");
  //short circuit conditional statement
  highScore = highScore || 0;
  //if player has more money than the high score, player has new high score!
  if (playerInfo.money > highScore) {
    localStorage.setItem("HighScore", playerInfo.money);
    localStorage.setItem("PlayerName", playerInfo.playerName);
    alert(`${playerInfo.playerName} now has the high score of ${playerInfo.money}!`);
  } else {
    alert(`${playerInfo.playerName} did not beat the high score of ${highScore}. Maybe next time!`);
  }
  // if player is still alive, player wins!
  // if (playerInfo.health > 0) {
  //   window.alert(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
  // } else {
  //   window.alert("You've lost your robot in battle.");
  // }
  // ask player if they'd like to play again
  let playAgainConfirm = confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame(playerInfo, enemyInfo);
  } else {
    alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

const shop = () => {
  // ask player what they'd like to do
  let shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // use switch to carry out action
  //debugger;
  if (isNaN(shopOptionPrompt) || shopOptionPrompt < 1 || shopOptionPrompt > 3) {
    alert("Please enter a valid number between 1 and 3. Try again.");
    shop();
  } else {
    switch (shopOptionPrompt) {
      case 1:
        playerInfo.refillHealth();
        break;
      case 2:
        playerInfo.upgradeAttack();
        break;
      case 3:
        alert("Leaving the store.");
        // do nothing, so function will end
        break;
      default:
        alert("You did not pick a valid option. Try again.");
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
  }
};

/* GAME INFORMATION / VARIABLES */

// player information
const playerInfo = {
  playerName: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth() {
    if (this.money >= 7) {
      alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      alert("You don't have enough money!");
    }
  },
  upgradeAttack() {
    if (this.money >= 7) {
      alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      alert("You don't have enough money!");
    }
  }
};

// enemy information
let enemyInfo = [
  {
    enemyName: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    enemyName: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    enemyName: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

console.group("First group");
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].enemyName);
console.log(enemyInfo[0]['attack']);
console.groupEnd();
/* END GAME INFORMATION / VARIABLES */

/* RUN GAME */
startGame(playerInfo, enemyInfo);
