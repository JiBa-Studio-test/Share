var enemy: GameObject;
var spawn: boolean=true;
var waitTime: float;

function Update()
{
	if(spawn)
	{
		Spawn();	
	}

}
function Spawn()
{
	var position: Vector2 = Vector2(transform.position.x+1+Random.Range(-1, 1),transform.position.y+1);
	Instantiate(enemy,position,transform.rotation);
	EnemyManagement.enemyManagement.enemyNumber++;
	WaitTime();
	spawn=false;
	SetSpawn();
}
function SetSpawn()
{
	yield WaitForSeconds(waitTime);
	spawn=true;
}
function WaitTime()
{
	waitTime=1.0/EnemyManagement.enemyManagement.speed;
}


