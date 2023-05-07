import { Box } from "@razorpay/blade/components";
import logo from "assets/logo.png";

const Navbar = (): JSX.Element => {
  return (
    <Box display="flex" justifyContent="center" paddingTop="spacing.5">
      <img src={logo} height={70} aria-label="logo" />
    </Box>
  );
};

export default Navbar;
