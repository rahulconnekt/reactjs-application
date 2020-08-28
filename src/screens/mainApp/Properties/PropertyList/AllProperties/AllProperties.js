import React, { useState } from "react";
import styles from "./AllProperties.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Dropdown from "../../../../../components/Select/Select";
import PropertyTable from "../../../../../components/PropertyTable/PropertyTable";

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
				<span>Property List</span>
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
							<Dropdown holder="Status" />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									marginLeft: "2%",
									textTransform: "none",
									fontWeight: "lighter",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonContainer}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								textTransform: "none",
								marginLeft: "2%",
								width: "50%",
							}}
						>
							Add Property
						</Button>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#3B86FF",
								color: "white",
							}}
						>
							Upload
							<div style={{ paddingBottom: "5%" }}>
								<PublishOutlinedIcon />
							</div>
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<PropertyTable />
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
