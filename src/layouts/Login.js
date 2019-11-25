import React, { useEffect, createRef, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SignInSide from '/views/Login/Login';

function Login(props) {
    return (
        <div>
           <SignInSide/> 
        </div>
    );
}

export default Login;