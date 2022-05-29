import { randomString } from "$lib/foobar";

export async function get() {
  const rndStr = randomString();
  return {
    body: rndStr,
  };
}
