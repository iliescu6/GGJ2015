#pragma strict

public static var count : int = 0;
var count_ : int;

function OnTriggerEnter(other : Collider) {
	if(other.gameObject.tag == "Pickup"){
				other.gameObject.SetActive(false);
			count++;
			count_ = count;
			}
		}
