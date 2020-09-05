import React, { useState } from "react";
import styles from "./Attendance.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "../../../components/Select/Select";
import Pagination from "@material-ui/lab/Pagination";
import GetAppIcon from "@material-ui/icons/GetApp";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
	input: {
		color: "#4D4F5C",
		fontSize: "smaller",
	},
	table: {
		minWidth: 650,
		borderRadius: 0,
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
];
export default function OrganisationSamadhanID() {
	const classes = useStyles();
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light" }}>Attendance</span>
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
										width: "50%",
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search..",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
								<Dropdown holder="User" />
							</div>
						</div>
						<div
							className={styles.dropDownDiv}
							style={{ marginLeft: "-7%" }}
						>
							<TextField
								id="standard-search"
								size="small"
								type="date"
								variant="outlined"
								style={{
									borderColor: "#F5F6FA",
									borderRadius: "4px",
									marginLeft: "2%",
								}}
								InputProps={{
									classes: { input: classes.input },
									color: "#4D4F5C",
									focused: classes.focused,
								}}
							/>

							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "17px",
									textTransform: "none",
									width: "109px",
									outline: "none",
									marginLeft: "5%",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<Button
							variant="contained"
							color="secondary"
							style={{
								textTransform: "none",
								backgroundColor: "#3B86FF",
								textAlign: "center",
								whiteSpace: "nowrap",
								outline: "none",
								marginLeft: "2%",
								fontSize: "smaller",
							}}
						>
							Download
							<GetAppIcon style={{ marginLeft: "20%" }} />
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
										style={{ color: "#A3A6B4" }}
									>
										USER
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#A3A6B4" }}
									>
										DATE
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#A3A6B4" }}
									>
										START TIME
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#A3A6B4" }}
									>
										END TIME
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#A3A6B4" }}
									>
										AVERAGE TIME
									</TableCell>
									<TableCell
										align="left"
										style={{ color: "#A3A6B4" }}
									></TableCell>
									<TableCell
										align="left"
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
											ICIL
										</TableCell>
										<TableCell
											align="left"
											style={{ color: "#4D4F5C" }}
										>
											00/00/00
										</TableCell>
										<TableCell
											align="left"
											style={{ color: "#4D4F5C" }}
										>
											00:12
										</TableCell>
										<TableCell
											align="left"
											style={{ color: "#4D4F5C" }}
										>
											12:00
										</TableCell>
										<TableCell
											align="left"
											style={{ color: "#4D4F5C" }}
										>
											11.45
										</TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
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
