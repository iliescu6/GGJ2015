using UnityEngine;
using System.Collections;

public class Movement : MonoBehaviour {
	public Transform StartingPosition;
	public Transform EndingPosition;
	public float Speed;
	public bool Switch=false;

	void FixedUpdate () {
	
		if (transform.position == EndingPosition.position) {
			Switch=true;		
		}	 
		if (transform.position == StartingPosition.position) {
			Switch=false;		
		}
		if (Switch) {
			transform.position = Vector3.MoveTowards (transform.position, StartingPosition.position, Speed); 		
				} else {
			transform.position=Vector3.MoveTowards(transform.position,EndingPosition.position,Speed); 	
		}
	}
}
