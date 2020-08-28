import React from "react";
import styles from "./CreateJob.module.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
import { blue, grey } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "@material-ui/core/MenuItem";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "100%",
		},
	},
	select: {
		minWidth: "23vw",
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

export default function CreateJob() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: "",
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	const handleCheckChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ color: "#43425D" }}>
					Operations/ Job Creation / Installation /
				</span>
				<span style={{ color: "#BBBBBB" }}>&nbsp;Create Job</span>
			</div>
			<div className={styles.container}>
				<div className={styles.row2} style={{ paddingTop: "5%" }}>
					<TextField
						id="outlined-basic"
						label={<span className={styles.label}>Title</span>}
						variant="outlined"
						size="normal"
						style={{ width: "80%" }}
					/>
				</div>
				<div className={styles.row2}>
					<TextField
						id="outlined-basic"
						label={
							<span className={styles.label}>Description</span>
						}
						variant="outlined"
						size="normal"
						style={{ width: "80%" }}
						multiline={true}
						rows="5"
						rowsMax="10"
					/>
				</div>
				<div style={{ flexDirection: "column" }}>
					<div className={styles.date}>
						<div className={styles.inDate}>
							<span className={styles.label}>Start Date</span>
							<DatePicker />
						</div>
						<div className={styles.inDate}>
							<span className={styles.label}>End Date</span>
							<DatePicker />
						</div>
					</div>
				</div>
				<div
					style={{
						width: "calc(100vw - 80px)",
						marginLeft: "5%",
						paddingBottom: "2%",
						paddingTop: "2%",
					}}
				>
					<Dropdown holder="Selection of category" />
				</div>
				<div className={styles.row3}>
					<Dropdown
						holder="Selection of sub groups"
						style={{ marginRight: "10%" }}
					/>
					<Dropdown holder="Selection of associate" />
				</div>
				<div classname={styles.buttonDiv}>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#43425D",
							color: "white",
							textTransform: "none",
							fontWeight: "lighter",
							borderRadius: "5px",
							marginLeft: "68%",
							width: "10%",
							outline: "none",
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						style={{
							backgroundColor: "#F2134F",
							color: "white",
							textTransform: "none",
							fontWeight: "lighter",
							borderRadius: "5px",
							width: "10%",
							marginLeft: "2%",
							outline: "none",
						}}
					>
						Save
					</Button>
				</div>
			</div>
		</div>
	);
}
