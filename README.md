### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Ultimate Tic Tac Toe
![alt text](https://github.com/bababumBab/project-1/blob/master/images/Screenshot%202020-05-16%20at%2020.58.58.png
'Ultimate Tic Tac Toe')
## Overview
Ultimate Tic Tac Toe game is my first front-end development project, produced as part of General Assembly's Immersive Software Engineering Bootcamp - February-April 2020.

My goal of the project was to create a grid-based game rendered in the browser that is utilising 'vanilla' JavaScript, HTML and CSS.

Given a selection of classic arcade games to choose from, I opted to build my take on _Ultimate Tic Tac Toe_. 

Initially I wanted to build my own version similar to Tic Tac Toe, inspired by childhood games where you were supposed to click on each margin of a square. Once you had built the square you could have claimed it. After initial talks with the instructors we decided that this game had a dificulty that wasn't realistic to tackle in a week. 

Ultimate Tic Tac Toe being a simple game I had to keep it simple creating an effect of multi tiles with the help of free images taken from unsplash.com.

I wanted in this project to make sure that all the initial knowledge gathered in the first 4 weeks of the Bootcamp are put into review once again, to be sure I have a strong foundation to carry on further more difficult topics. 


You can play the game [here](https://bababumbab.github.io/project-1/) 



## The Brief 

- **Render a game in the browser**
- **Design logic for winning & visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)


## The Technologies used 

- HTML5
- CSS3
- JavaScript (ES6)
- Git and GitHub
- Google Fonts
- Trello for managing the project


## The Approach
  My approach was to deconstruct the principles applied in the Tic Tac Toe game and scale the game to a Ultimate Tic Tac Toe that uses 9 small games of 3 X 3 cells.

### The Grid

The game is built using 9 grids individual gridas that hava as childred a 3 x 3. a grid. The layout has been created using div's inside the html. Calling each cell is done in JavaScript.

