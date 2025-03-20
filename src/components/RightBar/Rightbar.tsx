import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import React from "react"
import images from '../../assets/img'; 

const Rightbar = () => {
  return (
    <Box bgcolor="white" flex={2} p={2} sx={{display:{xs:"none" , sm:"block"}}} >
      <Box position="fixed" marginTop={10}> 
        <Typography variant="h6" fontWeight={500}> Bạn bè </Typography>
        <AvatarGroup total={9} max={7}>
          <Avatar alt="Alisa Mikhailovna Kujou" src={images.avatar1} />
          <Avatar alt="Shiroko" src={images.avatar2} />
          <Avatar alt="Hoshino" src={images.avatar3} />
         
          <Avatar alt="Nahida" src={images.avatar4} />
          <Avatar alt="Arisu" src={images.avatar5} />
          <Avatar alt="Raiden" src={images.avatar6} />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={500} mt={2} mb={2} >Bài đăng gần đây </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem >
            <img
              src={images.img1}
              alt={`Breakfast`}
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem >
            <img
              src={images.img2}
              alt={`Breakfast`}
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem >
            <img
              src={images.img3}
              alt={`Breakfast`}
              loading="lazy"
            />
        </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={500} mt={2} mb={2} > Hội thoại </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="The loli" src={images.avatar7} />
        </ListItemAvatar>
        <ListItemText
          primary="Are you here?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                The loli
              </Typography>
              {" — I'll call FBI…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="The Artist" src={images.avatar8} />
        </ListItemAvatar>
        <ListItemText
          primary="Ein Volk, Ein Reich, Ein Führer!"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                The Artist
              </Typography>
              {" — When diplomacy ends, War begins.…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Perrell Laquarius Brown" src={images.avatar9} />
        </ListItemAvatar>
        <ListItemText
          primary="Anbatukam"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                
              </Typography>
              {' — Well you know if you know…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar