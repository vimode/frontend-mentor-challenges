# Crowdfunding product page

Solution : [Live Site URL](https://frontend-mentor-challenges-ecru.vercel.app/crowdfunding-product-page/)

![Design preview for the Crowdfunding product page coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR).

## The challenge

Your challenge is to build out this crowdfunding product page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

## Built with

- HTML
- CSS
- CSS Grid
- CSS Flexbox
- JavaScript

## Experience, Challenges and Learning

The CSS was fairly straightforward and enjoyable. The modal required a little work than usual but otherwise the layout was really fun.
The real struggle and timesuck for this challenge was the javascript for the buttons, input elements, the change in state of the numbers displayed on the homepage+progress bar.

I learnt a few lessons along the way.

- Always wrap `<input>` field in a `<form>` even if there isn't a submit button. It just gets easier to work with the input element for field and form validation.

- If there are multiple items that will change, make sure their corresponding identical items are sharing the same class. Do not add a id to them, makes things really hard later on.

- Create independent forms even if they work identically, its much easier to manipulate the form functions with shared functions if required.

- Add form input validation as a function on submit but end the submit process in the validation function.

---

##### Pending tasks

- Input validation only exists for max value, for min value it simply doesn't let user enter below certain value without helping the user understand why thats the case.
- Change disabled button innerText to 'Out of stock'
- Add $ sign/icon to the input element in modal.
- Live solution screenshot(s)
