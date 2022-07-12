const subscriptionPlans = [
  { name: "Silver", amount: "10k", ctaColor: "primary.500" },
  { name: "Gold", amount: "10k", ctaColor: "#9747FF" },
  { name: "Platinum", amount: "10k", ctaColor: "gray.800" },
];

export default function useChoosePlanHook() {
  return { subscriptionPlans };
}
