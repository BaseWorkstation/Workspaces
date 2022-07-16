import { useState } from "react";

export default function useActivitiesHook() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return { selectedDay, setSelectedDay };
}
