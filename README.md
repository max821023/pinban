# Pinban

[Live Link](http://pinban.herokuapp.com/#/)

## about Pinban
Pinban is an kanban style web application that helps you organize and manage a workflow.

![Splash page](/app/assets/images/splash.png "Pinban splash page")


## Technologies
- Rails 5 
- PostgreSQL
- React with Redux
- Hosting on Heroku

## Features

### Authentication

When you visit Pinban, you will be directed to the splash page where you can get a brief overview of Pinban and visualization of its features. At the top right of the navigation bar, there are buttons that bring you to account creation or the login page. 

![Login box](/app/assets/images/login_page.png "Pinban login")

If you already have an account, you can login through the login page, or you can click the button below and head to the sign up page instead. However, if you don't feel like creating an account right away, you can click on red demo button beneathe log in or signup to login as a demo user.

![Login_error](/app/assets/images/incorrect_info.png "login error")

An orrange error box will show at the top, displaying any errors to notify you if you input any invalid information.

### Boards

![Index](/app/assets/images/board_index.png "board index")

After signing in, you will be directed to the board index page. The navigation bar will be always available.

#### creating a board

![Board_create](/app/assets/images/create_board.png "create board")

You will have the ability to create a board. You get to choose the colors and the title of your board. After creating your board, you will be directed to the specific board where you can add lists and cards.

#### logging out 

![Logout](/app/assets/images/logout.png "logout button")

Your profile logo with your initials serves as a dropdown menu that includes a log out button.

## Future Features
- Boards: mark boards as important, recently viewed boards
- Lists & cards: users can create lists, and add cards. Users can move lists and cards
- Comments & due dates: ability to comment on cards, ability to add due date to cards.