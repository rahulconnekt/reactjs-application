import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { plainTabsStylesHook } from "@mui-treasury/styles/tabs";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import logout from "./images/logout-2@2x.png";
import folder from "./images/folder@2x.png";
import press from "./images/press@2x.png";
import organisation from "./images/organisation@2x.png";
import taxation from "./images/taxation@2x.png";
import check from "./images/check.png";
import box from "./images/box.png";
import store from "./images/store.png";
import Logo from "./images/Logo.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "./CustomDrawer.module.css";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import flag from "../../Assets/uk.png";

import InstZoom from "../../screens/mainApp/Operations/JobReporting/JobReporting/Installation/InstallationZoom/InstZoom.js";
import Select1 from "../../components/Select/Select";
import Stepper from "../../components/Stepper/Stepper";
import DashBoard from "../../screens/mainApp/DashBoard/DashBoard";
import BlankSamadhanID from "../../screens/mainApp/SamadhanID/BlankSamadhanID/BlankSamadhanID";
import OrganisationSamadhanID from "../../screens/mainApp/SamadhanID/OrganisationSamadhanID/OrganisationSamadhanID";
import SamadhanIDViewAll from "../../screens/mainApp/SamadhanID/SamadhanIDViewAll/SamadhanIDViewAll";
import UserList from "../../screens/mainApp/UserList/UserList";
import Organisation from "../../screens/mainApp/Organisation/OrganisationList/Organisation";
import AddOrganisation from "../../screens/mainApp/Organisation/AddOrganisation/AddOrganisation";
import TreeView from "../../components/TreeView/Treeview";
import ProfileStepper from "../../components/ProfileStepper/Stepper";
import Attendance from "../../screens/mainApp/Attendance/Attendance";
import Language from "../../screens/mainApp/Master/Language/Language";
import Module from "../../screens/mainApp/Master/Module/Module";
import Country from "../../screens/mainApp/Master/Country/Country";
import State from "../../screens/mainApp/Master/State/State";
import Inventory from "../../screens/mainApp/Inventory/InventoryList/Inventory";
import AddInventory from "../../screens/mainApp/Inventory/AddInventory/AddInventory";
import Package from "../../screens/mainApp/Package/PackageList/PackageList";
import AddPackage from "../../screens/mainApp/Package/AddPackage/AddPackage";
import Properties from "../../screens/mainApp/Properties/PropertyList/AllProperties/AllProperties";
import AddProperty from "../../screens/mainApp/Properties/PropertyList/AddProperty/AddProperty";
import UploadProperty from "../../screens/mainApp/Properties/PropertyList/UploadProperty/UploadProperty";
import CategoryList from "../../screens/mainApp/Properties/CategoryList/Category/CategoryList";
import SubCategory from "../../screens/mainApp/Properties/SubCategory/SubCategory";
import JobList from "../../screens/mainApp/Properties/JobList/JobList/JobList";
import AddCategory from "../../screens/mainApp/Properties/CategoryList/AddCategory/AddCategory";
import VerifyDocument from "../../screens/mainApp/Properties/VerifyDocument/VerifyDocument";
import RequestAccess from "../../screens/mainApp/Properties/RequestAccess/RequestAccess";
import AddJob from "../../screens/mainApp/Properties/JobList/AddJob/AddJob";
import City from "../../screens/mainApp/Master/City/City";
import JobCreation from "../../screens/mainApp/Operations/JobCreation/JobCreation";
import Initialisation from "../../screens/mainApp/Operations/JobCreation/Initialisation/Initialisation";
import CreateJob from "../../screens/mainApp/Operations/JobCreation/Initialisation/CreateJob/CreateJob";
import Installation from "../../screens/mainApp/Operations/JobCreation/Installation/Installation";
import QC from "../../screens/mainApp/Operations/JobCreation/QC/QC";
import JobReporting from "../../screens/mainApp/Operations/JobReporting/JobReporting/JobReporting";
import Initialisation1 from "../../screens/mainApp/Operations/JobReporting/JobReporting/Initialisation/Initialisation";
import QC1 from "../../screens/mainApp/Operations/JobReporting/JobReporting/QC/QC";
import QCTable from "../../screens/mainApp/Operations/JobReporting/JobReporting/QC/QCTable/QCTable";
import InitialisationTable from "../../screens/mainApp/Operations/JobReporting/JobReporting/Initialisation/InitialisationTable/InitialisationTable";
import AuditJob1 from "../../screens/mainApp/Operations/JobReporting/JobReporting/AuditJob/AuditJob";
import InstallationTable from "../../screens/mainApp/Operations/JobReporting/JobReporting/AuditJob/AuditTable/AuditTable";
import Installation1 from "../../screens/mainApp/Operations/JobReporting/JobReporting/Installation/Installation";
import OrganisationMain from "../../screens/mainApp/Organisation/OrganisationMain/OrganisationMain";
import AddSub from "../../screens/mainApp/Properties/SubCategory/AddSubCategory/AddSub";
import InstCJ from "../../screens/mainApp/Operations/JobCreation/Installation/CreateJob/CreateJob";
import UWH from "../../screens/mainApp/Operations/JobReporting/JobReporting/UserWorkHistory/UWH";
import UWHT from "../../screens/mainApp/Operations/JobReporting/JobReporting/UserWorkHistory/UWHTable/UWHTAble";
import UserHistory from "../../screens/mainApp/Operations/UserHistory/UserHistory";
import PV from "../../screens/mainApp/Visualise/PropertyVisualisation/PV";
import EMD from "../../screens/mainApp/Operations/EndMyDay/EndMyDay";

