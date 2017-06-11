"use strict";

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
  (
      <header>
        <nav>
          <ul>
            <li><Link to="/todo">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
  )


export default Header;
