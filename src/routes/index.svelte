<script context="module">
  export async function load({fetch}) {
    const responseAccounts = await fetch("/api/accounts");
    const accounts = await responseAccounts.json();

    const responseRandom = await fetch("/api/random");
    const rndString = await responseRandom.text();

    console.log("Accounts:", accounts)
    console.log("RndString:", rndString)

    return {
      props: {
        accounts,
        rndString
      }
    }
  }
</script>

<script>
  export let accounts;
  export let rndString
</script>

<div>Random String: {rndString}</div>
<div>Accounts: {JSON.stringify(accounts)}</div>
