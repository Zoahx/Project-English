var ES_addedWord;
var letterOnly = /^[a-zA-Z]+$/;
var layoutID

function Capitalize(runtime)
{

	ES_addedWord = runtime.globalVars.AddedWord.toUpperCase() 

	if(ES_addedWord.match(letterOnly))
	
		{
		//alert("Only contains letters")

   	runtime.globalVars.AddedWord = ES_addedWord;
	
		return;

		}

	
	else
		{
 		alert("Please only added letters, no numbers or special characters.")
		runtime.globalVars.wordError = true;
		
		return; 
		}

}

function NextWord(runtime)
{
	playerHP += 10;
	runtime.objects.PlayerHpCounter.getFirstInstance().text = playerHP.toString();
	
	winMsg.isVisible = false;
	
	curWord = Math.floor((Math.random() * words.length) + 0);
   
   ImageText = words[curWord];
	
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

function getLayoutID(runtime)

{
	alert(runtime.layout.index)
	runtime.globalVars.curAdvLayout = runtime.layout.index
}

function hint(runtime)

{
	var curHintLetter
	var curHint

    for (var i = 0; i < indexText.text.length; i++)
	{
		curHintLetter = indexText.text.charAt(i);
		
		if( curHintLetter === "_")
		
		{
			curHint = words[curWord].charAt(i);
			runtime.globalVars.HintLetter = curHint;
			//alert("hint letter is " + curHint )	
			
			break;
		}
		
		//alert("cur hint letter is " + curHintLetter)
	}

}





