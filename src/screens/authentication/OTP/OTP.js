import React from "react";
import styles from "./OTP.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import unnamed from "./images/unnamed@2x.png";
import Logo from "../../../Assets/Logo.png";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "40ch",
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
			<div className={styles.layer}></div>
			<div className={styles.div1}>
				<CancelIcon
					style={{
						color: "#F2134F",
						position: "absolute",
						top: "-13",
						right: "-18",
						height: "10%",
						width: "10%",
						cursor: "pointer",
					}}
				/>
				<div className={styles.logoDiv}>
					<img src={Logo} alt="logo" />
				</div>
				<div className={styles.div1text}>OTP Verification</div>
				<div className={styles.textField}>
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
					>
						<input
							style={{
								width: "10%",
								minHeight: "3.25vw",
								border: "2px solid #1A73E8",
								borderRadius: "5px",
								marginRight: "5%",
								marginLeft: "20%",
							}}
						/>
						<input
							style={{
								width: "10%",
								minHeight: "3.25vw",
								border: "2px solid #1A73E8",
								borderRadius: "5px",
								marginRight: "5%",
							}}
						/>
						<input
							style={{
								width: "10%",
								minHeight: "3.25vw",
								border: "2px solid #1A73E8",
								borderRadius: "5px",
								marginRight: "5%",
							}}
						/>
						<input
							style={{
								width: "10%",
								minHeight: "3.25vw",
								border: "2px solid #1A73E8",
								borderRadius: "5px",
								marginRight: "5%",
							}}
						/>
					</form>
				</div>
				<div className={styles.helper}>
					<span style={{ fontSize: "smaller" }}>
						OTP expires in 4:53 minutes
					</span>
					<span
						style={{
							font: "Source Sans Pro",
							fontWeight: "bold",
							color: "#F2134F",
							fontSize: "smaller",
							marginRight: "5%",
							cursor: "pointer",
						}}
					>
						RESEND OTP
					</span>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "5%",
					}}
				>
					<Button
						variant="contained"
						color="secondary"
						style={{
							width: "19.5vw",
							textTransform: "none",
							height: "4em",
							font: "SF Pro Text",
							fontSize: "16px",
						}}
						onClick={() => {}}
					>
						Verify
					</Button>
				</div>
			</div>
		</div>
	);
}
