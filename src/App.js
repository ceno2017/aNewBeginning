import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import signInSignUpPage from './pages/sign-in-signup/sign-in-signup.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import Header from './components/header/header.component';



class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }
 
  unsubscribeFromAuth = null;
  componentDidMount(){
  this.unsubscribeFromAuth =   auth.onAuthStateChanged(async user=>{

    if(user){
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot=>{
      this.setState({
        currentUser: {
          id: snapShot.id,
          ...snapShot.data()
        }
      },()=>{
        console.log(this.state);
      });
      });
      
    }
    
     this.setState({currentUser: user}); 

  });
  }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }


  render(){
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={signInSignUpPage}  />
        </Switch>
      </div>
    );
  }
  
}

export default App;
