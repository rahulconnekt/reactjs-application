import React from "react";
import PropTypes from "prop-types";
import styles from "./OrganisationMain.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import edit from "../../../../Assets/edit.png";
import Dropdown from "../../../../components/Select/Select";
import SearchIcon from "@material-ui/icons/Search";
//Inventory
import InventoryTable from "../../../../components/InventoryTable/InventoryTable";

//Account
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";

//Custom Select
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import { Divider } from "@material-ui/core";

//Custom Searchbox
import InputBase from "@material-ui/core/InputBase";
import Search from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";

//Team
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Checkbox from "@material-ui/core/Checkbox";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

//VerifyDocument
import FormControlLabel from "@material-ui/core/FormControlLabel";

import back from "../../../../Assets/back.png";
//Member Permission
import Card1 from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
//People
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import AddIcon from "@material-ui/icons/Add";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #e8e8e8",
	},
	indicator: {
		backgroundColor: "#3B86FF",
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(3),
		outline: "none",
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:hover": {
			color: "#43425D",
			opacity: 1,
			outline: "none",
		},
		"&$selected": {
			color: "#43425D",
			fontWeight: theme.typography.fontWeightMedium,
			outline: "none",
		},
		"&:focus": {
			color: "#43425D",
			outline: "none",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	table: {
		minWidth: 620,
		borderRadius: 0,
	},
	select: {
		minWidth: "19vw",
		["@media (min-width: 320px) and (max-width: 375px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 376px) and (max-width: 425px)"]: {
			minWidth: "25vw",
		},
		background: "white",
		color: "#43425D",
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "2px",
		paddingBottom: "2px",
		fontSize: "13px",
		"&:hover": {
			borderColor: grey[400],
		},
		"&:focus": {
			borderRadius: "4px",
			background: "white",
			borderColor: blue[200],
		},
	},
	icon: {
		color: "#43425D",
		right: 12,
		position: "absolute",
		userSelect: "none",
		pointerEvents: "none",
	},
	list: {
		paddingTop: 0,
		paddingBottom: 0,
		background: "white",
		color: "#4d4f5c",
		fontSize: "smaller",
		"& li.Mui-selected": {
			fontWeight: 400,
		},
	},
	input: {
		"&::placeholder": {
			color: "#43425D",
			fontSize: "smaller",
		},
	},
}));

const BorderSelect = (props1) => {
	const [val, setVal] = React.useState(0);

	const handleChange = (event) => {
		setVal(event.target.value);
	};

	const borderSelectClasses = useBorderSelectStyles();
	const menuProps = {
		classes: {
			list: borderSelectClasses.list,
		},
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left",
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "left",
		},
		getContentAnchorEl: null,
	};

	const classes = useStyles();

	const iconComponent = (props) => {
		return (
			<ExpandMoreIcon
				className={
					props.className +
					" " +
					borderSelectClasses.icon +
					" " +
					classes.icon
				}
			/>
		);
	};

	return (
		<FormControl>
			<Select
				disableUnderline
				labelId="inputLabel"
				placeholder="Role"
				IconComponent={iconComponent}
				className={classes.select}
				MenuProps={menuProps}
				value={val}
				onChange={handleChange}
				style={{
					marginRight: "2%",
				}}
			>
				<MenuItem value={0}> {props1.holder} </MenuItem>{" "}
				<MenuItem value={1}> One </MenuItem>{" "}
				<MenuItem value={2}> Two </MenuItem>{" "}
				<MenuItem value={3}> Three </MenuItem>{" "}
			</Select>
		</FormControl>
	);
};

export function Organisation() {
	return (
		<div className={styles.organisationDiv}>
			<div className={styles.organisationFormDiv}>
				<span
					style={{
						color: "#707070",
						fontSize: "large",
						marginLeft: "3%",
						marginTop: "3%",
						marginBottom: "5%",
						fontSize: "22px",
					}}
				>
					Organisation Profile
				</span>
				<div className={styles.formRowDiv}>
					<span
						style={{
							color: "#43425D",
							paddingBottom: "2%",
						}}
					>
						Organisation display name
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Email (will be public)
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Description
					</span>
					<TextField
						variant="outlined"
						style={{
							width: "90%",
							outline: "none",
						}}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						URL
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Location
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Billing email (Private)
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
				<div className={styles.formRowDiv}>
					<span style={{ color: "#43425D", paddingBottom: "2%" }}>
						Gravatar email (Private)
					</span>
					<TextField
						variant="outlined"
						style={{ width: "90%", outline: "none" }}
					></TextField>
				</div>
			</div>
			<div className={styles.organisationProfileDiv}>
				<span
					style={{
						color: "#707070",
						fontSize: "large",
						font: "Source Sans Pro",
						fontWeight: "bold",
					}}
				>
					Profile Picture
				</span>
				<div className={styles.container}>
					<div className={styles.circle}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Chapultepec_Zoo_-_Jaguar_%2802%29.jpg/2560px-Chapultepec_Zoo_-_Jaguar_%2802%29.jpg" />
					</div>
				</div>
				<Button
					variant="filled"
					style={{
						backgroundColor: "#3B86FF",
						color: "white",
						textAlign: "center",
						height: "4em",
						marginTop: "5%",
						font: "Semibold Source Sans Pro",
					}}
				>
					Upload new Picture
				</Button>
			</div>
		</div>
	);
}

