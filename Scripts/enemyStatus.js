#pragma strict

var isAttacked : boolean;
var HP : int;
var MaxHP : int;
var ATK : int;
var DEF : int;
var faceToRight : boolean;
var directionChanged : boolean;

function Start () {
	MaxHP = HP;
}

function Update () {
	if(isAttacked)
	{
		if(HP>0)
		{
			isAttacked = false;
		}
		else
		{
			Destroy(gameObject);
		}
	}
	
	if(directionChanged)
	{
		adjustHealthBar();
	}
}

function setAttacked(opponentATK : int)//called by fire if the collision happened
{
	isAttacked = true;
	var harm = opponentATK - DEF;
	if(harm>0)
	{
		HP -= harm;
		setHealthBar(harm);
	}
}

//To decrease the HP when attacked
function setHealthBar(harm : int)
{
	for(var child : Transform in transform as Transform)
	{
		if(child.gameObject.tag == "HealthBar")
		{
			if(HP>0)
			{
				var lenOfBar = Mathf.Abs(child.localScale.x)-(harm*1.0)/(MaxHP*1.0);
				
				//To change the Scale of HealthBar according to direction
				if(child.localScale.x>0)//face to right
				{
					child.localScale.x = lenOfBar;
				}
				else//face to left
				{
					child.localScale.x = -lenOfBar;
				}
			}
		}
	}
}

//To adjust the health bar to right position
function adjustHealthBar()
{
	
}

//called by enemyMovement script when direction changed
function setDirection(toRight : boolean)
{
	faceToRight = toRight;
}