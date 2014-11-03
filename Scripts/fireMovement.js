#pragma strict

var speed : float;
var playerMovementScript : Movement;
var toRightSide : boolean;//to the left side if false
var ATK : int;

function Start () {
	playerMovementScript = GameObject.FindGameObjectWithTag("Player").GetComponent("Movement")as Movement;
	toRightSide = playerMovementScript.faceToRight;
}

function FixedUpdate () {
	if(toRightSide)//Check the direction
	{
		transform.position += Vector3.right * speed * Time.deltaTime;
	}
	else
	{
		transform.position += Vector3.left * speed * Time.deltaTime;
	}
}

function OnTriggerEnter2D (col : Collider2D)
{
	
	if(col.gameObject.tag == "Enemy")
	{
		Destroy(gameObject);
		col.gameObject.SendMessage("setAttacked", ATK);
	}
}