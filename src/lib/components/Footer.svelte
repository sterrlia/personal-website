<script lang="ts">
    export let ats = false;
    import Tool from "./Tool.svelte";
</script>

{#if !ats}
    <div class="card row footer-block">
        <span>
            Made with
            <Tool key="svelte" />
            and
            <Tool key="p5js" />
        </span>
    </div>

    <style lang="scss">
        .footer-block {
            padding: 1rem;
            margin: 0;
            border-radius: 0;
        }
    </style>
{:else}
    Made with svelte and p5js
{/if}
