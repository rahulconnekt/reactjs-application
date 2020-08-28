import React, { useState } from "react";
import styles from "./Attendance.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Dropdown from "../../../components/Select/Select";
import DatePicker from "../../../components/DatePicker/DatePicker";
import Table from "../../../components/Table/Table";

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
}));

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
						<div className={styles.dropDownDiv}>
							<TextField
								id="standard-search"
								size="small"
								type="date"
								variant="outlined"
								style={{
									borderColor: "#F5F6FA",
									borderRadius: "4px",
									width: "42%",
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
									borderRadius: "20px",
									textTransform: "none",
									width: "30%",
								}}
							>
								Search
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.table}>
					<Table />
				</div>
			</div>
		</div>
	);
}
