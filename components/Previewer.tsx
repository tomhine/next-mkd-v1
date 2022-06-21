import ReactMarkdown from "react-markdown";
import { Box, Flex, GridItem, Heading } from "@chakra-ui/react";
import { useDocumentStore } from "../store/document";

const Previewer = () => {
  const mkd = useDocumentStore(state => state.markdown);

  return (
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
  );
};

export default Previewer;
