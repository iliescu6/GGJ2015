#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double=0.1;
public static var Up2 : boolean=false;

function FixedUpdate () {
   if (Up2==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Up2==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}