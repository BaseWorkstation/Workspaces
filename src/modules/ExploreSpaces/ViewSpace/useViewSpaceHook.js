import { useSelector } from "react-redux";

export default function useViewSpaceHook() {
  const { currentCheckIn, loading } = useSelector((state) => state.spaces);

  return { currentCheckIn };
}
