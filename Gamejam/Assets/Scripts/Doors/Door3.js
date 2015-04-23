#pragma strict
var StartingPosition : Transform;
var EndingPosition : Transform;
var Speed : double;
public static var Open3 : boolean=false;

function Update () {
   if (Open3==true) {
			transform.position = Vector3.MoveTowards (transform.position, EndingPosition.position, Speed);		
		}
		if (Open3==false) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed);		
		}
	}
