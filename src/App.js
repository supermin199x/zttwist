import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Report from "./Pages/Report";
import Chart from "./Pages/Chart";
import Error404 from "./Pages/Error404";

import './App.css';

function App() {
  	return (
		<BrowserRouter>
			<div className={'app'}>
				<Routes>
					<Route index path={'https://supermin199x.github.io/zttwist/'} element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />}/>
					<Route path="/report" element={<Report />}/>
					<Route path="/chart" element={<Chart />}/>
					<Route path={'*'} element={<Error404 />} />
				</Routes>
			</div>
		</BrowserRouter>
  	)	
}

export default App;