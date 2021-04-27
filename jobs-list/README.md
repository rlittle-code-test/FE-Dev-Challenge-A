
# Pathwire - Frontend Dev Challenge A

This is a solution to the Pathwire Frontend Dev Challenge A

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the layout for the site in desktop and/or mobile resolutions
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![screenshot](https://user-images.githubusercontent.com/82979783/116315488-9ad06a80-a77e-11eb-9b1c-ffec3f950223.png)

### Links

- Solution URL: [link](https://github.com/rlittle-code-test/FE-Dev-Challenge-A/tree/main/jobs-list)
- Live Site URL: [link](https://fe-dev-challenge-a-q8sm9yuhs-rlittle-code-test.vercel.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Stitches](https://github.com/modulz/stitches) - For component styles

### What I learned

#### Styling

Creating the mobile and desktop variants for components like `JobPost` and `Filter` was an interesting challenge. The styling for the desktop variant is fairly trivial but I hadn't worked with responsive variants in Stitches before.

```js
<StyledJobPost
  color={props.featured ? 'featured' : 'regular'}
  layout={{
    '@bp3': 'mobile',
    '@initial': 'desktop',
  }}
>
  ...
</StyledJobPost>
```

#### Next.js

This is my first experience using Next.js! Although I've just scratched the surface with the framework, just setting up a basic project and going over the documentation makes me feel a little more comfortable. The integration with hosting on Vercel was also seamless. :+1:

### Continued development

#### Styling

I feel I became more comfortable with Stitches in terms of the API and thinking in a 'CSS-in-JS' mindset buidling this project. However there were some cases where I felt like I needed a layout and I wasn't immediately sure how to tackle it. I'd like to have a sort of mental toolbox of patterns that is a little more complete I guess. Examples:

- `JobPost` – Handling mobile vs. desktop on the card element with logo -> description -> tags.
  - First thought was to use absolute positioning to handle the logo split evenly on the upper boundary.
  - This was easier than I expected but still had to make sure the row to column layout shift was neat.
- `Home` – creating the main page layout so that the area for the filter card was reserved and split evenly on the header background image lower boundary. This is the best example of where I knew there must be 100 ways to accomplish the design but wasn't immediately sure what the best would be. Ended up trying different layouts before settling on a defined grid.

#### State management

Having a blank slate to choose how to manage the list of posts and how they're filtered was an interesting problem. I decided to go with a `useReducer` hook that managed adding and removing filters and tracking post IDs that are in the filter set. Getting to that decision however highlighted that I'd like to explore different ways of managing state, from libraries like Redux or XState or event just becoming more comfortable with the React context API.

### Useful resources

- [The Future of the Front-End (with Pedro Duarte) – Stitches CSS-in-JS Demo](https://www.youtube.com/watch?v=Gw28VgyKGkw) - A live coding demo for Stitches that helped me get a better sense of CSS-in-JS in general and a great overview of the Stitches library itself.
