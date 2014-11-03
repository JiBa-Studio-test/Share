var player:GameObject;
var distance:float;
var isRight:boolean;
var offset:float;
var isTriggered:boolean;
var speed:int;
var ScaleX:float;
var detector:EnemyDetector;
var enemyStatus:EnemyStatus; 
function Start () 
{
	player=GameObject.FindGameObjectWithTag("Player");
	detector=GetComponentInChildren(EnemyDetector);
	enemyStatus = GetComponent(EnemyStatus);
	offset=0.4;
	speed=1;
	ScaleX=transform.localScale.x;
}

function Update () 
{
	if(detector.isTriggered)
	{
		FollowMove();
	}
}
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
	transform.localScale.x=-ScaleX;
	transform.position+=Vector3.left*speed*Time.deltaTime;
}
function GoRight()
{
	transform.localScale.x=ScaleX;
	transform.position+=Vector3.right*speed*Time.deltaTime;
}