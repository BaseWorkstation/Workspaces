import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "redux/slices/spaceSlice";

export default function useListSpacesHook() {
  const { spaces, loading } = useSelector((state) => state.spaces);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!spaces.data.length) {
      dispatch(fetchSpaces({ paginate: true, paginate_per_page: 20 }));
    }
  }, []);

  return { spaces, isLoading: loading === "FETCH_SPACES" };
}
