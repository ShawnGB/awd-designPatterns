//O(n) no faster version as  we would need to map the incoming array anyways

const findNeedle = (haystack: string[]): string => {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
};
