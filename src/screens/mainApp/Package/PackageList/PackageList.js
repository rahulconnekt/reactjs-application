import React, { useState } from "react";
import styles from "./PackageList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Pagination from "@material-ui/lab/Pagination";
import edit from "../../../../Assets/edit.png";

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

export default function Packages() {
	const classes = useStyles();
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Packages</span>
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
									}}
									InputProps={{
										startAdornment: icon,
										placeholder: "Search..",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
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
									width: "35%",
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
								textTransform: "none",
								backgroundColor: "",
								whiteSpace: "nowrap",
							}}
						>
							Add Packages
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
											textAlign: "justify",
											color: "#A3A6B4",
										}}
									>
										PACKAGE NAME
									</TableCell>
									<TableCell
										align="left"
										style={{
											textAlign: "justify",
											color: "#A3A6B4",
										}}
									>
										NO. OF CARDS
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NO. OF FAILD
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										NO. OF DAMAGED
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										SCREWS
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										SCREW DRIVER
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										DRILL GUN
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										WOOD PLUGS
									</TableCell>
									<TableCell
										align="center"
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										JOB SHEETS
									</TableCell>
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
											DEMO#1
										</TableCell>
										<TableCell
											align="left"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											DEMO#1
										</TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											DEMO#1
										</TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										>
											Demo#1
										</TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell
											align="center"
											style={{
												color: "#4D4F5C",
												fontFamily:
													"Regular 13px/20px Source Sans Pro",
											}}
										></TableCell>
										<TableCell align="center"></TableCell>
										<TableCell
											align="justify"
											padding="checkbox"
										>
											<DeleteForeverIcon
												style={{
													padding: "none",
													cursor: "pointer",
													color: "#43425D",
												}}
											/>
										</TableCell>
										<TableCell
											align="left"
											padding="checkbox"
										>
											<img
												src={edit}
												alt="Edit"
												style={{
													cursor: "pointer",
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
