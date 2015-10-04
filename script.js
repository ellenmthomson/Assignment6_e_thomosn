//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//All code authored by Ellen Thomson except lines 60 -73, which were authored by Leah B. 
//Thanks, Leah, for explaining what's going on--I was stuck until I looked at your code, but now I think I understand.  

//////////////////////   variables   ////////////////////////////////////////////////////////////////////////////////////

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;
    



    
//////////////////////   Assignment: hile loop to display the author of each speech ///////////////////////////////////////

var i = 0;
while (i < speechesArray.length) {
  console.log ('This speech is written by ' + speechesArray[i].author);
  i++;
}





//////////////////////   Assignment:  when the user click the donate button use a FOR loop to loop instead of switch////////////

document.getElementById('BtnDonate').addEventListener('click', function(){

favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');
 
for (var i = 0; i <speechesArray.length; i++) {
	
	if(favoriteSpeechPrompt === speechesArray[i].author) {
		console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.');
	}
}
});



//////////////////////   Assignment: loop over the speeches array and use a conditional to check if the year value for each speech is less than the oldest value //// 

var oldestYear = speechesArray[0].year;
var mostRecentYear = speechesArray[0].year;

for (i = 0; i < speechesArray.length; i++) {
  
  if(speechesArray[i].year < oldestYear){
    oldestYear = speechesArray[i].year;
 
  }else if(speechesArray[i].year > mostRecentYear){
    mostRecentYear = speechesArray[i].year;
  }
} ;




///////////////////    Previous Code that executes when you click on a blue button ////////////////////////////////////////


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
    console.log('This is the most recent speech on the page.');
  }
});




