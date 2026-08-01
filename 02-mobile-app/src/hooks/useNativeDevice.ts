import { Dimensions } from "react-native";

export function useNativeDevice() {
  const { width, height } = Dimensions.get("window");
  const isTablet = width >= 768;

  return {
    width,
    height,
    isTablet,
    isMobilePhone: !isTablet,
  };
}
