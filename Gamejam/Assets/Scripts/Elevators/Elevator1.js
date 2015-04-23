#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double=0.1;
public static var Up1 : boolean=false;

function FixedUpdate () {
   if (Up1==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Up1==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}