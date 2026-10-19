# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. The website presents information about me, my programming skills, my projects, and a contact form.

## 2. HTML Structure

The website is organized using semantic HTML elements.

### Header and Navigation

The header contains my name, a short description, navigation links, and a theme toggle button. The navigation links allow users to move directly to different sections of the page.

### About Me

The About Me section contains a short introduction and a personal tagline.

### Skills

The Skills section displays programming languages using an unordered list.

### Projects

The Projects section contains three projects:

1. Smart Mailbox
2. Digital Traffic Light System
3. E-Waste Management System

Each project includes a title, image, and short description.

### Contact

The Contact section contains a form with fields for:

- Name
- Email
- Message

## 3. CSS Styling

CSS is stored in `css/styles.css`.

Flexbox is used to organize elements such as the skills list, project cards, navigation on smaller screens, and the contact form.

The project cards use flexible sizing so that they can adjust according to the screen width.

## 4. Responsive Design

A CSS media query is used to modify the layout when the screen width is 768 pixels or smaller.

On smaller screens:

- Navigation links are displayed vertically.
- Project cards use the full available width.
- Padding is reduced to better fit smaller screens.

The website was tested by resizing the browser and using browser developer tools.

## 5. JavaScript Features

JavaScript is stored in `js/script.js`.

### Dark and Light Mode

The theme toggle button uses an event listener to detect when it is clicked. JavaScript toggles a `dark-mode` class on the body element.

The button text also changes according to the current theme. When Dark Mode is active, the button displays "Light Mode", and when Light Mode is active, it displays "Dark Mode".

### Back to Top Button

The Back to Top button is initially hidden. JavaScript monitors the user's scrolling position and displays the button after the user scrolls more than 300 pixels.

When the button is clicked, the page smoothly scrolls back to the top.

## 6. Testing

The website was tested to verify:

- Navigation links work correctly.
- Project images are displayed.
- Dark and Light Mode work correctly.
- The theme button text changes correctly.
- The Back to Top button appears after scrolling.
- The Back to Top button scrolls smoothly to the top.
- The layout adapts to desktop, tablet, and mobile screen sizes.