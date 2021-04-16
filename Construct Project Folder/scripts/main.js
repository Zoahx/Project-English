//I have a scatterbrain thougth process, just leave as is
var curWord;
var words = ["MCGILL","ROSA","ACADEMY","ENGLISH"];
var addedWord;
var indexText;
var newWord;
var curWord_Arr;
var ImageText;
var guessedLetr;
var timeFound;
var winMsg;
var usedLtr;
var deletedWord;

var playerJob;
var warScore
var magScore
var defScore
var playerSpawn;
var playerHP = 120;
var playerAtk = 10;
var player;
var isFinisher = false;

var enemyAtk;
var enemyHP;
var enemy;

//var enemyHP;

var area;
///////////////////////////////////////////////////////////////


// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";


runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	//runtime.objects.Enemies.setInstanceClass(EnemyInstance);
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	runtime.addEventListener("tick", () => Tick(runtime));
	
	
		indexText = runtime.objects.IndexSpace.getFirstInstance();
		//ImageText = runtime.objects.IndexSpace.getFirstInstance();
		winMsg = runtime.objects.WinMessage.getFirstInstance();

       playerSpawn = runtime.objects.PlayerSpawn.getFirstInstance();
}


function GetCustomWord(runtime)
{
	if(runtime.globalVars.customWords == 1)
		{
			words.length = 0;
			//alert("default words cleard!")
		}
		
	addedWord = runtime.globalVars.AddedWord;
	words.push(addedWord)
	//alert("length is now " + words.length)

}

function startGame(runtime)
{
	guessedLetr = "";
	isFinisher = false
	curEnemy = runtime.globalVars.curEnemy;
	LoadPlayerData(runtime);
	
	runtime.objects.PlayerHpCounter.getFirstInstance().text = playerHP.toString();
	
	winMsg.isVisible = false;
	
   curWord = Math.floor((Math.random() * words.length) + 0);
   
   ImageText = words[curWord];
   
   
   
   //alert("the current word is " + words[curWord])
   
   for (var i = 0; i < words[curWord].length; i++ )
   {
   
         if(ImageText.charAt(i) != "_" )
		 {
		 	//curChar = curChar.charAt(i);
		 
		 	ImageText = ImageText.replace(ImageText.charAt(i), "_");
			
			
		
		 }
		 
		 if(i === words[curWord].length -1)
		 {
			
			indexText.text = ImageText;
			
		 }
		 
   }
   
   //---------------------Split and reset current word array------------------------------
   
   curWord_Arr = words[curWord].split("");

//alert("here " + curWord_Arr)


//alert("cur arr length is " + curWord_Arr.length);

for (var i = 0; i <  curWord_Arr.length; i++)
	
	{
			if( curWord_Arr[i] != "_" )
			{
				curWord_Arr[i] = "_"
			}
			
	}

//alert("here " + curWord_Arr);
   
   
   //--------------------------------------------------------------------------------------
   

   
}

function checkInput(runtime)
{  
//set guessed letter variable equal to construct gussed letter variable
guessedLetr = runtime.globalVars.guessedLtr;

var wordStr
var foundLtr = 0;

 for (var i = 0; i < words[curWord].length; i++)
 
 	 {   wordStr = words[curWord].charAt(i);
	
	     //alert(" the current letter in the index is " + wordStr)
	
	   
	   if (wordStr === guessedLetr )
	   {
	   		//alert(" the current letter in the index is " + wordStr)
			curWord_Arr[i] = guessedLetr;	   
//runtime.globalVars.FoundLtr = usedLtr;
			foundLtr += 1
	   		//ImageText = ImageText.replace(ImageText.charAt(i),curWord_Arr[i])
	   }
	   

	   
	   if(i === words[curWord].length -1)
		 { //alert(foundLtr + " found")  
		 //ImageText = curWord_Arr; 
		 
			
			if(foundLtr > 0)
			{
		 		var f = curWord_Arr.toString();
				var fnew = f.replace(/,/g, "")
		    	//alert("word array is " + curWord_Arr)
				enemyDamage(runtime);
				indexText.text = fnew; 
			
				
				if (indexText.text === words[curWord])
				{
						winMsg.isVisible = true;
						runtime.objects.Next.getFirstInstance().isEnabled = true; 
						
						if(isFinisher === true)
						{
							//LoadEnemyData(runtime); 
							runtime.goToLayout("Win");
							break;
							
						}
				}
			}
			
			//guess was wrong
			else
			{
			 playerDamage(runtime);
	   		//alert(guessedLetr + " was not found");
			return;
			}
			
		 }
		 
 	}


}



