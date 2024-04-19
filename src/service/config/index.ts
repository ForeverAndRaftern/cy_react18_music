// 1.区分开发环境和生产环境
let BASE_URL = "";

if (import.meta.env.PROD) {
  BASE_URL = "http://codercba.com:9002";
} else {
  BASE_URL = "http://codercba.com:9002";
}
export const TIME_OUT = 10000;
export { BASE_URL };
