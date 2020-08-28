import React from "react";
import styles from "./AddJob.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DatePicker from "../../../../../components/DatePicker/DatePicker";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(2),
			display: "flex",
			flexDirection: "column",
		},
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function AddJob() {
	const classes = useStyles();
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span style={{ color: "#43425D" }}>Job List /</span>
				<span style={{ color: "#BBBBBB", fontWeight: "200" }}>
					Add Job
				</span>
			</div>

			<div className={styles.formDiv}>
				<form className={classes.root} noValidate autoComplete="off">
					<div className={styles.row1}>
						<TextField
							id="outlined-basic"
							label="Title"
							variant="outlined"
						/>
					</div>
					<div className={styles.row1}>
						<TextField
							id="outlined-basic"
							label="Description"
							variant="outlined"
						/>
					</div>
					<div>
						<div className={styles.row2}>
							<span className={styles.label}>Start Date</span>
							<DatePicker width="80%" />
							<span className={styles.label}>End Date</span>
							<DatePicker width="80%" />
						</div>
					</div>
					<div className={styles.row1}>
						<FormControl
							variant="outlined"
							className={classes.formControl}
						>
							<InputLabel id="demo-simple-select-outlined-label">
								Type
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								// value={age}
								// onChange={handleChange}
								label="Type"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className={styles.row1}>
						<FormControl
							variant="outlined"
							className={classes.formControl}
						>
							<InputLabel id="demo-simple-select-outlined-label">
								Category
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								// value={age}
								// onChange={handleChange}
								label="Category"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className={styles.row1}>
						<FormControl
							variant="outlined"
							className={classes.formControl}
						>
							<InputLabel id="demo-simple-select-outlined-label">
								Sub Category
							</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								// value={age}
								// onChange={handleChange}
								label="Sub Category"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
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
								// width: "80%",
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
								// width: "80%",
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
