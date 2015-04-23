#pragma strict

var Spawn : Transform;

function OnTriggerEnter (other : Collider) {
if(other.tag=="Player"){
Spawn.position=Vector3(transform.position.x,transform.position.y,transform.position.z);
}

}