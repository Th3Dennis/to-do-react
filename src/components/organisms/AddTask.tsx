import { Fab, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";


export default function AddTask(props: {addFunction: () => {}}) {
  return (
    <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <Grid container spacing={1} alignItems="center" justifyContent="center" marginY={2}>
            <Grid item xs={"auto"}>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <Fab color="primary" size="medium" aria-label="add" onClick={() => {props.addFunction()}}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
  )
}