export function People() {
	const classes = useStyles();
	const [modal, setModal] = React.useState(false);
	const toggleModal = () => setModal(!modal);
	const [value, setValue] = React.useState(0);

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<div className={styles.moduleDiv}>
			<div className={styles.table1div}>
				<TableContainer
					component={Paper}
					style={{ boxShadow: "0px 2px 3px #0000000A" }}
				>
					<Table aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "50%",
										padding: "10px",
									}}
								>
									Organisation Permissions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									<span style={{ color: "#43425D" }}>
										Members
									</span>
									<span
										style={{
											color: "#43425D",
											marginLeft: "70%",
										}}
									>
										4
									</span>
								</TableCell>
							</TableRow>
							<Divider />
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#707070",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Outside collaborators
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#707070",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Pending collaborators
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#707070",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Pending invitations
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#707070",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Failed invitations
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#707070",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Verify Documents
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={styles.vdtable2div}>
				<div className={styles.vdsearchBarDiv}>
					<div className={styles.peoplesearchAndDrop}>
						<div className={styles.vdsearchBar}>
							<SearchBox1 />
						</div>
						<div className={styles.peopleDropdown}>
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									textTransform: "none",
									outline: "none",
								}}
							>
								Search
							</Button>
						</div>
						<div className={styles.peoplemodalDiv}>
							<SearchBox3 />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#0CD241",
									color: "white",
									textTransform: "none",
									outline: "none",
								}}
								onClick={toggleModal}
							>
								Invite User
							</Button>
						</div>
					</div>
				</div>

				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell style={{ color: "#A3A6B4" }}>
									<Checkbox />
								</TableCell>
								<TableCell
									align="left"
									style={{
										color: "#A3A6B4",
										textAlign: "left",
									}}
								>
									TEAM MEMBERS
								</TableCell>
								<TableCell
									align="left"
									style={{ color: "#A3A6B4" }}
								></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell align="right"></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell
									align="center"
									style={{ color: "#A3A6B4" }}
								>
									2FA
								</TableCell>
								<TableCell
									align="center"
									style={{ color: "#A3A6B4" }}
								>
									Role
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell>
										<Checkbox />
									</TableCell>
									<TableCell></TableCell>
									<TableCell>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												justifyContent: "flex-start",
											}}
										>
											<span
												style={{
													color: "#43425D",
													fontSize: "14px",
												}}
											>
												Priyanshi Gupta
											</span>
											<span
												style={{
													color: "#6C6C6C",
													fontSize: "14px",
												}}
											>
												PriyanshiSamadhan
											</span>
										</div>
									</TableCell>
									<TableCell style={{ color: "#03C903" }}>
										ACTIVE
									</TableCell>
									<TableCell>
										<Dropdown holder="Private" />
									</TableCell>
									<TableCell></TableCell>
									<TableCell style={{ whiteSpace: "nowrap" }}>
										2FA X
									</TableCell>
									<TableCell style={{ whiteSpace: "nowrap" }}>
										0 Teams
									</TableCell>
									<TableCell></TableCell>
									<TableCell>Member</TableCell>

									<TableCell>
										<Dropdown holder="Private" />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
						<Modal
							isOpen={modal}
							toggle={toggleModal}
							centered={true}
						>
							<ModalHeader style={{ color: "#43425D" }}>
								Change the role of priyanshiSamadhan?
							</ModalHeader>
							<ModalBody className={styles.vdmodalContainer}>
								<span
									style={{
										color: "#43425D",
										paddingBottom: "5%",
										fontSize: "20px",
									}}
								>
									Select a new role
								</span>
								<FormControl component="fieldset">
									<RadioGroup
										aria-label="gender"
										name="gender1"
										value={value}
										onChange={handleChange}
									>
										<FormControlLabel
											value="admin"
											control={
												<Radio
													style={{
														color: "#43425D",
													}}
												/>
											}
											label={
												<div
													style={{
														display: "flex",
														flexDirection: "column",
													}}
												>
													<span
														style={{
															color: "#43425D",
														}}
													>
														Admin
													</span>
													<span
														style={{
															color: "#707070",
															fontSize: "small",
															whiteSpace:
																"nowrap",
														}}
													>
														Has full administrative
														access to the entire
														organisation.
													</span>
												</div>
											}
										/>
										<FormControlLabel
											value="associate"
											control={
												<Radio
													style={{
														color: "#43425D",
													}}
												/>
											}
											label={
												<div
													style={{
														display: "flex",
														flexDirection: "column",
													}}
												>
													<span
														style={{
															color: "#43425D",
														}}
													>
														Associate
													</span>
													<span
														style={{
															color: "#707070",
															fontSize: "small",
														}}
													>
														Can see every member and
														team in the
														organisation, and create
														a new module
													</span>
												</div>
											}
										/>
									</RadioGroup>
								</FormControl>
								<div
									style={{
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										marginTop: "5%",
										width: "33%",
									}}
								>
									<AddIcon style={{ color: "#43425D" }} />
									<span
										style={{
											color: "#43425D",
											fontWeight: "bold",
											fontSize: "15px",
										}}
									>
										Create more role
									</span>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									variant="contained"
									onClick={toggleModal}
									style={{
										backgroundColor: "#43425D",
										color: "white",
										textTransform: "none",
										whiteSpace: "nowrap",
										outline: "none",
										marginRight: "3%",
									}}
								>
									Cancel
								</Button>
								<Button
									variant="contained"
									onClick={toggleModal}
									disabled
									style={{
										color: "white",
										textTransform: "none",
										whiteSpace: "nowrap",
										outline: "none",
									}}
								>
									Change Role
								</Button>
							</ModalFooter>
						</Modal>
					</Table>
				</TableContainer>
				<div className={styles.vdpaginationDiv}>
					<Pagination
						count={5}
						shape="rounded"
						color="primary"
						variant="outlined"
					/>
				</div>
			</div>
		</div>
	);
}

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
];

