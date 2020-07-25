import React, { useState } from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
	Label,
	Form,
	FormGroup,
} from "reactstrap";

import styles from "./City.module.css";

import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";

import CityTable from "../../../../components/CityTable/CityTable";

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
	const [text_enabled, text_disabled, text2_disabled] = useState(true);
	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;

	return (
		<div className={styles.main}>
			<div className={styles.title}>

				<span style={{ fontWeight: "lighter" }}>Master /</span>
				<span style={{ fontWeight: "lighter", color: "#43425D" }}>
					City
				</span>

			</div>
			<div className={styles.tableDiv}>
				<div className={styles.searchBarDiv}>
					<div className={styles.searchAndDrop}>
						<div>
							<div className={styles.searchBar}>

								{/* <SearchIcon style={{color:'gray'}}/> */}

								<TextField
									id="standard-search"
									size="small"
									type="search"

									variant="outlined"
									style={{
										borderColor: "#F5F6FA",
										borderRadius: "4px",
										marginBottom: "5%",
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
									borderRadius: "20px",

									textTransform: "none",
									width: "45%",
									fontWeight: "lighter",
									marginBottom: "3%",
									height: "90%",

								}}
							>
								Search
							</Button>
						</div>
					</div>
					<div className={styles.buttonAndFilter}>

						<FormControl variant="outlined">
							<InputLabel
								htmlFor="outlined-age-native-simple"
								style={{ alignText: "center" }}
							>
								Filter
							</InputLabel>
							<Select
								native
								value={state.age}
								onChange={handleChange}
								style={{
									width: "120%",
									maxHeight: "80%",
									marginBottom: "5%",
								}}
								label="Filter"
								inputProps={{
									name: "Filter",
									id: "outlined-age-native-simple",

								}}
							>
								<option aria-label="None" value="" />
								<option value={10}>Ten</option>
								<option value={20}>Twenty</option>
								<option value={30}>Thirty</option>
							</Select>
						</FormControl>
						<Button
							variant="contained"
							color="secondary"
							onClick={toggleModal}
							style={{

								textTransform: "none",
								textAlign: "center",
								width: "45%",
								// height: "95%",
								marginBottom: "3.2%",

							}}
						>
							Add new city
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
					<CityTable />
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
