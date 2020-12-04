import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import {Typography,IconButton,AppBar,Toolbar} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import Home from './Home/Index'

//add new components to folder with component name (ie. /src/SAMPLE_COMPONENT) then add an import and router link below
import SAMPLE_COMPONENT from './SAMPLE_COMPONENT/Index'

//add component descriptions and links here to be mapped to router and home screen
const componentList = [
  {name:'Sample Component',link:'/sample_component',component:SAMPLE_COMPONENT}
]

export default function App() {
  return (
    <>
      <AppBar color={'primary'} position={'sticky'}>
        <Toolbar>
          <Link to={'/'}>
            <IconButton edge={'start'}>
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant={'h5'}>Project Components</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" render={()=><Home componentList={componentList}/>} />
        {componentList.map(component=><Route key={component.link} path={component.link} component={component.component} />)}
      </Switch>
    </>
  );
}