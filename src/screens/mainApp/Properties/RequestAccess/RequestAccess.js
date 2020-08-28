import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import styles from "./RequestAccess.module.css";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Dropdown from "../../../../components/Select/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import RequestAccessTable from "../../../../components/RequestAccessTable/RequestAccessTable";

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
	const [check, setCheck] = useState(false);
	const [text_enabled, text_disabled, text2_disabled] = useState(true);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Request Access</span>
			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.dropDownDiv}>
						<Dropdown holder="Username" />
						<Dropdown holder="Module" />
						<Dropdown holder="Sub Module" />
					</div>
					<div className={styles.buttonDiv}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								color: "white",
								borderRadius: "20px",
								textTransform: "none",
								outline: "none",
								width: "120%",
								marginLeft: "6%",
							}}
						>
							Search
						</Button>
					</div>
				</div>

				<div className={styles.table}>
					<RequestAccessTable togglingModal={toggleModal} />
				</div>
				<Modal isOpen={modal} toggle={toggleModal} centered={true}>
					<ModalHeader toggle={toggleModal}>Add City</ModalHeader>
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
								marginRight: "2%",
								backgroundColor: "#43425D",
								color: "white",
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
