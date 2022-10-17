import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import Homecard from '../components/home/homecard';
import Layout from '../components/common/layout';
import Pagecard from '../components/common/pagecard';

const Page = () => (
  <>
    <Head>
      <title>
        Home | CantHide
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Pagecard
          cardInfo={{
            title: "Welcome to CantHide",
            content: "CantHide provides a online people search directory where you can find people by their profile URLs"
          }}
        />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xl={4}
            lg={4}
            sm={12}
            xs={12}
          >
            <Homecard
              imgInfo={{
                url: "/static/images/home/location.jpeg",
                alt: "location"
              }}
              cardInfo={{
                title: "Location",
                content: "Find all locations where the user has been using the Profile URL."
              }}
            />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={12}
            xs={12}
          >
            <Homecard
              imgInfo={{
                url: "/static/images/home/social.jpeg",
                alt: "social"
              }}
              cardInfo={{
                title: "Social Media",
                content: "Find all other Social Media Accounts using the Profile URL."
              }}
            />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            sm={12}
            xs={12}
          >
            <Homecard
              imgInfo={{
                url: "/static/images/home/ps.jpeg",
                alt: "ps"
              }}
              cardInfo={{
                title: "Photoshop Detection",
                content: "Find photos that have been Photoshoped using the Profile URL."
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Page;
