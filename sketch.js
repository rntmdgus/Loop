
function setup() {
  createCanvas(640, 480);
  noFill();
  stroke(255, 0, 0);
}
function draw() {
  background(128, 0, 64);
	for (var x = 1; x <=8; x++)
		// 1~8까지 증가한다(++)
	{
		ellipse(x * 70, x * 25 + 100, x * 10, x * 10);
		// x축을 70씩 차이나게한다.
		// y축을 25씩 차이나지만 시작부분이 짤리므로 +100
		// 원의 가로, 세로의값을 x값의 곱하기 10만큼씩 증가.
	}
  var size = Math.abs(mouseX - 320);
  ellipse(320, 240, mouseX, mouseY);
}