export function Inventory() {
	const classes = useStyles();

	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;
	return (
		<div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.searchAndDrop}>
						<div>
							<div className={styles.searchBar}>
								<TextField
									id="standard-search"
									size="small"
									type="search"
									variant="outlined"
									style={{
										border: "1px solid #F5F6FA",
										borderRadius: "4px",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search...",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Dropdown holder="User" />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									textTransform: "none",
									backgroundColor: "#43425D",
									width: "40%",
									marginLeft: "2%",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonDiv}>
						<Button
							variant="contained"
							color="secondary"
							style={{
								backgroundColor: "#F2134F",
								textTransform: "none",
								width: "100%",
							}}
						>
							Add
						</Button>
					</div>
				</div>
				<div className={styles.tableDiv}>
					<InventoryTable />
				</div>
			</div>
			<div className={styles.paginationDiv}>
				<Pagination
					count={5}
					shape="rounded"
					color="primary"
					variant="outlined"
				/>
			</div>
		</div>
	);
}

export function Billing() {
	return (
		<div className={styles.billingFormDiv}>
			<span
				style={{
					color: "#707070",
					fontSize: "large",
					marginLeft: "3%",
					marginTop: "3%",
					marginBottom: "5%",
					fontSize: "22px",
				}}
			>
				Billing
			</span>
			<div className={styles.formRowDiv}>
				<span
					style={{
						color: "#43425D",
						paddingBottom: "2%",
					}}
				>
					Billing name
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv} style={{ marginBottom: "10%" }}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Billing email
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
		</div>
	);
}

