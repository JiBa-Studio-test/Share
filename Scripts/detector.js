#pragma strict

var enemyMoveScript : enemyMovement;
var playerDetected : boolean;
var colliderSize : Vector3;

function Start () {
	//get the script of enemyMovement
	enemyMoveScript = transform.parent.gameObject.GetComponent("enemyMovement") as enemyMovement;
	var boxCollider = GetComponent("BoxCollider2D") as BoxCollider2D;
	/***
	 **To change the collider size in script
	boxCollider.size = colliderSize;
	**/
}

function Update () {

}

function OnTriggerEnter2D (col : Collider2D){
	if(col!=null && col.gameObject.tag == "Player")//error when using col.gameObject.tag
	{
		if(enemyMoveScript!=null)
		{
		enemyMoveScript.playerDetected = true;
		}
	}
	else{}
}

function OnTriggerExit2D (col : Collider2D)
{
	if(col!=null && col.gameObject.tag == "Player")
	{
		enemyMoveScript.playerDetected = false;
	}
	else{}
}