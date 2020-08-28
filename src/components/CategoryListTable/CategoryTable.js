import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import edit from "./edit.png";

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

export default function SimpleTable() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead style={{ backgroundColor: "#F5F6FA" }}>
					<TableRow>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							CATEGORY NAME
						</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell align="center" style={{ color: "#A3A6B4" }}>
							IS ACTIVE
						</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell
								align="left"
								style={{ color: "#4D4F5C" }}
							>
								Demo Category#1
							</TableCell>
							<TableCell align="left"></TableCell>
							<TableCell align="left"></TableCell>
							<TableCell align="left"></TableCell>
							<TableCell align="left"></TableCell>
							<TableCell align="center">
								<span
									style={{
										color:
											row.status == "YES"
												? "#1CB10B"
												: "#F80808",
									}}
									style={{ color: "#1CB10B" }}
								>
									YES
								</span>
							</TableCell>
							<TableCell align="justify" padding="checkbox">
								<DeleteForeverIcon
									style={{
										padding: "none",
									}}
								/>
							</TableCell>
							<TableCell align="left" padding="checkbox">
								<img src={edit} alt="Edit" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
