var hero, ghost, bg,heroimg,ghostimg;
var arrow,arrowimage;


var border1, border2, border3, border4, border5;
var bullet;
var ghostcount=0;
var ghost1,ghost2;

function preload()
{
heroimg = loadImage('mario.png');
ghostimg = loadImage('gost-removebg-preview.png');
bg=loadImage('mazev2.png');
bg2=loadImage('bg2.jpg')
gun=loadImage('gun2.png')
}
function setup() {
  createCanvas(1500,1000); // horizontal , vertical. top left point is the staring point.
  hero = createSprite(200,200);
  hero.addImage(heroimg);
  hero.scale=0.2;
  ghost = createSprite(800,300);
  ghost.addImage(ghostimg);
  ghost.scale=0.8;

 
  ghost1 = createSprite(1200,50);
  ghost1.addImage(ghostimg);
  ghost1.scale=0;
  

  ghost2 = createSprite(1200,50);
  ghost2.addImage(ghostimg);
  ghost2.scale=0;

  bulletGroup= new Group();

  arrow=createSprite(hero.x + 30,hero.y + 60,20,20);
  arrow.addImage(gun);
  arrow.scale=0.2;

  border1 = createSprite(740,20,1440,30);
  border1.shapeColor='red';

  border11 = createSprite(770,20,1480,30);
  border11.shapeColor='red';

  border2 = createSprite(20,498,30,985);
  border2.shapeColor='red';

  border3 = createSprite(100,990,190,30);
  border3.shapeColor='red';

  border4 = createSprite(202,1000,30,540);
  border4.shapeColor='red';
  //Add code for all borders

  border5 = createSprite(340,745,290,30);
  border5.shapeColor='red';

  border6 = createSprite(600,990,790,30);
  border6.shapeColor='red';

  border7 = createSprite(402,990,30,500);
  border7.shapeColor='red';

  border8 = createSprite(1000,1000,30,450);
  border8.shapeColor='red';

  border9 = createSprite(1250,790,500,30);
  border9.shapeColor='red';

  border10 = createSprite(1487,400,30,760);
  border10.shapeColor='red';

  border12 = createSprite(500,400,30,400);
  border12.shapeColor='red';

  border13 = createSprite(590,500,100,20);
  border13.shapeColor='red';

  border14 = createSprite(920,400,400,30);
  border14.shapeColor='red';

  border15 = createSprite(800,250,300,20);
  border15.shapeColor='red';
  //Add code for all borders
}

