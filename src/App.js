import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import {
  Home,
  Vendor,
  Cart,
  Mine,
  Classify,
  Find,
  Article,
  CareChoose,
  HotArticle,
  Vendordetail,
  GoodsList,
  Details,
  Search,
  SearchContent
} from "@pages"
import Layout from "@layout"
class App extends Component {
  render() {
    return (

      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/search" render={() => {
          return (
            <Fragment>
              <Route component={Search} />
              <Route path="/search/:keyword" render={() => {
                return <SearchContent></SearchContent>
              }} />
            </Fragment>
          )
        }} />
        <Route path="/goodsList" component={GoodsList} />
        <Route path="/details/:id" component={Details}></Route>
        <Route path="/article/:id" component={Article} />
        <Route path="/find" render={() => {
            return (
              <Fragment>
                <Route component={Find} />
                <Redirect from="/find" to="/find/carechoose" exact></Redirect>

                <Switch>
                  <Route path="/find/carechoose" component={CareChoose}></Route>
                  <Route path="/find/hotArticle" component={HotArticle}></Route>
                </Switch>
              </Fragment>)
          }} />
        <Layout>
          <Route path="/home" component={Home} exact />
          <Route path="/home/:id" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/mine" component={Mine} />
          <Route path="/classify" component={Classify} />
          <Route path="/vendor/" component={Vendor} exact />
          <Route path="/vendor/:id" component={Vendordetail} exact />  
        </Layout>
      </Switch>
    )
  }
}

export default App