```html
 <div class="largeBoard" id="largeBoard">
    
      <section class="largeTile">
        <!-- Large tile 1.1  -->
        <div class="largeTile" id='tile-1'>
          <div class="smallBoard">
            <div id="cell-1-1" class="box" data-cell></div>
            <div id="cell-1-2" class="box" data-cell></div>
            <div id="cell-1-3" class="box" data-cell></div>
            <div id="cell-1-4" class="box" data-cell></div>
            <div id="cell-1-5" class="box" data-cell></div>
            <div id="cell-1-6" class="box" data-cell></div>
            <div id="cell-1-7" class="box" data-cell></div>
            <div id="cell-1-8" class="box" data-cell></div>
            <div id="cell-1-9" class="box" data-cell></div>
          </div>
        </div>  
  
      <!-- Large tile 1.2 -->
        <div class="largeTile" id='tile-2'>
          <div class="smallBoard">
            <div id="cell-2-1" class="box" data-cell></div>
            <div id="cell-2-2" class="box" data-cell></div>
            <div id="cell-2-3" class="box" data-cell></div>
            <div id="cell-2-4" class="box" data-cell></div>
            <div id="cell-2-5" class="box" data-cell></div>
            <div id="cell-2-6" class="box" data-cell></div>
            <div id="cell-2-7" class="box" data-cell></div>
            <div id="cell-2-8" class="box" data-cell></div>
            <div id="cell-2-9" class="box" data-cell></div>
          </div>
        </div>
  
        <!-- Large tile 1.3 -->
        <div class="largeTile" id='tile-3'>
          <div class="smallBoard" >
            <div id="cell-3-1" class="box" data-cell></div>
            <div id="cell-3-2" class="box" data-cell></div>
            <div id="cell-3-3" class="box" data-cell></div>
            <div id="cell-3-4" class="box" data-cell></div>
            <div id="cell-3-5" class="box" data-cell></div>
            <div id="cell-3-6" class="box" data-cell></div>
            <div id="cell-3-7" class="box" data-cell></div>
            <div id="cell-3-8" class="box" data-cell></div>
            <div id="cell-3-9" class="box" data-cell></div>
          </div>
        </div>
      </section>
      
      <section class="largeTile"> 
        
        <!-- Large tile 2.1 -->
        <div class="largeTile" id='tile-4'>  
          <div class="smallBoard">
            <div id="cell-4-1" class="box" data-cell></div>
            <div id="cell-4-2" class="box" data-cell></div>
            <div id="cell-4-3" class="box" data-cell></div>
            <div id="cell-4-4" class="box" data-cell></div>
            <div id="cell-4-5" class="box" data-cell></div>
            <div id="cell-4-6" class="box" data-cell></div>
            <div id="cell-4-7" class="box" data-cell></div>
            <div id="cell-4-8" class="box" data-cell></div>
            <div id="cell-4-9" class="box" data-cell></div>
          </div>
        </div>
      
        <!-- Large tile 2.2 -->
        <div class="largeTile" id='tile-5'>
          <div class="smallBoard" >
            <div id="cell-5-1" class="box" data-cell></div>
            <div id="cell-5-2" class="box" data-cell></div>
            <div id="cell-5-3" class="box" data-cell></div>
            <div id="cell-5-4" class="box" data-cell></div>
            <div id="cell-5-5" class="box" data-cell></div>
            <div id="cell-5-6" class="box" data-cell></div>
            <div id="cell-5-7" class="box" data-cell></div>
            <div id="cell-5-8" class="box" data-cell></div>
            <div id="cell-5-9" class="box" data-cell></div>
          </div>
        </div>
      
        <!-- Large tile 2.3 -->
        <div class="largeTile" id='tile-6'>
          <div class="smallBoard">
            <div id="cell-6-1" class="box" data-cell></div>
            <div id="cell-6-2" class="box" data-cell></div>
            <div id="cell-6-3" class="box" data-cell></div>
            <div id="cell-6-4" class="box" data-cell></div>
            <div id="cell-6-5" class="box" data-cell></div>
            <div id="cell-6-6" class="box" data-cell></div>
            <div id="cell-6-7" class="box" data-cell></div>
            <div id="cell-6-8" class="box" data-cell></div>
            <div id="cell-6-9" class="box" data-cell></div>
          </div>
        </div>
      </section>
      
      <section class="largeTile">
  
        <!-- Large tile 3.1 -->
        <div class="largeTile" id='tile-7'>
          <div class="smallBoard">
            <div id="cell-7-1" class="box" data-cell></div>
            <div id="cell-7-2" class="box" data-cell></div>
            <div id="cell-7-3" class="box" data-cell></div>
            <div id="cell-7-4" class="box" data-cell></div>
            <div id="cell-7-5" class="box" data-cell></div>
            <div id="cell-7-6" class="box" data-cell></div>
            <div id="cell-7-7" class="box" data-cell></div>
            <div id="cell-7-8" class="box" data-cell></div>
            <div id="cell-7-9" class="box" data-cell></div>
          </div>
        </div>
      
        <!-- Large tile 3.2 -->
        <div class="largeTile" id='tile-8'>
          <div class="smallBoard">
            <div id="cell-8-1" class="box" data-cell></div>
            <div id="cell-8-2" class="box" data-cell></div>
            <div id="cell-8-3" class="box" data-cell></div>
            <div id="cell-8-4" class="box" data-cell></div>
            <div id="cell-8-5" class="box" data-cell></div>
            <div id="cell-8-6" class="box" data-cell></div>
            <div id="cell-8-7" class="box" data-cell></div>
            <div id="cell-8-8" class="box" data-cell></div>
            <div id="cell-8-9" class="box" data-cell></div>
          </div>
        </div>
        
        <!-- Large tile 3.3 -->
        <div class="largeTile" id='tile-9'>
          <div class="smallBoard">
            <div id="cell-9-1" class="box" data-cell></div>
            <div id="cell-9-2" class="box" data-cell></div>
            <div id="cell-9-3" class="box" data-cell></div>
            <div id="cell-9-4" class="box" data-cell></div>
            <div id="cell-9-5" class="box" data-cell></div>
            <div id="cell-9-6" class="box" data-cell></div>
            <div id="cell-9-7" class="box" data-cell></div>
            <div id="cell-9-8" class="box" data-cell></div>
            <div id="cell-9-9" class="box" data-cell></div>
          </div>
        </div>
      </section>
      
      <div class="winning-message" id="winningMessage">
        <div data-winning-message-text></div>
        <button id="restartButton">Restart</button>
      </div>
  
    </div>

```