export function Account() {
	const classes = useStyles();
	return (
		<div>
			<TableContainer
				component={Paper}
				style={{
					marginLeft: "-1%",
				}}
			>
				<Table className={classes.table} aria-label="simple table">
					<TableHead style={{ backgroundColor: "#F5F6FA" }}>
						<TableRow>
							<TableCell
								style={{
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								ORGANISATION NAME
							</TableCell>
							<TableCell
								style={{
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								AMOUNT PAID
							</TableCell>
							<TableCell
								style={{
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								PROPERTY NUMBER
							</TableCell>
							<TableCell
								style={{
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								TAX TYPE
							</TableCell>
							<TableCell
								style={{
									textAlign: "left",
									color: "#A3A6B4",
									whiteSpace: "nowrap",
									fontSize: "13px",
								}}
							>
								TYPE OF PAYMENT
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Dhule Organisation
								</TableCell>
								<TableCell
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									1000
								</TableCell>
								<TableCell
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									78546
								</TableCell>
								<TableCell
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Property Tax
								</TableCell>
								<TableCell
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Cash
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<div className={styles.paginationDiv}>
				<Pagination
					count={5}
					shape="rounded"
					color="primary"
					variant="outlined"
				/>
			</div>
		</div>
	);
}

export function Account2() {
	return (
		<div>
			<div className={styles.acc2mainDiv}>
				<span className={styles.spanDiv}>
					This screen is not accessible to your Organisation
				</span>
			</div>
			<div className={styles.paginationDiv}>
				<Pagination
					count={5}
					shape="rounded"
					color="primary"
					variant="outlined"
				/>
			</div>
		</div>
	);
}

export function Settings() {
	return (
		<div className={styles.billingFormDiv}>
			<span
				style={{
					color: "#707070",
					fontSize: "large",
					marginLeft: "3%",
					marginTop: "3%",
					marginBottom: "5%",
					fontSize: "22px",
				}}
			>
				Settings
			</span>
			<div className={styles.formRowDiv}>
				<span
					style={{
						color: "#43425D",
						paddingBottom: "2%",
					}}
				>
					Organization display name
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Sub domain name
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Description
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					URL
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
			<div className={styles.formRowDiv}>
				<span style={{ color: "#43425D", paddingBottom: "2%" }}>
					Location
				</span>
				<TextField
					variant="outlined"
					style={{ width: "90%", outline: "none" }}
				></TextField>
			</div>
		</div>
	);
}

const SearchBox = () => {
	const styles = useBorderedInputBaseStyles();
	return (
		<div>
			<InputBase
				classes={styles}
				placeholder={"Find a repository they have access to..."}
				startAdornment={<Search />}
				style={{
					backgroundColor: "#FFFFFF",
					border: "none",
					fontSize: "12px",
					borderRadius: "5px",
					boxShadow: "0px 3px 3px #00000014",
					minWidth: "20vw",
					padding: "5px",
				}}
			/>
		</div>
	);
};
export function Module() {
	const classes = useStyles();
	return (
		<div className={styles.moduleDiv}>
			<div className={styles.table1div}>
				<TableContainer
					component={Paper}
					style={{ boxShadow: "0px 2px 3px #0000000A" }}
				>
					<Table aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "50%",
										padding: "10px",
									}}
								>
									Organisation Details
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									<BorderSelect holder="Role:Member" />
								</TableCell>
							</TableRow>
							<Divider />
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									1 modules
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									0 teams
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Membership Private
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									User Verified
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<Button
					variant="filled"
					style={{
						backgroundColor: "#DF2020",
						color: "white",
						fontSize: "14px",
						width: "100%",
						textTransform: "none",
						marginTop: "10%",
						outline: "none",
					}}
				>
					Remove from organisation
				</Button>
			</div>
			<div className={styles.table2div}>
				<TableContainer component={Paper}>
					<Table
						aria-label="simple table"
						style={{ tableLayout: "auto" }}
					>
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										textAlign: "left",
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "70%",
									}}
								>
									List of Modules
								</TableCell>
								<TableCell
									style={{
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
									}}
								>
									<SearchBox />
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell
										component="th"
										scope="row"
										style={{
											color: "#43425D",
											font:
												"Semibold 18px/25px Source Sans Pro",
											fontWeight: "bold",
											fontSize: "18px",
										}}
									>
										Samadhan-Technologies/Dhule/Property
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										style={{
											textAlign: "right",
											color: "#03C903",
											font:
												"Semibold 13px/20px Source Sans Pro",
											paddingRight: "3vw",
											fontWeight: "bold",
										}}
									>
										ACTIVE
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

export function Teams() {
	const [modal, setModal] = React.useState(false);
	const toggleModal = () => setModal(!modal);
	return (
		<div className={styles.teamDiv}>
			<div className={styles.cardDiv}>
				<div className={styles.circleCard}>
					<Card
						style={{
							minWidth: 310,
							minHeight: 200,
							boxShadow: "3px 3px 3px #00000014",
							borderRadius: "8px",
							border: "none",
						}}
					>
						<div className={styles.circleDiv}></div>
						<CardBody>
							<CardTitle
								style={{
									marginTop: "20%",
									marginLeft: "10%",
									color: "#43425D",
									fontSize: "22px",
									fontWeight: "bold",
								}}
							>
								Flexible module access
							</CardTitle>
							<CardSubtitle
								style={{
									marginLeft: "9%",
									color: "#7070708F",
									fontSize: "15px",
								}}
							>
								you can add modules to your teams
							</CardSubtitle>
						</CardBody>
					</Card>
				</div>
				<div className={styles.circleCard}>
					<Card
						style={{
							minWidth: 310,
							minHeight: 200,
							boxShadow: "3px 3px 3px #00000014",
							marginLeft: "50%",
							borderRadius: "8px",
							border: "none",
						}}
					>
						<div className={styles.circleDiv}></div>
						<CardBody>
							<CardTitle
								style={{
									marginTop: "20%",
									marginLeft: "10%",
									color: "#43425D",
									fontSize: "22px",
									fontWeight: "bold",
								}}
							>
								Request to join teams
							</CardTitle>
							<CardSubtitle
								style={{
									marginLeft: "9%",
									color: "#7070708F",
									fontSize: "15px",
								}}
							>
								Request members to join the team
							</CardSubtitle>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className={styles.teamTableDiv}>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										textAlign: "left",
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "5%",
										padding: "5px",
									}}
								>
									<Checkbox color="primary" />
								</TableCell>
								<TableCell
									style={{
										color: "#A3A6B4",
										whiteSpace: "nowrap",
										fontSize: "13px",
										width: "40%",
										padding: "5px",
									}}
								>
									LIST OF TEAMS
								</TableCell>
								<TableCell
									style={{
										color: "#A3A6B4",
										whiteSpace: "nowrap",
										fontSize: "13px",
										width: "40%",
										padding: "5px",
									}}
								>
									MEMBERS
								</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell
										component="th"
										scope="row"
										style={{
											padding: "5px",
										}}
									>
										<Checkbox color="primary" />
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										style={{
											color: "#43425D",
											font:
												"Semibold 13px/20px Source Sans Pro",
											padding: "5px",
										}}
									>
										TEAM#A
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										style={{
											color: "#6C6C6C",
											font:
												"Semibold 13px/20px Source Sans Pro",
											padding: "5px",
										}}
									>
										10
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										style={{
											textAlign: "right",
											color: "#03C903",
											font:
												"Semibold 13px/20px Source Sans Pro",
											fontWeight: "bold",
											paddingRight: "2vw",
										}}
									>
										<img src={edit} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={styles.teamButtonDiv}>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#0CD241",
						color: "white",
						textTransform: "none",
						outline: "none",
						width: "10%",
					}}
					onClick={toggleModal}
				>
					New team
				</Button>
				<Button
					variant="contained"
					style={{
						marginLeft: "4%",
						backgroundColor: "#FFFFFF",
						color: "#3B86FF",
						textTransform: "none",
						outline: "none",
						width: "10%",
					}}
				>
					Learn more
				</Button>
			</div>
			<Modal isOpen={modal} toggle={toggleModal} centered={true}>
				<ModalHeader
					style={{
						font: "Source Sans Pro",
						color: "#43425D",
						fontWeight: "normal",
					}}
				>
					Create new team
				</ModalHeader>
				<ModalBody className={styles.modalContainer}>
					<form>
						<div
							style={{
								marginBottom: "5%",
								marginTop: "2%",
							}}
						>
							<TextField
								variant="outlined"
								label="Team name"
								style={{ width: "95%" }}
							/>
							<span
								style={{
									color: "#64686D",
									marginLeft: "2%",
									font: "SF Pro Text",
									fontSize: "15px",
								}}
							>
								You'll use this name to mention this team in
								conversations.
							</span>
						</div>
						<div
							style={{
								marginBottom: "5%",
							}}
						>
							<TextField
								variant="outlined"
								label="Description"
								style={{ width: "95%" }}
							/>
							<span
								style={{
									color: "#64686D",
									marginLeft: "2%",
									font: "SF Pro Text",
									fontSize: "15px",
								}}
							>
								What is this team all about?
							</span>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginLeft: "2%",
								marginBottom: "20%",
							}}
						>
							<span
								style={{ color: "#43425D", fontSize: "18px" }}
							>
								Parent team
							</span>
							<span
								style={{ color: "#707070", fontSize: "16px" }}
							>
								There are no teams that can be selected.
							</span>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button
						variant="contained"
						color="primary"
						onClick={toggleModal}
						style={{
							marginRight: "2%",
							backgroundColor: "#43425D",
							textTransform: "none",
							width: "20%",
							marginRight: "5%",
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={toggleModal}
						disabled
						style={{
							textTransform: "none",
						}}
					>
						Create team
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export function ManageAccess() {
	const classes = useStyles();
	return (
		<div className={styles.moduleDiv}>
			<div className={styles.table1div}>
				<TableContainer
					component={Paper}
					style={{ boxShadow: "0px 2px 3px #0000000A" }}
				>
					<Table aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "50%",
										padding: "10px",
									}}
								>
									Organisation Details
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									<BorderSelect holder="Role:Member" />
								</TableCell>
							</TableRow>
							<Divider />
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									1 modules
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									0 teams
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Membership Private
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<Button
					variant="filled"
					style={{
						backgroundColor: "#DF2020",
						color: "white",
						fontSize: "14px",
						width: "100%",
						textTransform: "none",
						marginTop: "10%",
						outline: "none",
					}}
				>
					Remove from organisation
				</Button>
			</div>
			<div className={styles.table2div}>
				<TableContainer component={Paper}>
					<Table
						aria-label="simple table"
						style={{ tableLayout: "auto" }}
					>
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										textAlign: "left",
										color: "#A3A6B4",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "50%",
									}}
								>
									<span style={{ color: "#43425D" }}>
										priyanshiSamadhan
									</span>
									&nbsp;has access to 1 module
								</TableCell>
								<TableCell style={{ width: "60%" }}>
									&nbsp;
								</TableCell>
								<TableCell
									style={{
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
									}}
								>
									<SearchBox />
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell
										component="th"
										scope="row"
										style={{
											color: "#3B86FF",
											font:
												"Semibold 18px/25px Source Sans Pro",
											fontWeight: "bold",
											fontSize: "14px",
										}}
									>
										Samadhan-Technologies/Dhule/Property
									</TableCell>
									<TableCell
										style={{
											color: "#6C6C6C",
											fontSize: "14px",
										}}
									>
										Read on this module
									</TableCell>
									<TableCell
										component="th"
										scope="row"
										align="right"
									>
										<Button
											style={{
												backgroundColor: "#43425D",
												color: "white",
												textTransform: "none",
												fontWeight: "lighter",
												fontSize: "smaller",
											}}
										>
											Manage access
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

const SearchBox1 = () => {
	const styles = useBorderedInputBaseStyles();
	return (
		<div>
			<InputBase
				classes={styles}
				placeholder={"Search..."}
				startAdornment={<Search />}
				style={{
					backgroundColor: "#FFFFFF",
					border: "none",
					fontSize: "12px",
					borderRadius: "5px",
					boxShadow: "0px 3px 3px #00000014",
					minWidth: "13vw",
					padding: "5px",
				}}
			/>
		</div>
	);
};
const SearchBox2 = () => {
	const styles = useBorderedInputBaseStyles();
	return (
		<div>
			<InputBase
				classes={styles}
				placeholder={"Search..."}
				startAdornment={<Search />}
				style={{
					backgroundColor: "#FFFFFF",
					border: "none",
					fontSize: "12px",
					borderRadius: "5px",
					boxShadow: "0px 3px 3px #00000014",
					minWidth: "11vw",
					padding: "5px",
				}}
			/>
		</div>
	);
};
const SearchBox3 = () => {
	const styles = useBorderedInputBaseStyles();
	return (
		<div>
			<InputBase
				classes={styles}
				placeholder={"Invite by username, full name, or email address"}
				style={{
					backgroundColor: "#FFFFFF",
					border: "none",
					fontSize: "10px",
					borderRadius: "5px",
					boxShadow: "0px 3px 3px #00000014",
					minWidth: "27vw",
					padding: "5px",
				}}
			/>
		</div>
	);
};
export function VerifyDocument() {
	const classes = useStyles();
	const [modal, setModal] = React.useState(false);
	const toggleModal = () => setModal(!modal);
	const [state, setState] = React.useState({
		age: "",
		checkedModule3: "false",
		checkedModule2: "false",
		checkedModule1: "false",
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	return (
		<div className={styles.moduleDiv}>
			<div className={styles.table1div}>
				<TableContainer
					component={Paper}
					style={{ boxShadow: "0px 2px 3px #0000000A" }}
				>
					<Table aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{
										color: "#43425D",
										whiteSpace: "nowrap",
										fontSize: "15px",
										width: "50%",
										padding: "10px",
									}}
								>
									Organisation Permissions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component="th" scope="row">
									<span style={{ color: "#707070" }}>
										Members
									</span>
									<span
										style={{
											color: "#707070",
											marginLeft: "70%",
										}}
									>
										4
									</span>
								</TableCell>
							</TableRow>
							<Divider />
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Outside collaborators
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Pending collaborators
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Pending invitations
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#4D4F5C",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
									}}
								>
									Failed invitations
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									component="th"
									scope="row"
									style={{
										color: "#43425D",
										fontFamily:
											"Regular 13px/20px Source Sans Pro",
										fontWeight: "bold",
									}}
								>
									Verify Documents
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={styles.vdtable2div}>
				<div className={styles.vdsearchBarDiv}>
					<div className={styles.vdsearchAndDrop}>
						<div className={styles.vdsearchBar}>
							<SearchBox2 />
						</div>
						<div className={styles.vddropDownDiv}>
							<Dropdown holder="User" />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									width: "35%",
									textTransform: "none",
									outline: "none",
								}}
							>
								Search
							</Button>
						</div>
					</div>
				</div>

				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									align="left"
									style={{ color: "#A3A6B4" }}
								>
									Username
								</TableCell>
								<TableCell
									align="left"
									style={{ color: "#A3A6B4" }}
								>
									Firstname
								</TableCell>
								<TableCell
									align="left"
									style={{ color: "#A3A6B4" }}
								>
									Lastname
								</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
								<TableCell align="right">
									<Checkbox />
								</TableCell>
								<TableCell></TableCell>
								<TableCell
									align="center"
									style={{ color: "#A3A6B4" }}
								></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell
										align="left"
										style={{ color: "#4D4F5C" }}
									>
										User
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#4D4F5C" }}
									>
										UserFirst
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#4D4F5C" }}
									>
										UserLast
									</TableCell>
									<TableCell align="left"></TableCell>
									<TableCell align="left"></TableCell>
									<TableCell align="right">
										<Checkbox />
									</TableCell>
									<TableCell></TableCell>
									<TableCell align="left">
										<span
											style={{
												cursor: "pointer",
												color: "#3B86FF",
											}}
											onClick={toggleModal}
										>
											View
										</span>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
						<Modal
							isOpen={modal}
							toggle={toggleModal}
							centered={true}
						>
							<ModalBody className={styles.vdmodalContainer}>
								<div className={styles.vdinnerDiv}>
									<span
										style={{
											color: "#4D4F5C",
											opacity: "0.5",
											padding: "10% 20% 20% 40%",
										}}
									>
										Document
									</span>
								</div>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedA}
											onChange={handleChange}
											name="checkedModule1"
											style={{
												color: "#3B86FF",
											}}
										/>
									}
									style={{ color: "#43425D" }}
									label="Aadhaar Card"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedB}
											onChange={handleChange}
											name="checkedModule2"
											style={{
												color: "#3B86FF",
											}}
										/>
									}
									style={{ color: "#43425D" }}
									label="Pan Card"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedC}
											onChange={handleChange}
											name="checkedModule3"
											style={{
												color: "#3B86FF",
											}}
										/>
									}
									style={{ color: "#43425D" }}
									label="Others"
								/>
							</ModalBody>
							<ModalFooter
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-evenly",
								}}
							>
								<Button
									variant="contained"
									style={{
										backgroundColor: "#3B86FF",
										color: "white",
										textTransform: "none",
										whiteSpace: "nowrap",
										fontSize: "small",
										outline: "none",
									}}
								>
									User Verified
								</Button>
								<Button
									variant="contained"
									onClick={toggleModal}
									style={{
										backgroundColor: "#FF0000",
										color: "white",
										textTransform: "none",
										whiteSpace: "nowrap",
										fontSize: "small",
										outline: "none",
									}}
								>
									Document not verified
								</Button>
								<Button
									variant="contained"
									onClick={toggleModal}
									style={{
										backgroundColor: "#0CD241",
										color: "white",
										textTransform: "none",
										whiteSpace: "nowrap",
										fontSize: "small",
										outline: "none",
									}}
								>
									Document Verified
								</Button>
							</ModalFooter>
						</Modal>
					</Table>
				</TableContainer>
				<div className={styles.vdpaginationDiv}>
					<Pagination
						count={5}
						shape="rounded"
						color="primary"
						variant="outlined"
					/>
				</div>
			</div>
		</div>
	);
}

