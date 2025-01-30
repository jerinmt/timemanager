A time manager webapp

This webapp is mainly focused on computer users rather than mobile users to be used during their work. There are 3 clock apps that can be set to different timezones. It also has a timer, a stopwatch and a notepad to help with work. The main feature is the scheduler which can be used to plan and organize work.



The devlog is given below.

14 January 2025

My second project is to help me familiarize with react.js. The project is a single page application which is a time management tool. It has current time cards which can show upto 3/4 timezones. Then a timer, a stopwatch and a notepad in the next line. A timeline scheduler where a click will start a new event block. Also reminder pins which can be added for shortduration events. The blocks should be drag and resizable with ability to have breaks in between, thus a current used blocks list will also be available at the top. The screen is divided into 5 components.

1, the time cards 

2) the tools timer, stopwatch and note. 

3) markers block and pin 

4) timeline 

5) horizontal scrollbar.

The timeline seems to be the most demanding part and in this project I will work on it last with the scrollbar and markers that interact with it. First, the other components which are easier will be done first. Decided to use prebuilt components and then tweak for this project instead of building from scratch. 
The color scheme in mind is 2 or 3 shades of grey with white and black in the timeline according to dark/light mode. The blocks will be bright neon colors. Also need to find as much differentiated colors for the blocks.

First step is to make a clock component. Got a code for that, need to see how to tweak it so that timezone can be changed and additional clock card can be added.


17 January 2025

The components of stopwatch and timer are now done(not styled). The clock for showing current time is also done. Now adding additional clocks with different time zones is left.


21 January 2025
The different time zone clock is done.
Checked different resources for a timeline but none of them felt appropriate or is over-sophisticated. Decided to create that part on my own.
My idea is to create a grid with table element or grid in html and then drag and drop elements, which I saw a code in w3schools. The grid should be 15 mins each and could have 8 rows. It also should show the different times selected via the timezone clocks if any.

24 January 2025
Instead of creating from scratch I searched once more and I got a grid that works exactly like I wanted. It was in plain javascript and html.
I tried converting to jsx but it didn't work for me and the code is very big. So I decided to make all the other components using react and build the webapp and then add the timegrid code. I tried it without any styling and it works. Now I need to create the note taking component and I have all components for my app. And I can finish it by styling and making the layout.

26 January 2025

The note component is added and the layout is set. The next step is to make it responsive even though the app is expected to be run on computer only. Once the responsiveness is added the app will be built inorder for the timeline to be added.

28 January 2025

The timeline component is added and the entire app is now running fine. Uploaded all code to Github. Also made a Github page.
Project completed.

29 January 2025

Replaced use of moment js and used offset to calculate timezones. As moment js is very big. 
 
30 January 2025

Deployed the webapp using ghpages.
