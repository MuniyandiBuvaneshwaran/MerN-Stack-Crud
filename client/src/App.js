import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import CrudTable from "./components/cruds/CrudTable";
import CrudListView from "./components/cruds/CrudListView";
import CrudGridView from "./components/cruds/CrudGridView";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";
import Footer from "./components/common/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseStateForm from "./components/cruds/CrudAdd";


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/" element={<Home />} />
					<Route exact path="/all" element={<CrudTable />} />					
					<Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/grid-view" element={<CrudGridView />} />
					<Route exact path="/add" element={<UseStateForm />} />
					<Route exact path="/cruds/:_id" element={<CrudDetails />} />
					<Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
					<Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
