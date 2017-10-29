var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var randomIndex = Math.floor(Math.random()*array.length);
  return array[randomIndex];
}

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk.' +
	'When they got to :inserty:, they stared in horror for a few moments,' +
	'then :insertz:. Bob saw the whole thing, but he was not surprised —' + 
	':insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted',
	'melted into a puddle on the sidewalk',
	'turned into a slug and crawled away'];

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  
  // here we call replace twice to replace ':insertx'
  // with 'xItem' because each call replace exactly on occurene of ':insertx'
  // and we have two of them in 'newStory'.
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', yItem);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.071429) + ' stones';
    var temperature =  Math.round((94 - 32) * 0.5556) + ' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 farenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);