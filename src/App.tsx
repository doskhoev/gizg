import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './components/MainPage/Home'
import { About } from './components/About/About'
import { AppStore } from './App.store'
import { observer, Provider } from 'mobx-react'
import { Order } from './components/Order/Order'
import { Header } from './components/Header/Header'
import { Contacts } from './components/Contacts/Contacts'

export interface IAppProps {
  store: AppStore
}

@observer
export class App extends React.Component<IAppProps> {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact={true} path="/">
              <Home store={store} />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/order" component={Order} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
