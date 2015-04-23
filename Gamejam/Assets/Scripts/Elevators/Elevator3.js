#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double=0.1;
public static var Up3 : boolean=false;

function FixedUpdate () {
   if (Up3==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Up3==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}