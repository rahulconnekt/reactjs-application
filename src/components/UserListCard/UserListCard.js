import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import AntSwitch from "../AntSwitch/AntSwitch";

import styles from "./UserListCard.module.css";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 250,
		margin: "2%",
	},
	root1: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(9),
		height: theme.spacing(9),
	},
}));

export default function SimpleCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent className={styles.card}>
				<div className={styles.detailsDiv}>
					<div className={styles.avatarDiv}>
						<div className={classes.root1}>
							<Avatar
								alt="Remy Sharp"
								src="/static/images/avatar/1.jpg"
								style={{
									minWidth: "5.5rem",
									minHeight: "5.5rem",
								}}
							/>
						</div>
					</div>
					<div
						className={styles.textdetailsDiv}
						style={{ marginLeft: "2%" }}
					>
						<div
							style={{
								fontWeight: "bolder",
								color: "#4D4F5C",
								fontSize: "18px",
							}}
						>
							David James
						</div>
						<div
							style={{
								opacity: "0.5",
								color: "#43425D",
							}}
						>
							United States
						</div>
						<div
							style={{
								opacity: "0.5",
								color: "#43425D",
							}}
						>
							8715674877
						</div>
					</div>
				</div>
				<div className={styles.switchDiv}>
					<AntSwitch />
				</div>
			</CardContent>
		</Card>
	);
}
