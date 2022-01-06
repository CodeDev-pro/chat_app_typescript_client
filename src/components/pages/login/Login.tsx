import React from "react";
import { Theme } from "../../ui/theme/Theme";
import { createStyles } from "../../ui/utils/Resources";
import Container from "../../ui/layout/Container";
import Box from "../../ui/layout/Box";
import Grid from "../../ui/layout/Grid";
import Spacer from "../../ui/layout/Spacer";
import Text from "../../ui/Text";
import { theme } from "../../ui/theme/Theme";
import { PeopleOutline } from "@mui/icons-material";
import InputGroup from "../../ui/Input";
import Button, { Link } from "../../ui/Button";
import Form from "../../ui/Form";
import Checkbox from "../../ui/Checkbox";

const useStyles = createStyles<Theme, {}>((theme, props) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.primary.light,
  },
  wrapper: {
    boxShadow: "0px 2px 8px 3px rgba(0,0,0,0.25)",
  },
  borderBottom: {
    borderBottom: "3px solid white",
    padding: "5px",
  },
  login: {
    textAlign: "start",
    width: "100%",
    padding: "0em 1em",
  },
  spacer: {
      justifyContent: "space-between",
      padding: "5px 3px"
  },
  checkboxWrapper: {
      
  },
  checkbox: {
      
  }
}));

const Login = () => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <Container gutter gutterTop>
        <Container className={classes.wrapper} borderRadius={"10px"} flexBox>
          <Box
            backgroundColor="white"
            flex={0.4}
            flexItem
            centerContent
            flexDirection="column"
          >
            <Text
              color="#454545"
              type="h5"
              variant="h5"
              className={classes.login}
            >
              Login
            </Text>
            <Form>
              <InputGroup label="Username or Email Address" />
              <Spacer height="10px" />
              <InputGroup label="Password" />
              <Spacer height="10px" />
              <Button>Login</Button>
              <Spacer height="10px" />
              <Box flexItem centerContent width="100%" height="fit-content" className={classes.spacer}>
                <Checkbox />
                <Link gutterLeft>Forgot Password?</Link>
              </Box>
              
              <Spacer height="10px" />
              <Box
                flexItem
                centerContent
                width="fit-content"
                height="fit-content"
              >
                <Text type="body2" variant="p" fontSize="0.7rem">
                  Don't have an account yet?
                </Text>
                <Link gutterLeft>Sign up now</Link>
              </Box>
            </Form>
          </Box>
          <Box
            flex={0.6}
            backgroundColor={`linear-gradient(to bottom right, ${theme.palette.primary?.lighter}, ${theme.palette.primary?.main})`}
            centerContent
            flexItem
            flexDirection="column"
          >
            <div>
              <PeopleOutline sx={{ fontSize: 40, color: "white" }} />
            </div>
            <Spacer height="10px" />
            <Text variant="h1" type="h1">
              Get Connected
            </Text>
            <Spacer height="10px" />
            <Box
              centerContent
              flexItem
              height="fit-content"
              width="fit-content"
              className={classes.borderBottom}
            >
              <Text type="caption" variant="p" fontSize="0.8em" color="white">
                Get Connected to Friends, Family and Relatives
              </Text>
            </Box>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default Login;
