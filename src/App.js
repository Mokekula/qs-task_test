import './App.css';
import { Main } from './components/Main/Main';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CreateView } from './components/CreateView/CreateView';
import { EditView } from './components/EditView/EditView';
import { Cards } from './components/Cards/Cards';
import { Pagination } from './components/Pagination/Pagination';

function App() {
	//Сделать пагинацию через browserHistory
	//
	return (
		<>
			<Switch>
				<Route path="/" component={Main} exact />
				<Route path="/creating" component={CreateView} />
				<Route path={`/:id`} component={EditView} />
				<Redirect to="/" />
			</Switch>
		</>
	);
}

export default App;
