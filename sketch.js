function setup() {
  createCanvas(400, 400);
  x=[]
  y=[]
  m=1
  b=0
}

function draw() {
  background(0);
  stroke(255)
  line(0,400-b,400,400-400*m-b)
  fill(255)
  mnew=m
  bnew=b
  lr=0.01/(x.length+1)
  for (var i=0; i < x.length; i++){
    circle(x[i], 400-y[i], 10)
    error=y[i]-m*x[i]-b
    mnew+=lr*error*x[i]/400
    bnew+=lr*error
    // m=m+lr*error*x[i]/300
    // b=b+lr*error
  }
  m=mnew
  b=bnew
}

function mouseClicked() {
  x.push(mouseX)
  y.push(400-mouseY)
}
