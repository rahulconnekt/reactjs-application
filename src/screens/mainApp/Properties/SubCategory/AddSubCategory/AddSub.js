import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./AddSub.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import Pagination from "@material-ui/lab/Pagination";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	select: {
		minWidth: "25vw",
		background: "white",
		color: grey[700],
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "8px",
		paddingBottom: "8px",
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
		color: "#A4AFB7",
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
];
export function Dropdown(props1) {
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
}

export function Input() {
	const classes = useStyles();
	return (
		<TextField
			placeholder={"Subcategory"}
			className={classes.select}
			InputProps={{ disableUnderline: true }}
			style={{
				marginLeft: "10%",
			}}
		/>
	);
}

export default function Language() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
	});
	const [checked, setChecked] = React.useState(false);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ color: "#43425D" }}>SubCategoryList /</span>
				<span style={{ color: "#BBBBBB" }}>&nbsp;Add Subcategory</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<Dropdown holder="Category" />
					<Input />
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
											textAlign: "justify",
											color: "#A3A6B4",
										}}
									>
										PROPERTY NAME
									</TableCell>
									<TableCell align="left"></TableCell>
									<TableCell align="center"></TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										ADD
									</TableCell>
									<TableCell align="center"></TableCell>
									<TableCell align="center"></TableCell>
									<TableCell align="center"></TableCell>
									<TableCell align="center"></TableCell>
									<TableCell align="center"></TableCell>
									<TableCell align="center"></TableCell>
									<TableCell align="center"></TableCell>
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
											DEMO PROP ONE
										</TableCell>
										<TableCell align="left"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											#1
										</TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="right">
											<Checkbox
												checked={checked}
												onChange={handleChange}
												color="primary"
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
				<Pagination variant="outlined" shape="rounded" count={5} />
			</div>
			<div className={styles.buttonDiv}>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#43425D",
						color: "white",
						textTransform: "none",
						outline: "none",
						marginRight: "2%",
						minWidth: "7vw",
					}}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					style={{
						backgroundColor: "#F2134F",
						color: "white",
						textTransform: "none",
						outline: "none",
						minWidth: "7vw",
					}}
				>
					Save
				</Button>
			</div>
		</div>
	);
}
