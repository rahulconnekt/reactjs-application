import React from "react";
import styles from "./UserList.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Pagination from "@material-ui/lab/Pagination";
import Card from "../../../components/UserListCard/UserListCard";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./UserList.module.css";

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
	select: {
		minWidth: "9.5vw",
		background: "white",
		color: grey[700],
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "2px",
		paddingBottom: "2px",
		"&:hover": {
			borderColor: grey[400],
		},
		"&:focus": {
			borderRadius: "4px",
			background: "white",
			borderColor: blue[200],
		},
	},
	icon: {
		color: grey[500],
		right: 12,
		position: "absolute",
		userSelect: "none",
		pointerEvents: "none",
	},
	list: {
		paddingTop: 0,
		paddingBottom: 0,
		background: "white",
		color: "#4d4f5c",
		fontSize: "smaller",
		"& li.Mui-selected": {
			fontWeight: 400,
		},
	},
	input: {
		"&::placeholder": {
			color: "#4D4F5C",
			fontSize: "smaller",
		},
	},
}));

export function Dropdown(props1) {
	const [val, setVal] = React.useState(0);

	const handleChange = (event) => {
		setVal(event.target.value);
	};

	const borderSelectClasses = useBorderSelectStyles();
	const menuProps = {
		classes: {
			list: borderSelectClasses.list,
		},
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left",
		},
		transformOrigin: {
			vertical: "top",
			horizontal: "left",
		},
		getContentAnchorEl: null,
	};

	const classes = useStyles();

	const iconComponent = (props) => {
		return (
			<ExpandMoreIcon
				className={props.className + " " + borderSelectClasses.icon}
			/>
		);
	};

	return (
		<FormControl>
			<Select
				disableUnderline
				labelId="inputLabel"
				placeholder={props1.holder}
				IconComponent={iconComponent}
				className={classes.select}
				MenuProps={menuProps}
				value={val}
				onChange={handleChange}
				style={{
					marginRight: "2%",
				}}
			>
				<MenuItem value={0}> {props1.holder} </MenuItem>{" "}
				<MenuItem value={1}> One </MenuItem>{" "}
				<MenuItem value={2}> Two </MenuItem>{" "}
				<MenuItem value={3}> Three </MenuItem>{" "}
			</Select>
		</FormControl>
	);
}

