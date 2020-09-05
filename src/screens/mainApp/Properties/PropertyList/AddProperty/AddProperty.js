import React from "react";
import styles from "./AddProperty.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
		minWidth: "28vw",
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
		paddingLeft: "10px",
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

const Dropdown = (props1) => {
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
					fontSize: "medium",
				}}
			>
				<MenuItem value={0} disabled>
					{" "}
					{props1.holder}{" "}
				</MenuItem>{" "}
				<MenuItem value={1}> One </MenuItem>{" "}
				<MenuItem value={2}> Two </MenuItem>{" "}
				<MenuItem value={3}> Three </MenuItem>{" "}
			</Select>
		</FormControl>
	);
};

export default function AddProperty() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		checkedA: false,
		checkedB: false,
		checkedC: false,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>Property List /</span>
				<span style={{ color: "#a9a9a9", fontWeight: "lighter" }}>
					Add Property
				</span>
			</div>
			<div className={styles.formDiv}>
				<form noValidate autoComplete="off">
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Owner name"
							variant="outlined"
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Ward"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Zone"
							variant="outlined"
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Street"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Address 1"
							variant="outlined"
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Address 2"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Address 3"
							variant="outlined"
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Phone number"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<Dropdown holder="Category" />
						<Dropdown holder="Sub-Category" />
					</div>
					<div className={styles.row1}>
						<div>
							<FormGroup column>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedA}
											onChange={handleChange}
											name="checkedA"
											style={{
												color: "#808495",
											}}
										/>
									}
									style={{
										color: "#64686D",
									}}
									label="Property Occupied"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedB}
											onChange={handleChange}
											name="checkedB"
											style={{
												color: "#808495",
											}}
										/>
									}
									style={{
										color: "#64686D",
									}}
									label="Property on Rent"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedC}
											onChange={handleChange}
											name="checkedC"
											style={{
												color: "#808495",
											}}
										/>
									}
									style={{
										color: "#64686D",
									}}
									label="Property on Atikraman"
								/>
							</FormGroup>
						</div>
						<TextField
							style={{ width: "45%", marginLeft: "23%" }}
							id="outlined-basic"
							label="Description"
							variant="outlined"
							multiline
							rows={5}
						/>
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
								width: "110%",
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
								width: "110%",
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
