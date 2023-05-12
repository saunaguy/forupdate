// 게임 보드 생성
const gameBoard = document.getElementById('game-board');
for (let i = 0; i < 20; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    row.appendChild(cell);
  }
  gameBoard.appendChild(row);
}

// 게임 변수 설정
const cells = document.querySelectorAll('.cell');
const cellCount = cells.length;
const directions = ['left', 'up', 'right', 'down'];
let currentDirection = 'right';
let currentHeadIndex = 215;
let currentTailIndex = 195;
let snakeLength = 3;
let foodIndex = Math.floor(Math.random() * cellCount);

// 게임 시작
setInterval(() => {
  // 현재 방향으로 이동
  if (currentDirection === 'left' && (currentHeadIndex % 20) === 0) {
    currentHeadIndex += 19;
  } else if (currentDirection === 'up' && currentHeadIndex < 20) {
    currentHeadIndex += 380;
  } else if (currentDirection === 'right' && (currentHeadIndex % 20) === 19) {
    currentHeadIndex -= 19;
  } else if (currentDirection === 'down' && currentHeadIndex > 379) {
    currentHeadIndex -= 380;
  } else if (currentDirection === 'left') {
    currentHeadIndex -= 1;
  } else if (currentDirection === 'up') {
    currentHeadIndex -= 20;
  } else if (currentDirection === 'right') {
    currentHeadIndex += 1;
  } else if (currentDirection === 'down') {
    currentHeadIndex += 20;
  }

  // 먹이를 먹으면 길이 증가
  if (currentHeadIndex === foodIndex) {
    snakeLength++;
    foodIndex = Math.floor(Math.random() * cellCount);
  }

  // 꼬리를 이동시키고 머리를 새 위치에 놓음
  const tail = cells[currentTailIndex];
  tail.classList.remove('snake');
  currentTailIndex = (currentTailIndex + 1) % cellCount;

  // 새로운 머리를 그림
  // const head = cells[currentHeadIndex];
  // head.classList.add('snake');
  // if (snakeLength > 1) {
  //   // 몸통이 있으면 머리와 몸통이 만나면 게임 오버
  //   for (let i = currentTailIndex; i !== currentHeadIndex; i = (i + 1) % cellCount) {
  //     if (i === currentHeadIndex) {
  //       break;
  //     }
  //     if (i === currentTailIndex && currentTailIndex !== 0) {
  //       continue;
  //     }
  //     if (cells[i].classList.contains('snake')) {
  //       alert('게임 오버!');
  //       location.reload();
  //     }
  //   }
  // }

  // 먹이를 그림
  const food = cells[foodIndex];
  food.classList.add('food');
}, 100);

// 방향키 이벤트 처리
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    currentDirection = 'left';
  } else if (event.key === 'ArrowUp') {
    currentDirection = 'up';
  } else if (event.key === 'ArrowRight') {
    currentDirection = 'right';
  } else if (event.key === 'ArrowDown') {
    currentDirection = 'down';
  }
});
