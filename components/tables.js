        AFRAME.registerComponent('tables',{
            init: function(){
                let sceneEl = document.querySelector('a-scene'); 
                let numCustomers = Math.random() * 20 - 10;
                for(let i = 0; i < numCustomers; i++){
                    let bgt = document.createElement('a-obj-model');
                    bgt.setAttribute('src', '#bgTable'); 
                    bgt.setAttribute('position', {x: Math.floor(Math.random() * 20) - 10,  y: 0, z: Math.random() * 10 - 5});
                    bgt.setAttribute('scale', {x: -0.018, y: -0.018, z: -0.018});
                    bgt.setAttribute('rotation',{x: 90, y: 0, z: 0});
                    sceneEl.appendChild(bgt);
                }
            } 
        }); 
