import React, { useState } from "react";
import styles from "./AuditJob.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import back from "./back.png";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { blue, grey } from "@material-ui/core/colors";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
	root: {
		maxWidth: "45%",
		minWidth: "40%",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: "10",
	},
	select: {
		minWidth: "7.5vw",
		["@media (min-width: 320px) and (max-width: 375px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 376px) and (max-width: 425px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 320px) and (max-width: 375px)"]: {
			minWidth: "25vw",
		},
		["@media (min-width: 376px) and (max-width: 425px)"]: {
			minWidth: "18vw",
		},
		["@media (min-width: 426px) and (max-width: 768px)"]: {
			minWidth: "12vw",
		},
		["@media (min-width: 769px) and (max-width: 1024px)"]: {
			minWidth: "10vw",
		},
		background: "white",
		color: grey[700],
		borderColor: "#D7DAE2",
		borderStyle: "solid",
		borderWidth: "2px",
		borderRadius: "4px",
		paddingLeft: "5px",
		paddingTop: "2px",
		paddingBottom: "2px",
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
	input: {
		color: "#4D4F5C",
		fontSize: "smaller",
	},
});

const Dropdown = (props1) => {
	const [val, setVal] = useState(0);

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
};

export default function Audit() {
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
	const normalise = (value) => value / 10;
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>
					<span style={{ fontWeight: "light", color: "#43425D" }}>
						Operations /
					</span>
					<span style={{ fontWeight: "lighter", color: "#BBBBBB" }}>
						Job Reporting
					</span>
				</div>
				<div className={styles.dropdownMain}>
					<Dropdown holder="Audit Job" />
				</div>
			</div>
			<div className={styles.header2}>
				<span className={styles.subTitle}>Audit Job</span>
				<div className={styles.dropdown2}>
					<Dropdown holder="Today" />
				</div>
				<div className={styles.date}>
					<span className={styles.label}>From Date</span>
					<TextField
						id="standard-search"
						size="small"
						type="date"
						variant="outlined"
						style={{
							borderColor: "#F5F6FA",
							borderRadius: "4px",
							width: "31%",
							marginLeft: "2%",
							marginRight: "2%",
						}}
						InputProps={{
							classes: { input: classes.input },
							color: "#4D4F5C",
							focused: classes.focused,
						}}
					/>
					<span className={styles.label}>To Date</span>
					<TextField
						id="standard-search"
						size="small"
						type="date"
						variant="outlined"
						style={{
							borderColor: "#F5F6FA",
							borderRadius: "4px",
							width: "31%",
							marginLeft: "2%",
							marginRight: "2%",
						}}
						InputProps={{
							classes: { input: classes.input },
							color: "#4D4F5C",
							focused: classes.focused,
						}}
					/>
				</div>
			</div>
			<div className={styles.cards}>
				<Card className={classes.root}>
					<CardContent>
						<Typography
							className={classes.pos}
							style={{
								color: "#03E565",
								textAlign: "center",
								fontSize: "xx-large",
								fontWeight: "bold",
								paddingBottom: "5%",
							}}
						>
							500
						</Typography>
					</CardContent>
					<Typography
						style={{
							color: "#BBBBBB",
							textAlign: "center",
							fontSize: "110%",
						}}
						gutterBottom
					>
						The number of properties sent into reattempt per day
					</Typography>
				</Card>
				<Card className={classes.root}>
					<CardContent>
						<Typography
							className={classes.pos}
							style={{
								color: "#FF6060",
								textAlign: "center",
								fontSize: "xx-large",
								fontWeight: "bold",
								paddingBottom: "5%",
							}}
						>
							188
						</Typography>
					</CardContent>
					<Typography
						style={{
							color: "#BBBBBB",
							textAlign: "center",
							alignItems: "center",
							fontSize: "110%",
						}}
						gutterBottom
					>
						Total Pending properties with reattempt till now
					</Typography>
				</Card>
			</div>
			<div className={styles.final}>
				<span
					className={styles.label}
					style={{
						fontWeight: "bold",
						cursor: "pointer",
						fontSize: "large",
					}}
				>
					View Full Details&nbsp;
				</span>
				<img src={back} />
			</div>
		</div>
	);
}
