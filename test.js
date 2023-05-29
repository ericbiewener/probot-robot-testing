const { GITHUB_HEAD_REF = "" } = process.env;

console.log(process.env)

if (GITHUB_HEAD_REF.startsWith("_seq-merge/")) {
  console.log('SEQUENTIAL MERGE CHECK')
  const DELAY_MIN = 5;

  setTimeout(() => {
    process.exit(0);
  }, DELAY_MIN * 60 * 1000);

} else {

  const DELAY_MIN = 0;

  setTimeout(() => {
    process.exit(0);
  }, DELAY_MIN * 60 * 1000);
}
