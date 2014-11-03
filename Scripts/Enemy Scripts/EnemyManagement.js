static var enemyManagement: EnemyManagement;
var speed:float;
var enemyNumber:int;
function Awake()
{
	enemyManagement=this;
}
function Start()
{
	enemyNumber=0;
	SetSpeed();
}
function Update()
{
	SetSpeed();
}
function SetSpeed()
{
	if(enemyNumber<=5)
	{
		speed=0.5;
	}
	else
	{
		speed=0.5*Mathf.Pow(0.6,(enemyNumber-5)/2);
	}
}
