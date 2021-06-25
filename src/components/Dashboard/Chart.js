import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Title from './Title';
import Typography from "@material-ui/core/Typography";


export default function Charts(props) {
  const {userdata} = props;
  console.log(userdata);
  const theme = useTheme();

  return (
    <>
      <Title >Dashboard</Title>
      <Typography style={{fontSize:"0.9rem",textTransform:'uppercase'}}>Manage your student life from one place</Typography>
    
    
    </>
  );
}