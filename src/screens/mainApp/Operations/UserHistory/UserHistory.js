import React, { useState } from "react";

import styles from "./UserHistory.module.css";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";

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
			minWidth: 650,
			borderRadius: 0,
			overflowY: "auto",
			overflowX: "auto",
			maxHeight: 10,
			overflow: "scroll",
		},
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
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
}));
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
				<span>User History</span>
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
										marginRight: "5%",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search..",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
								<BorderSelect
									holder="Filter"
									style={{ marginLeft: "10%" }}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<TextField
								id="date"
								variant="outlined"
								type="date"
								size="small"
								defaultValue={new Date()}
								className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									width: "15%",
									textTransform: "none",
									fontWeight: "lighter",
									marginLeft: "1%",
								}}
							>
								Search
							</Button>
						</div>
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
										USER NAME
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#A3A6B4",
										}}
									>
										ATTEMPTED PROPERTIES
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										MAPPED PROPERTIES
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										NET FAILED PROPERTIES
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										NET ABORTED PROPERTIES
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									></TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										FRESH CARDS
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										FAILED CARDS
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										DAMAGED CARDS
									</TableCell>
									<TableCell
										style={{
											color: "#A3A6B4",
										}}
									>
										OTHER DETAILS
									</TableCell>
								</TableRow>
							</TableHead>
						</Table>
						<div style={{ overflow: "auto", height: "20vw" }}>
							<Table
								aria-label="simple table"
								className={classes.table}
								style={{ tableLayout: "fixed" }}
							>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.name}>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												DEMO#1
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												10
											</TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											></TableCell>
											<TableCell
												component="th"
												scope="row"
												style={{
													textAlign: "center",
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
				</div>

				<div className={classes.root}></div>
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
