#pragma strict

var firePrefab : GameObject;
var animator : Animator;
var fireFrequency : int;//set the frequency of fire
var enableFire : boolean;

function Start () {
	animator = transform.parent.gameObject.GetComponent("Animator")as Animator;
	enableFire = true;
}

function FixedUpdate () {
	if(animator.GetBool("isAttacking") && enableFire)
	{
		Fire(fireFrequency);
	}
}

function Fire(fireFrequency : int){
	var waitTime : float;
	waitTime = 1.0/fireFrequency;
	Instantiate(firePrefab, transform.position, transform.rotation);
	enableFire = false;
	yield WaitForSeconds(waitTime);
	enableFire = true;
}