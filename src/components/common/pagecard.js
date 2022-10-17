import { Card, CardContent, Typography } from '@mui/material';

const Pagecard = ({ cardProps, cardInfo }) => (
  <Card
    {...cardProps}
    sx={{mb: 2}}
  >
    <CardContent
      sx={{
        padding: "10px 16px !important"
      }}
    >
      <Typography
        gutterBottom
        variant="h3"
        component="div"
      >
        {cardInfo.title}
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
      >
        {cardInfo.content}
      </Typography>
    </CardContent>
  </Card>
);

export default Pagecard
