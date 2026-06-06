# Elementum Landing Page – React Frontend Assignment

## Overview

This project is a React implementation of the provided Figma design for the Frontend Internship Assignment.

The goal was not only to recreate the UI as accurately as possible but also to build a scalable, reusable, and responsive frontend architecture that follows modern React development practices.

---

## Live Demo

**Vercel Deployment:**
https://front-end-qvrf.vercel.app/

---

## Repository

**GitHub:**
https://github.com/Arpita-Sinha-07/Front-end

---

## Tech Stack

* React
* Vite
* CSS3
* Flexbox
* CSS Grid
* Responsive Design Principles

---

## Assignment Goals

The primary objectives were:

* Convert a Figma design into a working React application
* Maintain visual consistency with the design
* Ensure responsiveness across Desktop, Tablet, and Mobile devices
* Build reusable and maintainable React components
* Follow clean code practices

---

# Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Testimonials/
│   ├── Newsletter/
│   └── Footer/
│
├── data/
├── styles/
│   ├── global.css
│   └── variable.css
│
├── App.jsx
└── main.jsx
```

---

# Challenges Faced & How They Were Solved

## 1. Converting a Static Design into Reusable Components

The Figma design initially appears as a single-page layout, but building everything inside one component would make the code difficult to maintain.

### Solution

The page was broken into reusable sections:

* Navbar
* Hero
* About
* Services
* Testimonials
* Newsletter
* Footer

This made the code cleaner, easier to debug, and more scalable.

---

## 2. Maintaining Responsiveness Across Devices

One of the biggest challenges was ensuring that the design remained visually balanced across:

* Large Desktop Screens
* Laptops
* Tablets
* Mobile Devices

### Solution

I used:

* CSS Grid for section layouts
* Flexbox for alignment
* Responsive breakpoints
* Fluid typography using `clamp()`
* Relative spacing instead of fixed dimensions

This helped preserve the design while adapting to different screen sizes.

---

## 3. Handling Large Typography

The design heavily relies on oversized headings.

Using fixed font sizes caused overflow issues on smaller screens.

### Solution

I implemented fluid typography using:

```css
font-size: clamp(3rem, 8vw, 7rem);
```

This allowed text to scale smoothly based on screen size.

---

## 4. Layout Consistency

Maintaining consistent spacing across all sections was important.

### Solution

A reusable container system was used throughout the application to keep layouts aligned and visually balanced.

---

## 5. Code Organization

As the number of sections increased, keeping styles and components organized became important.

### Solution

Each component was given its own:

* JSX file
* CSS file

This separation improved readability and maintainability.

---

# Responsive Strategy

### Desktop

* Full multi-column layouts
* Large typography
* Decorative design elements visible

### Tablet

* Reduced spacing
* Simplified grid layouts
* Better content scaling

### Mobile

* Single-column layouts
* Optimized text sizes
* Improved touch accessibility
* Hidden/reduced decorative elements where necessary

---

# What I Learned

Through this assignment I gained hands-on experience in:

* Translating design systems into code
* Building responsive interfaces
* Structuring React applications
* Component reusability
* Managing layouts using CSS Grid and Flexbox
* Creating scalable frontend architectures

More importantly, I learned that replicating a design is not only about matching visuals—it is about making the interface adaptable, maintainable, and user-friendly across different devices.

---

# Future Improvements

If given more time, I would further enhance the project by:

* Adding subtle animations and transitions
* Improving accessibility (ARIA attributes, keyboard navigation)
* Implementing a mobile navigation drawer
* Adding dark mode support
* Optimizing assets and performance

---

# Closing Note

This assignment was an excellent opportunity to practice real-world frontend development. While recreating the UI was important, my primary focus was writing clean, reusable, and maintainable code while ensuring a responsive experience across devices.

Thank you for taking the time to review my submission.
