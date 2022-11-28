# potluck

social potluck app for groups to sign-up with food dishes, upload recipes, and post messages

## User Story:

GIVEN a user goes to the Potluck app
WHEN they visit the homepage
THEN they see a stunning homepage with beautiful bright colors with a navigation bar (sign in / sign our and ‘my potlucks’) and a CTA in the middle to create a potluck
WHEN a user clicks create a potluck
THEN they are prompted to sign in or sign up
WHEN the user completes the sign in / sign up
THEN they are taken to a form to create the actual potluck with general question (size, date, time, place)
WHEN the user goes to add an item to the list from the potluck’s page
THEN they can insert the food, type (side, main, dessert), photo,
WHEN a user wants to chat or make a note to the group
THEN they can write in the group chat section in the bottom
WHEN the user wants to share the potluck with a friends
WHEN the user wants to share the potluck
THEN then click ‘share’ and a GraphQL mutation is created with a unique ID and the url can be easily shared to use for collaboration
WHEN a friend is invited to join a potluck
THEN they are prompted to sign up or sign up
AND they are redirected to the user’s potluck with existing items and notes saved
