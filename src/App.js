import Container from "react-bootstrap/esm/Container";
import Films from "./pages/Films";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import People from "./pages/People";
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";




function App() {
	return (
		<div className="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/films" element={<Films />} />
					<Route path="/people" element={<People />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
