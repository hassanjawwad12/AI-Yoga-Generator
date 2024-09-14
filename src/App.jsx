import './App.css'
import React from 'react'
import Landing from './Landing'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import LoginPage from './login/Login'
import SequenceWrapper from './dashboard/Page'
import ProfileWrapper from './profile/Page'
import History from './history/Page'
import SignupWrapper from './signup/Page'
import PaymentWrapper from './payment/Page'
import OutputWrapper from './output/Page'
import Story from './story/Story'
import OurFeatures from './components/OurFeatures'
import Pricing from './components/Pricing'
import Template from './Template/Template'

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/story">
          <Story />
        </Route>
        
        <Route exact path="/signup">
          <SignupWrapper />
        </Route>
        <Route exact path="/dashboard">
          <SequenceWrapper />
        </Route>
        <Route exact path="/dashboard">
          <SequenceWrapper />
        </Route>
        <Route exact path="/template">
          <Template />
        </Route>
        <Route exact path="/profile">
          <ProfileWrapper />
        </Route>
        <Route exact path="/payment">
          <PaymentWrapper />
        </Route>
        <Route exact path="/output">
          <OutputWrapper />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>

        <Route exact path="/features">
          <OurFeatures />
        </Route>
        <Route exact path="/price">
          <Pricing />
        </Route>
       
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
