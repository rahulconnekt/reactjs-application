import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import styles from "./Initialisation.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DatePicker from "../../../../../../components/DatePicker/DatePicker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import back from "./back.png";
import LinearProgress from "@material-ui/core/LinearProgress";
import Dropdown from "../../../../../../components/Select/Select";
import Typography from "@material-ui/core/Typography";
const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 5,
		borderRadius: 5,
		paddingTop: "2%",
	},
	colorPrimary: {
		backgroundColor: "#DFDFDF",
	},
	bar: {
		borderRadius: 5,
		backgroundColor: (props) => props.color,
		padding: "2%",
	},
}))(LinearProgress);

const useStyles = makeStyles({
	root: {
		maxWidth: "30%",
		minWidth: "30%",
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
					<Dropdown holder="Initialisation" />
				</div>
			</div>
			<div className={styles.header2}>
				<span className={styles.subTitle}>Initialisation</span>
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
							className={classes.title}
							style={{
								color: "#BBBBBB",
								textAlign: "center",
								fontSize: "large",
								whiteSpace: "nowrap",
							}}
							gutterBottom
						>
							Number of jobs created
						</Typography>
						<Typography
							className={classes.pos}
							style={{
								color: "#03E565",
								textAlign: "center",
								fontSize: "33px",
								fontWeight: "bold",
								paddingBottom: "5%",
							}}
						>
							500
						</Typography>
						<BorderLinearProgress
							variant="determinate"
							value={normalise(500)}
							color="#03E565"
							style={{
								backgroundColor: "#DFDFDF",
							}}
						/>
					</CardContent>
				</Card>
				<Card className={classes.root}>
					<CardContent>
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
							Total number of cards initialised
						</Typography>
						<Typography
							className={classes.pos}
							style={{
								color: "#56BBFE",
								textAlign: "center",
								fontSize: "33px",
								fontWeight: "bold",
								paddingBottom: "5%",
							}}
						>
							247
						</Typography>
						<BorderLinearProgress
							variant="determinate"
							value={normalise(247)}
							color="#56BBFE"
							style={{
								backgroundColor: "#DFDFDF",
							}}
						/>
					</CardContent>
				</Card>
				<Card className={classes.root}>
					<CardContent>
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
							Total number of cards Quarantined
						</Typography>
						<Typography
							className={classes.pos}
							style={{
								color: "#FF6060",
								textAlign: "center",
								fontSize: "33px",
								fontWeight: "bold",
								paddingBottom: "5%",
							}}
						>
							188
						</Typography>
						<BorderLinearProgress
							variant="determinate"
							value={normalise(188)}
							color="#FF6060"
							style={{
								backgroundColor: "#DFDFDF",
							}}
						/>
					</CardContent>
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
