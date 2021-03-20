# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Newman Chen

Time spent: 1.5 hours spent in total

Link to project: https://glitch.com/edit/#!/shining-topaz-amount

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![https://i.imgur.com/mvZs05Y.gif]


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
developer.mozilla.org to look up Math.random and Math.floor.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I had was debugging this submission, especially as I needed to create the more complex functions that were "extra," which were described but not handed to me. For these, not only did I need to think up 
my own code and then decide my implementation, but I also especially needed to know what exactly I had created already and how everything I had made already fit in to what was newly being created for this new 
challenge. I ran into a couple problems when trying to debug, mainly after setting up the randomly generated pattern. I encountered a situation in which I didn't know what was going on exactly—the game would, for some reason,
suddenly pause and not light up a square even though it had not ended and I had not made any mistakes. It simply just stopped working for that clue. After being perplexed for a bit and looking through some of the newer functions I 
had implemented, I began to reason and think of the best way to debug—luckily, I remembered the developer mode which would help me to debug as I had already, according to the spec, put in console.log functions that would help me in my process of 
debugging. Here, I found out that I had a bug in my use of Math.random(); namely, that I did not add 1 so that the minimum value it would generate would be a 1, as it had generated a 0 randomly, which caused a bug as that is not a valid
button to choose. Then, I decided to just add a +1 to make that the minimum value, solving my problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

A question I have about web development is mainly about how to decide such intricate, detailed, sophisticated, and nice looking graphics, websites, animations, and more. Though I realize that it is not done purely
with the base HTML/CSS tools, I'm not sure how exactly to add on more aspects of graphic designing and use more sophisticated tools, functions, graphics, etc. Where does that all fit in and 
how is it implemented exactly?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

One thing I would add on to this project would be to make it look more presentable, namely doing some work and research into figuring out what colors would make my game look nice and appealing to provide the best user experience.
In terms of code, I would add on more functions such as perhaps a score counter and then a high score function with some global variables to always let the user know just how far they've gotten in the past and their highest score up to date.
Then, I could implement a version where it just keeps on going forever; that is, without a set pattern length, so that they can test just how good their memory is by playing the game until they lose, and recording all the scores that they have
onto a leaderboard, to make it a more complete and rewarding game experience.



## License

    Copyright Newman Chen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.