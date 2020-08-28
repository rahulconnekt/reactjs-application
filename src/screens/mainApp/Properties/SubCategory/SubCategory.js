import React, { useState } from "react";
import styles from "./SubCategory.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PaginationItem from "@material-ui/lab/PaginationItem";
import SubCategoryTable from "../../../../components/SubCategoryTable/SubCategoryTable";
import Dropdown from "../../../../components/Select/Select";
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

export default function AllProperties() {
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
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Subcategory List</span>
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
										placeholder: "Search...",
										classes: { input: classes.input },
										color: "#4D4F5C",
										focused: classes.focused,
									}}
								/>
							</div>
						</div>
						<div className={styles.dropDownDiv}>
							<Dropdown holder="Category" />
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								textTransform: "none",
								width: "95%",
								outline: "none",
							}}
						>
							Add
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<SubCategoryTable />
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
