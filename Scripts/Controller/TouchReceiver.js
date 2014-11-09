#pragma strict

var isRunning : boolean;
var isAttacking : boolean;
var runToRight : boolean;
//var playerControl : PlayerControl;

function Awake () {
	isRunning = false;
	isAttacking = false;
}
function Start () {
/**
	if(playerControl == null){
		playerControl = GetComponent(PlayerControl) as PlayerControl;
		Debug.Log(playerControl);
	}
**/
}
// Subscribe to events  
function OnEnable(){  
	EasyJoystick.On_JoystickMove += On_JoystickMove;
	EasyJoystick.On_JoystickMoveEnd += On_JoystickMoveEnd;
}  
// Unsubscribe  
function OnDisable(){  
	EasyJoystick.On_JoystickMove -= On_JoystickMove	;
	EasyJoystick.On_JoystickMoveEnd -= On_JoystickMoveEnd;
}  
// Unsubscribe  
function OnDestroy(){  
	EasyJoystick.On_JoystickMove -= On_JoystickMove;	
	EasyJoystick.On_JoystickMoveEnd -= On_JoystickMoveEnd;  
}  

// Touch start event  
function On_JoystickMoveEnd(move : MovingJoystick){
	if (move.joystickName == "MoveJoystick"){
		isRunning = false;
	}
}

function On_JoystickMove(move : MovingJoystick){
	if (move.joystickName == "MoveJoystick"){
		isRunning = true;
		if(move.joystickAxis.x>0){
			runToRight = true;
		}
		else if(move.joystickAxis.x<0){
			runToRight = false;
		}
	}
}

function Update () {

}