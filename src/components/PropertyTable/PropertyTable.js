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
							OWNER NAME
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							CONTACT
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							WARD
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							ZONE
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							STREET ID
						</TableCell>
						<TableCell align="left" style={{ color: "#A3A6B4" }}>
							STATUS
						</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell align="left">Demp Property #1</TableCell>
							<TableCell align="left">
								Demo Address #/123
							</TableCell>
							<TableCell align="left">Demo #4</TableCell>
							<TableCell align="left">Demo ZONE</TableCell>
							<TableCell align="left">#123456</TableCell>
							<TableCell align="left">
								<span
									style={{
										color:
											row.status == "MAPPED"
												? "#3BB209"
												: row.status == "UNMAPPED"
												? "#707070"
												: row.status == "FAILED"
												? "#F80808"
												: row.status == "ABORTED"
												? "#1331F2"
												: "#F80808",
									}}
									style={{ color: "#3BB209" }}
								>
									MAPPED
								</span>
							</TableCell>
							<TableCell align="justify" padding="checkbox">
								<VisibilityIcon
									style={{
										color: "3b86ff",
									}}
								/>
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
