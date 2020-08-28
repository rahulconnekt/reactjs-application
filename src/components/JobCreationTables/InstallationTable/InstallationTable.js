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

const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];

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
							style={{
								textAlign: "justify",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							JOB TITLE
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							ASSOCIATE
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							START DATE
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							END DATE
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							CREATION DATE
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							JOB STATUS
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							TOTAL PROPERTIES
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							INSTALLED PROPERTIES
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							ABORTED PROPERTIES
						</TableCell>
						<TableCell
							align="center"
							style={{
								textAlign: "center",
								color: "#A3A6B4",
								fontSize: "small",
							}}
						>
							NO. OF PROPERTIES
						</TableCell>
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
								Demo Title
							</TableCell>
							<TableCell
								align="center"
								style={{
									color: "#4D4F5C",
									fontFamily:
										"Regular 13px/20px Source Sans Pro",
								}}
							>
								Associate
							</TableCell>
							<TableCell
								align="center"
								style={{
									color: "#4D4F5C",
									fontFamily:
										"Regular 13px/20px Source Sans Pro",
								}}
							>
								00/00/0000
							</TableCell>
							<TableCell
								align="center"
								style={{
									color: "#4D4F5C",
									fontFamily:
										"Regular 13px/20px Source Sans Pro",
								}}
							>
								00/00/0000
							</TableCell>
							<TableCell
								align="center"
								style={{
									color: "#4D4F5C",
									fontFamily:
										"Regular 13px/20px Source Sans Pro",
								}}
							>
								00/00/0000
							</TableCell>
							<TableCell>
								<span
									style={{
										color:
											row.status == "ACTIVE"
												? "#3BB209"
												: row.status == "INACTIVE"
												? "#707070"
												: "#F80808",
									}}
								>
									{row.status}
								</span>
							</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
