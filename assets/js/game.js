window.alert(`Site hostname: ${location.hostname}
This is an alert! JavaScript is running! This Site will use this alert to simulate the game, also see console.`);
// function to generate a random numeric value
let randomNumber = function (min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

let fightOrSkip = function () {
  // ask player if they'd like to fight or run
  let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  // Conditional Recursive Function Call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  promptFight = promptFight.toLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    const confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(`${playerInfo.playerName} has decided to skip this fight. Goodbye!`);
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      return true;
      //console.log("playerInfo.money", playerInfo.money)
      //shop();
    }
  }
  return false;
}

// fight function (now with parameter for enemy's object holding name, health, and attack values)
const fight = (enemy) => {
 
  // keep track of who goes first
  let isPlayerTurn = true;
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      // ask player if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
      // generate random damage value based on player's attack power
      let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(`%c${playerInfo.playerName} attacked${enemy.enemyName}. ${enemy.enemyName} now has ${enemy.health} health remaining.`, "color: yellow; font-style: italic; background-color: blue;padding: 2px");
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(`${enemy.enemyName} has died!`);
        // award player money for winning
        playerInfo.money += 20;
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(`${enemy.enemyName} still has ${enemy.health} health left.`);
      }
    } else {
      let damage = randomNumber(enemy.attack - 3, enemy.attack);
      // remove players's health by subtracting the amount set in the enemy.attack variable
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(`%c${enemy.enemyName} attacked ${playerInfo.playerName}. ${playerInfo.playerName} now has ${playerInfo.health} health remaining.`, "color: yellow; font-style: italic; background-color: blue;padding: 2px");
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(`${playerInfo.playerName} has died!`);
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(`${playerInfo.playerName} still has ${playerInfo.health} health left.`);
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
}; // end of fight function

const startGame = function () {
  // reset player stats
  playerInfo.reset();

  // fight each enemy-robot by looping over them and fighting them one at a time
  for (let i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert(`Welcome to Robot Gladiators! Round ${i + 1}`);
      //debugger;
      // pick new enemy to fight based on the index of the enemyNames array
      let pickedEnemyObj = enemyInfo[i];
      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;
      // pass the playerInfo.money variable's value into the fight function, where it will assume the value of the enemy.enemyName parameter
      fight(pickedEnemyObj);
      // if we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        let storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
      // if player isn't alive, stop the game
    } else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }
  endGame();
}

const endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(`Great job, you've survived the game! You now have a score of ${playerInfo.money}.`);
  } else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  let playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

const shop = function () {
  // ask player what they'd like to do
  let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // use switch to carry out action
  //debugger;
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

/* GAME INFORMATION / VARIABLES */
// function to set name
let getPlayerName = function () {
  //to guarantee entering the loop at least once to prompt the player for the player-robot name
  let playerName = "";
  //condition that checks if playerName is blank or null
  while (playerName === "" || playerName === null) {
    playerName = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + playerName);
  return playerName;
};
// player information
let playerInfo = {
  playerName: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
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
startGame();
