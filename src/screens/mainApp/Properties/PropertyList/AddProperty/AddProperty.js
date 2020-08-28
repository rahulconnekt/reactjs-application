import React from "react";
import styles from "./AddProperty.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({}));

export default function AddProperty() {
	const classes = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ fontWeight: "lighter" }}>Property List /</span>
				<span style={{ color: "#a9a9a9", fontWeight: "lighter" }}>
					Add Property
				</span>
			</div>
			<div className={styles.formDiv}>
				<form noValidate autoComplete="off">
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Owner name"
							variant="outlined"
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Ward"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Zone"
							variant="outlined"
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Street"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Description"
							variant="outlined"
							multiline
							rows={4}
						/>
						<TextField
							style={{ width: "45%" }}
							id="outlined-basic"
							label="Phone number"
							variant="outlined"
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
								fontWeight: "lighter",
								outline: "none",
								width: "110%",
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
								fontWeight: "lighter",
								outline: "none",
								width: "110%",
							}}
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
