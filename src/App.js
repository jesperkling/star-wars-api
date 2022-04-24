import Films from "./pages/Films";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import People from "./pages/People";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";




function App() {
	return (
		<div className="App">
			<Navigation />

			<HomePage />
			<Films />
			<People />
		</div>
	);
}

export default App;
