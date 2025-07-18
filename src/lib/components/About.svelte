<script lang="ts">
    export let ats = false;

    import Tool from "./Tool.svelte";
</script>

{#if !ats}
    <div class="card row">
        <h2>About me</h2>
        <p>
            I&nbsp;am 23&nbsp;y&rsquo;o backend developer with 5&nbsp;years
            experience of&nbsp;development in
            <Tool key="php" />. I&nbsp;graduated in&nbsp;2020 with a&nbsp;degree
            in&nbsp;programming and have been building web applications and
            backend systems ever since.
        </p>
    </div>
{:else}
    <h2>About me</h2>
    <p>
        I am 23 years old backend developer with 5 years
        experience of development in PHP. I graduated in 2020 with a degree
        in programming and have been building web applications and backend
        systems ever since.
    </p>
{/if}
