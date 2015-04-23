#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double;
public static var Open2 : boolean=false;

function Update () {
   if (Open2==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Open2==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}
