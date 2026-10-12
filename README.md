# Hidden Gems — India Travel Discovery

A responsive, front-end travel discovery website showcasing lesser-known destinations, architecture, nature, history, crafts and coastal places across India.

## Run the project

1. Extract the ZIP file.
2. Open the `project` folder.
3. Open `index.html` in a modern browser. For the most reliable experience, run a local server from this folder (`python -m http.server 8000`) and visit `http://localhost:8000`.
4. Internet access is needed for Bootstrap, Google Fonts and the remote destination photographs.

## Pages

- `index.html` — homepage, destination discovery, search, state/category filters, favourites and destination story modal.
- `collections.html` — curated destination collections.
- `story.html` — project background and purpose.
- `style.css` — shared styles.
- `script.js` — destination data and interactive behaviour.
- `images/hidden-gems-hero.jpg` — local hero image.

## Features to demonstrate

1. Search for a destination, state or topic.
2. Combine search with state and category filters.
3. Open a destination story from a card.
4. Save a destination, refresh the page and check that it remains saved in the same browser.
5. Open Collections and use a collection link to filter destinations.
6. Resize the browser to show the responsive layout.

## Before evaluation

- Test all three pages and every navigation link.
- Test search with a match and with no matches; use Reset to return to all destinations.
- Test save/unsave, saved-place filtering and persistence after refresh.
- Check the browser console for errors and verify that all images load.
- Verify destination facts and image credits; the site currently uses remote Unsplash image URLs for destination cards.
- Favourites are stored in this browser only. There is no user account, database, booking system or server-side persistence.

## Technology

HTML5, CSS3, Bootstrap 5, vanilla JavaScript and browser localStorage. Bootstrap and fonts are loaded from CDNs.

## Short presentation outline

Explain the problem (lesser-known destinations are harder to discover), introduce the intended users, demonstrate search/filter/story/favourites, briefly explain the front-end technologies, and finish with limitations and planned improvements such as verified travel details, source credits, accessibility testing and optional map integration.
