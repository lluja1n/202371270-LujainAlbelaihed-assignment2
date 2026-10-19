# 202371270-LujainAlbelaihed-assignment2

# Personal Portfolio Website

## Project Overview

This project is a responsive and interactive personal portfolio website developed for SWE 363 Assignment 2.

It is an improved version of my Assignment 1 portfolio, which was originally created to introduce myself, present my programming skills, showcase my projects, and provide a contact form.

For Assignment 2, I added more interactive features using JavaScript, improved the website's appearance, and implemented data persistence and input validation to improve the user experience.

The website is developed using HTML, CSS, and JavaScript without any external frameworks.

## Features

### 1. About Me Section

The About Me section introduces me and provides a short description of my background and interests.

### 2. Skills Section

The Skills section displays my programming languages and technical skills in a flexible layout that adjusts to different screen sizes.

### 3. Projects Section

The Projects section showcases three projects:

- **Smart Mailbox:** A hardware-related project.
- **Digital Traffic Light System:** A hardware-related project.
- **E-Waste Management System:** A project categorized under both software and hardware.

Each project is displayed in a card containing an image, title, and description.

**Interactive Project Filtering**

Visitors can filter the displayed projects using three buttons:

- **All:** Displays all projects.
- **Hardware:** Displays projects categorized as hardware.
- **Software:** Displays projects categorized as software.

The filtering is implemented using JavaScript and HTML `data-category` attributes. The project cards are updated without reloading the page.

### 4. Contact Form with Validation

The Contact section contains three input fields:

- Name
- Email
- Message

JavaScript validates the form when the user clicks the submit button.

The form checks whether all fields are completed and whether the email address has a valid format.

If the input is invalid, an error message is displayed explaining the problem.

If the input is valid, a success message appears and the form fields are cleared.

**Note:** The contact form is a demonstration feature. It performs client-side validation but does not send messages to a server or email address.

### 5. Dark and Light Mode

The website includes a theme toggle button that allows visitors to switch between light and dark mode.

The button label changes based on the selected theme.

The website uses a pink, dusty mauve, and sage green color palette in light mode, with darker plum colors in dark mode.

### 6. Theme Preference Persistence

The selected theme is saved using the browser's `localStorage`.

When the website is refreshed or reopened in the same browser, the saved theme preference is restored.

This allows visitors to keep their preferred appearance without selecting it again.

### 7. Smooth Scrolling and Transitions

The website includes smooth scrolling when navigating between sections.

CSS transitions are also used to make color changes smoother when switching between light and dark mode.

Transitions are applied to elements such as the header, project cards, buttons, and form fields.

### 8. Back to Top Button

A Back to Top button appears when the visitor scrolls more than 300 pixels down the page.

Clicking the button smoothly scrolls the page back to the top.

### 9. Responsive Design

The website is designed to work on desktop, tablet, and mobile screens.

CSS Flexbox is used to organize content, and a media query adjusts the layout on smaller screens.

For example, navigation links are displayed vertically and project cards use the full available width on smaller devices.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structures the website content and form |
| CSS3 | Styling, responsive layouts, dark mode, and transitions |
| JavaScript | Project filtering, theme switching, form validation, and scrolling interactions |
| localStorage | Saves the user's selected theme |
| Git and GitHub | Version control and project management |

## How to Run

The website does not require installation of external libraries or packages.

1. Clone the repository using Git, or download it as a ZIP file.
2. Open the project folder.
3. Locate the `index.html` file.
4. Open `index.html` in a web browser.
5. Use the navigation links to explore the website.

The website can run locally without a backend server.

## How to Use the Interactive Features

**Project Filtering**

1. Navigate to the Projects section.
2. Click All, Hardware, or Software.
3. The displayed project cards will update according to the selected category.

**Theme Toggle**

1. Click the Dark Mode button to switch to dark mode.
2. Click Light Mode to return to light mode.
3. Refresh the page to see that the selected theme is saved.

**Contact Form**

1. Navigate to the Contact section.
2. Enter a name, email address, and message.
3. Click the submit button.
4. A feedback message will appear depending on whether the entered information is valid.

**Back to Top**

1. Scroll down the website.
2. The Back to Top button will appear.
3. Click the button to return to the top of the page.

## Project Structure

```text
202371270-LujainAlbelaihed-assignment2/
│
├── index.html
├── .gitignore
├── README.md
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
│
└── docs/
    ├── technical-documentation.md
    └── ai-usage-report.md
```

**File Descriptions**

- `index.html`: Contains the main structure and content of the portfolio.
- `.gitignore` : Specifies files and folders that Git should ignore, preventing unnecessary files from being tracked in the repository.
- `css/styles.css`: Contains styling, responsive design, light/dark themes, and transitions.
- `js/script.js`: Implements the interactive JavaScript features.
- `assets/images/`: Contains images used in the Projects section.
- `docs/technical-documentation.md`: Explains the website's structure, implementation, and testing.
- `docs/ai-usage-report.md`: Documents AI assistance used during Assignment 2.
- `README.md`: Provides an overview of the project and instructions for using it.

## Testing

The website can be tested using the following scenarios:

| Feature | Test | Expected Result |
|---|---|---|
| Navigation | Click a navigation link | Page scrolls to the selected section |
| Project Filtering | Click Hardware | Only hardware-related projects appear |
| Project Filtering | Click Software | Software-related projects appear |
| Project Filtering | Click All | All three projects appear |
| Theme Toggle | Switch to dark mode | Website changes to the dark theme |
| Theme Persistence | Refresh after selecting dark mode | Dark mode remains selected |
| Form Validation | Submit empty fields | An error message appears |
| Form Validation | Enter an invalid email | An email validation error appears |
| Form Validation | Submit valid input | A success message appears and fields are cleared |
| Back to Top | Scroll down and click the button | Page returns to the top |
| Responsive Design | Resize the browser window | Layout adjusts to the screen size |

## Limitations

- The contact form does not send messages to a server.
- Form validation is performed on the client side only.
- Project information is currently stored directly in the HTML rather than retrieved from a database.
- Theme preferences are stored locally in the browser and are not synchronized across devices.

## Documentation

Additional documentation is available in the `docs/` folder.

- **Technical Documentation:** Describes the website's structure, CSS styling, JavaScript implementation, and testing.
- **AI Usage Report:** Records AI tools, assistance provided, modifications, and verification.

## AI Usage

ChatGPT (GPT-6) was used during development to explain concepts, suggest code, troubleshoot problems, review styling decisions, and assist with documentation.

AI suggestions were reviewed and adjusted before being incorporated into the website. Some suggestions were modified or rejected to maintain the original structure and preferred design.

Detailed information about AI assistance is available in `docs/ai-usage-report.md`.

## Author

**Lujain Albelaihed**  
**Student ID:** 202371270  
**Course:** SWE 363 — Web Engineering  
**University:** King Fahd University of Petroleum and Minerals (KFUPM)