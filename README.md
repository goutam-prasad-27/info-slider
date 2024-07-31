**Info Slider**

This is a basic HTML, CSS, and Javascript code for an info slider showcasing images with descriptions.

**Features:**

-    Displays images with titles, descriptions, and author information.
-    Includes a thumbnail navigation bar for easy switching between slides.
-    Uses buttons to navigate through the slides.
-    Implements a smooth transition effect when switching slides.

**Dependencies:**

-    This code relies on external CSS files (`style.css`) and potentially image files (`images/*`) that are included here. Make sure you have those files in the same directory.

**Explanation of the Code:**

-    **HTML Structure:**
     -    The code uses basic HTML elements to define the structure of the webpage, including a header for navigation, a main content section displaying the slider, and a thumbnail navigation bar.
     -    Each slide within the content section is wrapped in a separate `div` element with classes for styling.
-    **CSS Styling:**
     -    The `style.css` file defines the styles for the webpage elements like fonts, colors, layout, and positioning.
     -    It utilizes variables for colors and fonts for better maintainability.
-    **JavaScript Functionality:**

     -    The included Javascript code handles functionalities like:

          -    Implementing the logic for navigating between slides using the buttons and thumbnails.
          -    Creating the smooth transition effect when switching slides.

     -    Here's a breakdown of the key functionalities:
          -    **Variable Declarations:**
               -    Selects elements from the HTML using document.querySelector and document.getElementById for easier access.
               -    Defines variables for time intervals used in animation.
          -    **Event Listeners:**
               -    Attaches click events to the "next" and "prev" buttons to trigger the `showSlider` function with the direction ("next" or "prev").
          -    **Auto Slider:**
               -    Starts an automatic slide transition using `setTimeout` after a set delay (`time.timeAutoNext`).
          -    **showSlider Function:**
               -    Handles the logic for showing the next or previous slide based on the provided type ("next" or "prev").
               -    It manipulates the DOM to move elements between the slider and thumbnail sections.
               -    Adds and removes classes ("next" or "prev") from the wrapper element to create the transition effect.
               -    Resets timers for the animation duration and auto-slider after each slide change.
