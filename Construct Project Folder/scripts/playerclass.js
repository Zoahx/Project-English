var curEnemy;


function LoadPlayerData(runtime)
{ 

if(playerJob === "Warrior")
	
		{
		if(runtime.globalVars.PlayerLevel === 1)
		
			{
				playerHP = 150;
				playerAtk = 12;
				runtime.globalVars.MP = 1
			}
		
		if(runtime.globalVars.PlayerLevel === 2)
		
			{
				playerHP = 200;
				playerAtk = 24;
				runtime.globalVars.MP = 1
			}
			
		if(runtime.globalVars.PlayerLevel === 3)
		
			{
				playerHP = 250;
				playerAtk = 36;
				runtime.globalVars.MP = 1
			}
			
		if(runtime.globalVars.PlayerLevel === 4)
		
			{
				playerHP = 300;
				playerAtk = 48;
				runtime.globalVars.MP = 1
			}
		
		}


if(playerJob === "Knight")
	
			
		{
		if(runtime.globalVars.PlayerLevel === 1)
		
			{
				playerHP = 180;
				playerAtk = 10;
				runtime.globalVars.MP = 1
			}
		
		if(runtime.globalVars.PlayerLevel === 2)
		
			{
				playerHP = 230;
				playerAtk = 15;
				runtime.globalVars.MP = 1
			}
			
		if(runtime.globalVars.PlayerLevel === 3)
		
			{
				playerHP = 350;
				playerAtk = 20;
				runtime.globalVars.MP = 2
			}
			
		if(runtime.globalVars.PlayerLevel === 4)
		
			{
				playerHP = 400;
				playerAtk = 25;
				runtime.globalVars.MP = 2
			}
		
		}

if(playerJob === "Mage")
	
		{
		if(runtime.globalVars.PlayerLevel === 1)
		
			{
				playerHP = 150;
				playerAtk = 10;
				runtime.globalVars.MP = 2
			}
		
		if(runtime.globalVars.PlayerLevel === 2)
		
			{
				playerHP = 170;
				playerAtk = 20;
				runtime.globalVars.MP = 3
			}
			
		if(runtime.globalVars.PlayerLevel === 3)
		
			{
				playerHP = 200;
				playerAtk = 30;
				runtime.globalVars.MP = 4
			}
			
		if(runtime.globalVars.PlayerLevel === 4)
		
			{
				playerHP = 250;
				playerAtk = 35;
				runtime.globalVars.MP = 5
			}
	
	
		}

}
