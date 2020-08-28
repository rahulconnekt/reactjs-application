import React from "react";
import styles from "./UploadProperty.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import download from "./download.png";
import upload from "./upload.png";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import WarningIcon from "@material-ui/icons/Warning";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const useStyles = makeStyles(() => ({
	select: {
		minWidth: "30vw",
		["@media (min-width: 320px) and (max-width: 375px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 376px) and (max-width: 425px)"]: {
			minWidth: "25vw",
		},
		background: "white",
		color: grey[700],
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "10px",
		paddingBottom: "10px",
		fontSize: "13px",
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
}));

export function BorderSelect({ togglingModal2, togglingModal1 }) {
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
				IconComponent={iconComponent}
				className={classes.select}
				MenuProps={menuProps}
				value={val}
				onChange={handleChange}
				style={{
					marginRight: "2%",
				}}
			>
				<MenuItem value={0} disabled>
					Select
				</MenuItem>
				<MenuItem value={1}> Upload new property</MenuItem>
				<MenuItem value={2} onClick={() => togglingModal1(true)}>
					Update properties in particular category
				</MenuItem>
				<MenuItem value={3} onClick={() => togglingModal2(true)}>
					Update properties in particular sub-category
				</MenuItem>
			</Select>
		</FormControl>
	);
}

export default function UploadProperty() {
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
	const [modal1, setModal1] = React.useState(false);
	const [modal2, setModal2] = React.useState(false);
	const toggleModal1 = () => setModal1(!modal1);
	const toggleModal2 = () => setModal2(!modal2);
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>Property List /</span>
				<span style={{ color: "#a9a9a9", fontWeight: "lighter" }}>
					&nbsp;Upload Property
				</span>
			</div>
			<div className={styles.formDiv}>
				<form noValidate autoComplete="off">
					<div className={styles.row1}>
						<BorderSelect
							holder="Select"
							togglingModal1={toggleModal1}
							togglingModal2={toggleModal2}
						/>
					</div>
					<div className={styles.row1}>
						<Button
							variant="outlined"
							style={{
								color: "#3B86FF",
								borderColor: "#3B86FF",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
								marginRight: "60%",
								width: "30%",
								padding: "1%",
							}}
						>
							<span
								style={{
									alignSelf: "left",
									marginRight: "15%",
									textTransform: "none",
									whiteSpace: "nowrap",
								}}
							>
								Download Template
							</span>
							<div style={{ marginLeft: "5%" }}>
								<img src={download} />
							</div>
						</Button>
					</div>
					<div className={styles.innerDiv}>
						<img
							src={upload}
							style={{
								alignSelf: "center",
								paddingTop: "10%",
								paddingBottom: "4%",
							}}
						/>
						<span
							style={{
								color: "#4D4F5C",
								textAlign: "center",
								opacity: "50%",
							}}
						>
							Drag and drop a file here
						</span>
						<span
							style={{
								color: "#4D4F5C",
								textAlign: "center",
								opacity: "50%",
								padding: "2%",
							}}
						>
							or
						</span>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#3B86FF",
								color: "white",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
								// width: "30%",
								alignSelf: "center",
								marginBottom: "10%",
							}}
						>
							Choose File
						</Button>
					</div>
				</form>
				<div className={styles.buttonDiv}>
					<div className={styles.buttons}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								color: "white",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
							}}
						>
							Cancel
						</Button>
					</div>
					<div className={styles.buttons}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								textTransform: "none",
								fontWeight: "lighter",
								outline: "none",
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
			<Modal
				isOpen={modal2}
				toggle={toggleModal2}
				style={{ marginTop: "10%", marginLeft: "40%" }}
			>
				<ModalBody className={styles.modalContainer}>
					<WarningIcon
						style={{ color: "#FF0000" }}
						fontSize="large"
					/>
					<div style={{ marginLeft: "5%" }}>
						<span style={{ color: "#64686D" }}>
							Use sub-category ID's as ABCD000111, ABCD11111,
							ABCD1111111 for Rented, Owned and Government
							respectively
						</span>
					</div>
				</ModalBody>
			</Modal>
			<Modal
				isOpen={modal1}
				toggle={toggleModal1}
				style={{ marginTop: "10%", marginLeft: "40%" }}
			>
				<ModalBody className={styles.modalContainer}>
					<WarningIcon style={{ color: "#FF0000" }} />
					<div style={{ marginLeft: "5%" }}>
						<span style={{ color: "#64686D" }}>
							Use Category ID as ABCD11234
						</span>
					</div>
				</ModalBody>
			</Modal>
		</div>
	);
}
