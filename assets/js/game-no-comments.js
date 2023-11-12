"use strict";
alert(`Site hostname: ${location.hostname}
This is an alert! JavaScript is running! This Site will use this alert to simulate the game, also see console.`);
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// function to set name
const getPlayerName = function () {
  let playerName = localStorage.getItem("PlayerName");
  while (!playerName) {
    playerName = prompt("What is your robot's name?");
    if (playerName === null || playerName.trim() === "") {
      alert("Invalid entry. Please enter a name.");
    }
  }
  localStorage.setItem("PlayerName", playerName);
  console.log(`Your robot's name is ${playerName}`);
  return playerName;
};

const fightOrSkip = () => {
  let promptFight;
  do {
    promptFight = prompt('Would you like to FIGHT or SKIP this battle? Enter 1 for "FIGHT" or 2 for "SKIP".');
    if (!promptFight) {
      alert("You need to provide a valid answer! Please try again.");
    }
  } while (!promptFight);
  const choice = parseInt(promptFight);
  switch (choice) {
    case 1:
      return false;
    case 2:
      const confirmSkip = confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        alert(`${playerInfo.playerName} has decided to skip this fight. Goodbye!`);
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        return true;
      }
      break;
    default:
      alert("Invalid choice. Please enter 1 for FIGHT or 2 for SKIP.");
      break;
  }
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

const fight = (enemy) => {
  let isPlayerTurn = Math.random() > 0.5;

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
      if (fightOrSkip()) {
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
  player.reset();

  for (let i = 0; i < enemies.length; i++) {
    console.log(playerInfo);

    if (playerInfo.health > 0) {
      alert(`Welcome to Robot Gladiators! Round ${i + 1}`);
      const pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      console.log(pickedEnemyObj);
      fight(pickedEnemyObj);

      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        let storeConfirm = confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
          shop();
        }
      }
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
  highScore = highScore || 0;

  if (playerInfo.money > highScore) {
    localStorage.setItem("HighScore", playerInfo.money);
    localStorage.setItem("PlayerName", playerInfo.playerName);
    alert(`${playerInfo.playerName} now has the high score of ${playerInfo.money}!`);
  } else {
    alert(`${playerInfo.playerName} did not beat the high score of ${highScore}. Maybe next time!`);
  }

  let playAgainConfirm = confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame(playerInfo, enemyInfo);
  } else {
    alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

const shop = () => {
  let shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");
  shopOptionPrompt = parseInt(shopOptionPrompt);

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
        break;
      default:
        alert("You did not pick a valid option. Try again.");
        shop();
        break;
    }
  }
};



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
startGame(playerInfo, enemyInfo);
