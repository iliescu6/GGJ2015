#pragma strict
private var Spawn : Transform;
var player : GameObject;
var Danger : AudioSource;
function Start(){
Spawn=GameObject.FindGameObjectWithTag("Spawn").transform;
}

function OnTriggerStay(other:Collider){
if(other.gameObject.tag=="Player"){
      player.transform.position= Spawn.position;
      Danger.Play();
}
if(other.gameObject.tag=="DangerZone"){
player.transform.position= Spawn.position;
Danger.Play();
}
}