function GenerateCharacter(runtime)
{
  warScore = runtime.globalVars.WarriorScore;
  magScore = runtime.globalVars.MageScore;
  defScore = runtime.globalVars.DefenderScore;
  playerSpawn = runtime.objects.PlayerSpawn.getFirstInstance();
  
  if(warScore > magScore && warScore > defScore)
  {
     playerJob = "Warrior"
 runtime.objects.SlimeRPGAttacker.createInstance(2,playerSpawn.x,playerSpawn.y);
 player = runtime.objects.SlimeRPGAttacker.getFirstInstance();
 runtime.globalVars.PlayerJob = playerJob;
 //alert("player is " + playerJob)
	  
  }
    if(magScore > warScore && magScore > defScore)
  {
     playerJob = "Mage"
	 runtime.objects.SlimeRPGCaster.createInstance(2,playerSpawn.x,playerSpawn.y);
	 player = runtime.objects.SlimeRPGMage
	 runtime.globalVars.PlayerJob = playerJob;
	  //alert("player is " + playerJob)
  }
    if(defScore > magScore && defScore > warScore)
  {
     playerJob = "Knight"
	 runtime.objects.SlimeRPGDefender.createInstance(2,playerSpawn.x,playerSpawn.y);
		player = runtime.objects.SlimeRPGDefender
		//player.setAnimation("right");
		runtime.globalVars.PlayerJob = playerJob;
	  //alert("player is " + playerJob)
  }
}


function ReSpawn(runtime)
{ 

indexText = runtime.objects.IndexSpace.getFirstInstance();
//this references the spawn position for the player
playerSpawn = runtime.objects.PlayerSpawn.getFirstInstance();
winMsg = runtime.objects.WinMessage.getFirstInstance();
playerJob = runtime.globalVars.PlayerJob;
 

  if(playerJob === "Warrior")
  {
 runtime.objects.SlimeRPGAttacker.createInstance(2,playerSpawn.x,playerSpawn.y);

  }
  
  if(playerJob === "Knight")
  {
 runtime.objects.SlimeRPGDefender.createInstance(2,playerSpawn.x,playerSpawn.y);
 
  }
    if(playerJob === "Mage")
  {
 runtime.objects.SlimeRPGCaster.createInstance(2,playerSpawn.x,playerSpawn.y);
 
  }
  
 }
 



function playerDamage(runtime)
{
    //alert("player is dmged")
	runtime.callFunction("FlashPlayer");
	playerHP -= enemyAtk
	runtime.objects.PlayerHpCounter.getFirstInstance().text = playerHP.toString();
	if(playerHP <= 0)
  { runtime.globalVars.isGameOver = true;    runtime.goToLayout("Game Over");}
	//runtime.objects.heart.getFirstInstance().isVisible = false;

}

function enemyDamage(runtime)
{

if(isFinisher === false)
{
    //alert("enemy is dmged")
	runtime.callFunction("FlashEnemy");
	enemyHP -= playerAtk;
	runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString();
	//runtime.globalVars.Money += 100
}
	
	if(enemyHP <= 0)
	{
		enemyHP = "FINISH HIM!"
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP;
		isFinisher = true;
	}
	

}

function DeleteCustomWord(runtime)
{

deletedWord = runtime.globalVars.deletedWord_es;

alert("deleting word " + deletedWord)
	for (var i = 0; i < words.length; i++)
	{
		if(deletedWord == words[i])
		{
			alert("clearing " + words[i])
			words.splice(i);
			alert("length is now " + words.length)
		}
	}

}


