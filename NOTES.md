### Routes

Routes are declared here:

sonitus/app/routes.js

### Short-term Goals

#### Book

* ~~Setup initial repo.~~
* Create dummy content for routes.
* Working sidebar navigation with dropdown menus for different routes (as needed).
* Link sidebar nav to dummy content.
* Create ghost blog for free content.
* Create admin portion of book mode for content creators.
  * Admin page should be able to edit in markdown and see a preview pane for what it will look like when live.
* Make a list of places that could use live content examples to be done in javascript.
  
#### Comm

* Setup text chat.
* Setup WebRTC for video chat.

#### Session

* Prototype two users connected over sockets.
* Setup a basic example with 4 faders affecting four different sound files. 
  * Fader should control same fader on each users screen.
  * Fader change affects sound playback locally for each user.
  * Fader locks when user is touching it so other user can't make same movement.
* Save fader moves to XML file or a binaried XML file.
* Send full-res audio over connection (UDP?). This will be used when any user can't locally reproduce the full session.


### Future Plans

* Homepage will be a start screen that let’s one select where they want to work (textbook, comm, or session). User will also be able to declare a default choice.
* Each mode launches its own window.
* Sidebar will have buttons to launch any mode user is not currently in.
* Login on homepage, uses Facebook or Google login for now to keep our work to a minimum here.
