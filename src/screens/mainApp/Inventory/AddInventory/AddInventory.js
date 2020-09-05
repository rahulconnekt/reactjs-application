import React from "react";
import styles from "./AddInventory.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({}));

export default function AddInventory() {
	const classes = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Inventory /</span>
				<span style={{ color: "#a9a9a9", fontWeight: "200" }}>
					Add Inventory
				</span>
			</div>
			<div className={styles.formDiv}>
				<form noValidate autoComplete="off">
					<div className={styles.row1}>
						<TextField
							style={{
								width: "40%",
							}}
							id="outlined-basic"
							label="Select package"
							variant="outlined"
						/>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="No. of fresh cards"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="No. of failed"
							variant="outlined"
						/>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="No. of damaged cards"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="Screw"
							variant="outlined"
						/>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="Screw driver"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="Drill gun"
							variant="outlined"
						/>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="Wood plugs"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="Job sheets"
							variant="outlined"
						/>
						<TextField
							style={{ width: "40%" }}
							id="outlined-basic"
							label="Other (none)"
							variant="outlined"
						/>
					</div>
					<div className={styles.row2}>
						<TextField
							style={{ width: "42%" }}
							id="outlined-basic"
							label="Other quantities"
							variant="outlined"
						/>
					</div>
				</form>
				<div className={styles.buttonDiv}>
					<Button
						variant="contained"
						color="primary"
						style={{
							backgroundColor: "#43425D",
							textTransform: "none",
							width: "15%",
							marginRight: "2%",
						}}
					>
						Cancel
					</Button>
					<Button
						variant="contained"
						color="secondary"
						style={{ textTransform: "none", width: "15%" }}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
}
