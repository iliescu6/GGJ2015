#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double;
public static var Open4 : boolean=false;

function Update () {
   if (Open4==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Open4==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}