import React from "react";
import styles from "./ResetPassword.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import unnamed from "./images/unnamed@2x.png";
import Logo2x from "./images/Logo-1@2x.png";
import Logo from "./images/Logo.png";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(3),
			width: "40ch",
			display: "grid",
		},
		"& .MuiIcon-colorSecondary": {
			width: "2em",
			height: "2em",
		},
	},
}));

export default function ForgotPassword() {
	const classes = useStyles();
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				objectFit: "fit",
				overflow: "hidden",
				position: "absolute",
				top: "0",
				left: "0",
			}}
			className={styles.background}
		>
			<div className={styles.div1}>
				<CancelIcon
					style={{
						color: "#F2134F",
						position: "absolute",
						top: "-17",
						right: "-21",
						height: "10%",
						width: "10%",
						cursor: "pointer",
					}}
				/>
				<div className={styles.logoDiv}>
					<picture>
						<source srcSet={Logo} media="(max-width: 767px)" />
						<img src={Logo2x} alt="Some picture" />
					</picture>
				</div>
				<div className={styles.div1text}>Reset Your Password</div>
				<div className={styles.textField}>
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
					>
						<TextField
							id="outlined-basic"
							type="Password"
							label="New password"
							variant="outlined"
						/>
						<TextField
							id="outlined-basic"
							type="Password"
							label="Confirm your new password"
							variant="outlined"
							fullWidth={true}
						/>
					</form>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						padding: "5%",
					}}
				>
					<Button
						variant="contained"
						style={{
							width: "43ch",
							height: "50px",
							outline: "none",
							textTransform: "none",
							backgroundColor: "#F2134F",
							color: "white",
						}}
						href="/password-reset-successful"
						onClick={() => {}}
					>
						Reset my password
					</Button>
				</div>
			</div>
		</div>
	);
}
