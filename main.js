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
zone2.ondrop = drop;
function drop(event){
  let itemId = event.dataTransfer.getData('id');
  var getik = localStorage.getItem('id');
  console.log(itemId);
  data = JSON.parse(getik);
  position = {};
  position.top = data.top || 0;
  position.left = data.left || 0;
  $('#text').css({
    top : position.top,
    left : position.left
  })
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