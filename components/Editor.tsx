import { Flex, GridItem, Heading, Textarea } from "@chakra-ui/react";
import { useDocumentStore } from "../store/document";

const Editor = () => {
  const mkd = useDocumentStore(state => state.markdown);
  const setMkd = useDocumentStore(state => state.setMarkdown);

  const handleMkdInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMkd(e.currentTarget.value);
  };

  return (
    <GridItem bg="white">
      <Flex as="header" align="center" px={8} bg="gray.100" h={10}>
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
  );
};

export default Editor;
