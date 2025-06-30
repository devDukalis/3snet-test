import { PAGE_SIZE } from "../utils/const";

export function getCurrentMonthIndex() {
  return new Date().getMonth();
}
export function getCurrentYear() {
  return new Date().getFullYear();
}
export function getVisibleMonths(start: number) {
  return Array.from({ length: PAGE_SIZE }, (_, i) => (start + i) % 12);
}
export function formatMoney(val: number | undefined) {
  return val === undefined || val === null
    ? "No data"
    : `$ ${val.toLocaleString()}`;
}
export function formatNumber(val: number | undefined) {
  return val === undefined || val === null ? "No data" : val.toLocaleString();
}
