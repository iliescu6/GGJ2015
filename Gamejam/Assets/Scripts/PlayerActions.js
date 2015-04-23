#pragma strict
var Button1 : Transform;
var Button2 : Transform;
var Button3 : Transform;
var Button4 : Transform;
var Button5 : Transform;
var Button6 : Transform;
var Distance1 : double;
var Distance2 : double;
var Distance3 : double;
var Distance4 : double;
var Distance5 : double;
var Distance6 : double;
var L1bool : boolean=false;
var L2bool : boolean=false;
var L3bool : boolean=false;
var L4bool : boolean=false;
var L5bool : boolean=false;
var time_ : double = 4;
var pressed : boolean = false;
var bPress : boolean =false;


function Start () {
Screen.lockCursor=true;
Screen.showCursor=false;
}

function ChangeDoor(Open:boolean){
   if(Open==false){
   Open=true;
   }
   else{if(Open==true){
   Open=false;
   }
   }
   return Open;
   }

function Update () {
if(Input.GetKey("escape")){
	Application.Quit();

}
if(Input.GetKey("e")){
   Distance1 = Vector3.Distance(Button1.position, transform.position);
   Distance2 = Vector3.Distance(Button2.position, transform.position);
   Distance3 = Vector3.Distance(Button3.position, transform.position);
   Distance4 = Vector3.Distance(Button4.position, transform.position);
   Distance5 = Vector3.Distance(Button5.position, transform.position);
   Distance6 = Vector3.Distance(Button6.position, transform.position);


//BUTTON1  
    if(Distance1<=1.5){
   if(L1bool==false && bPress==false){
   Button1.position.x +=0.18;
   Pressed();
   L1bool=true;
//DOOR1
   Door1.Open1=ChangeDoor(Door1.Open1);
//DOOR3
   Door3.Open3=ChangeDoor(Door3.Open3);  
    }  
   else{if(L1bool==true&& bPress==false){
   Button1.position.x -=0.18;
   Pressed();
   L1bool=false;
   //DOOR1
   Door1.Open1=ChangeDoor(Door1.Open1);
//DOOR3
   Door3.Open3=ChangeDoor(Door3.Open3); 
   }
   }
   }
   
   
//BUTTON2 
    if(Distance2<=1.5){
   if(L2bool==false && bPress==false){
   Button2.position.x +=0.18;
   Pressed();
   L2bool=true;
   
   //DOOR2
   Door2.Open2=ChangeDoor(Door2.Open2); 
   //DOOR3
   Door3.Open3=ChangeDoor(Door3.Open3); 
   
   }
   else{if(L2bool==true && bPress==false){
   Button2.position.x -=0.18;
   Pressed();
   L2bool=false;
   
   //DOOR2
   Door2.Open2=ChangeDoor(Door2.Open2); 
   //DOOR3
   Door3.Open3=ChangeDoor(Door3.Open3); 
   
   }
   }
   }
//BUTTON3 
    if(Distance3<=1.5){
   if(L3bool==false && bPress==false){
   Button3.position.x +=0.18;
   Pressed();
   L3bool=true;
   
   //DOOR1
   Door1.Open1=ChangeDoor(Door1.Open1); 
   //DOOR2
   Door2.Open2=ChangeDoor(Door2.Open2); 
   
   }
   else{if(L3bool==true && bPress==false){
   Button3.position.x -=0.18;
   Pressed();
   L3bool=false;
   
   //DOOR1
   Door1.Open1=ChangeDoor(Door1.Open1); 
   //DOOR2
   Door2.Open2=ChangeDoor(Door2.Open2); 
   
   }
   }
   }
//BUTTON4
   if(Distance4<=1.5){
   if(L4bool==false && bPress==false){
   Button4.position.x +=0.18;
   Pressed();
   L4bool=true;
  
    
    //DOOR1
   Door1.Open1=ChangeDoor(Door1.Open1); 
   //DOOR4
   Door4.Open4=ChangeDoor(Door4.Open4); 
    
    }else{if(L4bool==true && bPress==false){
   Button4.position.x -=0.18;
   Pressed();
   L4bool=false;
    
   //DOOR1
   Door1.Open1=ChangeDoor(Door1.Open1); 
   //DOOR4
   Door4.Open4=ChangeDoor(Door4.Open4); 
            
} 
}
}
//BUTTON5
 if(Distance5<=2 && !pressed){
 		pressed = true;
 		Button5.position.x += 0.15;
 		Delay();
 }
 
 if((Distance6 <= 1.5) && (playerController.count == 4)){
 	Button6.position.z += 0.3;
 	Application.LoadLevel("Finish");
 }
}
}

function Delay(){
L5bool=true;

 yield WaitForSeconds(time_);
 Elevator1.Up1=true;
 yield WaitForSeconds(time_);
 Elevator1.Up1=false;
 yield WaitForSeconds(time_);
 Elevator2.Up2=true;
 yield WaitForSeconds(time_);
 Elevator2.Up2=false;
 yield WaitForSeconds(time_);
 Elevator3.Up3=true;
 yield WaitForSeconds(time_);
 Elevator3.Up3=false;
 yield WaitForSeconds(time_);
 Elevator4.Up4=true;
 yield WaitForSeconds(time_);
 Elevator4.Up4=false;
 L5bool=false;
 Button5.position.x -= 0.15;
 pressed = false;
 
}

function Pressed(){
 bPress=true;
 yield WaitForSeconds(0.25);
 bPress=false;

}


