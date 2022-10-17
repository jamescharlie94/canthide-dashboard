import Head from 'next/head';
import { Box, Container } from '@mui/material';

import Layout from '../components/common/layout';
import Pagecard from '../components/common/pagecard';

const Page = () => (
  <>
    <Head>
      <title>
        Location | CantHide
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
            content: "This is location page."
          }}
        />
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
