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
    @import "./styles.scss";
</style>
