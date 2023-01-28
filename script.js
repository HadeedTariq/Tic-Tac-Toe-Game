let content = document.querySelectorAll('.content')
let winLogic = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let GameMoment = document.querySelector('.game-moment')
let gWin = document.querySelector('.game-win')
let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  Array.from(content).forEach((button) => {
    button.innerHTML=''
    gWin.classList.remove('visible')
  })
})
let type = 'X'
Array.from(content).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '') {
      if (type === 'X') {
        type = 'O'
      }
      else {
        type = 'X'
      }
      e.target.innerHTML = type
      GameWon()

      function GameWon() {
        winLogic.forEach(e => {
          if (content[e[0]].innerHTML === content[e[1]].innerHTML && content[e[1]].innerHTML === content[e[2]].innerHTML && content[e[0]].innerHTML !== '')
          {
            setTimeout(() => {
              GameMoment.innerHTML = `${type} win`
              gWin.classList.add('visible')
            }, 200)
          }
        })
      }
    }
  })
})