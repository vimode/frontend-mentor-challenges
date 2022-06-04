# IP address tracker

[Live link](https://fm-ip-address-tracker-react.vercel.app/)

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

![Design preview for the Job listings with filtering coding challenge](./design/desktop-preview.jpg)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

## Experience and Challenges

### Built with

- Semantic HTML5 markup
- Styled Components
- ReactJS
- ViteJS
- LeafletJS

### What I learned and continuous development

The app will only search for IP address location as the API I used only allows IP searches.

I need to re-work the API error handling, for now if any invalid IP is searched I set the IP to Google DNS to show that instead or showing an error. 

Learned more about various `Promise` methods especially the difference between `Promise.all()` and `Promise.allSettled()`.  

The Leaftlet JS library is massive and is docs are extensive. I wish this project demanded more of the map requirement as I barely scratched the surface in learning about Leaftlet JS. 
Since Leaflet JS does not directly support React I used React-Leaflet library which is like a component wrapper built to work with Leaflet JS, so we can use all the Leaftlet JS methods and functions. 

Since the recommended API wasn't free and/or required API access key I used a few other APIs together for this project. Unfortunately this means domain search functionality is not available. 

https://api.my-ip.io/ip  is used to auto-detect visitor API.
http://ip-api.com/ and https://freeipapi.com/api is used to gather all the IP info (IP, geolocation, tz and ISP)  expected to be shown in the project. 


### Useful resources

- [ViteJS](https://vitejs.dev)
- [Styled Components](https://styled-components.com/)
- [React](https://reactjs.org/) - JS library
- [LeafletJS](https://leafletjs.com) - JS library
- [React Leaflet](https://react-leaflet.js.org/)
- https://api.my-ip.io/ip
- https://ip-api.com/docs/
- https://freeipapi.com/api

