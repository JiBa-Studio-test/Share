﻿var speed: float=10;
var ATK:int;
var faceToRight: boolean;
var playerStatus: PlayerStatus;
function Start()
{
	playerStatus=GameObject.FindGameObjectWithTag("Player").GetComponent("PlayerStatus");
	faceToRight=playerStatus.faceToRight;
}
function OnTriggerEnter2D(other:Collider2D)
{
	if(other.tag=="monster")
	{
		other.Damage(ATK);
		DestroyFire();
	}
} 
function FixedUpdate()
{
	FireMove();
	AutomaticallyDispear();
}
function AutomaticallyDispear()
{
	var screenPosition:Vector3=Camera.main.WorldToScreenPoint(transform.position);
	if(Mathf.RoundToInt(screenPosition.x)>=Camera.main.pixelWidth)
	{
		DestroyFire();
	}
}
function DestroyFire()
{
	Destroy(gameObject);
}
function FireMove()
{
	if(faceToRight)
	{
	transform.position+=Vector3.right*speed*Time.deltaTime;
	
	}
	else
	{
	transform.position+=Vector3.left*speed*Time.deltaTime;
	}
}