# **Calculator Constructor**
## **Using:** 
Node.Js, Webpack 5 (with SASS, min-css-extract-plugin, html-webpack-plugin, devserver), SASS, React, Typescript

### **Goal:**
Develop a responsive calculator constructor react app with drag and drop functionality

### **Expected behavior:**
There are two boxes on the screen. Initially one with a calculator buttons and the other - empty.  
User can drag and drop buttons back and forth. Drop position is calculated depending on the pointer position inside of a receiver box and its own size.  
User should be able to drop a button anywhere inside of the two boxes without it going over the edges of a box (button overlapping is allowed).  
When a user is satisfied with button layout he can switch mode to Calculator and actually do some calculations (with logic as close as to basic W10 calculator) without the ability to move buttons around.  
Switching back to Constructor mode should disable the ability to calculate and enable back the drag and drop functionality.  
Page layout should be responsive. Drag and drop feature should work with touch devices.  
### **Progress Log:**
#6. Few tweaks on the caclResult function.  
Still some visual bugs persist, but calculation go as expected

#5. Add github action to build and deploy on github-pages.

#4. Visual overhaul.  
Fixed inability to use calc actions if input string is empty (initial state). 
Removed possibility to perform calculations on NaN and Infinity :)  
Next steps - fix mobile drag and drop, caclResult function refactoring.  
Possible new features: button alignment, double click moves button to the opposite box (coordinates random or as in initial config?).  

#3. The Mode toggler implemented. Calculator works as intended with a few edge case quirks.  
Need to refactor calculation function. It's a bit unruly and hard to  understand with all the conditions.  
Next steps - refactoring and styling.

#2. Drag and drop functionality complete. Drop position is calculated from a target box page offset and size, and button page offset and size. And then  converted to percentage of the target box. This is done to preserve responsive behavior.  
Next steps - mode switching and calculator mode.

#1. Basic Layout and Initial rendering of buttons in itemBox - complete.  
   Next Step - add ability to drag'n'drop buttons

### **TODO:**
- [x] Add touch and drop
- [ ] Fix touch and drop (issue #2)
- [ ] Fix issue #1
- [ ] Find and fix edge case calculation quirks
- [ ] Increase precision of a drop position
- [ ] Refactor calcResult function
- [ ] (Optional) Add button alignment 
- [ ] (Optional) Double click/tap moves button to the other box 

### **Known Issues:**
1. The Calc Result element can be touch and dropped only by picking it up by small margin between its boundaries and input elements (and rather impossible to do so on mobile screen).
2. Touch and drop on mobile screen is rather unruly with how elements are positioned on a small screen