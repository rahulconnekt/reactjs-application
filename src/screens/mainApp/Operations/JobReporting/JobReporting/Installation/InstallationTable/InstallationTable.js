import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./InstallationTable.module.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import DatePicker from "../../../../../../../components/DatePicker/DatePicker";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Dropdown from "../../../../../../../components/Select/Select";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import download from "../../../../../../../../src/Assets/upload1.png";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch",
		},
		"& .MuiPagination-root": {
			margin: theme.spacing(3),
			color: "standard",
		},
		root1: {
			flexGrow: 1,
			maxHeight: "60%",
		},
		table: {
			minWidth: 850,
			borderRadius: 0,
			overflowY: "auto",
			overflowX: "auto",
			maxHeight: 10,
			overflow: "scroll",
		},
		input: {
			color: "#4D4F5C",
			fontSize: "smaller",
		},
		select: {
			minWidth: "8vw",
			["@media (min-width: 320px) and (max-width: 375px)"]: {
				minWidth: "25vw",
			},
			["@media (min-width: 376px) and (max-width: 425px)"]: {
				minWidth: "25vw",
			},
			["@media (min-width: 426px) and (max-width: 768px)"]: {
				minWidth: "45vw",
			},
			["@media (min-width: 769px) and (max-width: 1024px)"]: {
				minWidth: "45vw",
			},
			background: "white",
			color: grey[700],
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
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
}));

const DropDown = (props1) => {
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
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Language() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>
					Operations/ Job Reporting /
				</span>
				<span style={{ fontWeight: "lighter", color: "#BBBBBB" }}>
					&nbsp;Installation
				</span>
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
										borderColor: "#F5F6FA",
										borderRadius: "4px",
										marginRight: "2%",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search..",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
								<Dropdown
									holder="Filter"
									style={{ marginLeft: "2%" }}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",

									textTransform: "none",
									width: "110px",
									fontWeight: "lighter",
									marginLeft: "5%",
									marginRight: "5%",
								}}
							>
								Search
							</Button>
							<Dropdown holder="Week" />
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-evenly",
							}}
						>
							<span
								style={{
									textAlign: "center",
									alignSelf: "center",
									fontSize: "large",
									color: "#43425D",
								}}
							>
								From Date
							</span>
							<TextField
								id="standard-search"
								size="small"
								type="date"
								variant="outlined"
								style={{
									borderColor: "#F5F6FA",
									borderRadius: "4px",
									marginLeft: "2%",
									width: "33%",
								}}
								InputProps={{
									classes: { input: classes.input },
									color: "#4D4F5C",
									focused: classes.focused,
								}}
							/>
							<span
								style={{
									textAlign: "center",
									fontSize: "large",
									alignSelf: "center",
									color: "#43425D",
								}}
							>
								To Date
							</span>
							<TextField
								id="standard-search"
								size="small"
								type="date"
								variant="outlined"
								style={{
									borderColor: "#F5F6FA",
									borderRadius: "4px",
									marginLeft: "2%",
									width: "33%",
								}}
								InputProps={{
									classes: { input: classes.input },
									color: "#4D4F5C",
									focused: classes.focused,
								}}
							/>
						</div>
						<Button
							variant="contained"
							onClick={toggleModal}
							style={{
								textTransform: "none",
								textAlign: "center",
								backgroundColor: "#3B86FF",
								color: "white",
							}}
						>
							Download
							<img
								src={download}
								style={{ transform: "rotate(180deg)" }}
							/>
						</Button>
					</div>
				</div>

				<div className={styles.table}>
					<div style={{ overflow: "auto" }}>
						<Table aria-label="simple table">
							<TableHead
								style={{
									backgroundColor: "#F5F6FA",
									position: "sticky",
									top: "0",
								}}
							>
								<TableRow>
									<TableCell
										align="left"
										style={{
											textAlign: "justify",
											color: "#A3A6B4",
										}}
									>
										S.NO
									</TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NUMBER OF ASSIGNED PROPERTIES
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NUMBER OF ATTEMPTED PROPERTIES
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										AVERAGE ATTEMPT ON A PROPERTY
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										Number of FAILED PROPERTIES
									</TableCell>

									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NUMBER OF ABORTED PROPERTIES
									</TableCell>

									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NUMBER OF PROPERTIES SENT BACK BECAUSE
										OF AUDIT
									</TableCell>

									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NUMBER OF NEW PROPERTIES IDENTIFIED
									</TableCell>

									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										AVERAGE TIME SPENT PER PROPERTY
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										AVERAGE TIME BETWEEN ANY TWO PROPERTY
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										FIRST PROPERTY INSTALLATION TIME
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										TRACKING ACROSS TIME OF DAY
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											1
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#
										</TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										></TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										></TableCell>
										<TableCell
											align="left"
											component="th"
											scope="row"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										></TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>

				<div className={classes.root}></div>
			</div>
			<Pagination
				count={5}
				shape="rounded"
				color="primary"
				variant="outlined"
				style={{
					marginTop: "2%",
					marginLeft: "78%",
				}}
			/>
		</div>
	);
}