function draw() {
  background(bg2);  
  arrow.x=hero.x;
  arrow.y=hero.y;
  hero.velocityX=0;
    hero.velocityY=0;
  
if(keyDown(UP_ARROW))
{
  hero.y=hero.y-10;
}
// Add code for right,left, down movements of mario

if(keyDown(DOWN_ARROW))
{
  hero.y=hero.y+10;
}
if(keyDown(LEFT_ARROW))
{
  hero.x=hero.x-10;
}
if(keyDown(RIGHT_ARROW))
{
  hero.x=hero.x+10;
}

//move ghost towards mario
if (hero.x>ghost.x) //move to right
{
  ghost.x=ghost.x+6;
}

if (hero.x<ghost.x) //move to left
{
  ghost.x=ghost.x-6;
}

if (hero.y>ghost.y) //move down
{
  ghost.y=ghost.y+6;
}

if (hero.y<ghost.y) //move up
{
  ghost.y=ghost.y-6;
}
//move ghost1 towards mario
if (hero.x>ghost1.x) //move to right
{
  ghost1.x=ghost1.x+6;
}

if (hero.x<ghost1.x) //move to left
{
  ghost1.x=ghost1.x-6;
}

if (hero.y>ghost1.y) //move down
{
  ghost1.y=ghost1.y+6;
}

if (hero.y<ghost1.y) //move up
{
  ghost1.y=ghost1.y-6;
}
//move ghost2 towards mario
if (hero.x>ghost2.x) //move to right
{
  ghost2.x=ghost2.x+6;
}

if (hero.x<ghost2.x) //move to left
{
  ghost2.x=ghost2.x-6;
}

if (hero.y>ghost2.y) //move down
{
  ghost2.y=ghost2.y+6;
}

if (hero.y<ghost2.y) //move up
{
  ghost2.y=ghost2.y-6;
}
  hero.collide(border1);
  hero.collide(border2);
  hero.collide(border3);
  //hero.collide(border4);
  hero.collide(border5);
  hero.collide(border6);
  hero.collide(border7);
  hero.collide(border8);
  hero.collide(border9);
  //hero.collide(border4);
  hero.collide(border10);
  hero.collide(border11);
  hero.collide(border12);
  hero.collide(border13);
  hero.collide(border14);
  hero.collide(border15);

  ghost.collide(border1);
  ghost.collide(border2);
  ghost.collide(border3);
  ghost.collide(border4);
  ghost.collide(border5);
  ghost.collide(border6);
  ghost.collide(border7);
  ghost.collide(border8);
  ghost.collide(border9);
  ghost.collide(border10);
  ghost.collide(border11);
  ghost.collide(border12);
  ghost.collide(border13);
  ghost.collide(border14);
  ghost.collide(border15);

  ghost1.collide(border1);
  ghost1.collide(border2);
  ghost1.collide(border3);
  ghost1.collide(border4);
  ghost1.collide(border5);
  ghost1.collide(border6);
  ghost1.collide(border7);
  ghost1.collide(border8);
  ghost1.collide(border9);
  ghost1.collide(border10);
  ghost1.collide(border11);
  ghost1.collide(border12);
  ghost1.collide(border13);
  ghost1.collide(border14);
  ghost1.collide(border15);

  ghost2.collide(border1);
  ghost2.collide(border2);
  ghost2.collide(border3);
  ghost2.collide(border4);
  ghost2.collide(border5);
  ghost2.collide(border6);
  ghost2.collide(border7);
  ghost2.collide(border8);
  ghost2.collide(border9);
  ghost2.collide(border10);
  ghost2.collide(border11);
  ghost2.collide(border12);
  ghost2.collide(border13);
  ghost2.collide(border14);
  ghost2.collide(border15);

  bulletGroup.collide(border1);
  bulletGroup.collide(border2);
  bulletGroup.collide(border3);
  bulletGroup.collide(border4);
  bulletGroup.collide(border5);
  bulletGroup.collide(border6);
  bulletGroup.collide(border7);
  bulletGroup.collide(border8);
  bulletGroup.collide(border9);
  bulletGroup.collide(border10);
  bulletGroup.collide(border11);
  bulletGroup.collide(border12);
  bulletGroup.collide(border13);
  bulletGroup.collide(border14);
  bulletGroup.collide(border15);
  //Add collide statements for all the borders
  
  if(ghost.isTouching(bulletGroup))
  {
   // ghost.visible=false;
    ghost.lifetime=0;
    ghostcount=ghostcount+1;
    spawnGhost1();
    spawnGhost2();
  }
  if(ghost1.isTouching(bulletGroup))
  {
   // ghost.visible=false;
    ghost1.lifetime=0;
    ghostcount=ghostcount+1;
    spawnGhost1();
    //spawnGhost2();
  }
  if(ghost2.isTouching(bulletGroup))
  {
   // ghost.visible=false;
    ghost2.lifetime=0;
    ghostcount=ghostcount+1;
    //spawnGhost1();
    spawnGhost2();
  }
  if(ghost.isTouching(hero))
  {
   //hero.visible=false;
    //arrow.visible=false;
    hero.lifetime=0;
    arrow.lifetime=0
    hero.velocityX=0;
    hero.velocityY=0;
    bulletGroup.destroyEach(0);
  }
  if(ghost1.isTouching(hero))
  {
   //hero.visible=false;
    //arrow.visible=false;
    hero.lifetime=0;
    arrow.lifetime=0
    hero.velocityX=0;
    hero.velocityY=0;
    bulletGroup.destroyEach(0);
  }
  if(ghost2.isTouching(hero))
  {
   //hero.visible=false;
    //arrow.visible=false;
    hero.lifetime=0;
    arrow.lifetime=0
    hero.velocityX=0;
    hero.velocityY=0;
    bulletGroup.destroyEach(0);
  }

  drawSprites();
  textSize(30);
  fill('white');
  text('Ghost : '+ghostcount,1200,100);
}

function keyPressed()
{
  if (keyCode===32)
  {
    //arrow.velocityX=-3;
    bullet=createSprite(arrow.x,arrow.y,30,10);
    bullet.shapeColor='blue';
    bullet.velocityX=10;
    bullet.lifetime=100;
    bulletGroup.add(bullet);
  }
}

function spawnGhost1()
{
  ghost1 = createSprite(random(300,800),random(100,500))
  ghost1.addImage(ghostimg);
  ghost1.scale=0.8;
}
function spawnGhost2()
{
  ghost2 = createSprite(random(300,800),random(100,500));
  ghost2.addImage(ghostimg);
  ghost2.scale=0.8;
}