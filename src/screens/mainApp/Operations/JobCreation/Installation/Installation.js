import React, { useState } from "react";
// import styles from "../../JobCreation/Initialisation/Initialisation.module.css";
import styles from "./Installation.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import InitialisationTable from "../../../../../components/JobCreationTables/InstallationTable/InstallationTable";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .Mui-focused": {
			borderColor: "#F5F6FA",
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch",
		},
		"& .MuiPagination-root": {
			margin: theme.spacing(3),
			color: "standard",
		},
		focused: {
			borderColor: "#F5F6FA",
		},
		input: {
			"&::placeholder": {
				color: "#4D4F5C",
			},
		},
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
}));

const GreenCheckbox = withStyles({
	root: {
		color: "green",
		"&$checked": {
			color: "green",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Language() {
	const classes = useStyles();
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [check, setCheck] = useState(false);
	const handleChange = () => setCheck(!check);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light" }}>
					Operations / Job Creation /
				</span>
				<span style={{ fontWeight: "light", color: "#BBBBBB" }}>
					&nbsp;Installation
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
							<Button
								variant="contained"
								style={{
									backgroundColor: "#4d4f5c",
									color: "white",
									borderRadius: "20px",
									textTransform: "none",
									width: "35%",
									outline: "none",
									// height: "110%",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {}}
							style={{
								textTransform: "none",
								textAlign: "center",
								// width: "60%",
								alignSelf: "right",
								marginLeft: "48%",
								outline: "none",
							}}
						>
							Create new job
						</Button>
					</div>
				</div>
				<div className={styles.table}>
					<InitialisationTable />
				</div>

				<div className={classes.root}></div>
			</div>
			<Pagination
				count={5}
				shape="rounded"
				color="primary"
				variant="outlined"
				style={{
					marginTop: "2%",
					marginLeft: "78%",
				}}
			/>
		</div>
	);
}
