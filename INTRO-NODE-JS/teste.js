const dayjs = require("dayjs");

const now = dayjs();

console.log(now.toString());
console.log(now.add(1, "month").toString());
