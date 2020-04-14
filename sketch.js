function setup() {
  createCanvas(400, 400);
  x=[]
  y=[]
  m=1
  b=0
  j=0
  k=1
  l=0
  reg=2
}

function draw() {
  background(0);
  fill(255)
  stroke(255)
  if (reg===1){
    line(0,400-b,400,400-400*m-b)
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
  if (reg===2){
    drawParabola(j,k,l)
    jnew=j
    knew=k
    lnew=l
    lr=0.01/(x.length+1)
    for (var i=0; i < x.length; i++){
      circle(x[i], 400-y[i], 10)
      error=y[i]-j*x[i]*x[i]-k*x[i]-l
      jnew+=lr*error*x[i]*x[i]/160000000
      knew+=lr*error*x[i]/400
      lnew+=lr*error
      // m=m+lr*error*x[i]/300
      // b=b+lr*error
    }
    j=jnew
    k=knew
    l=lnew
  }
}

function drawParabola(a,b,c){
  for (var i=0;i<400;i++){
    point(i,400-(a*i*i+b*i+c))
  }
}

function mouseClicked() {
  if ((mouseX<400)&&(mouseY<400)&&(mouseX>0)&&(mouseY>0)){
    x.push(mouseX)
    y.push(400-mouseY)
  }
}

function functionNameHereIdk() {
  reg=3-reg
}
