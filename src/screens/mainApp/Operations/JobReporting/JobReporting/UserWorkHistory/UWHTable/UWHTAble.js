import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./UWHT.module.css";
import Dropdown from "../../../../../../../components/Select/Select";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
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
import download from "../../../../../../../../src/Assets/upload1.png";
import edit from "./edit.png";

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
				<span>Operations/ Job Reporting /</span>
				<span style={{ color: "#BBBBBB" }}>
					&nbsp;User work history
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
										marginBottom: "5%",
										width: "60%",
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
									style={{ paddingLeft: "2%" }}
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
									width: "45%",
									fontWeight: "lighter",
									marginBottom: "3%",
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
							id="date"
							variant="outlined"
							type="date"
							size="small"
							defaultValue={new Date()}
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							style={{
								width: "20%",
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
							id="date"
							variant="outlined"
							type="date"
							size="small"
							defaultValue={new Date()}
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							style={{
								width: "20%",
							}}
						/>
						<Button
							variant="contained"
							onClick={toggleModal}
							style={{
								textTransform: "none",
								textAlign: "center",
								// height: "95%",
								marginBottom: "1%",
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
										INDEPENDENT ACTIVE USERS{" "}
									</TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										AVERAGE IN TIME
									</TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									>
										AVERAGE OUT TIME
									</TableCell>
									<TableCell
										style={{
											textAlign: "left",
											color: "#A3A6B4",
										}}
									>
										CARD INSTALLED PER PERSON
									</TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									></TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									></TableCell>
									<TableCell
										style={{
											textAlign: "center",
											color: "#A3A6B4",
										}}
									></TableCell>
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
												component="th"
												scope="row"
												style={{
													textAlign: "left",
													color: "#4D4F5C",
													fontFamily:
														"Regular 13px/20px Source Sans Pro",
												}}
											>
												Demo Associate
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
												10.30 am
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
												6.00 pm
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
												35
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
												MON
											</TableCell>
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
