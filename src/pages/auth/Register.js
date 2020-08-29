import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SlackIcon from '@material-ui/icons/AlternateEmail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PassOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { Button, Container } from '@material-ui/core';

import SkillList from '../../components/SkillList';

import "../../styles/Form.scss"
import { AssignmentTurnedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	}
}));

export default function InputWithIcon() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<div className="bg-white mt5 pa3 pl5 pr5 br3">
				<h1 className="title">Create Account</h1>
				<div className={classes.margin + " font-opensans"}>
					<Grid container spacing={4} className="mb3 lattice-form-band" alignItems="flex-end">
						<Grid className="lattice-icon" item>
							<MailOutlineIcon />
						</Grid>
						<p className="lattice-form-label mb0 font-gray">Email Address</p>
						<Grid item className="lattice-form-input">
							<TextField id="input-with-icon-grid" fullWidth variant="outlined" />
						</Grid>
					</Grid>
					<Grid container spacing={4} className="mb3 lattice-form-band" alignItems="flex-end">
						<Grid item className="lattice-icon">
							<SlackIcon />
						</Grid>
						<p className="lattice-form-label mb0 font-gray">Slack Username</p>
						<Grid item className="lattice-form-input">
							<TextField id="input-with-icon-grid" fullWidth variant="outlined" />
						</Grid>
					</Grid>
					<Grid container spacing={4} className="mb3 lattice-form-band" alignItems="flex-end">
						<Grid item className="lattice-icon">
							<PassOutlinedIcon />
						</Grid>
						<p className="lattice-form-label mb0 font-gray">Password</p>
						<Grid item className="lattice-form-input">
							<TextField id="input-with-icon-grid" fullWidth variant="outlined" />
						</Grid>
					</Grid>
					<Grid container spacing={4} className="mb3 lattice-form-band" alignItems="flex-end">
						<Grid item className="lattice-icon">
							<PassOutlinedIcon />
						</Grid>
						<p className="lattice-form-label mb0 font-gray">Confirm Password</p>
						<Grid item className="lattice-form-input">
							<TextField id="input-with-icon-grid" fullWidth variant="outlined" />
						</Grid>
					</Grid>
					<Grid container spacing={4} className="mb3 lattice-form-band" alignItems="flex-end">
						<Grid item className="lattice-icon">
							<KeyboardArrowRightIcon />
						</Grid>
						<p className="lattice-form-label mb0 font-gray">Project Idea</p>
						<Grid item className="lattice-form-input">
							<TextField id="input-with-icon-grid" fullWidth variant="outlined" />
						</Grid>
					</Grid>
					<Grid container spacing={4} className="mb3 lattice-form-band" alignItems="flex-end">
						<Grid className="lattice-icon" item>
							<AssignmentTurnedIn />
						</Grid>
						<p className="lattice-form-label mb0 font-gray">Skill List</p>
						<Grid item>
							<SkillList />
						</Grid>
					</Grid>
				</div>
				<Button variant="contained" className="center" color="primary">Sign Up</Button>
			</div>
		</Container>
	);
}

/*


 */