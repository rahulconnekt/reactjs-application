import React from "react";
import JobReportingCard from "../../../../../components/JobReportingCard/JobReportingCard";
import styles from "./JobReporting.module.css";
export default function Jobreporting() {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "light" }}>Job Reporting</span>
			</div>
			<div className={styles.grid}>
				<JobReportingCard
					color={"#58D8FE"}
					number={"1234"}
					details={"Total number of Samadhan ID"}
				/>
				<JobReportingCard
					color={"#6BE4A7"}
					number={"58"}
					details={"Total number of Cards to be initialised"}
				/>
				<JobReportingCard
					color={"#E36398"}
					number={"1234"}
					details={"Total number of Cards quarantined"}
				/>
				<JobReportingCard
					color={"#A5A2FB"}
					number={"1234"}
					details={"Total number of assigned properties"}
				/>
				<JobReportingCard
					color={"#BDD800"}
					number={"1234"}
					details={"Total number of mapped properties"}
				/>
				<JobReportingCard
					color={"#FF9D3A"}
					number={"1234"}
					details={"Total number of aborted properties"}
				/>
				<JobReportingCard
					color={"#FF0101"}
					number={"1234"}
					details={"Total number of deactiveted properties"}
				/>
			</div>
		</div>
	);
}
