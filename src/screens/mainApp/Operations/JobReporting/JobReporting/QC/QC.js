import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./QC.module.css";
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
		maxWidth: "24%",
		minWidth: "24%",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: "12",
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
					<Dropdown holder="QC" />
				</div>
			</div>
			<div className={styles.header2}>
				<span className={styles.subTitle}>QC</span>
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
						<span
							className={styles.circle}
							style={{
								background:
									"transparent radial-gradient(#FFD856D9 0%, #F6B604 100%)",
								marginLeft: "25%",
								fontSize: "xx-large",
								fontWeight: "bold",
							}}
						>
							500
						</span>
					</CardContent>
					<Typography
						style={{ color: "#BBBBBB", textAlign: "center" }}
						gutterBottom
					>
						Number of QC jobs created
					</Typography>
				</Card>
				<Card className={classes.root}>
					<CardContent>
						<span
							className={styles.circle}
							style={{
								background:
									"transparent radial-gradient(#56FF9FD9 0%,#03E565 100%)",
								marginLeft: "25%",
								fontSize: "xx-large",
								fontWeight: "bold",
							}}
						>
							500
						</span>
					</CardContent>
					<Typography
						style={{
							color: "#BBBBBB",
							textAlign: "center",
							fontSize: "normal",
						}}
						gutterBottom
					>
						Number of cards completed in QC
					</Typography>
				</Card>
				<Card className={classes.root}>
					<CardContent>
						<span
							className={styles.circle}
							style={{
								background:
									"transparent radial-gradient(#60BFFFC2 0%, #34ACFC 100%)",
								marginLeft: "25%",
								fontSize: "xx-large",
								fontWeight: "bold",
							}}
						>
							500
						</span>
					</CardContent>
					<Typography
						style={{ color: "#BBBBBB", textAlign: "center" }}
						gutterBottom
					>
						Number of initialisations needed
					</Typography>
				</Card>
				<Card className={classes.root}>
					<CardContent>
						<span
							className={styles.circle}
							style={{
								background:
									"transparent radial-gradient(#FF7E7E 0%,#FF6060 100%)",
								marginLeft: "25%",
								fontSize: "xx-large",
								fontWeight: "bold",
							}}
						>
							500
						</span>
					</CardContent>
					<Typography
						style={{ color: "#BBBBBB", textAlign: "center" }}
						gutterBottom
					>
						Number of Un-installations needed
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
