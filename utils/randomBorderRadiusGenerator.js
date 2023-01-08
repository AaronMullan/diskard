const randomBorderRadiusGenerator = () => {
  const rp = () => `${(Math.random() * 100).toFixed(0)}%`;
  const randomBorderRadius = `${rp()} ${rp()} ${rp()} ${rp()} / ${rp()} ${rp()} ${rp()} ${rp()}`;
  return randomBorderRadius;
};

export default randomBorderRadiusGenerator;
