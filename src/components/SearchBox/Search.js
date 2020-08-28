import React, { useState } from "react";
import { blueGrey } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import InputBase from "@material-ui/core/InputBase";
import Search from "@material-ui/icons/Search";
import { useBorderedInputBaseStyles } from "@mui-treasury/styles/inputBase/bordered";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: 3,
		border: "2px solid",
		borderColor: blueGrey[200],
		"&:hover:not($disabled)": {
			borderColor: blueGrey[500],
		},
		"& > svg": {
			color: blueGrey[300],
		},
	},
	adornedStart: {
		paddingLeft: "0.5rem",
	},
	adornedEnd: {
		paddingRight: "0.5rem",
	},
	focused: {
		borderColor: blue[700],
		"&:hover:not($disabled)": {
			borderColor: blue[700],
		},
	},
	input: {
		padding: "0.625rem 0.5rem",
	},
	disabled: {
		borderColor: blueGrey[300],
		backgroundColor: blueGrey[100],
	},
}));

const BorderedInputBaseStyle = () => {
	const styles = useBorderedInputBaseStyles();
	return (
		<div>
			<InputBase
				classes={styles}
				placeholder={"Placeholder"}
				startAdornment={<Search />}
			/>
		</div>
	);
};

export default BorderedInputBaseStyle;
