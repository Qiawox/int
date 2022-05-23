const zone1 =  document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const ufo = document.querySelector('#text');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop
function allowDrop(event){
  event.preventDefault();
}

ufo.ondragstart = drag;

function drag(event){
  event.dataTransfer.setData('id', event.target.id);
  var rect = ufo.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
  localStorage.setItem('id', JSON.stringify(rect));
}

zone1.ondrop = drop;
zone2.ondrop = drop1;
function drop(event){
  let itemId = event.dataTransfer.getData('id');
  var getik = localStorage.getItem('id');
  console.log(itemId);
  document.getElementById('text').style.position = 'absolute';
  document.getElementById('text').style.color = 'green';
  document.getElementById('text').style.fontSize = '72px';
  document.getElementById('text').innerHTML = 'netext - i cant make dragndrop + localstorage';
  document.getElementById('text').style.fontFamily = '"Macondo', "cursive'";
  document.getElementById('text').style.paddingTop = '100px';
  document.getElementById('text').style.transform = 'scale(1.2)';
  document.getElementById('text').style.transform = 'rotate(-5deg)';
  document.getElementById('text').style.transform = 'skewX(-50deg)';
  // document.getElementById('text').style.transform = 'skewY(-10deg)';
  document.getElementById('text').style.left = '200px';
  var local_value = getik.replace("/\n/g", "<br />");
  $('#result').html(local_value);
  // $('#text').draggable({
  //   drag: function(){
  //     getik = JSON.stringify({
  //     'top' : $(this).offset().top,
  //     'left' : $(this).offset().left,
  //     })
  //   }
  // })
  event.target.append(document.getElementById(itemId));
  // return getik ? JSON.parse(getik) : [];
}
function drop1(event){
  let itemId = event.dataTransfer.getData('id');
  var getik = localStorage.getItem('id');
  console.log(itemId);
  document.getElementById('text').style.position = 'absolute';
  document.getElementById('text').style.color = 'red';
  document.getElementById('text').style.fontSize = '72px';
  document.getElementById('text').innerHTML = 'text - i cant make dragndrop + localstorage';
  document.getElementById('text').style.fontFamily = '"Macondo', "cursive'";
  document.getElementById('text').style.paddingTop = '80px';
  document.getElementById('text').style.left = '200px';
  var local_value = getik.replace("/\n/g", "<br />");
  $('#result').html(local_value);
  // $('#text').draggable({
  //   drag: function(){
  //     getik = JSON.stringify({
  //     'top' : $(this).offset().top,
  //     'left' : $(this).offset().left,
  //     })
  //   }
  // })
  event.target.append(document.getElementById(itemId));
  // return getik ? JSON.parse(getik) : [];
}
// zone1.ondrop = handleStop;
// zone2.ondrop  = handleStop;
// function handleStop(e, data) {
  
// }