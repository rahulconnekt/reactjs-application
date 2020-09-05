import React, { useState } from "react";
import styles from "./Inventory.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
];

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
	table: {
		minWidth: 650,
		borderRadius: 0,
	},
	select: {
		minWidth: "8.5vw",
		["@media (min-width: 320px) and (max-width: 375px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 376px) and (max-width: 425px)"]: {
			minWidth: "25vw",
		},
		background: "white",
		color: grey[700],
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "4px",
		paddingBottom: "4px",
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
		color: grey[500],
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
}));

const BorderSelect = (props1) => {
	const [val, setVal] = useState(0);

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
				className={props.className + " " + borderSelectClasses.icon}
			/>
		);
	};

	return (
		<FormControl>
			<Select
				disableUnderline
				labelId="inputLabel"
				placeholder={props1.holder}
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

export default function Inventory() {
	const classes = useStyles();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Inventory</span>
			</div>
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
							<BorderSelect holder="User" />
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
				<div className={styles.table}>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							aria-label="simple table"
						>
							<TableHead style={{ backgroundColor: "#F5F6FA" }}>
								<TableRow>
									<TableCell
										align="left"
										style={{
											textAlign: "left",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										PACKAGE
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										NO. OF FRESH CARDS
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										NO. OF FAILED
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										NO. OF DAMAGE CARDS
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										SCREW
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										SCREW DRIVER
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										DRILL GUN
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										WOOD PLUGS
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										JOB SHEETS
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
											whiteSpace: "nowrap",
											fontSize: "13px",
										}}
									>
										QUANTITIES
									</TableCell>
									<TableCell align="left"></TableCell>
									<TableCell align="left"></TableCell>
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
											USER
										</TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											1000
										</TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											1000
										</TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											50
										</TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>
										<TableCell></TableCell>

										<TableCell
											align="left"
											padding="checkbox"
										>
											<DeleteForeverIcon
												style={{
													padding: "none",
												}}
											/>
										</TableCell>
										<TableCell
											align="left"
											padding="checkbox"
										>
											<EditIcon
												style={{
													color: "#f2134f",
												}}
											/>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
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
