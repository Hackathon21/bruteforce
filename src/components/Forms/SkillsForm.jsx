/* 
Name
Job
Email 
phone
What you do -> in less than 100 words
Skills -> Eg web design etc
Technical skills -> html, js, css
Experience -> company-kindOfJob-short summary -> Year of working
Education -> college name, major gpa
*/

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "75vw",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function SkillsForm() {
  const classes = useStyles();

  let skillCounts = 1;
  const skillAndSummary = () => (
    <>
      <TextField
        label="Skills"
        id="outlined-margin-dense"
        className={classes.textField}
        helperText="Enter your Skills"
        margin="dense"
        variant="outlined"
        //   required="true"
      />

      <TextField
        id="filled-full-width"
        label="skill summary"
        style={{ margin: 8 }}
        helperText="Write about your knowledge in this field"
        fullWidth
        // required="true"
        margin="normal"
        multiline
        rows={3}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </>
  );

  const techSkillInput = () => (
    <TextField
      id="standard-basic"
      margin="dense"
      label="Standard"
      style={{ margin: "20px" }}
    />
  );

  const experienceInput = () => (
    <div style={{ padding: "20px 0", borderBottom: "1px dotted grey" }}>
      <div>
        <TextField
          label="Company"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="Company you worked In"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="Year"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="eg: 2007-2009"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="Designation"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="Your designation in the organization"
          margin="dense"
          variant="outlined"
          required="true"
        />
      </div>
      <TextField
        id="filled-full-width"
        label="Summary"
        style={{ margin: 8 }}
        helperText="Summarize your experience in the company"
        fullWidth
        required="true"
        margin="normal"
        multiline
        rows={3}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </div>
  );

  const educationInput = () => (
    <div style={{ padding: "20px 0", borderBottom: "1px dotted grey" }}>
      <div>
        <TextField
          label="College"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="Name of college"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="Major"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="Enter your Major"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="GPA"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="GPA"
          margin="dense"
          variant="outlined"
          required="true"
        />
      </div>
    </div>
  );

  const [skills, setSkills] = useState(1);
  const [techSkills, setTechSkills] = useState(1);
  const [exp, setExp] = useState(1);
  const [education, setEducation] = useState(1);

  return (
    <div className={classes.root}>
      <h2 style={{ margin: "8px" }}>
        <b>BASIC INFO</b>
      </h2>
      <div style={{ display: "flex" }}>
        <TextField
          label="Name"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="Enter your full name"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="Job"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="what Job are you applying for"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="Email"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="Enter your email"
          type="email"
          margin="dense"
          variant="outlined"
          required="true"
        />
        <TextField
          label="Phone Number"
          id="outlined-margin-dense"
          className={classes.textField}
          helperText="your business phone number"
          margin="dense"
          variant="outlined"
          required="true"
        />
      </div>
      <TextField
        id="filled-full-width"
        label="Professional Summary"
        style={{ margin: 8 }}
        helperText="Summarize your skills and Experience in less than 100 words"
        fullWidth
        required="true"
        margin="normal"
        multiline
        rows={3}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />

      <h2 style={{ margin: "8px" }}>
        <b>SKILLS</b>
      </h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="skillform_skill" style={{ width: "100%" }}>
          {[...Array(skills)].map((_, i) => skillAndSummary())}
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={{ height: "60px", minWidth: "160px" }}
          onClick={() => setSkills(skills + 1)}
        >
          Add More
        </Button>
      </div>

      <h2 style={{ margin: "8px" }}>
        <b>TECHNICAL SKILLS</b>
      </h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{[...Array(techSkills)].map((_, i) => techSkillInput())}</div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={{ height: "60px", minWidth: "160px" }}
          onClick={() => setTechSkills(techSkills + 1)}
        >
          Add More
        </Button>
      </div>

      <h2 style={{ margin: "8px" }}>
        <b>EXPERIENCE</b>
      </h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{[...Array(exp)].map((_, i) => experienceInput())}</div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={{ height: "60px", minWidth: "160px" }}
          onClick={() => setExp(exp + 1)}
        >
          Add More
        </Button>
      </div>

      <h2 style={{ margin: "8px" }}>
        <b>EXPERIENCE</b>
      </h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{[...Array(education)].map((_, i) => educationInput())}</div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddIcon />}
          style={{ height: "60px", minWidth: "160px" }}
          onClick={() => setEducation(education + 1)}
        >
          Add More
        </Button>
      </div>
    </div>
  );
}
