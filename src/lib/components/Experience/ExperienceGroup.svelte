<script lang="ts">
    import type { Group } from "./types";

    export let group: Group;
</script>

<div>
    <h3>{group.name}</h3>
    <div class="grid tool-grid">
        {#each group.items as item}
            <a href={item.link} target="_blank">
                <div class="skill-item row align-left no-wrap">
                    <img
                        class="icon"
                        src="icons/{item.iconKey}.svg"
                        alt="{item.name} logo"
                    />
                    <div class="skill-label">
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

    .skill-item {
        width: 10rem;
    }

    .skill-label {
        font-size: 18px;
        color: #fff;
    }

    .skill-label:hover {
        color: #348384;
        cursor: pointer;
    }

    @media (max-width: 450px) {
        .grid.tool-grid {
            column-gap: 1rem;
        }
    }

    @media (max-width: 450px) {
        .skill-item {
            width: 8rem;
        }
    }
    @media (max-width: 400px) {
        .skill-item {
            width: 6rem;
        }
    }
</style>
