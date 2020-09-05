import React, { useState } from "react";
import styles from "./Audit.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import xyz from "../../../../../Assets/edit.png";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .Mui-focused": {
			borderColor: "#F5F6FA",
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch",
		},
		"& .MuiPagination-root": {
			margin: theme.spacing(3),
			color: "standard",
		},
		focused: {
			borderColor: "#F5F6FA",
		},
		input: {
			"&::placeholder": {
				color: "#4D4F5C",
			},
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
		paddingTop: "5px",
		paddingBottom: "5px",
		fontSize: "13px",
		boxShadow: "0px 2px 3px #0000000D",
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
	input: {
		color: "#4D4F5C",
		fontSize: "smaller",
	},
	table: {
		minWidth: 650,
		borderRadius: 0,
	},
	select1: {
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
		boxShadow: "0px 2px 3px #0000000D",
		"&:hover": {
			borderColor: grey[400],
		},
		"&:focus": {
			borderRadius: "4px",
			background: "white",
			borderColor: blue[200],
		},
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

const Dropdown = (props1) => {
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

const Dropdown1 = (props1) => {
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
				className={classes.select1}
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
export default function Audit() {
	const classes = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>
					<span>Operations / Job Creation /</span>
					<span style={{ color: "#BBBBBB" }}>&nbsp;Audit Jobs </span>
				</div>
				<div className={styles.header2}>
					<div>
						<Dropdown holder="User" />
					</div>
					<div
						style={{
							display: "flex",
							flexDiretion: "row",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<span style={{ color: "#43425D" }}>From Date</span>
						<TextField
							id="standard-search"
							size="small"
							type="date"
							variant="outlined"
							style={{
								borderColor: "#F5F6FA",
								borderRadius: "4px",
								marginLeft: "2%",
								width: "63%",
							}}
							InputProps={{
								classes: { input: classes.input },
								color: "#4D4F5C",
								focused: classes.focused,
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							flexDiretion: "row",
							justifyContent: "space-evenly",
							alignItems: "center",
						}}
					>
						<span style={{ color: "#43425D" }}>From Date</span>
						<TextField
							id="standard-search"
							size="small"
							type="date"
							variant="outlined"
							style={{
								borderColor: "#F5F6FA",
								borderRadius: "4px",
								marginLeft: "2%",
								width: "63%",
							}}
							InputProps={{
								classes: { input: classes.input },
								color: "#4D4F5C",
								focused: classes.focused,
							}}
						/>
					</div>
				</div>
			</div>
			<div className={styles.tableDiv}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead style={{ backgroundColor: "#F5F6FA" }}>
							<TableRow>
								<TableCell
									style={{
										textAlign: "justify",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									S.NO.
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									GOVERNMENT PROPERTY NUMBER
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									NAME OF THE PROPERTY
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									PROPERTY OWNER
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									SAMADHAN ID
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									LONGITUDE
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									LATITUDE
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									MOBILE NO.
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
										whiteSpace: "nowrap",
									}}
								>
									IMAGES
								</TableCell>
								<TableCell
									align="center"
									style={{
										textAlign: "center",
										color: "#A3A6B4",
										fontSize: "small",
									}}
								></TableCell>
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
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										#1245
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										DEMO#
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										#OWNER
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										AB4516#
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										22.719568
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										75.857727
									</TableCell>
									<TableCell
										align="center"
										style={{
											color: "#4D4F5C",
											fontFamily:
												"Regular 13px/20px Source Sans Pro",
										}}
									>
										9123456789
									</TableCell>
									<TableCell>
										<img src={xyz} />
									</TableCell>
									<TableCell>
										<Dropdown1 holder="Approved" />
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
