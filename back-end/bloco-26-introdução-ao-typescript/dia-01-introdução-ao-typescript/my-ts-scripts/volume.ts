const units = ["km3", "hm3", "dm3", "m3", "dm3", "cm3", "mm3"];

const convert = (value: number, fromUnit: string, toUnit: string) => {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(1000, exponent);
}