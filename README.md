This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### betOven coding post-interview
The aim of this project is to create a simple login and home layout. Home layout should have a navbar allowing tu switch between multiple pages in the future. Logout function should also be implementated. In this case, the app interacts with the real betOven server. Upon Josean's request, this time, the app uses **webSockets** for server interaction.

The structure of this project is based on **React Context and Hooks**.

#### project checklist
- [x] Login User
- [x] Logout User
- [x] Responsive Navbar
- [x] Server Interaction
- [x] Verticaly Responsive Navabr
- [x] Responsive Login Layout
- [x] Responsive Icons for android, etc.
- [x] Adapted to BetOven's official server
- [x] WebSocket requests
- [ ] Apllying redux (in process...)

As we can see now everything is responsive now. Also, we use a webSockets approach to make requests to the offivial BetOven server. 
In the future, and if the application requires it because of its different functionalities, the incorporation of a redux structure could be useful. For now, after studying the feasibility, the best approach is the one conducted in this project (even so, a version in development exists).

P.D. This time a register layout is not necessary as we are using a real username and password already stored in the server.