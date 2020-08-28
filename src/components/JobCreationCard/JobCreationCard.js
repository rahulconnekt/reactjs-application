import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import styles from "./JobCreationCard.module.css";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 270,
		margin: "2%",
		maxHeight: 110,
	},
	root1: {
		display: "flex",
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
		<Card className={classes.root}>
			<CardContent className={styles.card}>
				<div className={styles.detailsDiv}>
					<div className={styles.avatarDiv}>
						<div className={classes.root1}>
							<Avatar
								style={{
									backgroundColor: props.color,
									marginTop: "9%",
									boxShadow: "0px 3px 6px #00000029",
								}}
								className={classes.large}
							>
								<img src={props.img} />
							</Avatar>
						</div>
					</div>
					<div
						style={{
							marginTop: "-4%",
							font: "Semibold Source Sans Pro",
							marginLeft: "4%",
							fontSize: "22px",
						}}
					>
						{props.details}
					</div>

					<div className={styles.triangle_br}></div>
				</div>
			</CardContent>
		</Card>
	);
};

export default JobCard;
