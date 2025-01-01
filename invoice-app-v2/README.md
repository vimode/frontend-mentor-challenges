# Invoice App

![Design preview for the Invoice App](./design/preview.jpg)

[Live Link](https://invoice-app-fm-next.vercel.app/)

## Experience and challenges

### Built with
- Nextjs
- TailwindCSS
- MongoDB
- Mongoose
- Vercel

### Challenges

Being my first Nextjs App it was challenging to understand how it does things differently than React and Remix. The App Router is a new and is not so different than other JS frameworks now. 

The **client component vs server component** definitely made me think of how each page or each component will be rendered and had to consciously decide how to proceed. Same for the nested routes and the layout it shares. It is very similar to Remix and react router now but has its work quirks.

It was very challenging to implement **server actions** as opposed to the regular MERN stack of creating an API for everything. Using server actions definitely is a much cleaner and quicker way to connect to a backend but it takes a few tries to get it working properly as Nextjs is very restrictive as to what the server can and cannot send to the frontend. I suspect its to make sure none of the sensitive data is sent to the client accidentally. So all the data sent back to the client has to be stripped down and parsed if needed.

That being said server actions for form submission makes things a lot easy. Connecting MongoDB to the nextjs project along with Nextjs's own caching system is a bit challenging, most of the server action requires requesting to **revalidate** certain or **all the routes to make sure the client doesn't have any stale data**. For every database CRUD operation, a revalidate cache command has to be sent. I think the Nextjs's smart caching is great for loading static data but any dynamic data edit requires handling a very rigid Nextjs cache system.

One thing that got me stuck for a while was the simple request url being able to parse properly. Nextjs has its own wrapper for certain standard WebAPIs like the url constructor! But for some reason I wasn't able to use it so I had to implement certain functionality a little differently.

I also used TailwindCSS in this project, setup with Nextjs was a breeze and despite how long the class names for each element gets, I think TailwindCSS has found a much faster way to write CSS. I am quite proficient with CSS so most of the new things I used with TailwindCSS were fairly easy to intuitively write. I am yet to implement the theme, but that too seem to be straightforward. 

_WIP_
