import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
// import Backdrop from "../../UI/Backdrop/Backdrop";
// import Ax from "../../../hoc/Ax/Ax";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );

  //   let attachedClasses = [classes.SideDrawer, classes.Close];
  //   if (props.open) {
  //     attachedClasses = [classes.SideDrawer, classes.Open];
  //   }
  //   return (
  //     <Ax>
  //       <Backdrop show={props.open} clicked={props.closed} />
  //       <div className={attachedClasses.join(" ")} onClick={props.closed}>
  //         <div className={classes.Logo}>
  //           <Logo />
  //         </div>
  //         <nav>
  //           <NavigationItems isAuthenticated={props.isAuth} />
  //         </nav>
  //       </div>
  //     </Ax>
  //   );
};

export default sideDrawer;