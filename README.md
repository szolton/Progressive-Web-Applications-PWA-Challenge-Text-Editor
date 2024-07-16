# **Progressive Web Applications PWA Challenge: Text Editor**

The purpose of this project was to build a text editor that runs in a browser. It will be a single-page application that meets the PWA criteria. Additionally, it will have a number of data persistence techniques that serve as redundancy in case one of the options isn't supported by the browser. It will also work offline.

To build the text editor, we started with an existing application and implement methods for getting and storing data to an IndexedDB Database. It will use a package called idb, which is a lightweight wrapper around the IndexedDB API. It has a lot of methods that are helpful for storing and retrieving data.

I began by doing research and finding sources -- these videos were equally helpful in various parts of the assignment.

Sources: https://www.youtube.com/watch?v=m9OSBJaQTlM&ab_channel=PortEXE, https://www.codingnepalweb.com/weather-app-project-html-javascript/, https://home.openweathermap.org/, https://www.youtube.com/watch?v=MIYQR-Ybrn4&ab_channel=GreatStack

# User Story
AS A developer,
I WANT to create nodes or code snippits with or without an internet connection
SO THAT I can reliably retrieve them for later use.

![color-palette](./Assets/images/colors.png)

Next, I updated it to create HTML and CSS to make a weather site with the mentioned teals and peaches. Then, I updated the JavaScript. Here is a cool feature of making city, state and zip codes searchable as well, for ultimate accuracy.

Search by city.

![landing-page](./Assets/images/first-page.png)

Search by zip code.

![zip-codes](./Assets/images/zip-codes.png)

Here is a cool feature of the current location button, it lets the user automatically check the weather around them.

![current-location](./Assets/images/location.png)

The page is also responsive and works well on a mobile device.

![mobile](./Assets/images/mobile-1.png) ![mobile](./Assets/images/mobile-2.png)

# In conclusion
I set up a text editor web application that:
- WHEN I open my application in my editor
- THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory
- THEN I find my application should start up backend and serve the client
- WHEN I run the text editor application from my terminal
- THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins
- THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application
- THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor
- THEN I find the IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window
- THEN I find that the content in the text editor has been saved with Indexed DB
- WHEN I reopen the text editor after closing it
- THEN I find that the content in the text editor has been retrieved from our Indexed DB
- WHEN I click on the Install butotn
- THEN I download my web application as an icon on my desktop
- WHEN I load my web application, then I should have a registered service worker using workbox
- WHEN I register a service worker, THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Render, THEN I should have proper build scripts for a webpack application

The hardest part was just working with the JavaScript and the weather API's to adjust them to how I wanted the information to look on the page, and fine-tuning the CSS.

Please follow this link to the successful, full deployed site on GitHub: https://szolton.github.io/06-challenge-week6-Interactive-Weather-Page/