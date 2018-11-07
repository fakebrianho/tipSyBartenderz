var counter = 60000;
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
                },
            tick: function(){
                let sceneEl = document.querySelector('a-scene');
                let text = document.querySelector('#txt');
                counterString = counter.toString();
                counter = counter - 1;
                text.setAttribute('text-geometry', 'value: ' + counterString);
                console.log(counterString);
            }

}); 

AFRAME.registerComponent('umUmUmUm', {
        play: function () {
          this.el.addEventListener('grab-start', function (evt) {
                console.log('yesss');
          })
        }
})
