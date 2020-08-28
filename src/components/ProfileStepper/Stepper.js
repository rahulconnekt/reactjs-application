import React from "react";
import styles from "./Stepper.module.css";
import Profile from "../../screens/mainApp/Profile/Profile";
import Avatar from "../../components/ProfileAvatar/ProfileAvatar";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Check from "@material-ui/icons/Check";

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		"& $line": {
			backgroundImage: "#E9E9F0",
		},
	},
	completed: {
		"& $line": {
			backgroundImage: "#E9E9F0",
		},
	},
	line: {
		height: "2px",
		border: 0,
		backgroundColor: "#eaeaf0",
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: "white",
		zIndex: 1,
		color: "#fff",
		width: 40,
		height: 40,
		display: "flex",
		borderRadius: "50%",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid #3B86FF",
		color: "#3B86FF",
	},
	active: {
		backgroundColor: "#3B86FF",
		color: "white",
	},
	completed: {
		backgroundColor: "#3B86FF",
		color: "white",
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;
	const icons = {
		1: 1,
		2: 2,
		3: 3,
	};
	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{completed ? (
				<Check className={classes.completed} />
			) : (
				icons[String(props.icon)]
			)}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	button: {
		marginRight: theme.spacing(1),
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));
function getSteps() {
	return ["Basic Details", "Fill out your address", "Done"];
}

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return "Basic Details";
		case 1:
			return "Fill out your address";
		case 2:
			return "Done";
		default:
			return "Unknown stepIndex";
	}
}

export default function CustomizedSteppers() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<span>Profile</span>
			</div>
			<div className={styles.avatarDiv}>
				<div className={styles.avatar}>
					<Avatar />
				</div>
				<div style={{ textAlign: "center", paddingBottom: "1%" }}>
					<span style={{ color: "#4D4F5C", fontSize: "medium" }}>
						John Mayers
					</span>
				</div>
			</div>
			<div className={styles.container}>
				<div className={classes.root}>
					<Stepper
						alternativeLabel
						activeStep={activeStep}
						connector={<ColorlibConnector />}
					>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel StepIconComponent={ColorlibStepIcon}>
									{label}
								</StepLabel>
							</Step>
						))}
					</Stepper>
					<Profile formNumber={activeStep} />
					<div>
						{activeStep === steps.length ? null : (
							<div className={styles.stepperButtons}>
								<Button
									hidden={activeStep === 0}
									variant="contained"
									color="primary"
									onClick={handleBack}
									className={classes.backButton}
									style={{
										textTransform: "none",
										outline: "none",
										width: "12%",
										marginRight: "2%",
										backgroundColor: "#43425D",
									}}
								>
									Previous
								</Button>
								<Button
									variant="contained"
									color="secondary"
									onClick={handleNext}
									style={{
										textTransform: "none",
										outline: "none",
										backgroundColor: "#F2134F",
										width: "12%",
									}}
								>
									{activeStep === steps.length - 1
										? "Submit"
										: "Next Step"}
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
