import React from "react";
import styles from "./DashBoard.module.css";

import Card from "../../../components/Card/Card";

export default function Dashboard() {
	return (
		<>
			<div className={styles.title}>Dashboard</div>
			<div className={styles.grid}>
				<Card title="Total Organisation" number="246K" />
				<Card title="Survey" number="2453" />
				<Card title="Total Operations" number="$39K" />
				<Card title="Properties" number="39K" />
				<Card title="Visualise" number="39K" />
				<Card title="Taxation and Payments" number="39K" />
			</div>
		</>
	);
}
