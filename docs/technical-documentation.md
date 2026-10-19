# Technical Documentation

## 1. Project Overview

This project is a responsive and interactive personal portfolio website developed using HTML, CSS, and JavaScript.

Assignment 2 extends the original portfolio by adding project filtering, contact form validation, theme preference persistence, and smooth visual transitions.

## 2. HTML Structure

The website uses semantic HTML elements to organize its content.

### Header and Navigation

The header contains my name, a short description, navigation links, and a theme toggle button.

### About Me

The About Me section contains a short introduction and personal tagline.

### Skills

The Skills section displays programming languages using an unordered list.

### Projects

The Projects section contains three projects:

1. Smart Mailbox
2. Digital Traffic Light System
3. E-Waste Management System

Each project includes a title, image, and description.

Project cards also contain `data-category` attributes used for filtering.

### Contact

The Contact section contains a form with Name, Email, and Message fields.

A feedback element displays validation messages after submission.

## 3. CSS Styling

CSS is stored in `css/styles.css`.

The website uses a pink, dusty mauve, and sage green color palette.

Flexbox is used to organize the skills list, project cards, contact form, and mobile navigation.

Separate CSS rules define the appearance of light and dark modes.

### Smooth Transitions

CSS transitions are applied to the page background, text, header, project cards, buttons, and form elements.

These transitions make switching between themes smoother.

The `scroll-behavior: smooth` property is used for smooth navigation between sections.

## 4. Responsive Design

A CSS media query adjusts the layout when the screen width is 768 pixels or smaller.

On smaller screens:

- Navigation links are displayed vertically.
- Project cards use the full available width.
- Padding is reduced to fit smaller screens.

## 5. JavaScript Features

JavaScript is stored in `js/script.js`.

### 5.1 Dark and Light Mode

An event listener detects clicks on the theme toggle button.

JavaScript adds or removes the `dark-mode` class from the body element.

The button text changes depending on the active theme.

### 5.2 Theme Preference Persistence

The selected theme is saved in browser localStorage.

When the page loads, JavaScript checks the saved preference and restores dark mode if it was previously selected.

### 5.3 Back to Top Button

The Back to Top button appears when the user scrolls more than 300 pixels down the page.

Clicking the button smoothly scrolls to the top.

### 5.4 Project Filtering

The Projects section contains three filter buttons:

- All
- Hardware
- Software

JavaScript reads the selected button's `data-filter` value and compares it with each project's `data-category` attribute.

Matching projects remain visible, while nonmatching projects are hidden.

The E-Waste Management System project belongs to both the Software and Hardware categories.

### 5.5 Contact Form Validation

The contact form uses JavaScript to validate user input before accepting a demonstration submission.

Validation includes:

- Checking that all fields are filled.
- Checking the email input's format.
- Rejecting email addresses containing spaces.

If validation fails, an error message is displayed.

If validation succeeds, a success message is displayed and the form fields are cleared.

The form uses `novalidate` so that JavaScript controls the feedback messages.

The feedback element uses `role="status"` and `aria-live="polite"` to improve accessibility.

The form does not send data to a backend server.

## 6. Error Handling and User Feedback

The website provides feedback for invalid contact form submissions.

If required fields are empty, the user receives a message requesting that all fields be completed.

If the email format is invalid, the user receives an email validation message.

Successful validation displays a confirmation message.

## 7. Testing

The following checks should be performed before final submission:

- Navigation links move to the correct sections.
- Project images display correctly.
- Project filters show the correct projects.
- Dark and Light Mode work correctly.
- The selected theme remains after refreshing the page.
- Empty contact form fields display an error.
- Invalid email input displays an error.
- Valid form input displays a success message.
- The Back to Top button works correctly.
- Theme transitions and smooth scrolling work correctly.
- The layout adapts to desktop, tablet, and mobile screen sizes.

Only report these checks as completed after testing them.