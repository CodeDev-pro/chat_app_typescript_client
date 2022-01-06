import React from "react";
import { makeStyles } from "@mui/styles";
import ColorBackground, { Color } from "../../ui/ColorBackground";
import GlassBackground, { Glass } from "../../ui/Glass";
import Container from "../../ui/layout/Container";
import Box from "../../ui/layout/Box";
import Grid from "../../ui/layout/Grid";
import Spacer from "../../ui/layout/Spacer";
import Text from "../../ui/Text";
import { theme } from "../../ui/theme/Theme";
import { ChatOutlined } from "@mui/icons-material";
import InputGroup from "../../ui/Input";
import Button, { Link } from "../../ui/Button";
import Form from "../../ui/Form";

const useStyles = makeStyles({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "#f6f6f6",
  },
  chatIcon: {
    width: "30px",
    height: "30px",
    color: "white",
  },
  iconWrapper: {
    padding: "10px",
    borderRadius: "50%",
    height: "fit-content",
    width: "fit-content",
    border: "3px solid white",
  },
  borderBottom: {
    borderBottom: "3px solid white",
    padding: "5px",
  },
  register: {
    textAlign: "start",
    width: "100%",
    padding: "0em 1em",
  },
});

const Signup = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <ColorBackground>
        <Color
          width={400}
          height={400}
          color={"red"}
          offset={{ top: -100, left: 0 }}
        />
        <Color
          width={400}
          height={400}
          color={"blue"}
          offset={{ bottom: -100, left: 0 }}
        />
        <Color
          width={400}
          height={400}
          color={"blue"}
          offset={{ top: 150, right: -100 }}
        />
      </ColorBackground> */}
      {/* <GlassBackground>
        <Glass width={100} height={100} offset={{ top: 50, right: 160 }} />
        <Glass width={120} height={120} offset={{ top: 150, left: 90 }} />
        <Glass width={80} height={80} offset={{ bottom: 50, right: 60 }} />
        <Glass width={50} height={50} offset={{ right: 100, bottom: 80 }} />
        <Glass width={60} height={60} offset={{ top: 80, left: 140 }} />
      </GlassBackground> */}
      <Container gutter gutterTop>
        <Container flexBox borderRadius="10px">
          <Box
            flex={0.3}
            backgroundColor={`linear-gradient(to bottom right, ${theme.palette.primary?.main}, ${theme.palette.primary?.lighter})`}
            centerContent
            flexItem
            flexDirection="column"
          >
            <div className={classes.iconWrapper}>
              <ChatOutlined
                className={classes.chatIcon}
                sx={{ fontSize: 40 }}
              />
            </div>
            <Spacer height="10px" />
            <Text variant="h1" type="h1">
              Chat
            </Text>
            <Spacer height="10px" />
            <Box
              centerContent
              flexItem
              height="fit-content"
              width="fit-content"
              className={classes.borderBottom}
            >
              <Text type="caption" variant="p" fontSize="0.8em">
                Everytime, Anytime, Anywhere
              </Text>
            </Box>
          </Box>

          <Box
            backgroundColor={"white"}
            flex={0.7}
            flexItem
            centerContent
            flexDirection="column"
          >
            <Text
              color="#454545"
              type="h5"
              variant="h5"
              className={classes.register}
            >
              Register
            </Text>
            <Form>
              <Grid container autofit rowGap="10px" columnGap="10px">
                <InputGroup label="First Name" />
                <InputGroup label="Last Name" />
                <InputGroup label="Username" />
                <InputGroup label="Email Address" />
                <InputGroup label="Phone Number" />
                <InputGroup label="Password" />
                <InputGroup label="Retype Password" />
              </Grid>
              <Spacer height="10px" />
              <Button>Create Account</Button>
              <Spacer height="10px" />
              <Box flexItem centerContent width="fit-content" height="fit-content">
              <Text type="body2" variant="p" fontSize="0.8em">
                Already have an account?
              </Text>
              <Link gutterLeft>
                Login
              </Link>
              </Box>
            </Form>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default Signup;