export function MemberPermission() {
	return (
		<div className={styles.mpMainDiv}>
			<div style={{ marginLeft: "1%" }}>
				<img src={back} style={{}} />
			</div>
			<div className={styles.mpFirstDiv}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
					}}
				>
					<span style={{ color: "#3B86FF", fontSize: "20px" }}>
						Samadhan-Technologies/Dhule/Property
					</span>
					<span style={{ color: "#707070", fontSize: "16px" }}>
						priyanshiSamadhan has read access to this module
					</span>
				</div>
				<div>
					<Button
						disabled
						style={{
							width: "100%",
							textTransform: "none",
							color: "white",
							padding: "10px",
						}}
						variant="contained"
					>
						Remove access to this module
					</Button>
				</div>
			</div>
			<div className={styles.mpGridDiv}>
				<Card1 style={{ maxWidth: "90%" }}>
					<CardHeader
						style={{
							color: "#43425D",
							backgroundColor: "#F5F6FA",
							display: "flex",
							justifyContent: "center",
						}}
						title="Ability to view users"
						disableTypography={true}
					/>
					<CardContent
						style={{
							color: "#707070",
							backgroundColor: "white",
							display: "flex",
							padding: "50px",
							justifyContent: "center",
						}}
					>
						Give access to view the users
					</CardContent>
				</Card1>
				<Card1 style={{ maxWidth: "90%" }}>
					<CardHeader
						style={{
							color: "#43425D",
							backgroundColor: "#F5F6FA",
							display: "flex",
							justifyContent: "center",
						}}
						title="Ability to add users"
						disableTypography={true}
					/>
					<CardContent
						style={{
							color: "#707070",
							backgroundColor: "white",
							display: "flex",
							padding: "50px",
							justifyContent: "center",
						}}
					>
						Give access to add users
					</CardContent>
				</Card1>
				<Card1 style={{ maxWidth: "90%" }}>
					<CardHeader
						style={{
							color: "#43425D",
							backgroundColor: "#F5F6FA",
							display: "flex",
							justifyContent: "center",
						}}
						title="Ability to modify users"
						disableTypography={true}
					/>
					<CardContent
						style={{
							color: "#707070",
							backgroundColor: "white",
							padding: "50px",
							display: "flex",
							justifyContent: "center",
						}}
					>
						Give access to modify/edit users
					</CardContent>
				</Card1>
			</div>
		</div>
	);
}
export function Security() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		checkedA: "false",
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	return (
		<div className={styles.secMainDiv}>
			<div className={styles.secHeader}>
				<span className={styles.secTitle}>Security</span>
			</div>
			<div className={styles.secHeader2}>
				<span style={{ marginLeft: "3%" }} className={styles.secTitle2}>
					DELETE
				</span>
				<span
					style={{ marginLeft: "10%" }}
					className={styles.secTitle2}
				>
					ROLE DESCRIPTION
				</span>
				<span
					style={{ marginLeft: "30%" }}
					className={styles.secTitle2}
				>
					PERMISSIONS
				</span>
			</div>
			<div className={styles.cellDiv}>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.checkedA}
							onChange={handleChange}
							name="checkedA"
							style={{ color: "#43425D" }}
						/>
					}
				/>
				<InputBase
					className={classes.select}
					style={{ marginLeft: "15%" }}
					placeholder="Admin"
					InputProps={{
						input: classes.input,
					}}
				/>
				{/* Custom minWidth:"19vw" */}
				<div className={styles.innerCellDiv}>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="addUser"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="editRoles"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
				</div>
				<div className={styles.innerCellDiv}>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="editUser"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="deleteUser"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
				</div>
			</div>
			<div className={styles.cellDiv} style={{ border: "none" }}>
				<FormControlLabel
					control={
						<Checkbox
							checked={state.checkedA}
							onChange={handleChange}
							name="checkedA"
							style={{ color: "#43425D" }}
						/>
					}
				/>
				<InputBase
					className={classes.select}
					style={{ marginLeft: "15%" }}
				/>
				{/* Custom minWidth:"19vw" */}
				<div className={styles.innerCellDiv}>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="addUser"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="editRoles"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
				</div>
				<div className={styles.innerCellDiv}>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="editUser"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={state.checkedA}
								onChange={handleChange}
								name="checkedA"
								style={{ color: "#43425D" }}
							/>
						}
						label="deleteUser"
						style={{ color: "#43425D", fontWeight: "bolder" }}
					/>
				</div>
			</div>
			<div className={styles.secFinalDiv}>
				<Button
					variant="outlined"
					style={{
						border: "1.5px solid #43425D",
						textTransform: "none",
						outline: "none",
						color: "#43425D",
						fontWeight: "bold",
					}}
				>
					Update Roles
				</Button>
			</div>
		</div>
	);
}

