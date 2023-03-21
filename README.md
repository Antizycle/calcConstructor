Calculator Constructor

Goal: develop a responsive calculator constructor react app with drag and drop
      functionality

Expected behavior:
   There are two boxes on the screen. Initially one with calculator button
   and other - empty.
   User can drag and drop buttons back and forth. Drop position is calculated
   depending on the pointer position inside of a receiver box and its own size.
   User should be able to drop a button anywhere inside of the two boxes without
   it going over the edges of a box (button overlapping is allowed).
   When a user is satisfied with button layout he can switch mode to Calculator
   and actually do some calculations (with logic as close as to basic
   W10 calculator) without the ability to move buttons around.
   Switching back to Constructor mode should disable the ability to calculate and
   enable back the drag and drop functionality.
   Page layout should be responsive.

How it works:
   Two box components ('item' and 'build') are rendered separately with 
   a buttonlists for both boxes (stored in State in parent component) and 
   corresponding setState function. Initially itemBox list is filled with all 
   the buttons (described in a button config file). Each Box renders a list 
   of Buttons components according to its buttonList. Each Button receives its
   own config, drag'n'drop function (from the ItemBox component) and onClick 
   function (from the Calculator component through the ItemBox component) and 
   current mode (as boolean stored in State in the Calculator Component). Button 
   sizes are set in percentages of a parent box to ensure responsiveness.
   Current Mode boolean is used to conditionally render either onDragStart or 
   onClick functions for a button, and to enable/disable draggable attribute.
   Constructor mode:
   When a user starts to drag a button, the corresponding function sets buttonId 
   and button parentId into event.dataTransfer.
   onDrop function gets this data. Due to the fact that this function is always 
   called from a target box component it is certain that drop is happening inside 
   that box and it is not required to explicitly check if there are any other 
   buttons under a drop position. Drop position is calculated in percentage of 
   target box using target box pageOffset, dropEvent pageOffset (acquired from 
   the event object) and current sizes of box and button in pixels (acquired 
   from DOM elements object data). Furthermore drop coordinates are checked if 
   the button falls outside of a box and corrected if needed.
   Then currentButton data is copied from ButtonConfig and updated with new 
   coordinates. All is left is to update Button List State:
      if button has changed box -> remove from parent, append to target
      otherwise -> just update parent state.
   Calculator Mode:
   On button click clickHandler function is called with that button type and 
   action as arguments.
   If type is a 'number' (0-9, ., negate, bkspc), formatResultStr function 
   is invoked.
   Where the input string is formed according to the number buttons click sequence. 
   That input string is stored in Ref for further use and in State to display it 
   on the calculator display via useContext hook.
   If type is 'reset' -> caclReset function resets all calc related variables to 
   the initial values.
   If type is a 'special' or an 'action' (%, pow, sqrt and +-/*=) -> calcResult 
   is invoked. This function formats output strings, performs calculations and 
   updates state for calcResultStr and calcQueryStr.
   On the first time (or after a reset), result.current is taken from the input 
   string prepared by the formatResultStr function. All normal calculations are 
   performed on result.prev and result.cur only after a new action or an equals 
   is queued with previous normal action. Special operations are performed on 
   result.curent before any actions.

Using: Node.Js, Webpack 5 (with SASS, min-css-extract-plugin, html-webpack-plugin,
       devserver), SASS, React, Typescript

Progress Log:
4. Visual overhaul.
   Fixed inability to use calc actions if input string is empty (initial state). 
   Removed possibility to perform calculations on NaN and Infinity :)
   Next steps - fix mobile drag and drop, caclResult function refactoring.
   Possible new features: button alignment, double click moves button to the 
   opposite box (coordinates random or as in initial config?).

3. The Mode toggler implemented. Calculator works as intended with a few edge case 
   quirks. Need to refactor calculation function. It's a bit unruly and hard to 
   understand with all the conditions. Next steps - refactoring and styling.

2. Drag and drop functionality complete. Drop position is calculated from 
   a target box page offset and size, and button page offset and size. And then 
   converted to percentage of the target box. This is done to preserve responsive 
   behavior.
   Next steps - mode switching and calculator mode.

1. Basic Layout and Initial rendering of buttons in itemBox - complete. Next Step -
   add ability to drag'n'drop buttons

