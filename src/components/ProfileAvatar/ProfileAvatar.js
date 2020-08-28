import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

import styles from "./ProfileAvatar.module.css";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		position: "relative",
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

export default function ImageAvatars() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Avatar
				alt="Remy Sharp"
				src="/static/images/avatar/1.jpg"
				className={classes.large}
			/>
			<span className={styles.dot}>
				<EditRoundedIcon
					style={{
						fontSize: "small",
						color: "white",
						backgroundColor: "#F2134F",
					}}
				/>
			</span>
		</div>
	);
}
