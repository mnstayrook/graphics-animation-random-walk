
const area = {
  element: document.getElementById('area'),
  width: 800,
  height: 600,
};

function initialize() {
  area.element.style.width = area.width + 'px';
  area.element.style.height = area.height + 'px';
  document.body.appendChild(area.element);
}

function moveTo(ball, x, y) {
  ball.element.style.left = x + 'px';
  ball.element.style.top = y + 'px';
}
  
function changeDirectionIfNecessary(ball, x, y) {
  if (x < 0 || x > area.width - ball.width) {
    ball.dx = -ball.dx;
  }
  if (y < 0 || y > area.height - ball.height) {
    ball.dy = -ball.dy;
  }
}
  
function create(color, dx, dy) {
  const newBall = Object.create(this);
  newBall.dx = dx;
  newBall.dy = dy;
  newBall.width = 40;
  newBall.height = 40;
  newBall.element = document.createElement('div');
  newBall.element.style.backgroundColor = color;
  newBall.element.style.width = newBall.width + 'px';
  newBall.element.style.height = newBall.height + 'px';
 
  newBall.element.className += ' ball';
  area.element.appendChild(newBall.element);

  return newBall;
}
    
function changingDir(ball, x, y) {
  changeDirectionIfNecessary(ball, x, y);
  update(ball, x + ball.dx, y + ball.dy);
}

function update(ball, x, y) {
  moveTo(ball, x, y);
  setTimeout(changingDir, 16, ball, x, y);
}
 
initialize();
const ball1 = create('blue', 4, 3);  //research hex function for random color generator!
const ball2 = create('red', 1, 5);
const ball3 = create('green', 2, 2);

moveTo(ball1, 1, 1);
moveTo(ball2, 10, 10);
moveTo(ball3, 20, 20);

update(ball1, 70, 0);
update(ball2, 20, 200);
update(ball3, 300, 330);
