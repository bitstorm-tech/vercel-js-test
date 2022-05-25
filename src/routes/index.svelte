<script context="module">
    export async function load({fetch}) {
        const response = await fetch("/api/accounts");
        const accounts = await response.json();

        console.log("Accounts svelte:", accounts)

        return {
            props: {
                accounts
            }
        }
    }
</script>

<script>
    export let accounts;
</script>

<h1>Welcome to SvelteKit</h1>
{JSON.stringify(accounts)}
