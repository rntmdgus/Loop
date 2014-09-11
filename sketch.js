function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

/*
  var x;

  x = 1;
  ellipse(x * 150, 100, 50, 50);

  x = 2;
  ellipse(x * 150, 100, 50, 50);

  x = 3;
  ellipse(x * 150, 100, 50, 50);
*/

// for (시작상태 : 반복하는 조건; 증가값)

	for (var x = 1; x <=8; x++)
		// 1~8까지 증가한다(++)
	{
		ellipse(x * 70, x * 20 + 100, 50, 50);
		// x축을 70씩 차이나게한다.
		// y축을 20씩 차이나지만 시작부분이 짤리므로 +100
	}
}