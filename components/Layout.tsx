import { Box, Button, Flex, Heading, IconButton } from "@chakra-ui/react";
import { DeleteIcon, HamburgerIcon } from "@chakra-ui/icons";
import { SaveIcon } from "@heroicons/react/outline";
import { useDocumentStore } from "../store/document";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const clearMkd = useDocumentStore(state => state.clearMarkdown);
  const saveMkd = useDocumentStore(state => state.saveDocument);

  return (
    <Box minH="100vh" bg="gray.100">
      <Flex
        as="header"
        h="20"
        alignItems="center"
        justifyContent="space-between"
        px={8}
      >
        <Flex gap="8" alignItems="center">
          <IconButton
            aria-label="Side menu"
            icon={<HamburgerIcon w={6} h={6} />}
          />
          <Heading as="h1" size="md" letterSpacing="0.5rem">
            MARKDOWN
          </Heading>
        </Flex>
        <Flex gap="8" alignItems="center">
          <IconButton
            aria-label="Delete markdown"
            icon={<DeleteIcon w={5} h={5} />}
            onClick={clearMkd}
          />
          <Button
            leftIcon={<SaveIcon className="h-5 w-5" />}
            colorScheme="orange"
            onClick={saveMkd}
          >
            Save
          </Button>
        </Flex>
      </Flex>
      {children}
    </Box>
  );
};

export default Layout;
