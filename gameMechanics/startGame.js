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

AFRAME.registerComponent('umUmUmUm', {
        play: function () {
          this.el.addEventListener('grab-start', function (evt) {
                console.log('yesss');
          })
        }
})