export default function UserList() {
	const classes = useStyles();
	const [modal, setModal] = React.useState(false);
	const toggleModal = () => setModal(!modal);
	const [state, setState] = React.useState({
		module1: true,
		submodule1: false,
		submodule2: false,
		module2: false,
		module3: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	let icon = <SearchIcon style={{ color: "#BCBCCB", alignSelf: "left" }} />;
	return (
		<div className={styles.main}>
			<div className={styles.titleAndSearch}>
				<div className={styles.title}>UserList</div>
				<div className={styles.searchAndButton}>
					<div className={styles.searchBar}>
						<TextField
							id="standard-search"
							size="small"
							type="search"
							style={{
								backgroundColor: "white",
								color: "#4D4F5C",
								paddingTop: "1%",
								paddingBottom: "1%",
							}}
							InputProps={{
								disableUnderline: true,
								startAdornment: icon,
								placeholder: "Search Name...",
								classes: { input: classes.input },
								color: "#4D4F5C",
								focused: classes.focused,
							}}
						/>
					</div>
					<div>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								borderRadius: "17px",
								color: "white",
								height: "50%",
								textTransform: "none",
								outline: "none",
							}}
						>
							Search
						</Button>
					</div>
					<Button
						variant="contained"
						onClick={toggleModal}
						style={{
							backgroundColor: "#0CD241",
							color: "white",
							height: "45px",
							width: "25%",
							alignSelf: "left",
							textTransform: "none",
							outline: "none",
							whiteSpace: "nowrap",
						}}
					>
						Invite User
					</Button>
				</div>
				<Modal
					isOpen={modal}
					toggle={toggleModal}
					centered={true}
					scrollable={true}
					style={{
						maxHeight: "10vw",
					}}
				>
					<ModalHeader
						style={{
							font: "Source Sans Pro",
							color: "#43425D",
							fontWeight: "normal",
							fontSize: "28px",
						}}
					>
						Invite User
					</ModalHeader>
					<ModalBody className={styles.modalContainer}>
						<form
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
							}}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									alignItems: "flex-start",
									justifyContent: "space-around",
									width: "100%",
								}}
							>
								<div style={{ flex: "1", padding: "0.5vw" }}>
									<TextField
										id="standard-search"
										size="small"
										variant="outlined"
										style={{
											borderColor: "#F5F6FA",
											borderRadius: "4px",
											minWidth: "10.5vw",
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
								<div
									style={{
										flex: "1",
										padding: "0.5vw",
									}}
								>
									<Dropdown holder="User" />
								</div>
								<div
									style={{
										flex: "1",
										padding: "0.5vw",
									}}
								>
									<Button
										variant="contained"
										style={{
											backgroundColor: "#43425D",
											color: "white",
											borderRadius: "17px",
											textTransform: "none",
											outline: "none",
											width: "80%",
										}}
									>
										Search
									</Button>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start",
									alignItems: "flex-start",
								}}
							>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module1}
											onChange={handleChange}
											name="module1"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 1"
								/>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule1}
												onChange={handleChange}
												name="submodule1"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 1"
									/>
								</div>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule2}
												onChange={handleChange}
												name="submodule2"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 2"
									/>
								</div>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module2}
											onChange={handleChange}
											name="module2"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 2"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module3}
											onChange={handleChange}
											name="module3"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 3"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module1}
											onChange={handleChange}
											name="module1"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 1"
								/>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule1}
												onChange={handleChange}
												name="submodule1"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 1"
									/>
								</div>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule2}
												onChange={handleChange}
												name="submodule2"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 2"
									/>
								</div>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module2}
											onChange={handleChange}
											name="module2"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 2"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module3}
											onChange={handleChange}
											name="module3"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 3"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module1}
											onChange={handleChange}
											name="module1"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 1"
								/>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule1}
												onChange={handleChange}
												name="submodule1"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 1"
									/>
								</div>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule2}
												onChange={handleChange}
												name="submodule2"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 2"
									/>
								</div>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module2}
											onChange={handleChange}
											name="module2"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 2"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module3}
											onChange={handleChange}
											name="module3"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 3"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module1}
											onChange={handleChange}
											name="module1"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 1"
								/>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule1}
												onChange={handleChange}
												name="submodule1"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 1"
									/>
								</div>
								<div style={{ marginLeft: "5%" }}>
									<FormControlLabel
										control={
											<Checkbox
												checked={state.submodule2}
												onChange={handleChange}
												name="submodule2"
												style={{ color: "#3B86FF" }}
											/>
										}
										label="Sub module 2"
									/>
								</div>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module2}
											onChange={handleChange}
											name="module2"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 2"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.module3}
											onChange={handleChange}
											name="module3"
											style={{ color: "#3B86FF" }}
										/>
									}
									label="Module 3"
								/>
							</div>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button
							variant="contained"
							color="primary"
							onClick={toggleModal}
							style={{
								marginRight: "2%",
								backgroundColor: "#43425D",
								textTransform: "none",
								width: "20%",
								marginRight: "5%",
							}}
						>
							Cancel
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={toggleModal}
							style={{
								textTransform: "none",
								width: "20%",
							}}
						>
							Save
						</Button>
					</ModalFooter>
				</Modal>
			</div>
			<div className={styles.grid}>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
				<Card
					name="David James"
					place="United States"
					contact="871.567.4877"
				/>
			</div>
			<div className={styles.paginationDiv}>
				<Pagination variant="outlined" shape="rounded" count={5} />
			</div>
		</div>
	);
}
