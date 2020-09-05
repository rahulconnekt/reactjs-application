import React, { useState } from "react";
import styles from "./BlankSamadhanID.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";

import SamadhanTable from "../../../../components/SamadhanTable/SamadhanTable";

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
}));

export default function OrganisationSamadhanID() {
	const classes = useStyles();
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Samadhan ID /</span>
				<span style={{ color: "#BBBBBB" }}>Blank Samadhan ID</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
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
									placeholder: "Search...",
									classes: { input: classes.input },
									color: "#4D4F5C",
									focused: classes.focused,
								}}
							/>
							<TextField
								id="standard-search"
								size="small"
								type="date"
								variant="outlined"
								style={{
									borderColor: "#F5F6FA",
									borderRadius: "4px",
									marginLeft: "2%",
									width: "35%",
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
									borderRadius: "17px",
									color: "white",
									outline: "none",
									textTransform: "none",
									marginLeft: "1%",
									width: "20%",
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
								display: "flex",
								borderColor: "#F2134F",
								width: "90%",
								outline: "none",
								textTransform: "none",
							}}
						>
							Add
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<SamadhanTable />
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
