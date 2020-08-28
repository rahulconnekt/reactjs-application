import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import graph from "../../Assets/graph.png";

import styles from "./Card.module.css";

const useStyles = makeStyles({
	root: {
		minWidth: 350,
		["@media only screens and (max-width: 1024px)"]: {
			minWidth: 300,
		},
		["@media only screens and (max-width: 420px)"]: {
			minWidth: 50,
		},
		margin: "2%",
	},
});

export default function SimpleCard(props) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent className={styles.card}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.details}>
					<div className={styles.stats}>{props.number}</div>
					<div className={styles.image}>
						<img src={graph} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
