import React, { useState } from "react";
import styles from "./SB.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		position: "relative",
		marginLeft: "1.5%",
		marginTop: "2%",
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
export default function SB() {
	const classes = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Survey Builder</span>
			</div>
			<div className={classes.root}>
				<div
					className={styles.rect}
					style={{
						backgroundColor: "#4d4f5c",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<span
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "18px",
							marginTop: "40%",
							marginLeft: "15%",
						}}
					>
						CREATE NEW <br></br>&nbsp;&nbsp;&nbsp;&nbsp;SURVEY
					</span>

					<span className={styles.dot}>
						<AddIcon
							style={{
								fontSize: "x-large",
								fontWeight: "bold",
								marginTop: "10%",
							}}
						/>
					</span>
				</div>
				<div
					className={styles.rect}
					style={{
						background:
							"transparent linear-gradient(180deg, #F2134F 0%, #F5276D 100%) 0% 0% no-repeat padding-box",
						display: "flex",
						justifyContent: "center",
						marginLeft: "5%",
					}}
				>
					<span
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: "18px",
							marginTop: "40%",
							marginLeft: "20%",
						}}
					>
						&nbsp;&nbsp;&nbsp;POLITICAL<br></br> SURVEY DEMO
					</span>

					<span className={styles.dot}>
						<MoreHorizIcon
							style={{
								fontSize: "x-large",
								fontWeight: "bold",
								marginTop: "10%",
							}}
						/>
					</span>
				</div>
			</div>
		</div>
	);
}
