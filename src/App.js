import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import signInSignUpPage from './pages/sign-in-signup/sign-in-signup.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import {connect} from 'react-redux';

import {setCurrentUser} from "./redux/user/user.actions";
import Header from './components/header/header.component';



class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth =   auth.onAuthStateChanged(async user=>{
    //1.
    if(user){
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(snapShot=>{
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      });
      
    }
    //2.
    setCurrentUser(user); 
     
  });
  }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }


  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={signInSignUpPage}  />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch=>({
 setCurrentUser: user=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
