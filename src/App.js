import './App.css';
import { Main } from './components/Main/Main';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateView } from './components/CreateView/CreateView';
import { EditView } from './components/EditView/EditView';
import { Cart } from './components/Cart/Cart';

function App() {
	return (
		<>
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/creating" component={CreateView} />
				<Route path="/cart" component={Cart} />
				<Route path={`/:id`} component={EditView} />
				<Redirect to="/#1" />
			</Switch>
		</>
	);
}

export default App;
