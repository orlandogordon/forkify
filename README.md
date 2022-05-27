# Forkify Project

Forkify is a fully functional recipe web application that allows users to find tasty new meal ideas, bookmark their favorite recipes, and even upload their own creations. Build with the Forkify API whose documentation can be found here:https://forkify-api.herokuapp.com/v2

**Link to project:** https://forkify-orlando.netlify.app/

![forkify-gif](https://user-images.githubusercontent.com/99216709/168296642-829a65ee-f83d-44ce-993b-19ff9b96ff6d.gif)

## How It's Made:

**Tech used:** HTML, CSS, Sass, JavaScript, Parcel, Forkify API

Forkify's API was an excellent choice for creating this application because it offered a diverse set of recipes and great performance. Once I developed an understanding of how Recipe data was delivered from the API I was able to build the search functionality, which pulled recipes from the database based on input from the user and manipulated the DOM to display the results. Implementing pagination for search results that exceeded 10 recipes was a part of this process as well.

Next, the bookmark feature was added which allows users to save their favorite recipes for later reference. This features utilizes the local storage of the user's browser to keep track of which recipe's were bookmarked across multiple sessions/refreshes. Ideally, a sign in feature will be added in the future that allows the bookmarks to persist without using the browser's local storage feature. 

Finally, the last step was to incorporate the user's ability to add new recipe's to the applicaton. These recipe's must be input a certain way (as directed by the default values), otherwise the recipe will not be displayed correctly in the application. This process is acceptable in its current state, but could certainly be improved upon in a future update. Once the recipe is added the user can find it automatically included in their bookmarks and also discoverable via a search with any key word found in the title of the recipe. 

Another important features includes the user's ability to adjust serving sizes for each recipe.

## Optimizations

In the future I plan to incorporate additonal features and UX improvements:

- User authentication
- Addition of multiple page numbers to select from instead of just "next" and "previous" in the pagination feature


The following bugs have been identified and will be corrected in a future update:

- Recipe ingredients quantity turns into decimals when the user changes the servings to certain sizes (uneven multiples of the initially intended servings size)
- Inconsistency in loading images for user-uploaded recipes
