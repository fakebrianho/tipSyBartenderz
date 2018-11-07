        AFRAME.registerComponent('ceilings',{
            init: function(){
                let sceneEl = document.querySelector('a-scene'); 
                for(let xPos = -10; xPos < 20; xPos = xPos + 10){
                    for(let zPos = 0; zPos < 20; zPos = zPos + 10){
                        let flr = document.createElement('a-plane');
                        flr.setAttribute('src', '#barFloor'); 
                        flr.setAttribute('height', 10);
                        flr.setAttribute('width', 10);
                        flr.setAttribute('position', {x: xPos,  y: 5, z: zPos});
                        flr.setAttribute('rotation',{x: 90, y: 0, z: 0});
                        sceneEl.appendChild(flr);
                    }
                } 
            } 
        }); 
