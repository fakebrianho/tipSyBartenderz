# Experimental WebVR Tipsy Bartender

I've always been a huge proponent for web based projects, whenever possible I would opt to work on projects that could live on the web and  be accessed by anyone with internet access. VR in particular is an area of interest to me because up until now, VR has almost  
primarily been something very exclusive. Many VR headsets only had developer models out, even consumer headsets were typically far out of the normal price range for the average person. Starting with the Google Cardboard and Google Daydream came the wave of truly consumer focused VR. 

While still highly experimental and very much still in its research phase, we have WebVR. Virtual reality that can be completely hosted on the web. Tipsy Bartender is a simple VR game that one, hopefully demonstrates some of the videogame design skills that we were taught in NYUSH's Creating Immersive Worlds class, and two, is made in an attempt to learn more about webVR and pushing its limits. The game is still developed around having a 6DOF controller like the vive or oculus which isn't exactly consumer friendly but hopefully it'll be something phased out with further development. 

It took a lot of hard work, talking with the few A Frame developers that are out there, scrounging for tidbits of information in barely related stackoverflow posts and a lot of passion, I hope you enjoy. 

### Prerequisites

If you actually want to experience it in VR you'll need one of the following headsets:
```
- HTC Vive with controllers and trackers
- Oculus Rift with Touch controllers
- Google Daydream with controller
- Samsung GearVR with controller
- Google Cardboard
```
And you'll need to be using one of the following WebVR enabled browser:
```
Firefox 55+ for Windows
Supermedium
Experimental builds of Chromium
Chrome for Android (Daydream)
Oculus Browser (GearVR)
Samsung Internet (GearVR)
Microsoft Edge
```
Go checkout https://webvr.rocks/ to check for compatibility among headsets, browsers and operating systems for the most updated list and the easiest infographic to understand whether you'll be able to view/play the game in its entirety. 

## Getting Started

Clone or download the repo and either navigate to the directory in terminal or command line and start a simple python server to host it, or open as normal in a text editor like webstorm that automatically hosts a local server for you. Opening the index.html file from your local machine will not work. 

Python Simple Server Option:

Mac: python -m SimpleHTTPServer 

Windows: python -m http.server

## Built With

* [A-FRAME](http://aframe.io) - WebVR Library Built on Three.js

## Versioning

2.0.1

## Authors

Brian Ho (https://github.com/w1tness)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
3D Models Courtesy of:
```
- Google Poly 
- Anna Crabbe MacGillivray (Google Poly Contributor) 
- Izzy Parkinson (Google Poly Contributor) 
- Jerad Bitner (Google Poly Contributor)
- Russell Morgan (Google Poly Contributor)
``` 

Extra Components Used:
```
https://www.npmjs.com/package/aframe-physics-system
https://www.npmjs.com/package/aframe-event-set-component
https://www.npmjs.com/package/super-hands
https://www.npmjs.com/package/aframe-text-geometry-component
```

Game Design Guidance and Instruction:

Prof. Christian Grewell

