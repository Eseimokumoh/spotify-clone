import React, { useEffect, useState } from 'react'
import './Footer.css'
import { useDataLayerValue } from "./DataLayer";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'


function Footer({spotify}) {
  const [{token, item, playing}, dispatch] = useDataLayerValue();

  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' 
          src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/50/1481534063-sub-buzz-27421-1481322928-7.jpg' alt=''/>
        <div className='footer_songInfo'>
          <h4>Yeah!!!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className='footer_center'>
        <ShuffleIcon className='footer_green'/>
        <SkipPreviousIcon className='footer_icon'/>
        {playing ? (
        <PauseCircleOutlineIcon
          fontSize='large'
          className='footer_icon'
        />
        ) : (
        <PlayCircleOutlineIcon
          fontSize='large' 
          className='footer_icon'/>
        )}
        <SkipNextIcon className='footer_icon'/>
        <RepeatIcon className='footer_green'/>
      </div>

      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>         
        </Grid>
      </div>
    </div>
  )
}

export default Footer