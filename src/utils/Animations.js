export const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  out: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.5 },
  },
};

export const delayedPageTransition = {
  in: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
  out: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.5 },
  },
};
