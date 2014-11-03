#pragma strict

var speed : float;
var offset : float;
var lastPosition : Vector2;
var playerDetected : boolean;
var walkTowardsRight : boolean;
var player : GameObject;
var character : Transform;


function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
	for(var child : Transform in transform as Transform)
	{
		if(child.gameObject.tag == "EnemyCharacter")
		{
			character = child;
		}
	}
}

function FixedUpdate () {
	if(playerDetected)
	{
		var playerPos = player.transform.position.x;
		var distance = playerPos - transform.position.x;
		if(distance < -offset)
		{
			walkTowardsRight = false;
		}
		
		if(distance > offset)
		{
			walkTowardsRight = true;
		}
		
		if(!walkTowardsRight)
		{
			transform.position += Vector3.left * speed * Time.deltaTime;
			character.localScale.x = -1;//change the direction of character to left side
			gameObject.SendMessage("setDirection", false);
		}
		else
		{
			transform.position += Vector3.right * speed * Time.deltaTime;
			character.localScale.x = 1;//change the direction of character to right side
			gameObject.SendMessage("setDirection", true);
		}
	}
}

