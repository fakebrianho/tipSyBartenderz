# Tipsy Bartender Documentation

Thematically the same as my original 1 button game pitch, our group project game pitch. Tipsy Bartender hasn't changed very much in terms of the concept and the base ideation though it's evolved from a 2D one button game to a 3D virtual reality web based game. 

### World Construction

At first I tried building everything manually, basically creating 20 planes and arranging them to be walls and then texturing them, then creating a 3x2 floor with the same methodology. This is of course highly inefficient and rather stupid to be honest however as I was just starting to learn to use the library and I still hadn't figured out how to use regular javascript alongside it, it was the best I could do. 

![Bad Code](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/bd.png)

Eventually I managed to figure out how to use some regular javascript scripting and I was able to condense that all into a few for loops.

![LoopyLop](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/for.png)

I thought importing the 3D models would be easy but I spent waaaaay too long working out stupid bugs with 3D models and textures and the lights and the entirity of it was far more time consuming than I planned for it to be. Eventually I settled on using google poly as they provided consistently usable models.

![1](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/1.png)
![2](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/2.png)
![3](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/3.png)
![4](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/4.png)
![5](https://github.com/w1tness/tipSyBartenderz/blob/master/Documentation/5.png)

Once I figured out the 3D models and brought them all into the sketch and properly scaled etc I began working on the physics. I used an existing physics component and integrated it into my sketch pretty quickly. Making things grabbable turned out to be a complete nightmare. I tried using the built in vive components but for some reason the vive models would never render even though they were detected. I tried a couple different components eventually settling on Super hands. Even with super hands the models wouldn't render and so I stack overflowed for a very very long time. There was only 2 existing threads about it and neither solved my problem although I found a demo from a different sketch with a different problem that taught me how to import my own models to use instead of the vive controller models. It's not all sunshine and rainbows as you'll see in the demos, the hand models are totally rotated incorrectly and I haven't been able to fix the scale nor the rotation of the models when attached to the vive controllers. At least now you can see your vive controller hands though and using the super hands component and some trial and error I was able to make the 3D models grabbable. 

I intended for a timer to start and the gameplay to start on grab but I hadn't quite figured that out so I tried a couple different iterations and event listeners. I had used a text-geometry component to create some welcome text and I figured I could perhaps manipulate it into being a score hud instead of creating an all new one. Accessing the AFRAME components inherent tick function which called every frame I was able to make a make shift timer. At first I was going to try and do a countdown from 60 seconds but then I realized I could tie in the score and the timer together. Typically 1000 ticks is equivalent to a second so instead of having my original counter being 60000 and counting down by 1 and only having it show the time, why not have that also double as your score. Your max score per round is 60000 and when the round begins the points/time start ticking down by 1 per frame and when you finish the task the timer stops and whatever time you have left is your score for the round! 

I started with my first iteration just testing event listeners and 2D interaction so I started the timer as soon as the screen is clicked. After I managed to successfully create the timer start when clicked and have it also change the ingame 3D text-geometry into a live evolving HUD I began working on the next iteration. The next iteration focused on specific clicks, so instead of clicking anywhere on the screen the bottles had to be clicked. Anyone with actual three.js experience or experience scripting in 3D arts knows that clickable objects can be a nightmare, it requires raycasting and reversing 3D projector matrixes and can be quite the hassel as the 2D XY on your screen is not the same vec3 that the object actually subsides in. After a alot of finessing and trying out different mouse components I was able to use Mayognaises A-Frame mouse cursor component and integrate that into my project making each of the bottles clickable, and having each of the bottles trigger the timer. 

The final iteration was to work the grab emission out and have the timer be triggered by the grab in real space with the vr controller. I more or less used the same existing structure and just had to make sure that I was both emitting the 'grabbed' message and also listening for it in another function. 

## Future Development:
That's as far as I got in terms of development, it doesn't seem like much but as this was all highly experimental and had very little documentation outside of the aframe.io website I was quite proud of myself. While I'm not sure if I'm going to show it at the IMA show I'm interested in continuing to develop the game. At the time of this documentation post there isn't sound integrated although I have sound files picked out. I want to finish the gameplay to have a a resolution to the scoring and then build on the story aspects I mentioned in my design document. 

## Bugs to be fixed:
There's a bug in the code where upon entering VR mode all my previous camera positions and scales are overridden and the user is teleported to 0 1.6 0 in the map, for the sake of the demos and testing mechanics I would enter VR mode, manually open the AFRAME inspector, CMD + I or ctrl + alt + I and then move the camera, hand1, hand2 controller group manually back to the bar. If the controllers aren't connected and viewable by the base stations alongside the headset when entering VR mode there doesn't seem to be a way for the game to retroactively find and connect to the controllers, the only way is to make sure the controllers are recognized by the base stations and then exit VR mode and completely refresh the page. Some minor unresolved collision issues, at times when moving around I find that models get thrown around as if hit by an invisible force. Lastly the fps can be an issue at times since the text-geometry timer is actually highly inefficient. I'm basically called a function on every frame that creates a new 3D geometry in the shape of the new time and then replaces the existing one. 

## Last things:
In the case that you're interested in play testing or taking a gander at the game try to use the HTC vive and the most up to date Firefox, also make sure that you're connected to the wifi as I used unpkg and cdn to load many of the external components.

