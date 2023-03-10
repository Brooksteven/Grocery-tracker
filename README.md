# Grocery-tracker

## Description 
Our application aims to make keeping track of items for family and friends much easier by allowing a user to create an account, create a item by taking into account who the item receiver is, and what they are getting for them. Our app also provides users with a page to view all of their existing items, as well as an option to delete, update a item, and mark it as being completed. Overall, our project goal is to reduce the stress of keeping track of planned groceries for friends, co-workers, family, or others

### Motive
Our motive behind this project was initially to create an app that would allow the user to keep track of grocery items, but we decided to shift our project to track items for any occasion.


## Objectives Met
- When a user views the homepage, they will find a site description and buttons to sign in or create an account.
- When a user attempts to sign in or create an account, they can sign in or create a password-protected account.
- When a user views the user's landing page in a logged-in state, they see a list of all the gifts they have added.
- When a user views the user's landing page in a logged-out state, they are redirected to the sign in page.
- When a user clicks the 'add' button to add a new gift, they have the opportunity to enter the gift recipient and description and to save the new gift.
- When a user clicks on the 'update' button associated with a specific gift, they are able to edit the recipient and description or to check off the gift as purchased, and to save the gift.
- When a user clicks on the 'save' button after having edited or added information about a gift, they are redirected to their user landing page, where the new or updated gift renders with its associated updates.

## New Tech 
A requirement of this assignment was to use a new technology that hadn't previously been used in class. Our group chose TestCafe to assist with end-to-end web testing. To utilize TestCafe for this app:


STEP 1

TC1.1 Complete steps A1.1 to A3.1, above. 

STEP 2


From your terminal, run:

TC2.1 npm run seed

STEP 3

To run tests, you will need two terminals open.

From Terminal 1, run:

TC3.1 npm run watch

From Terminal 2, run:

TC3.2 npm run testcafe-ui

TC3.3 TestCafe will open a browser window and run the programmed tests. Once tests are complete, Terminal 2 will show the tests run and passed.

STEP 4

From Visual Studio Code or the code editor of your choice:

TC4.1 If you wish to run tests more than once, run the following from a new query tab before repeating the tests:

USE grocerytracker_db;
DELETE FROM user where email = 'Donald@King.com';
SELECT * FROM user;
