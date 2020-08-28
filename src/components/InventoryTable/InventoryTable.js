import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		borderRadius: 0,
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

							<TableCell align="left" padding="checkbox">
								<DeleteForeverIcon
									style={{
										padding: "none",
									}}
								/>
							</TableCell>
							<TableCell align="left" padding="checkbox">
								<EditIcon
									style={{
										color: "#f2134f",
									}}
									onClick={toggleModal}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
