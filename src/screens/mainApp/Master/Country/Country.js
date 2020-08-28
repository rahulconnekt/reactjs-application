import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from "./Country.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Dropdown from "../../../../components/Select/Select";
import CountryTable from "../../../../components/CountryTable/CountryTable";

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
	const [check, setCheck] = useState(false);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>Master /</span>
				<span style={{ fontWeight: "lighter", color: "#43425D" }}>
					&nbsp;Country
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
									backgroundColor: "#43425D",
									color: "white",
									borderRadius: "17px",
									textTransform: "none",
									width: "45%",
									outline: "none",
								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>
						<Dropdown holder="Filter" />
						<Button
							variant="contained"
							color="secondary"
							onClick={toggleModal}
							style={{
								textTransform: "none",
								textAlign: "center",
								whiteSpace: "nowrap",
								outline: "none",
								marginLeft: "2%",
							}}
						>
							Add new country
						</Button>
					</div>
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalHeader toggle={toggleModal}>Add Country</ModalHeader>
					<ModalBody className={styles.modalContainer}>
						<form className={classes.root}>
							<TextField
								className={classes.root}
								variant="outlined"
								label="Country Name"
								style={{ width: "80%" }}
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
					<CountryTable />
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