export default function Main() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className={styles.main}>
			<div className={styles.title} style={{ marginBottom: "2%" }}>
				<span>Dhule Organisation</span>
			</div>
			<div className={styles.tabsDiv}>
				<div className={classes.root}>
					<div style={{ marginLeft: "-1%" }}>
						<AntTabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="auto"
							aria-label="ant example"
							centered={true}
						>
							<AntTab label="ORGANISATION" />
							<AntTab label="PEOPLE" />
							<AntTab label="TEAMS" />
							<AntTab label="MODULES" />
							<AntTab label="INVENTORY" />
							<AntTab label="ACCOUNT" />
							<AntTab label="SECURITY" />
							<AntTab label="SETTINGS" />
							<AntTab label="BILLING" />
							<AntTab label="" disabled={true} />
							<AntTab label="" disabled={true} />
						</AntTabs>
					</div>
				</div>
			</div>
			<TabPanel value={value} index={0}>
				<Organisation />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Inventory />
			</TabPanel>
			<TabPanel value={value} index={8}>
				<Billing />
			</TabPanel>
			<TabPanel value={value} index={5}>
				<Account />
			</TabPanel>
			<TabPanel value={value} index={7}>
				<Settings />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<Module />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Teams />
			</TabPanel>
			{/* <TabPanel value={value} index={1}>
							<ManageAccess />
						</TabPanel> */}
			{/* <TabPanel value={value} index={1}>
				<VerifyDocument />
			</TabPanel> */}
			{/* <TabPanel value={value} index={1}>
				<People />
			</TabPanel> */}
			<TabPanel value={value} index={6}>
				<Security />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<MemberPermission />
			</TabPanel>
		</div>
	);
}
