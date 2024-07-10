export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotaionState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotaionState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");
  timeline.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");
};
