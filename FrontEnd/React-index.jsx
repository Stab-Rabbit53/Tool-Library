/* 
What do I need this to do?
This should set up the state and conditionally render the login/signup/main app pages.


Approach Thoughts
Given that I need state to remember if a user is logged in, will set that up here. 
Will use functional components, as they are the New Way To Do Things.
To keep this clean, will render app here and import components from the components folder. 

Components:
react-index.js  has state, conditionally calls login/setup/main
  login
    box
      input field for username
      input field for password
      button to send to BE
  signup
      input for username
      input for password
      input for email
      button to send
  main
    display for user
    display for Search
      button to send
    display for user's Stuff
      stuff
        name, borrow request from, lent to
      new Thing
        input field
        button
    display for Search Stuff
    button for add a thing
    button for delete a thing
    button for lend a thing
    button for don't lend a thing
    button for request a thing. 
    

      
    


State: variables
isLoggedIn
username
user details
  user Stuff

State: functions
login
signup
search
add a thing
delete a thing
approve lending to person X
reject lending to person X
request a thing. 


Notes
functional component with destructuring...
const FunctionalComponent = ({ name }) => {
 return <h1>Hello, {name}</h1>;
};

functional component without destructuring...
const FunctionalComponent = (props) => {
 return <h1>Hello, {props.name}</h1>;
};

No render method in functional components. 

State is set up with
const [count, setCount] = React.useState(0);

Replacing componentDidMount, We use the useEffect hook with the second argument of []. 
The second argument of the useState hook is normally an array of a state(s) that changes, 
and useEffect will be only called on these selected changes. But when it’s an empty array 
like this example, it will be called once on mounting. This is a perfect replacement for 
a componentDidMount.

Event handlers, per React documentation. https://reactjs.org/docs/handling-events.html
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

*/



//setup stuff
//import everything, set up default variables, etc etc etc.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './react-style.css';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import UI from './components/Ui.jsx';



//testing for initial "is it working" test. Ignore this once we establish basic functionality. 
const Testing = () => {
  return <div>If you can see this, react is working. Yay!</div>;
};





//This is the app. 
//Set up state. 
//Set up functions.
//Set up conditional display.  
function App(){
  //state Stuff
  //more to be added.
  const [userDetails, setUserStuff] = React.useState({
    firstName:"", 
    lastName:"", 
    username:"", 
    password:"",
    isLoggedIn: false,
    isUser: true,
  });

  //functions stuff
  //For testing
  function consoleLogForTesting(event){
    event.preventDefault();
    console.log('Your console log for testing is firing off!')
  }

  //go to the create user page. 
  function goToCreateUser(event){
    //event.preventDefault();
    console.log('You clicked to go to the create user page')
    //change the isUser in state to false

    //https://blog.logrocket.com/using-react-usestate-object/
    setUserStuff((userDetails) => ({...userDetails,...{isUser: false}}));
    console.log(userDetails);
  }

  //sendALoginRequest     Wait for BE to finish. 
  function sendALoginRequest(event){
    event.preventDefault();
    //send a fetch with username and password
    //get the response, check for OK
    //update state isLoggedIn if good.
    //Stick a "username not found" if username isn't found. 
    fetch('/?', {           //apparently no need for a hostname?
      method: 'POST',             //Annoys me that fetch won't do a GET with stuff in the request.body. Fine. Post it is. 
      body: JSON.stringify({username: '?' , password: '?'}),
      headers:{
          'Content-Type': 'application/json'
      },
    })
      .then(result => result.json())
      .then((data) => {
        //change state appropriately
      })
    }

    //create a user       Wait for BE to finish
  function sendACreateUserRequest(event){
    event.preventDefault();
    //send a fetch with username, password, and email.
    //get the response, check for OK
    //update state isLoggedIn if good.
    //Stick an error message if we get an error
    fetch('/api/user/create', {
      method: 'POST',
      body: JSON.stringify({username: 'Alice' , password: 'Smith', email: 'blah@blah.com'}),
      headers:{
          'Content-Type': 'application/json'
      },
    })
      .then(result => result.json())
      .then((data) => {
        //change state appropriately
      })
    }






  
  console.log('We are doing our conditional etc etc')
  console.log('Current user details are... ', userDetails)
  //conditional display
  if(userDetails.isUser === false){          //They're not a user, do the signup screen.
    return <div id = 'screen'><Signup /></div>;
  }
  if(userDetails.isLoggedIn === false){         //Not logged in, do the login screen.
    return <div id = 'screen'><Login console={consoleLogForTesting} goToCreateUser={goToCreateUser}/></div>;
  }
  if(userDetails.isLoggedIn === true){          //They're logged in, do the main screen.
    return <div id = 'screen'><UI /></div>;
  }


};    //end of App



//Render
ReactDOM.render(<App />, document.getElementById('root'));