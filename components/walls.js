        AFRAME.registerComponent('walls',{
            init: function(){
                let sceneEl = document.querySelector('a-scene'); 
                    for(let i = -12.5; i < 17.5; i = i + 5){
                        let wall = document.createElement('a-plane');
                        wall.setAttribute('src', '#brickWall');
                        wall.setAttribute('height', 5);
                        wall.setAttribute('width', 5);
                        wall.setAttribute('position', {x: i,  y: 2.5, z: -5});
                        sceneEl.appendChild(wall);
                    }
                    
                    for(let j = -12.5; j < 17.5; j = j + 5){
                        let wall = document.createElement('a-plane'); 
                        wall.setAttribute('src', '#brickWall');
                        wall.setAttribute('height', 5);
                        wall.setAttribute('width', 5);
                        wall.setAttribute('position', {x: j,  y: 2.5, z: 15});
                        wall.setAttribute('rotation', {x:0, y:180, z:0});
                        sceneEl.appendChild(wall);
                    }
                    
                    for(let k = -2.5; k < 17.5; k = k + 5){
                        let wall = document.createElement('a-plane'); 
                        wall.setAttribute('src', '#brickWall');
                        wall.setAttribute('height', 5);
                        wall.setAttribute('width', 5);
                        wall.setAttribute('position', {x: -15,  y: 2.5, z: k});
                        wall.setAttribute('rotation', {x:0, y:90, z:0});
                        sceneEl.appendChild(wall);
                    }
                 
                    for(let m = -2.5; m < 17.5; m = m + 5){
                        let wall = document.createElement('a-plane'); 
                        wall.setAttribute('src', '#brickWall');
                        wall.setAttribute('height', 5);
                        wall.setAttribute('width', 5);
                        wall.setAttribute('position', {x: 15,  y: 2.5, z: m});
                        wall.setAttribute('rotation', {x:0, y:-90, z:0});
                        sceneEl.appendChild(wall);
                    }
                } 
        }); 
