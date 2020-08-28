import React from "react";
import styles from "./JobCreation.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import JobCreationCard from "../../../../components/JobCreationCard/JobCreationCard";
import first from "./investor.png";
import second from "./maintenance.png";
import third from "./qr-code.png";
import fourth from "./audit.png";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "100%",
		},
	},
}));

export default function JobCreation() {
	const classes = useStyles();

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light" }}>Operations/ </span>
				<span
					style={{
						fontWeight: "light",
						color: " #BBBBBB",
						font: "Segoe UI",
						fontSize: "26px",
					}}
				>
					Job Creation
				</span>
			</div>
			<div className={styles.grid}>
				<a
					href="/operations/jobcreation/initialisation"
					style={{ textDecoration: "none" }}
				>
					<JobCreationCard
						img={first}
						color={"#58D8FE"}
						details={"Initialisation"}
					/>
				</a>
				<JobCreationCard
					img={second}
					color={"#6BE4A7"}
					details={"Installation"}
				/>
				<JobCreationCard img={third} color={"#E36398"} details={"QC"} />
				<JobCreationCard
					img={fourth}
					color={"#A5A2FB"}
					details={"Audit"}
				/>
			</div>
		</div>
	);
}
