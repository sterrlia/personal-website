<script lang="ts">
    import type { Group } from "./types";

    export let group: Group;
</script>

<div>
    <h3>{group.name}</h3>
    <div class="grid tool-grid">
        {#each group.items as item}
            <a href={item.link} target="_blank">
                <div class="tool-item row align-left no-wrap">
                    <img
                        class="icon"
                        src="icons/{item.iconKey}.svg"
                        alt="{item.name} logo"
                    />
                    <div class="tool-label">
                        {item.name}
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>

<style lang="scss">
    .grid.tool-grid {
        grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }

    .tool-item {
        width: 10rem;
    }

    .tool-label {
        font-size: 18px;
        color: #fff;
    }

    .tool-label:hover {
        color: #348384;
        cursor: pointer;
    }

    @media (max-width: 450px) {
        .grid.tool-grid {
            column-gap: 1rem;
        }
    }

    @media (max-width: 450px) {
        .tool-item {
            width: 8rem;
        }
    }
    @media (max-width: 400px) {
        .tool-item {
            width: 6rem;
        }
    }
</style>
