// condition for 2 button
function instantResult() {
  valueForConditionalButton = 1;
  All_Counts(valueForConditionalButton);
}

function detailsResult() {
  valueForConditionalButton = 2;
  All_Counts(valueForConditionalButton);
}


// count all
function All_Counts(valueForConditionalButton) {
  var TextVar = document.getElementById('User_Enter').value;

  if (TextVar.length == 0) {
    document.getElementById('User_Enter').focus();
    alert("Sorry cannot be empty");
  } 
  else {
    var splitString = TextVar.split(" ");

    var splitLength = splitString.length;

    // article count
    var i, aCount = 0, anCount = 0, theCount = 0;
    for (i = 0; i < splitLength; i++) {
      if (splitString[i] == 'a') {
        aCount++;
      }

      if (splitString[i] == 'an') {
        anCount++;
      }

      if (splitString[i] == 'the') {
        theCount++;
      }
    }
    var totalArticle = aCount + anCount + theCount;

    // preposition count
    var j, prepCount = 0;
    for (j = 0; j < splitLength; j++) {
      if(splitString[j] == 'of' || splitString[j] == 'with' || splitString[j] == 'at' || splitString[j] == 'from' || splitString[j] == 'into' || splitString[j] == 'during' || 
      splitString[j] == 'including' || splitString[j] == 'until' || splitString[j] == 'against' || splitString[j] == 'among' || splitString[j] == 'despite' || splitString[j] == 'towards' || 
      splitString[j] == 'upon' || splitString[j] == 'to' || splitString[j] == 'in' || splitString[j] == 'for' || splitString[j] == 'on' || splitString[j] == 'by' || 
      splitString[j] == 'about' || splitString[j] == 'through' || splitString[j] == 'over' || splitString[j] == 'before' || splitString[j] == 'between' || splitString[j] == 'after' || 
      splitString[j] == 'since' || splitString[j] == 'without' || splitString[j] == 'under' || splitString[j] == 'within' || splitString[j] == 'along' || splitString[j] == 'beyond' || 
      splitString[j] == 'out' || splitString[j] == 'around' || splitString[j] == 'off' || splitString[j] == 'above') {
        prepCount++;
      }
    }

    // interjection count
    var k, interjectionCount = 0, emotionDetect = 0;
    for (k = 0; k < splitLength; k++) {
      if(splitString[k] == 'ah' || splitString[k] == 'ah!' || splitString[k] == 'aah' || splitString[k] == 'aah!') {
        interjectionCount++;  // surprise
        emotionDetect = 1;
      }
      if(splitString[k] == 'alas' || splitString[k] == 'alas,') {
        interjectionCount++;  // grief or pity
        emotionDetect = 2;
      }
      if(splitString[k] == 'aww' || splitString[k] == 'aww,') {
        interjectionCount++;  // sorry
        emotionDetect = 3;
      }
      if(splitString[k] == 'bravo' || splitString[k] == 'bravo,') {
        interjectionCount++;  // approval
        emotionDetect = 4;
      }
      if(splitString[k] == 'hmm' || splitString[k] == 'hmm!') {
        interjectionCount++;  // hesitation
        emotionDetect = 5;
      }
      if(splitString[k] == 'hey') {
        interjectionCount++;  // attention
        emotionDetect = 6;
      }
      if(splitString[k] == 'hi' || splitString[k] == 'hi!') {
        interjectionCount++;  // greeting
        emotionDetect = 7;
      }
      if(splitString[k] == 'hurrah' || splitString[k] == 'hurrah!') {
        interjectionCount++;  // joy
        emotionDetect = 8;
      }
      if(splitString[k] == 'ooh' || splitString[k] == 'ooh!' || splitString[k] == 'oh' || splitString[k] == 'oh!' || splitString[k] == 'wow' || splitString[k] == 'wow!') {
        interjectionCount++;  // amazement
        emotionDetect = 9;
      }
      if(splitString[k] == 'oops' || splitString[k] == 'oops!' || splitString[k] == 'ops' || splitString[k] == 'ops!') {
        interjectionCount++;  // mistakes
        emotionDetect = 10;
      }
      if(splitString[k] == 'oww' || splitString[k] == 'oww,') {
        interjectionCount++;  // pain
        emotionDetect = 11;
      }
      if(splitString[k] == 'bye' || splitString[k] == 'bye!') {
        interjectionCount++;  // farewell or good bye
        emotionDetect = 12;
      }
    }

    // for print instant
    if(valueForConditionalButton == 1) {
      document.getElementById('word_string').innerHTML = "YOUR INPUTED SENTENCE IS: " + TextVar + ".";
      document.getElementById('article').innerHTML = "Number of article : " + totalArticle;
      document.getElementById('preposition').innerHTML = "Number of preposition : " + prepCount;
      document.getElementById('interjection').innerHTML = "Number of interjection : " + interjectionCount;
      document.getElementById('vowels').innerHTML = "Number of Vowels : " + vowel_count(TextVar);
      document.getElementById('consonants').innerHTML = "Number of Consonants : " + consonants_count(TextVar);
      document.getElementById('space').innerHTML = "Number of space : " + space_count(TextVar);
      document.getElementById('digit').innerHTML = "Number of digit : " + digit_count(TextVar);
    }
    // for print emotion
    else if(valueForConditionalButton == 2) {
      if(emotionDetect == 1) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Surprizing'";
      }
      else if(emotionDetect == 2) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Sorrowful'";
      }
      else if(emotionDetect == 3) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Sorry'";
      }
      else if(emotionDetect == 4) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Approval'";
      }
      else if(emotionDetect == 5) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Hesitation'";
      }
      else if(emotionDetect == 6) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Attention'";
      }
      else if(emotionDetect == 7) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Greetingful'";
      }
      else if(emotionDetect == 8) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Joyful'";
      }
      else if(emotionDetect == 9) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Amazing'";
      }
      else if(emotionDetect == 10) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Mistakes'";
      }
      else if(emotionDetect == 11) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Painful'";
      }
      else if(emotionDetect == 12) {
        document.getElementById('emotion').innerHTML = "Your Emotion/Feeling Is: 'Farewell / Good-bye'";
      }
      else {
        document.getElementById('emotion').innerHTML = "No Emotion/Feeling Detect";
      }
    }
  }
}

// vowel count
function vowel_count(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}

// consonent count
function consonants_count(str1) {
  var consonant_list = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  var c_count = 0;

  for (var x = 0; x < str1.length; x++) {
    if (consonant_list.indexOf(str1[x]) !== -1) {
      c_count += 1;
    }
  }
  return c_count;
}

// space count
function space_count(str1) {
  var space_list = ' ';
  var s_count = 0;

  for (var x = 0; x < str1.length; x++) {
    if (space_list.indexOf(str1[x]) !== -1) {
      s_count += 1;
    }
  }
  return s_count;
}

// digit count
function digit_count(str1) {
  var digit_list = '0123456789';
  var s_count = 0;

  for (var x = 0; x < str1.length; x++) {
    if (digit_list.indexOf(str1[x]) !== -1) {
      s_count += 1;
    }
  }
  return s_count;
}