#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double;
public static var Open1 : boolean=false;

function Update () {
   if (Open1==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Open1==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}