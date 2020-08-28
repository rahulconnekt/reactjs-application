import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./AuditJob.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import back from "./back.png";
import Dropdown from "../../../../../../components/Select/Select";

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
});

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
					<DatePicker width="80%" />
					<span className={styles.label}>To Date</span>
					<DatePicker width="80%" />
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
