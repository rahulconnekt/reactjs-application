import React from "react";
import styles from "./AddCategory.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({}));

export default function AddProperty() {
	const [state, setState] = React.useState({
		age: "",
		name: "hai",
		isActive: true,
	});
	const handleChange = (event) => {
		const name = event.target.name;
		setState({
			...state,
			[name]: event.target.value,
		});
	};

	const handleCheckedChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Category List /</span>
				<span style={{ color: "#a9a9a9" }}>&nbsp;Add Category</span>
			</div>
			<div className={styles.formDiv}>
				<form noValidate autoComplete="off">
					<div className={styles.row1}>
						<TextField
							variant="outlined"
							label="Category name"
							style={{
								width: "85%",
								marginRight: "15%",
							}}
						/>
					</div>
					<div className={styles.row1}>
						<FormControlLabel
							control={
								<Checkbox
									checked={state.isActive}
									onChange={handleCheckedChange}
									style={{
										color: "#05CE20",
									}}
									name="isActive"
								/>
							}
							label="Is Active"
							style={{
								color: "#43425D",
								marginRight: "85%",
								whiteSpace: "nowrap",
							}}
						/>
					</div>
				</form>
				<div className={styles.buttonDiv}>
					<div className={styles.buttons}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#43425D",
								color: "white",
								textTransform: "none",
								outline: "none",
								width: "6em",
							}}
						>
							Cancel
						</Button>
					</div>
					<div className={styles.buttons}>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#F2134F",
								color: "white",
								textTransform: "none",
								outline: "none",
								width: "6em",
							}}
						>
							Save
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
