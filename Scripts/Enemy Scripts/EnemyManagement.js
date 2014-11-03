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
		speed=2;
	}
	else
	{
		speed=2.0*Mathf.Pow(0.6,(enemyNumber-5)/2);
	}
}
