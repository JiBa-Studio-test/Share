var player:GameObject;
var distance:float;
var isRight:boolean;
var offset:float;
var playerDetected:boolean;
var speed:int;
var ScaleX:float;
var detector:EnemyDetector;
var enemyStatus:EnemyStatus; 
var enemyAnimator: Animator;
function Start () 
{
	player=GameObject.FindGameObjectWithTag("Player");
	detector=GetComponentInChildren(EnemyDetector);
	enemyAnimator = GetComponentInChildren(Animator);
	enemyStatus = GetComponent(EnemyStatus);
	//offset=0.4;
	//speed=1;
	ScaleX=transform.localScale.x;
}

function FixedUpdate () 
{
	if(detector.playerDetected)
	{
		FollowMove();
	}
	if(!detector.playerDetected)
	{
		Wander();
	}
}

/**
 *Follow after detecting the Player
 **/
function FollowMove()
{
	distance=player.transform.position.x-transform.position.x;
	if(distance<-offset)
	{
		isRight=true;
		GoLeft();
	}
	if(distance>offset)
	{
		isRight=false;
		GoRight();
	}
	if(distance>=-offset&&distance<=offset)
	{
		if(isRight)
		{
			GoLeft();
		}
		if(!isRight)
		{
			GoRight();
		}
	}
}
function GoLeft()
{
	enemyAnimator.SetBool("isRunning",true);
	transform.localScale.x=-ScaleX;
	transform.position+=Vector3.left*speed*Time.deltaTime;
}
function GoRight()
{
	enemyAnimator.SetBool("isRunning",true);
	transform.localScale.x=ScaleX;
	transform.position+=Vector3.right*speed*Time.deltaTime;
}
/**
 *Function Follow ends
 **/
 
 /**
  *Function Wander
  **/
 function Wander()
 {
 	enemyAnimator.SetBool("isRunning",false);
 	//wander
 }