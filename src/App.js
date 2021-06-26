import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-signup/sign-in-signup.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';



import {setCurrentUser} from "./redux/user/user.actions";
import Header from './components/header/header.component';



class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth =   auth.onAuthStateChanged(async user=>{
    //1. if user is set
    if(user){
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot=>{
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      });
      
    }
    //2. if user is not set
    setCurrentUser(user); 
     
  });
  }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }


  render(){
    const {currentUser} = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=> 
            currentUser ? (
            <Redirect to='/' />
            ) : (
            <SignInSignUpPage />
            )}  />
        </Switch>
      </div>
    );
  }
  
}
const mapStateToprops = ({user: {currentUser}})=>({
  currentUser
});
const mapDispatchToProps = dispatch=>({
 setCurrentUser: user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToprops,mapDispatchToProps)(App);
