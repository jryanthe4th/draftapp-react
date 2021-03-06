import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import MenuIcon from '@material-ui/icons/Menu'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ViewComfyIcon from '@material-ui/icons/ViewComfy'
import ChatIcon from '@material-ui/icons/Chat'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
}

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        {/* <List>
          {['Draftboard', 'Rankings', 'Combine Results', 'Chat'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ViewComfyIcon /> : <ChatIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        <List component='nav'>
            <ListItem button component={Link} to='/'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button component={Link} to='/draftboard'>
              <ListItemIcon>
              <ViewComfyIcon />
              </ListItemIcon>
              <ListItemText primary='Draftboard' />
            </ListItem>
            <ListItem button component={Link} to='/draftboard2020'>
              <ListItemIcon>
              <ViewComfyIcon />
              </ListItemIcon>
              <ListItemText primary='Draftboard2020' />
            </ListItem>
            <ListItem button component={Link} to='/'>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary='Combine Results' />
            </ListItem>
            <ListItem button component={Link} to='/'>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary='Chat' />
            </ListItem>
        </List>
        <Divider />
      </div>
    )

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />
        </Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SwipeableTemporaryDrawer)
