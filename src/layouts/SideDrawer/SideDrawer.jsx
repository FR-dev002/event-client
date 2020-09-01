import React, { Fragment } from 'react';
import './SideDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const SideDrawer = React.memo(props => {

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  
  return (
    <Fragment>
      <nav className={drawerClasses}>
        <div className="side-drawer__logo">
          <div className="img">
            <img src="logo192.png" alt="" />
          </div>
          <div className="logo__text">
            <h4>My Apps</h4>
          </div>
          <div className="font__awesome" onClick={props.click}>
            <FontAwesomeIcon icon={['fa', 'arrow-left']} size="1x" fixedWidth />
          </div>
        </div>
        <ul>
          <li>
            <Link to="/login">Login </Link>
          </li>
          <li>
            <a href="/">User</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}, (prev, next) => {
  return false;
});

export default SideDrawer;
