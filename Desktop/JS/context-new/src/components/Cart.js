import React from 'react';
import Button from '@material-ui/core/Button';
import { Badge } from '@material-ui/core';
import '../App.css';


export default function Cart(props) {
  return (
    <div>
        <Button color="primary" varient="contained">
            Cart &nbsp;&nbsp;&nbsp;
            <Badge color="secondary" badgeContent={1}></Badge>
        </Button>

    </div>
  )
}
