import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./JobList.module.css";
import Dropdown from "../../../../../components/Select/Select";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";

import JobListTable from "../../../../../components/JobListTable/JobListTable";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "30ch",
		},
		"& .MuiPagination-root": {
			margin: theme.spacing(3),
			color: "standard",
		},
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
}));

export default function Language() {
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
	const [modal, setModal] = useState(false);
	const toggleModal = () => setModal(!modal);
	const [text_enabled, text_disabled, text2_disabled] = useState(true);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Job List</span>
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
						<div className={styles.dropDownDiv}>
							<Dropdown holder="Filter" />
							<Button
								variant="contained"
								style={{
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "20px",
									paddingLeft: "5%",
									position: "relative",
									width: "35%",
									textTransform: "none",
									outline: "none",
									marginLeft: "3%",
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
							onClick={toggleModal}
							style={{
								textTransform: "none",
								textAlign: "center",
								width: "25%",
								outline: "none",
							}}
						>
							Add
						</Button>
					</div>
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalHeader toggle={toggleModal}>Add City</ModalHeader>
					<ModalBody className={styles.modalContainer}>
						<form className={classes.root}>
							<TextField
								className={classes.root}
								variant="outlined"
								label="Country Name"
								style={{ width: "80%" }}
								onChange={(text) =>
									text_enabled(!text.target.value)
								}
							/>
							<TextField
								className={classes.root}
								variant="outlined"
								label="State Name"
								style={{ width: "80%" }}
								disabled={text_disabled}
								onChange={(text) =>
									text_disabled(!text.target.value)
								}
							/>
							<TextField
								className={classes.root}
								variant="outlined"
								label="City Name"
								style={{ width: "80%" }}
								disabled={text2_disabled}
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
				<div className={styles.table}>
					<JobListTable />
				</div>

				<div className={classes.root}></div>
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
