import {Route, Switch} from 'react-router-dom';


import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';


import './App.css';


const HatsPage = () => (
  <div>
      <h1>Hats Page</h1>
  </div>
)
const JacketsPage = () => (
  <div>
      <h1>Jackets Page</h1>
  </div>
)
const SneakersPage = () => (
  <div>
      <h1>Sneakers Page</h1>
  </div>
)
const WomensPage = () => (
  <div>
      <h1>Womens Page</h1>
  </div>
)
const MensPage = () => (
  <div>
      <h1>Mens Page</h1>
  </div>
)
const MensDetailsPage = (props) => {
  console.log(props)
  return (
    <div className="bg-green-400 p-4">
        <h1 className="text-red-700 text-4xl">Mens Details Page</h1>
    </div>
  )
}


function App() {
  return (
    <div className="font-open">
      <Header />
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={JacketsPage} />
        <Route exact path='/shop/sneakers' component={SneakersPage} />
        <Route exact path='/shop/womens' component={WomensPage} />
        <Route exact path='/shop/mens' component={MensPage} />
        <Route exact path='/shop/mens/:men' component={MensDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
