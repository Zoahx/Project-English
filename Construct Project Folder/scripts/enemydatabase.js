var curEnemy;


function LoadEnemyData(runtime)
{ 



	if(curEnemy === "AxeMan")
	{
		enemyHP = 150;
		enemyAtk = 10;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString();
		
	}


	if(curEnemy === "Mandrake")
	{

		enemyHP = 90;
		enemyAtk = 5;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString();

	}
	
		

	if(curEnemy === "Cactus")
	{

		enemyHP = 250;
		enemyAtk = 20;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString();

		
	}
	
	if(curEnemy === "Lizard")
	{

		enemyHP = 125;
		enemyAtk = 5;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString()

	}

	if(curEnemy === "Wolf")
	{

		enemyHP = 200;
		enemyAtk = 15;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString()

	}

	if(curEnemy === "Snake")
	{

		enemyHP = 150;
		enemyAtk = 12;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString()

	}

	if(curEnemy === "King")
	{

		enemyHP = 125;
		enemyAtk = 15;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString()

	}

	if(curEnemy === "Cave")
	{

		enemyHP = 125;
		enemyAtk = 25;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString()

	}
	
	if(curEnemy === "RedBull")
	{

		enemyHP = 300;
		enemyAtk = 25;
		runtime.objects.HitpointCounter.getFirstInstance().text = enemyHP.toString()

	}
}
