import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


    const Welcome = props =>

    <div className="render">

        <h1>{`Halo ${props.name}`}</h1>
        
    </div>

export default Welcome;
