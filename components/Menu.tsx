import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <IconButton
        bg="white"
        ref={buttonRef}
        aria-label="Side menu"
        icon={<HamburgerIcon w={6} h={6} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={buttonRef}
        size={["xs", "sm"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex justify="center" gap={4}>
              <Button
                as="a"
                href="/login"
                colorScheme="orange"
                size="lg"
                w="full"
              >
                Log in
              </Button>
              <Button
                as="a"
                href="/signup"
                colorScheme="orange"
                variant="outline"
                size="lg"
                w="full"
              >
                Sign up
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
