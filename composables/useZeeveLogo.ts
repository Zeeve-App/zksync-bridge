export const useZeeveLogoSrc = () => {
  const { selectedColorMode } = useColorMode();

  return computed(() =>
    selectedColorMode.value === "light" ? "/img/zeeve-logo-on-light-bg.svg" : "/img/zeeve-logo-on-dark-bg.svg"
  );
};
