#pragma strict
var aTexture : Texture;
	function OnGUI() {
		if(!aTexture){
			Debug.LogError("Assign a Texture in the inspector.");
			return;
		}
		if(playerController.count == 1){
			GUI.DrawTexture(new Rect(0,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
		}else if(playerController.count == 2){
			GUI.DrawTexture(new Rect(0,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			GUI.DrawTexture(new Rect(30,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
		}else if(playerController.count == 3){
			GUI.DrawTexture(new Rect(0,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			GUI.DrawTexture(new Rect(30,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			GUI.DrawTexture(new Rect(60,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
		}else if(playerController.count == 4){
			GUI.DrawTexture(new Rect(00,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			GUI.DrawTexture(new Rect(30,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			GUI.DrawTexture(new Rect(60,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			GUI.DrawTexture(new Rect(90,0,30,30), aTexture, ScaleMode.ScaleToFit, true, 1);
			}
	}
	