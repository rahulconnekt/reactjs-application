import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./VerifyDocument.module.css";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Dropdown from "../../../../components/Select/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import VerifyDocumentTable from "../../../../components/VerifyDocumentTable/VerifyDocumentTable";

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
	"& .MuiPaginationItem-page.Mui-selected": {
		backgroundColor: "#3B86FF",
		color: "white",
		outline: "none",
	},
}));

export default function Language() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
		checkedModule3: "false",
		checkedModule2: "false",
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
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Verify Document</span>
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
									width: "35%",
									textTransform: "none",
									outline: "none",
								}}
							>
								Search
							</Button>
						</div>
					</div>
				</div>

				<div className={styles.table}>
					<VerifyDocumentTable togglingModal={toggleModal} />
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalBody className={styles.modalContainer}>
						<div className={styles.innerDiv}>
							<span
								style={{
									color: "#4D4F5C",
									opacity: "0.5",
									padding: "10% 20% 20% 40%",
								}}
							>
								Document
							</span>
						</div>
						<FormControlLabel
							control={
								<Checkbox
									checked={state.checkedA}
									onChange={handleChange}
									name="checkedModule2"
									style={{
										color: "#3B86FF",
									}}
								/>
							}
							style={{ color: "#43425D" }}
							label="Module 2"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={state.checkedA}
									onChange={handleChange}
									name="checkedModule3"
									style={{
										color: "#3B86FF",
									}}
								/>
							}
							style={{ color: "#43425D" }}
							label="Module 3"
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							variant="contained"
							onClick={toggleModal}
							style={{
								marginRight: "4%",
								backgroundColor: "#43425D",
								color: "white",
								textTransform: "none",
								width: "25%",
							}}
						>
							Cancel
						</Button>
						<Button
							variant="contained"
							onClick={toggleModal}
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								textTransform: "none",
								marginRight: "4%",
								width: "25%",
							}}
						>
							Verify
						</Button>
					</ModalFooter>
				</Modal>
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
