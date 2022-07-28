import { Box, useDisclosure } from "@chakra-ui/react";
import CheckInStatus from "components/CheckInStatus/CheckInStatus";
import MobileNav from "layout/shared/MobileNav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "redux/slices/userSlice";
import DesktopExporeNav from "./components/DesktopExporeNav";
import MobileExploreDrawer from "./components/MobileExploreDrawer";

export default function ExploreLayout({ children }) {
  const { userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    !userDetails && dispatch(fetchUserDetails());
  }, []);

  return (
    <Box bg="blackAlpha.50" minH="100vh" spacing={0}>
      <DesktopExporeNav />
      <MobileNav onToggle={onToggle} />
      <MobileExploreDrawer isOpen={isOpen} onToggle={onToggle} />
      <CheckInStatus />
      <Box w="full">{children}</Box>
    </Box>
  );
}
