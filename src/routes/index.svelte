<script context="module">
    export async function load({fetch}) {
        const response = await fetch("/api/accounts");
        const accounts = response.json();
        return {
            props: accounts
        }
    }
</script>

<script>
    export let accounts;
</script>

<h1>Welcome to SvelteKit</h1>
{accounts}
