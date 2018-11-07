        AFRAME.registerComponent('starting',{
            init: function(){
                let sceneEl = document.querySelector('a-scene'); 
                setTimeout(function(){
                    let visGroup = document.querySelector('#modelWrap');
                    console.log('suhhh bish');
                    visGroup.setAttribute('visible', 'true');
                }, 3000);
                }
        }); 
