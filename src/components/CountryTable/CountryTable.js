import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import edit from "./edit.png";
const useStyles = makeStyles({
	table: {
		minWidth: 650,
		borderRadius: 0,
		borderCollapse: "seperate !important",
		borderSpacing: "0 5px !important",
	},
});

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

export default function SimpleTable1() {
	const classes = useStyles();

	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead style={{ backgroundColor: "#F5F6FA" }}>
					<TableRow>
						<TableCell
							align="left"
							style={{ textAlign: "justify", color: "#A3A6B4" }}
						>
							COUNTRY NAME
						</TableCell>
						<TableCell
							align="left"
							style={{ textAlign: "justify", color: "#A3A6B4" }}
						>
							CODE
						</TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							STATE
						</TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell align="center"></TableCell>
						<TableCell
							align="center"
							style={{ textAlign: "center", color: "#A3A6B4" }}
						>
							CITY
						</TableCell>
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
								India
							</TableCell>
							<TableCell
								align="left"
								style={{
									color: "#4D4F5C",
									fontFamily:
										"Regular 13px/20px Source Sans Pro",
								}}
							>
								+91
							</TableCell>
							<TableCell
								align="center"
								style={{
									color: "#4D4F5C",
									fontFamily:
										"Regular 13px/20px Source Sans Pro",
								}}
							>
								UP
							</TableCell>
							<TableCell align="center"></TableCell>
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
							>
								Prayagraj
							</TableCell>
							<TableCell align="center"></TableCell>
							<TableCell align="center"></TableCell>
							<TableCell align="justify" padding="checkbox">
								<DeleteForeverIcon
									style={{
										padding: "none",
										cursor: "pointer",
										color: "#43425D",
									}}
								/>
							</TableCell>
							<TableCell align="left" padding="checkbox">
								<img
									src={edit}
									alt="Edit"
									style={{
										cursor: "pointer",
									}}
									onClick={toggleModal}
								/>
							</TableCell>
							<Modal
								isOpen={modal}
								toggle={toggleModal}
								centered={true}
							>
								<ModalHeader toggle={toggleModal}>
									Add Country
								</ModalHeader>
								<ModalBody>
									<form className={classes.root}>
										<TextField
											className={classes.root}
											variant="outlined"
											label="Country Name"
											style={{ width: "80%" }}
										/>
									</form>
								</ModalBody>
								<ModalFooter>
									<Button
										variant="contained"
										color="primary"
										onClick={toggleModal}
										style={{ marginRight: "2%" }}
									>
										Cancel
									</Button>
									<Button
										variant="contained"
										color="secondary"
										onClick={toggleModal}
									>
										Save
									</Button>
								</ModalFooter>
							</Modal>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
