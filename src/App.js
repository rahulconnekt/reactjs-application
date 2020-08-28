import React, { Suspense } from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	withRouter,
	Redirect,
} from "react-router-dom";
import Login from "./screens/authentication/Login/Login";
import SignUp from "./screens/authentication/SignUp/SignUp";
import Drawer from "./components/Drawer/CustomDrawer";
import Dashboard from "./screens/mainApp/DashBoard/DashBoard";
import ForgotPassword from "./screens/authentication/ForgotPassword/ForgotPassword";
import SuccessfulPasswordReset from "./screens/authentication/SuccessfulPasswordReset/SuccessfulPasswordReset";
import ResetPassword from "./screens/authentication/ResetPassword/ResetPassword";
import OTP from "./screens/authentication/OTP/OTP";

import OrganisationSamadhanID from "./screens/mainApp/SamadhanID/OrganisationSamadhanID/OrganisationSamadhanID";
import BlankSamadhanID from "./screens/mainApp/SamadhanID/BlankSamadhanID/BlankSamadhanID";

import Country from "./screens/mainApp/Master/Country/Country";
import State from "./screens/mainApp/Master/State/State";
import City from "./screens/mainApp/Master/City/City";
import Language from "./screens/mainApp/Master/Language/Language";

import UserList from "./screens/mainApp/UserList/UserList";

import OrganisationMain from "./screens/mainApp/Organisation/OrganisationMain/OrganisationMain";

import JobCreation from "./screens/mainApp/Operations/JobCreation/JobCreation";
import Initialisation from "./screens/mainApp/Operations/JobCreation/Initialisation/Initialisation";

import PropertyList from "./screens/mainApp/Properties/PropertyList/AllProperties/AllProperties";
import CategoryList from "./screens/mainApp/Properties/CategoryList/Category/CategoryList";
import SubCategoryList from "./screens/mainApp/Properties/SubCategory/SubCategory";
import JobList from "./screens/mainApp/Properties/JobList/JobList/JobList";
import VerifyDocument from "./screens/mainApp/Properties/VerifyDocument/VerifyDocument";
import RequestAccess from "./screens/mainApp/Properties/RequestAccess/RequestAccess";

import Inventory from "./screens/mainApp/Inventory/InventoryList/Inventory";

import Package from "./screens/mainApp/Package/PackageList/PackageList";

import QC1 from "./screens/mainApp/Operations/JobReporting/JobReporting/QC/QC";

import Profile from "./components/ProfileStepper/Stepper";

function App() {
	let routes = (
		<BrowserRouter>
			<Switch>
				<Route path="/login" render={(props) => <Login />} />
				<Route path="/signup" render={(props) => <SignUp />} />
				<Route
					path="/forgot-password"
					render={(props) => <ForgotPassword />}
				/>
				<Route
					path="/reset-password"
					render={(props) => <ResetPassword />}
				/>
				<Route
					path="/password-reset-successful"
					render={(props) => <SuccessfulPasswordReset />}
				/>
				<Route path="/otp-verify" render={(props) => <OTP />} />
				<Route
					path="/dashboard"
					render={(props) => <Drawer page={<Dashboard />} />}
				/>
				<Route
					path="/QC"
					render={(props) => <Drawer page={<QC1 />} />}
				/>

				<Route
					path="/samadhanID/organisation"
					render={(props) => (
						<Drawer page={<OrganisationSamadhanID />} />
					)}
				/>
				<Route
					path="/samadhanID/blank"
					render={(props) => <Drawer page={<BlankSamadhanID />} />}
				/>

				<Route
					path="/master/city"
					render={(props) => <Drawer page={<City />} />}
				/>
				<Route
					path="/master/country"
					render={(props) => <Drawer page={<Country />} />}
				/>
				<Route
					path="/master/state"
					render={(props) => <Drawer page={<State />} />}
				/>
				<Route
					path="/master/language"
					render={(props) => <Drawer page={<Language />} />}
				/>

				<Route
					path="/userlist"
					render={(props) => <Drawer page={<UserList />} />}
				/>

				<Route
					path="/organisation"
					render={(props) => <Drawer page={<OrganisationMain />} />}
				/>

				<Route
					path="/operations/jobcreation"
					render={(props) => <Drawer page={<JobCreation />} />}
				/>
				<Route
					path="/operations/jobcreation/initialisation"
					render={(props) => <Drawer page={<Initialisation />} />}
				/>

				<Route
					path="/properties/propertylist"
					render={(props) => <Drawer page={<PropertyList />} />}
				/>
				<Route
					path="/properties/categorylist"
					render={(props) => <Drawer page={<CategoryList />} />}
				/>
				<Route
					path="/properties/subcategorylist"
					render={(props) => <Drawer page={<SubCategoryList />} />}
				/>
				<Route
					path="/properties/joblist"
					render={(props) => <Drawer page={<JobList />} />}
				/>
				<Route
					path="/properties/verifydocument"
					render={(props) => <Drawer page={<VerifyDocument />} />}
				/>
				<Route
					path="/properties/requestaccess"
					render={(props) => <Drawer page={<RequestAccess />} />}
				/>

				<Route
					path="/inventory"
					render={(props) => <Drawer page={<Inventory />} />}
				/>

				<Route
					path="/package"
					render={(props) => <Drawer page={<Package />} />}
				/>

				<Route
					path="/profile"
					render={(props) => <Drawer page={<Profile />} />}
				/>

				<Route to="/dev" render={(props) => <Drawer />} />
			</Switch>
		</BrowserRouter>
	);
	return <Suspense fallback={<p>Loading ...</p>}>{routes}</Suspense>;
}

export default App;
