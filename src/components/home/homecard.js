import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';

const Homecard = ({ cardProps, imgInfo, cardInfo }) => (
  <Card {...cardProps}>
    <CardMedia
      component="img"
      alt={imgInfo.alt}
      height="140"
      image={imgInfo.url}
      sx={{
        margin: "10px",
        height: "auto",
        width: "-webkit-fill-available"
      }}
    />
    <CardContent
      sx={{
        padding: "10px 16px"
      }}
    >
      <Typography gutterBottom
        variant="h5"
        component="div"
      >
        {cardInfo.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
      >
        {cardInfo.content}
      </Typography>
    </CardContent>
    <CardActions
      sx={{
        justifyContent: "flex-end"
      }}
    >
      <Button size="small">{"Let's Try!"}</Button>
    </CardActions>
  </Card>
);

export default Homecard
