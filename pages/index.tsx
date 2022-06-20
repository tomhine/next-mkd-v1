import { Box, Flex, Grid, GridItem, Heading, Textarea } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Home: NextPage = () => {
  const [mkd, setMkd] = useState("");

  const handleMkdInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMkd(e.currentTarget.value);
  };

  return (
    <Box>
      <Head>
        <title>MkdEdit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateColumns="repeat(2, 1fr)"
        minH="calc(100vh - 80px)"
        as="main"
        bg="gray.300"
        gap={0.5}
        pt={0.5}
      >
        <GridItem bg="gray.100">
          <Flex as="header" align="center" px={8} bg="gray.200" h={10}>
            <Heading as="h2" size="xs" fontWeight="medium">
              MARKDOWN
            </Heading>
          </Flex>
          <Textarea
            value={mkd}
            onChange={handleMkdInput}
            resize="none"
            border="none"
            variant="unstyled"
            p={6}
            minH="calc(100vh - 130px)"
          />
        </GridItem>
        <GridItem bg="gray.100">
          <Flex as="header" align="center" px={8} bg="gray.200" h={10}>
            <Heading as="h2" size="xs" fontWeight="medium">
              PREVIEW
            </Heading>
          </Flex>
          <Box className="prose" p={6}>
            <ReactMarkdown>{mkd}</ReactMarkdown>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
