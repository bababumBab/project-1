/* eslint-disable no-undef */
function setUpGame() {
  const X_CLASS = 'x'
  const CIRCLE_CLASS = 'circle'
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
  const cellElements = document.querySelectorAll('[data-cell]')
  const board = document.getElementById('largeBoard')
  const winningMessageElement = document.getElementById('winningMessage')
  const restartButton = document.getElementById('restartButton')
  const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
  let circleTurn

  console.log(board)

  startGame()

  restartButton.addEventListener('click', () => {
    window.location.reload(startGame)
  })

  function disableTiles() {
    cellElements.forEach(cell => {
      cell.removeEventListener('click', handleClick)
    })
  } return setBoardHoverClass()

  function enableTile(game) {
    document.getElementById('tile-' + game).querySelectorAll('[data-cell]:not(.disabled)').forEach(cell => {
      cell.addEventListener('click', handleClick, { once: true }, setBoardHoverClass())
    })
  } 

  function enableAllTiles() {
    document.querySelectorAll('[data-cell]:not(.disabled)').forEach(cell => {
      cell.addEventListener('click', handleClick, { once: true })
    })
  } 

  function disableWonGame(game) {
    document.getElementById('tile-' + game).querySelectorAll('[data-cell]:not(.disabled)').forEach(cell => {
      cell.classList.add('disabled')
      if (cell.classList.contains(X_CLASS)) {
        cell.style.backgroundColor = 'red'
      } else cell.style.backgroundColor = 'blue'
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

  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
  }


  function swapTurns() {
    circleTurn = !circleTurn
  }

  function setBoardHoverClass() {

    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
      board.classList.add(CIRCLE_CLASS)
    } else {
      board.classList.add(X_CLASS)
    }
  }

  function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return cellElements[index].classList.contains(currentClass)
      })
    })
  }

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

  function winSmallGame(game) {
    const tiles = document.getElementById('tile-' + game).querySelectorAll('[data-cell]')
    if (WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return tiles[index].classList.contains(X_CLASS)
      })
    })) {
      return X_CLASS
    }
    if (WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return tiles[index].classList.contains(CIRCLE_CLASS)
      })
    })) {
      return CIRCLE_CLASS
    }
    if ([...tiles].every(cell => {
      return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })) {
      return 'draw'
    } else {
      return null
    }
  }


  function winBigGame() {
    const games = []
    for (i = 1; i <= 9; i++) {
      games.push(winSmallGame(i.toString()))
    }
    if (WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return games[index] === X_CLASS
      })
    })) {
      return X_CLASS
    }
    if (WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return games[index] === CIRCLE_CLASS
      })
    })) {
      return CIRCLE_CLASS
    }
    if ([...games].every(game => {
      return game === X_CLASS || game === CIRCLE_CLASS
    })) {
      return 'draw'
    } else {
      return null
    }
  }

  // if (largeEmptyCells === 0 && largeGameOver === false) {
  //   document.getElementById('winner').innerHTML = 'Game over. It\'s a draw!' 
  //   largeGameOver[largeSelected] = true

  // }



  //to refactor below:
  // function endGame(draw) {
  //   if (draw) {
  //     winningMessageTextElement.innerText = 'Draw!'
  //   } else {
  //     winningMessageTextElement.innerText = `${circleTurn ? 'O\'s' : 'X\'s'} Wins!`
  //   }
  //   winningMessageElement.classList.add('show')
  // }

  // function isDraw() {
  //   return [...cellElements].every(cell => {
  //     return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  //   })
  // }

  // function placeMark(cell, currentClass) {
  //   cell.classList.add(currentClass)
  // }

  // function swapTurns() {
  //   circleTurn = !circleTurn
  // }

  // function setBoardHoverClass() {
  //   board.classList.remove(X_CLASS)
  //   board.classList.remove(CIRCLE_CLASS)
  //   if (circleTurn) {
  //     board.classList.add(CIRCLE_CLASS)
  //   } else {
  //     board.classList.add(X_CLASS)
  //   }
  // }

  // function checkWin(currentClass) {
  //   return WINNING_COMBINATIONS.some(combination => {
  //     return combination.every(index => {
  //       return cellElements[index].classList.contains(currentClass)
  //     })
  //   })
  // }

}
window.addEventListener('DOMContentLoaded', setUpGame)