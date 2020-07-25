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
import logout from "./images/logout-2@2x.png";
import folder from "./images/folder@2x.png";
import press from "./images/press@2x.png";
import organisation from "./images/organisation@2x.png";
import taxation from "./images/taxation@2x.png";
import Logo from "./images/Logo.png";
import Check from './images/check.png';
import Box from './images/box.png';
import Store from './images/store.png'
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import styles from "./CustomDrawer.module.css";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import Badge from "@material-ui/core/Badge";

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
import AddJob from "../../screens/mainApp/Properties/JobList/AddJob/AddJob";
import City from "../../screens/mainApp/Master/City/City";
import JobCreation from "../../screens/mainApp/Operations/JobCreation/JobCreation";
import Initialisation from "../../screens/mainApp/Operations/JobCreation/Initialisation/Initialisation";
import UploadProperty from '../../screens/mainApp/Properties/PropertyList/UploadProperty/UploadProperty'

import Login from "../../screens/authentication/Login/Login";
import ResPassword from "../../screens/authentication/ResetPassword/ResetPassword";
import SignUp from "../../screens/authentication/SignUp/SignUp";
import ForPassword from "../../screens/authentication/ForgotPassword/ForgotPassword";
import SuccPassword from "../../screens/authentication/SuccessfulPasswordReset/SuccessfulPasswordReset";
import CustomizedInputs from "../../screens/authentication/Login/ll";

const drawerWidth = 270;

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
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		overflow: "hidden",
		boxShadow: "2px 2px 2px 2px #000",
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
			display: "none",
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
}));

export default function MiniDrawer() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [samadhanSubMenu, setSamadhanSubmenu] = useState(false);
	const [masterSubMenu, setMasterSubmenu] = useState(false);
	const [propertiesSubMenu, setPropertiesSubmenu] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
		setSamadhanSubmenu(false);
		setMasterSubmenu(false);
		setPropertiesSubmenu(false);
	};
	const toggleIcon = open ? <CancelOutlinedIcon /> : <MenuIcon />;
	const samadhanSubMenuListItems = samadhanSubMenu ? (
		<List>
			<ListItem button key="SamadhanSubMenuItem1">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Organisation Samadhan ID" />
				</div>
			</ListItem>
			<ListItem button key="SamadhanSubMenuItem1">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Blank Samadhan ID" />
				</div>
			</ListItem>
		</List>
	) : null;
	const masterSubMenuListItems = masterSubMenu ? (
		<List>
			<ListItem button key="MasterSubMenuItem1">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Module" />
				</div>
			</ListItem>
			<ListItem button key="MasterSubMenuItem2">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Country" />
				</div>
			</ListItem>
			<ListItem button key="MasterSubMenuItem3">
				<div className={styles.subMenuItems}>
					<ListItemText primary="State" />
				</div>
			</ListItem>
			<ListItem button key="MasterSubMenuItem4">
				<div className={styles.subMenuItems}>
					<ListItemText primary="City" />
				</div>
			</ListItem>
			<ListItem button key="MasterSubMenuItem5">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Language" />
				</div>
			</ListItem>
		</List>
	) : null;
	const propertiesSubMenuListItems = propertiesSubMenu ? (
		<List>
			<ListItem button key="Organisation">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Property List" />
				</div>
			</ListItem>
			<ListItem button key="Organisation">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Category List" />
				</div>
			</ListItem>
			<ListItem button key="Organisation">
				<div className={styles.subMenuItems}>
					<ListItemText primary="Sub Category List" />
				</div>
			</ListItem>
		</List>
	) : null;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={clsx(classes.appBar, {})}>
				<Toolbar style={{ display: "flex", flexDirection: "row" }}>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "baseline",
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
							style={{ outline: "none" }}
						>
							{toggleIcon}
						</IconButton>
					</div>
					<div style={{ marginLeft: "60%" }}>
						<Badge
							variant="dot"
							style={{
								color: "#000",
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
					</div>
					<div>
						<Avatar
							className={classes.orange}
							style={{ marginLeft: "90%" }}
						>
							JD
						</Avatar>
					</div>
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
				<List>
					<ListItem button key="Dashboard">
						<ListItemIcon>
							<HomeOutlinedIcon style={{ color: "#43425D" }} />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
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
					<ListItem button key="User List">
						<ListItemIcon>
							<img src={folder} alt="User List" />
						</ListItemIcon>
						<ListItemText primary="User List" />
					</ListItem>
					<ListItem button key="Organisation">
						<ListItemIcon>
							<img src={organisation} alt="Organisation" />
						</ListItemIcon>
						<ListItemText primary="Organisation" />
					</ListItem>
					<ListItem button key="Survey">
						<ListItemIcon>
							<EqualizerOutlinedIcon
								style={{ color: "#43425D" }}
							/>
						</ListItemIcon>
						<ListItemText primary="Survey" />
					</ListItem>
					<ListItem button key="Operations">
						<ListItemIcon>
							<img src={folder} alt="Operations" />
						</ListItemIcon>
						<ListItemText primary="Operations" />
					</ListItem>
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
					<ListItem button key="Inventory">
						<ListItemIcon>
							<img src={Store} alt="Inventory" />
						</ListItemIcon>
						<ListItemText primary="Inventory" />
					</ListItem>
					<ListItem button key="Package">
						<ListItemIcon>
							<img src={Box} alt="Package" />
						</ListItemIcon>
						<ListItemText primary="Package" />
					</ListItem>
					<ListItem button key="Attendance">
						<ListItemIcon>
							<img src={Check} alt="Attendance" />
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
					<ListItem button key="Profile">
						<ListItemIcon>
							<PersonOutlinedIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItem>
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
				{/* <AddOrganisation /> */}
				{/* <Stepper /> */}
				{/* <TreeView /> */}
				{/* <UserList /> */}
				{/* <Organisation /> */}
				{/* <DashBoard /> */}
				{/* <ProfileStepper /> */}
				{/* <Attendance /> */}
				{/* <Language /> */}
				{/* <Module /> */}
				{/* {<Country />} */}
				{/* <State /> */}
				{/* <City /> */}
				{/* <Inventory /> */}
				{/* <AddInventory /> */}
				{/* <Package /> */}
				{/* <Properties /> */}
				{/* <AddProperty /> */}
				<UploadProperty />
				{/* <AddJob /> */}
				{/* <Login /> */}
				{/* <SignUp /> */}
				{/* <ForPassword />a */}
				{/* <ResPassword /> */}
				{/* <SuccPassword /> */}
				{/* <CustomizedInputs /> */}
				{/* <BlankSamadhanID /> */}
				{/* <JobCreation /> */}
				{/* <Initialisation /> */}
			</main>
		</div>
	);
}
