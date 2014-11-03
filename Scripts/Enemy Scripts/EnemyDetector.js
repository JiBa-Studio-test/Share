var isTriggered:boolean;
function Start()
{
	isTriggered=false;
}
function OnTriggerEnter2D(other:Collider2D)
{
	
	if(other.tag=="Player")
	{
		isTriggered=true;
	}
	
}
function OnTriggerExit2D(other:Collider2D)
{
	
	if(other.tag=="Player")
	{
		isTriggered=false;
	}
	
}