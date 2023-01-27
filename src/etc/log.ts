// dev環境のみログ表示を行う

function v(s: any) {
  if (process.env.NODE_ENV === "development") {
    console.log(s);
  }
}

function e(s: any) {
  if (process.env.NODE_ENV === "production") {
    console.error(s);
  }
}

export default {
  v,
  e,
} as const;
