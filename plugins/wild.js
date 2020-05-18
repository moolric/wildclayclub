$('#grid').kinetic({
    filterTarget: function(target, e){
        if (!/down|start/.test(e.type)){
            return !(/area|a|input/i.test(target.tagName));
        }
    }
});
$('.suburb').click(function() {
    $('.modal').removeClass('hide');
});
$('.modal').click(function(e) {
    if ($(e.target).is('.modal')) {
        $('.modal').addClass('hide');
    }
});
var baseSize = 5,
    maxSize = 30,
    minSize = 3;

function increase() {
    baseSize = baseSize + 0.5 <= maxSize ? baseSize + 0.5 : baseSize;
    resize();
    console.log(baseSize);
}
function decrease() {
    baseSize = baseSize - 0.5 >= minSize ? baseSize - 0.5 : baseSize;
    resize();
    console.log(baseSize);
}
function resize() {    
    $('.grid').css({
       'grid-template-columns': 'repeat(25, '+baseSize+'vw)',
        'grid-auto-rows': baseSize+'vw',
        'grid-gap': baseSize/10+'vw'
    });
    $('.suburb').css({
        'font-size': baseSize/7+'vw',
        'padding': baseSize/10+'vw',
        'border-width': baseSize/25+'vw'
    });
    $('.label').css({
        'font-size': baseSize/3.33+'vw',
        'padding': baseSize/10+'vw',
        
    });
    $('.logo').css({
        'font-size': baseSize/1.25+'vw',
        'border-width': baseSize/10+'vw',
    });
}
$('body').on('mousewheel DOMMouseScroll', function(e){
  if(typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
    if(e.originalEvent.detail > 0) {
      console.log('Down');
        decrease();
    } else if(e.originalEvent.detail < 0){
        console.log('Up');
        increase();
    }
  } else if (typeof e.originalEvent.wheelDelta == 'number') {
    if(e.originalEvent.wheelDelta < 0) {
        console.log('Down');
        decrease();
    } else if(e.originalEvent.wheelDelta > 0) {
        console.log('Up');
        increase();
    }
  }
});