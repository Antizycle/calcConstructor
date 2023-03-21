Calculator Constuctor

Goal: develop a responsive calculator consturctor react app with drag and drop functionality

What it does and how it works: 
   There are two boxes on the screen. Intitially left one (itemBox) is rendered full
   of buttons using buttons config file (id, size, position, type, action). User
   can drag and drop buttons back and forth. Drop position is calculated depending
   on pointer position inside of a reciver box and its own size.
   User should not be able to drop a button on themself, other buttons or outside of 
   the two boxes. And also be able to slightly adjust position within one box.
   When user is satisfied with buttons layout he can switch mode to Calculator and
   actually do some calculations (with logic as close as to basic W10 calculator)
   without ability to move buttons around. Switching back to Constructor mode should
   disable ability to calculate and enable back the drag and drop functionality.
   Page layout should be responsive.

Using: Node.Js; Webpack 5 (with SASS, min-css-extract-plugin, html-webpack-plugin,
       devserver), SASS, React, Typescript

Progress Log:
2. Drag and drop functionality complete. Drop position is calculated from a target box
   page offset and size, and button page offset and size. And then converted to
   percentage of target box. This is done to preserve responsive behaviore

1. Basic Layout and Intial rendering of buttons in itemBox - complete. Next Step - 
   add ability to drag'n'drop buttons

