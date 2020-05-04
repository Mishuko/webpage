function display_c(){
  var refresh = 1000;
  mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
  var t = new Date()
  var cd = new Date()

  display_c();

  document.getElementById('ct').innerHTML = cd.toLocaleString();

  if (t > cd.setHours(8,12,0)){
    document.getElementById('timeTill').innerHTML = 'Devotions start in 3 minutes.';
  }

  if (t > cd.setHours(8,15,0)){
    document.getElementById('timeTill').innerHTML = 'We are in devotions.';
  }

  if (t > cd.setHours(8,45,0)){
    document.getElementById('timeTill').innerHTML = 'First period starts in 2 minutes. ';
  }

  if (t > cd.setHours(8,47,0)){
    document.getElementById('timeTill').innerHTML = 'We are in first period.';
  }

  if (t > cd.setHours(9,47,0)){
    document.getElementById('timeTill').innerHTML = 'Second period starts in two minutes.';
  }

  if (t > cd.setHours(9,49,0)){
    document.getElementById('timeTill').innerHTML = 'We are in second period.';
  }

  if (t > cd.setHours(10,34,0)){
    document.getElementById('timeTill').innerHTML = 'Be outside for recess in 4 minutes.';
  }

  if (t > cd.setHours(10,39,0)){
    document.getElementById('timeTill').innerHTML = 'It is currently recess.';
  }

  if (t > cd.setHours(11,5,0)){
    document.getElementById('timeTill').innerHTML = 'Third period starts in 3 minutes.';
  }

  if (t > cd.setHours(11,8,0)){
    document.getElementById('timeTill').innerHTML = 'We are in third period.';
  }

  if (t > cd.setHours(11,50,0)){
    document.getElementById('timeTill').innerHTML = 'Fourth period starts in 3 minutes.';
  }

  if (t > cd.setHours(11,53,0)){
    document.getElementById('timeTill').innerHTML = 'We are in fourth period.';
  }

  if (t > cd.setHours(12,23,0)){
    document.getElementById('timeTill').innerHTML = 'Fifth period starts in 3 minutes.';
  }

  if (t > cd.setHours(12,38,0)){
    document.getElementById('timeTill').innerHTML = 'We are in fifth period.';
  }

  if (t > cd.setHours(12,56,0)){
    document.getElementById('timeTill').innerHTML = 'Upper school has lunch from 12:56 - 1:26. We are still in fifth period.';
  }

  if (t > cd.setHours(13,21,0)){
    document.getElementById('timeTill').innerHTML = 'Upper school lunch ends in five minutes. We are still in fifth period.';
  }

  if (t > cd.setHours(13,26,0)){
    document.getElementById('timeTill').innerHTML = 'Sixth period starts in 2 minutes.';
  }

  if (t > cd.setHours(13,28,0)){
    document.getElementById('timeTill').innerHTML = 'We are in sixth period.';
  }

  if (t > cd.setHours(14,13,0)){
    document.getElementById('timeTill').innerHTML = 'Seventh period starts in 2 minutes';
  }

  if (t > cd.setHours(14,15,0)){
    document.getElementById('timeTill').innerHTML = 'We are in seventh period.';
  }

  if (t > cd.setHours(15,0,0)){
    document.getElementById('timeTill').innerHTML = 'The school day is over.';
  }



}

window.onload = function() {
  display_c()
  display_ct()
}
