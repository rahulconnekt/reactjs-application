import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Card, Button, CardTitle, CardText } from "reactstrap";

import styles from "./JobReportingCard.module.css";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: "21%",
		maxWidth: "21%",
		minHeight: "80%",
		margin: "2%",
		// minHeight: 90,
		borderColor: "black",
	},
	root1: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(2),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const JobCard = (props) => {
	const classes = useStyles();

	return (
		// <Card
		// 	className={classes.root}
		// 	style={{ borderColor: props.color, color: props.color }}
		// >
		// 	<CardContent
		// 		className={styles.card}
		// 		classes={{ root: classes.card }}
		// 		style={{ borderColor: props.color }}
		// 	>
		// 		<div style={{ borderColor: props.color }}>
		// 			<div className={styles.detailsDiv}>
		// 				<div
		// 					style={{
		// 						marginTop: "0%",
		// 						color: props.color,
		// 						top: "0",
		// 						left: "0",
		// 						position: "relative",
		// 						fontSize: "xx-large",
		// 					}}
		// 				>
		// 					{props.number}
		// 				</div>
		// 				<div
		// 					style={{
		// 						color: "#BBBBBB",
		// 						fontSize: "small",
		// 						bottom: "0",
		// 						left: "0",
		// 						marginTop: "2%",
		// 						fontSize: "medium",
		// 					}}
		// 				>
		// 					{props.details}
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</CardContent>
		// </Card>
		<Card
			body
			outline
			color="black"
			className={classes.root}
			style={{ borderColor: props.color }}
		>
			<CardText>
				<div
					className={styles.header}
					style={{
						marginTop: "0%",
						color: props.color,
						top: "0",
						left: "0",
						fontSize: "xx-large",
					}}
				>
					{props.number}
				</div>
				<div
					style={{
						color: "#BBBBBB",
						fontSize: "medium",
						bottom: "0",
						left: "0",
						marginTop: "2%",
						whiteSpace: "nowrap",
					}}
				>
					{props.details}
				</div>
			</CardText>
		</Card>
	);
};

export default JobCard;
