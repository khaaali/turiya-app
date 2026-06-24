// Small formatting helpers shared across pages.

export function toRoman(n: number): string {
  return ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n] ?? String(n);
}
