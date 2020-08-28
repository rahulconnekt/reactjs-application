import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
}));

export default function DatePickers(props) {
	const classes = useStyles();

	return (
		<form className={classes.container} noValidate>
			<TextField
				id="date"
				variant="outlined"
				type="date"
				size="small"
				defaultValue={new Date()}
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
				style={{ width: props.width, padding: "1%", fontSize: "small" }}
			/>
		</form>
	);
}
