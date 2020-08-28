import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./UWH.module.css";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import back from "./back.png";
import Typography from "@material-ui/core/Typography";
import { blue, grey } from "@material-ui/core/colors";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useBorderSelectStyles } from "@mui-treasury/styles/select/border";

const useStyles = makeStyles({
	root: {
		width: "18%",
	},
	title: {
		fontSize: 14,
	},
	select: {
		minWidth: "11.5vw",
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
});

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

export default function Initialisation() {
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
					<span style={{ color: "#43425D" }}>Operations /</span>
					<span style={{ color: "#BBBBBB" }}>Job Reporting</span>
				</div>
				<div className={styles.dropdownMain}>
					<Dropdown holder="User Work History" />
				</div>
			</div>
			<div className={styles.header2}>
				<span className={styles.subTitle}>User Work History</span>
				<div className={styles.dropdown2}>
					<Dropdown holder="Today" />
				</div>
				<div className={styles.date}>
					<span className={styles.label}>From Date</span>
					<DatePicker width="80%" />
					<span className={styles.label}>To Date</span>
					<DatePicker width="80%" />
				</div>
			</div>
			<div className={styles.cards}>
				<Card
					className={classes.root}
					style={{ boxShadow: "0px 2px 6px #0000000A" }}
				>
					<CardContent
						style={{
							background:
								"linear-gradient(#FFFFFF 55%,#FFCD54 45%)",
						}}
					>
						<div className={styles.div1}>
							<span className={styles.cardTitle}>
								Independent active users
							</span>
						</div>
						<div>
							<Typography
								style={{
									color: "white",
									textAlign: "center",
									fontSize: "30px",
									fontWeight: "bold",
									marginTop: "10%",
									marginBottom: "-8%",
								}}
							>
								30
							</Typography>
						</div>
					</CardContent>
				</Card>
				<Card
					className={classes.root}
					style={{ boxShadow: "0px 2px 6px #0000000A" }}
				>
					<CardContent
						style={{
							background:
								"linear-gradient(#FFFFFF 55%,#0BD878 45%)",
						}}
					>
						<div className={styles.div1}>
							<Typography
								className={classes.title}
								style={{
									color: "#BBBBBB",
									textAlign: "center",
									fontSize: "large",
									whiteSpace: "nowrap",
								}}
								gutterBottom
							>
								card installed
							</Typography>
						</div>
						<div style={{ height: "50%" }}>
							<Typography
								style={{
									color: "white",
									textAlign: "center",
									fontSize: "30px",
									fontWeight: "bold",
									marginTop: "10%",
									marginBottom: "-8%",
								}}
							>
								30
							</Typography>
						</div>
					</CardContent>
				</Card>
				<Card
					className={classes.root}
					style={{ boxShadow: "0px 2px 6px #0000000A" }}
				>
					<CardContent
						style={{
							background:
								"linear-gradient(#FFFFFF 55%,#56BBFE 45%)",
						}}
					>
						<div className={styles.div1}>
							<Typography
								className={classes.title}
								style={{
									color: "#BBBBBB",
									textAlign: "center",
									fontSize: "large",
									whiteSpace: "nowrap",
								}}
								gutterBottom
							>
								Average in time
							</Typography>
						</div>
						<div>
							<Typography
								style={{
									color: "white",
									textAlign: "center",
									fontSize: "30px",
									fontWeight: "bold",
									marginTop: "10%",
									marginBottom: "-8%",
								}}
							>
								10.30 am
							</Typography>
						</div>
					</CardContent>
				</Card>
				<Card
					className={classes.root}
					style={{ boxShadow: "0px 2px 6px #0000000A" }}
				>
					<CardContent
						style={{
							background:
								"linear-gradient(#FFFFFF 55%,#F7617D 45%)",
						}}
					>
						<div className={styles.div1}>
							<Typography
								className={classes.title}
								style={{
									color: "#BBBBBB",
									textAlign: "center",
									fontSize: "large",
									whiteSpace: "nowrap",
								}}
								gutterBottom
							>
								Average out time
							</Typography>
						</div>
						<div style={{ height: "50%" }}>
							<Typography
								style={{
									color: "white",
									textAlign: "center",
									fontSize: "30px",
									fontWeight: "bold",
									marginTop: "10%",
									marginBottom: "-8%",
								}}
							>
								7.30 pm
							</Typography>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className={styles.final}>
				<span
					className={styles.label}
					style={{
						fontWeight: "bold",
						cursor: "pointer",
						fontSize: "18px",
					}}
				>
					View Full Details&nbsp;
				</span>
				<img src={back} />
			</div>
		</div>
	);
}
