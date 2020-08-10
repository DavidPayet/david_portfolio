import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Calculator from '../components/Calculator';
import Counter from '../components/Counter';
import Chronometer from '../components/Chronometer';
import Gif from '../components/Gif';
import Imc from '../components/Imc';
import PomodoroClock from '../components/PomodoroClock';
import SnakeGame from '../components/SnakeGame';
import TicTacToe from '../components/TicTacToe';
import TodoList from '../components/TodoList';
import BackToHome from '../components/BackToHome';

import '../styles/MiniAppsPage.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const MiniAppsPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="MiniAppsPage">
      <Container className="miniAppsPage">
        <BackToHome />
        <h2>Mini Apps</h2>
        <Row>
          <Col xl="2" lg="2" md="2" sm="12" xs="12">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Todo List" {...a11yProps(0)} />
              <Tab label="Générateur de Gifs" {...a11yProps(1)} />
              <Tab label="Calculatrice" {...a11yProps(2)} />
              <Tab label="Tic Tac Toe" {...a11yProps(3)} />
              <Tab label="Snake" {...a11yProps(4)} />
              <Tab label="IMC" {...a11yProps(5)} />
              <Tab label="Compteur" {...a11yProps(6)} />
              <Tab label="Chronomèter" {...a11yProps(7)} />
              <Tab label="Pomodoro" {...a11yProps(8)} />
            </Tabs>
          </Col>
          <Col xl="10" lg="10" md="10" sm="12" xs="12">
            <TabPanel value={value} index={0}>
              <TodoList />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Gif />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Calculator />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <TicTacToe />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <SnakeGame />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Imc />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Counter />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Chronometer />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <PomodoroClock />
            </TabPanel>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default MiniAppsPage;