### Translating the rules of the game into small steps

Ultimate Tic Tac Toe is a mixture of a relaxing game that in the same time stimulates your brain and digs deeper in that strategy part. 

Deciding in what tile (small game) your opponent will make his move gives you control and in the same time the ability to train for 2 or 3 steps in advance.

Creating an array of numbers for the winning combinations of the small game was one the first steps needed to build upon:
```js
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
```
The start of the game when you click on a cell is made possible by the two functions bellow
```js
 function enableAllTiles() {
    document.querySelectorAll('[data-cell]:not(.disabled)').forEach(cell => {
      cell.addEventListener('click', handleClick, { once: true })
    })
  } 
function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
      setBoardHoverClass()
      cell.classList.remove(X_CLASS)
      cell.classList.remove(CIRCLE_CLASS)
      cell.removeEventListener('click', handleClick)
      cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
  }

```

Handling the clicks in the game meant that I can handle which turns is it and I can call other functions in order to make the logic as expected.

```js
function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)

    const gameWon = winBigGame() // creating the variable that helps in finishin the game
    
    if (gameWon === CIRCLE_CLASS || gameWon === X_CLASS) {
      winningMessageTextElement.innerText = `${circleTurn ? 'O\'s' : 'X\'s'} Wins!`
      winningMessageElement.classList.add('show')
    } else if (gameWon === 'draw') {
      document.getElementById('winning-message').innerHTML = 'Game over. It\'s a draw!'
    }
    
    const targetTile = cell.id.split('-')[2]
    if (winSmallGame(targetTile) === null) { //small game in progress 
      disableTiles()
      enableTile(targetTile)
      setBoardHoverClass(targetTile)
    } else {
      disableWonGame(targetTile)             // small game finished and click disabled
      enableAllTiles()
      setBoardHoverClass(targetTile)
    }
    const currentGame = cell.id.split('-')[1]
    winSmallGame(currentGame)                 //small game finished(w || L || D) needs to be disabled
    if (currentClass === true) {
      disableWonGame(targetTile)
      setBoardHoverClass()
    }
    swapTurns()
    setBoardHoverClass(targetTile)
  }

```

## Challenges
- This was my first front-end JavaScript project. Understanding and using arrays, control flow, functions, timeouts and intervals and applying them to an entirely blank canvas for the first time was without question the hardest thing. In places, the code is lengthy and a little unwieldy, but I have deliberately left much of it like this as way of referencing my ability and understanding at the time of creation (the project was set with a one-week timeframe). I've progressed a lot since completing this project. 

- Creating a background that would work well with the game.


## Victories 
- I tried to use appropriate names for the JS functions making it easy for me to track back and check what wasn’t working as intended.

- Managed to build the logic as per the rules of the game played by MIT mathematicians.

- The project really helped to consolidate my knowledge of JavaScript, HTML and CSS and interacting with the DOM. 


## Potential future features

- Making it mobile friendly

- Showcase whos turn it is and what is the allowed small game that you are allowed to click it, thus making the game a lot more easy to play.

- Refactor the entire code, starting from the Html and to make Javascript render cells and not hardcode them.


## Lessons learned

- Map from the start the main logic that you want to implement. Whiteboarding your ideas makes you understand a bit better what you have to achieve.

- Javascript is one of the most important things that you need to learn in order to develop your capacity to write logic. Practice is the only way to get better at it.

### [Play the game Now!](https://bababumbab.github.io/project-1/)
