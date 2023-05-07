import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  MoonIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SunIcon,
  HamburgerIcon
} from "@chakra-ui/icons"
import { FaSmileBeam, FaSkull } from "react-icons/fa"
import router from "next/router";
import { useEffect } from "react";
import exploreRouterMenu from "./RouterMenu";

// Fork from: https://medium.com/@pal.amittras/exploring-chakra-ui-part-3-building-a-responsive-app-header-and-sidebar-with-chakra-ui-8109fcdcb38d

function AppHeader(props: any) {
  const toxicEnabled = props.toxicEnabled;
  const changeToxicEnabled = props.changeToxicEnabled;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "transparent")}
        px={4}
        position={"fixed"}
        width={"100vw"}
        top={0}
        boxShadow={"md"}
        zIndex={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} spacing={4}>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              icon={
                <HamburgerIcon />
              }
              display={{
                md: "none",
              }}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <Heading fontWeight={"normal"} size={"md"}>
              言雅 Elegant TW
            </Heading>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
            <Box display={{ base: "none", md: "block" }}>
              {exploreRouterMenu.map((menu) => (
                <Menu key={menu.sectionId}>
                  <MenuButton
                    as={Button}
                    size={"sm"}
                    ml={2}
                    rightIcon={<ChevronDownIcon />}>
                    {menu.sectionLabel}
                  </MenuButton>
                  <MenuList maxW={"fit-content"}>
                    {menu.sectionItems.map((menuItem) => {
                      const { label, path, Icon, external } = menuItem;
                      if (external) {
                        return (
                          <MenuItem
                            key={label}
                            onClick={() =>
                              window.open(path, '_blank')
                            }>
                            <Icon
                              size={"1.25em"}
                              style={{ marginRight: "1rem" }}
                            />
                            {label}
                          </MenuItem>
                        );
                      } else {
                        return (
                          <MenuItem
                            key={label}
                            onClick={() =>
                              router.push(path)
                            }>
                            <Icon
                              size={"1.25em"}
                              style={{ marginRight: "1rem" }}
                            />
                            {label}
                          </MenuItem>
                        );
                      }
                    })}
                  </MenuList>
                </Menu>
              ))}
            </Box>
            <IconButton
              size={"sm"}
              icon={toxicEnabled ? <FaSkull /> : <FaSmileBeam />}
              aria-label={"Toxic Mode"}
              onClick={changeToxicEnabled}
            />
            <IconButton
              size={"sm"}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              aria-label={"Change Color Theme"}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={"1px"}
            display={"flex"}
            alignItems={"center"}>
            <Heading size={"sm"} onClick={onClose}>
              言雅 Elegant TW
            </Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={0}>
            <Accordion allowMultiple>
              {exploreRouterMenu.map((menu) => (
                <AccordionItem key={menu.sectionId}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}>
                        <Text m={0} fontWeight={"bold"}>
                          {menu.sectionLabel}
                        </Text>
                        {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                      </AccordionButton>
                      <AccordionPanel p={0}>
                        <List>
                          {menu.sectionItems.map((menuItem) => {
                            const { label, path, Icon, external } = menuItem;
                            if (external) {
                              return (
                                <ListItem
                                  as={Button}
                                  variant={"ghost"}
                                  w={"full"}
                                  borderRadius={"0"}
                                  display={"flex"}
                                  justifyContent={"start"}
                                  p={3}
                                  key={label}
                                  onClick={() =>
                                    window.open(path, "_blank")
                                  }>
                                  <ListIcon
                                    as={() =>
                                      Icon({
                                        size: "1.25em",
                                        style: { marginRight: "0.75rem" },
                                      })
                                    }
                                  />
                                  <Text>{label}</Text>
                                </ListItem>
                              );
                            }
                            return (
                              <ListItem
                                as={Button}
                                variant={"ghost"}
                                w={"full"}
                                borderRadius={"0"}
                                display={"flex"}
                                justifyContent={"start"}
                                p={3}
                                key={label}
                                onClick={() =>
                                  router.push(path)
                                }>
                                <ListIcon
                                  as={() =>
                                    Icon({
                                      size: "1.25em",
                                      style: { marginRight: "0.75rem" },
                                    })
                                  }
                                />
                                <Text>{label}</Text>
                              </ListItem>
                            );
                          })}
                        </List>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
          <DrawerFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderTopWidth={"1px"}>
            <Text colorScheme={"red"} size="sm">
              Powered By: 言雅 Elegant TW
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;