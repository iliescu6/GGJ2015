#pragma strict
var Destination : Transform;
var Initial :Transform;
var Spawn : Transform;
var Player : Transform;
var Speed : double=0.2;
function Start(){
Spawn=GameObject.FindGameObjectWithTag("Spawn").transform;
}

function Update () {
transform.position=Vector3.MoveTowards(transform.position,Destination.position,Speed);
if(transform.position==Destination.position){
	transform.position=Initial.position;
}
}
function OnTriggerEnter(other:Collider){
 if(other.gameObject.name=="Player"){
 transform.position=Initial.position;
 Player.position=Spawn.position;
 }
}