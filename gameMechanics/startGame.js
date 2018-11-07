var counter = 60000;
var countTime = false;
AFRAME.registerComponent('starting',{
            init: function(){
                let sceneEl = document.querySelector('a-scene'); 
                setTimeout(function(){
                    let text = document.querySelector('#textTitle'); 
                    text.setAttribute('visible', 'true');
                }, 2000);
                setTimeout(function(){
                    let visGroup = document.querySelector('#modelWrap');
                    visGroup.setAttribute('visible', 'true');
                }, 9000);
                }
}); 

AFRAME.registerComponent('umumumum', {
        play: function () {
          this.el.addEventListener('grab-start', function (evt) {
                countTime = true;
          })
        },
        tick: function(){
            if(countTime){
                let sceneEl = document.querySelector('a-scene');
                let text = document.querySelector('#txt');
                counterString = counter.toString();
                counter = counter - 1;
                console.log(counter);
                text.setAttribute('text-geometry', 'value: ' + counterString);
    } 
        }
})

AFRAME.registerComponent('click-listener', {
  init: function () {
    var el = this.el;
        el.addEventListener('click', function () {
        countTime = true; 
    });
  },
    tick: function(){
    //if(countTime){
     //   let sceneEl = document.querySelector('a-scene');
      //  let text = document.querySelector('#txt');
       // counterString = counter.toString();
     //   counter = counter - 1;
      //  console.log(counter);
       // text.setAttribute('text-geometry', 'value: ' + counterString);
    } 
    }
});

AFRAME.registerComponent('score-track', {
    schema: {
        on: { default: 'click' },
    },
    update: function (oldData) {
        this.el.addEventListener(this.data.on, this.txck.bind(this));
    },
    txck: function () {
        console.log('hii'); 
    }
//    el.sceneEl.appendChild(entity);
});