import OTP from "../../screens/authentication/OTP/OTP";
import Login from "../../screens/authentication/Login/Login";
import ResPassword from "../../screens/authentication/ResetPassword/ResetPassword";
import SignUp from "../../screens/authentication/SignUp/SignUp";
import ForPassword from "../../screens/authentication/ForgotPassword/ForgotPassword";
import SuccPassword from "../../screens/authentication/SuccessfulPasswordReset/SuccessfulPasswordReset";

const drawerWidth = 252;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		backgroundColor: "white",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: "260px",
		flexShrink: 0,
		whiteSpace: "nowrap",
		overflow: "hidden",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		margin: 0,
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	tabs: {
		flexGrow: 1,
		alignSelf: "center",
		marginLeft: "15%",
		borderColor: "white",
		bottom: "0",
		paddingBottom: "0%",
	},
	link: {
		textDecoration: "none",
		color: "#43425D",
	},
}));

export function OperationTab() {
	//Tabs
	const [tabIndex, setTabIndex] = React.useState(0);
	const tabsStyles = plainTabsStylesHook.useTabs();
	const tabItemStyles = plainTabsStylesHook.useTabItem();

	return (
		<div style={{ margin: "0 auto", marginTop: "1.1%" }}>
			<Tabs
				classes={tabsStyles}
				value={tabIndex}
				onChange={(e, index) => setTabIndex(index)}
			>
				<Tab
					classes={tabItemStyles}
					label={"JOBCREATION"}
					disableRipple={true}
					style={{
						color: "#BBBBBB",
						outline: "none",
						width: "10px",
						borderRadius: "5px",
						backgroundColor: "white",
						borderRight: "none",
						borderTop: "none",
						borderBottom: "none",
					}}
				/>
				<Tab
					classes={tabItemStyles}
					label={"JOBREPORTING"}
					disableRipple={true}
					style={{
						color: "#3B86FF",
						outline: "none",
						width: "10px",
						borderRadius: "5px",
					}}
				/>
			</Tabs>
		</div>
	);
}
export default function MiniDrawer(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const [samadhanSubMenu, setSamadhanSubmenu] = useState(false);
	const [masterSubMenu, setMasterSubmenu] = useState(false);
	const [propertiesSubMenu, setPropertiesSubmenu] = useState(false);
	const [showTabs, setShowTabs] = useState(false);
	const [value, setValue] = React.useState(0);
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
		clicked: "false",
	});
	const handleClick = () => {
		this.setState({ clicked: true });
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const onTab = () => {};
	const handleChange1 = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const toggleDrawer = () => {
		setOpen(!open);
		setSamadhanSubmenu(false);
		setMasterSubmenu(false);
		setPropertiesSubmenu(false);
	};
	//Section for top right side
	const colWidth = { xs: 4 };
	const borderColor = "grey.500";

	const toggleIcon = open ? <CancelOutlinedIcon /> : <MenuIcon />;
	const samadhanSubMenuListItems = samadhanSubMenu ? (
		<List style={{ backgroundColor: "#FFFFFF" }}>
			<a
				href="/samadhanID/organisation"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="SamadhanSubMenuItem1">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Organisation Samadhan ID" />
					</div>
				</ListItem>
			</a>
			<a
				href="/samadhanID/blank"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="SamadhanSubMenuItem1">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Blank Samadhan ID" />
					</div>
				</ListItem>
			</a>
		</List>
	) : null;
	const masterSubMenuListItems = masterSubMenu ? (
		<List>
			<ListItem button key="MasterSubMenuItem1">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Module" />
				</div>
			</ListItem>
			<a
				href="/master/country"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="MasterSubMenuItem2">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Country" />
					</div>
				</ListItem>
			</a>
			<a
				href="/master/state"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="MasterSubMenuItem3">
					<div className={styles.subMenuItems}>
						<ListItemText primary="State" />
					</div>
				</ListItem>
			</a>
			<a
				href="/master/city"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="MasterSubMenuItem4">
					<div className={styles.subMenuItems}>
						<ListItemText primary="City" />
					</div>
				</ListItem>
			</a>
			<a
				href="/master/language"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="MasterSubMenuItem5">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Language" />
					</div>
				</ListItem>
			</a>
		</List>
	) : null;
	const propertiesSubMenuListItems = propertiesSubMenu ? (
		<List>
			<a
				href="/properties/propertylist"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="Organisation">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Property List" />
					</div>
				</ListItem>
			</a>
			<a
				href="/properties/categorylist"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="Organisation">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Category List" />
					</div>
				</ListItem>
			</a>
			<a
				href="/properties/subcategorylist"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="Organisation">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Sub Category List" />
					</div>
				</ListItem>
			</a>
			<a
				href="/properties/joblist"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="Organisation">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Job List" />
					</div>
				</ListItem>
			</a>
			<a
				href="/properties/verifydocument"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="Organisation">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Verify Document" />
					</div>
				</ListItem>
			</a>
			<a
				href="/properties/requestaccess"
				style={{ textDecoration: "none", color: "#43425D" }}
			>
				<ListItem button key="Organisation">
					<div className={styles.subMenuItems}>
						<ListItemText primary="Request Access" />
					</div>
				</ListItem>
			</a>
		</List>
	) : null;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={clsx(classes.appBar, {})}>
				<Toolbar
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "baseline",
							float: "left",
						}}
					>
						<img
							src={Logo}
							alt="logo"
							style={{
								marginRight: "10%",
								align: "left",
								marginLeft: "-5%",
							}}
						/>
						<IconButton
							color="black"
							aria-label="open drawer"
							onClick={toggleDrawer}
							edge="start"
							className={clsx(classes.menuButton)}
							style={{ outline: "none", marginLeft: "7%" }}
						>
							{toggleIcon}
						</IconButton>
					</div>
					{/* <OperationTab /> */}
					<div
						style={{
							marginRight: "-2%",
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-start",
							alignItems: "center",
						}}
					>
						<Badge
							variant="dot"
							style={{
								color: "#000",
								padding: "2%",
							}}
						>
							<NotificationsNoneIcon
								style={{
									color: "#BCBCCB",
									cursor: "pointer",
									outline: "none",
								}}
							/>
						</Badge>
						<FormControl>
							<InputLabel
								style={{
									alignText: "center",
									fontSize: "smaller",
									padding: "2%",
								}}
							>
								Dhule&nbsp;ORG
							</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange1}
								style={{
									maxHeight: "80%",
									marginBottom: "5%",
								}}
								label="DHULE ORG"
								disableUnderline={true}
								InputProps={{
									name: "Filter",
								}}
							>
								<option aria-label="None" value="" />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</Select>
						</FormControl>
						<Avatar
							className={classes.orange}
							style={{ marginRight: "5%", padding: "2%" }}
						>
							JD
						</Avatar>
						<FormControl>
							<InputLabel
								style={{
									alignText: "center",
									fontSize: "smaller",
									padding: "2%",
								}}
							>
								John&nbsp;Doe
							</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange1}
								style={{
									maxHeight: "80%",
								}}
								label="DHULE ORG"
								disableUnderline={true}
								InputProps={{
									name: "Filter",
								}}
							>
								<option aria-label="None" value="" />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</Select>
						</FormControl>
						<img
							src={flag}
							style={{ marginRight: "1%", padding: "2%" }}
						/>
						<FormControl>
							<InputLabel
								style={{
									alignText: "center",
									fontSize: "smaller",
									padding: "2%",
								}}
							>
								EN
							</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange1}
								style={{
									maxHeight: "80%",
									marginBottom: "5%",
								}}
								disableUnderline={true}
								InputProps={{
									name: "Filter",
								}}
							>
								<option aria-label="None" value="" />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</Select>
						</FormControl>
					</div>
					{/* <div>
						<Box width={{ xs: "100%", md: "80%" }}>
							<Grid container justify={"center"}>
								// eslint-disable-next-line
								react/no-array-index-key
								<Grid item {...colWidth} classes={styles}>
									<Box textAlign={"center"}>
										<h2
											style={{
												margin: 0,
												fontSize: 20,
											}}
										>
											Content
										</h2>
									</Box>
								</Grid>
								<Grid item {...colWidth} classes={styles}>
									<Box textAlign={"center"}>
										<h2
											style={{
												margin: 0,
												fontSize: 20,
											}}
										>
											Content
										</h2>
									</Box>
								</Grid>
								<Grid item {...colWidth} classes={styles}>
									<Box textAlign={"center"}>
										<h2
											style={{
												margin: 0,
												fontSize: 20,
											}}
										>
											Content
										</h2>
									</Box>
								</Grid>
								<Grid item {...colWidth} classes={styles}>
									<Box textAlign={"center"}>
										<h2
											style={{
												margin: 0,
												fontSize: 20,
											}}
										>
											Content
										</h2>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</div> */}
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}></div>
				<List
					disablePadding={true}
					style={{
						backgroundColor: "#FCFCFC",
						boxShadow: "8px -8px 15px #00000024",
					}}
					className={styles.drawer}
				>
					<a
						href="/dashboard"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem button key="Dashboard">
							<ListItemIcon>
								<HomeOutlinedIcon
									style={{ color: "#43425D" }}
								/>
							</ListItemIcon>
							<ListItemText primary="Dashboard" />
						</ListItem>
					</a>
					<ListItem button key="Samadhan ID">
						<ListItemIcon>
							<img src={press} alt="press" />
						</ListItemIcon>
						<ListItemText primary="Samadhan ID" />
						<IconButton
							style={{ outline: "none" }}
							onClick={() => {
								setSamadhanSubmenu(!samadhanSubMenu);
							}}
						>
							{samadhanSubMenu ? (
								<KeyboardArrowDownIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</ListItem>
					{samadhanSubMenuListItems}
					<ListItem button key="Master">
						<ListItemIcon>
							<EqualizerOutlinedIcon
								style={{ color: "#43425D" }}
							/>
						</ListItemIcon>
						<ListItemText primary="Master" />
						<IconButton
							style={{ outline: "none" }}
							onClick={() => {
								setMasterSubmenu(!masterSubMenu);
							}}
						>
							{masterSubMenu ? (
								<KeyboardArrowDownIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</ListItem>
					{masterSubMenuListItems}
					<a
						href="/userlist"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem
							button
							key="User List"
							style={{ color: "#43425D" }}
						>
							<ListItemIcon>
								<img src={folder} alt="User List" />
							</ListItemIcon>
							<ListItemText primary="User List" />
						</ListItem>
					</a>
					<a
						href="/organisation"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem button key="Organisation">
							<ListItemIcon>
								<img src={organisation} alt="Organisation" />
							</ListItemIcon>
							<ListItemText primary="Organisation" />
						</ListItem>
					</a>
					<ListItem button key="Survey">
						<ListItemIcon>
							<EqualizerOutlinedIcon
								style={{ color: "#43425D" }}
							/>
						</ListItemIcon>
						<ListItemText primary="Survey" />
					</ListItem>
					<a
						href="/operations/jobcreation"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem button key="Operations" onClick={onTab}>
							<ListItemIcon>
								<img src={folder} alt="Operations" />
							</ListItemIcon>
							<ListItemText primary="Operations" />
						</ListItem>
					</a>
					<ListItem button key="Properties">
						<ListItemIcon>
							<img src={press} alt="Properties" />
						</ListItemIcon>
						<ListItemText primary="Properties" />
						<IconButton
							style={{ outline: "none" }}
							onClick={() => {
								setPropertiesSubmenu(!propertiesSubMenu);
							}}
						>
							{propertiesSubMenu ? (
								<KeyboardArrowDownIcon />
							) : (
								<ChevronRightIcon />
							)}
						</IconButton>
					</ListItem>
					{propertiesSubMenuListItems}
					<a
						href="/inventory"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem button key="Inventory">
							<ListItemIcon>
								<img src={store} alt="Inventory" />
							</ListItemIcon>
							<ListItemText
								primary="Inventory"
								style={{ fontSize: "smaller" }}
							/>
						</ListItem>
					</a>
					<a
						href="/package"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem button key="Package">
							<ListItemIcon>
								<img src={box} alt="Package" />
							</ListItemIcon>
							<ListItemText primary="Package" />
						</ListItem>
					</a>
					<ListItem button key="Attendance">
						<ListItemIcon>
							<img src={check} alt="Attendance" />
						</ListItemIcon>
						<ListItemText primary="Attendance" />
					</ListItem>
					<ListItem button key="Visualise">
						<ListItemIcon>
							<img src={taxation} alt="Visualise" />
						</ListItemIcon>
						<ListItemText primary="Visualise" />
					</ListItem>
					<ListItem button key="Taxation and Payments">
						<ListItemIcon>
							<img src={taxation} alt="Tax" />
						</ListItemIcon>
						<ListItemText primary="Taxation and Payments" />
					</ListItem>
					<a
						href="/profile"
						style={{ textDecoration: "none", color: "#43425D" }}
					>
						<ListItem button key="Profile">
							<ListItemIcon>
								<PersonOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItem>
					</a>
					<ListItem button key="Logout">
						<ListItemIcon>
							<img
								src={logout}
								style={{ paddingLeft: "5%" }}
								alt="logout"
							/>
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItem>
				</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{props.page}
				{/* <AddOrganisation /> */}
				{/* <SamadhanIDViewAll /> */}
				{/* <Stepper /> */}
				{/* <TreeView /> */}
				{/* <UserList /> */}
				{/* <Organisation /> */}
				{/* <DashBoard /> */}
				{/* <ProfileStepper /> */}
				{/* <Attendance /> */}
				{/* <Language /> */}
				{/* <Module /> */}
				{/* <Country /> */}
				{/* <State /> */}
				{/* <City /> */}
				{/* <Inventory /> */}
				{/* <AddInventory /> */}
				{/* <Package /> */}
				{/* <Properties /> */}
				{/* <AddProperty /> */}
				{/* <AddJob /> */}
				{/* <Login /> */}
				{/* <SignUp /> */}
				{/* <ForPassword /> */}
				{/* <ResPassword /> */}
				{/* <SuccPassword /> */}
				{/* <CustomizedInputs /> */}
				{/* <BlankSamadhanID /> */}
				{/* <JobCreation /> */}
				{/* <Initialisation /> */}
				{/* <CreateJob /> */}
				{/* <Installation /> */}
				{/* <QC /> */}
				{/* <JobReporting /> */}
				{/* <UploadProperty /> */}
				{/* <CategoryList /> */}
				{/* <AddCategory /> */}
				{/* <SubCategory /> */}
				{/* <JobList /> */}
				{/* <VerifyDocument /> */}
				{/* <RequestAccess /> */}
				{/* <Initialisation1 /> */}
				{/* <QC1 /> */}
				{/* <AuditJob1 /> */}
				{/* <DropDown /> */}
				{/* <InitialisationTable /> */}
				{/* <InstallationTable /> */}
				{/* <Installation1 /> */}
				{/* <InstZoom /> */}
				{/* <QCTable /> */}
				{/* <OTP /> */}
				{/* <OrganisationMain /> */}
				{/* <Select1 /> */}
				{/* <AddSub /> */}
				{/* <InstCJ /> */}
				{/* <UWH /> */}
				{/* <UWHT /> */}
				{/* <UserHistory /> */}
				{/* <PV /> */}
				<EMD />
			</main>
		</div>
	);
}
