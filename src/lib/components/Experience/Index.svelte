<script lang="ts">
    import ExperienceGroup from "./ExperienceGroup.svelte";
    import * as groups from "./groups";
    import { type ChoosenLevelType, LevelGroup } from "./types";

    let choosenLevel: ChoosenLevelType = LevelGroup.All;
    $: filteredGroups = groups.get(choosenLevel);
</script>

<div class="card row">
    <div class="row">
        <div class="column">
            <h2>Experience</h2>
            <div class="radio-slider">
                <input
                    type="radio"
                    name="level"
                    id="option1"
                    value="work"
                    bind:group={choosenLevel}
                />
                <input
                    type="radio"
                    name="level"
                    id="option2"
                    value="all"
                    bind:group={choosenLevel}
                />
                <input
                    type="radio"
                    name="level"
                    id="option3"
                    value="personal"
                    bind:group={choosenLevel}
                />

                <label for="option1">Work</label>
                <label for="option2">All</label>
                <label for="option3">Personal</label>

                <div class="slider-thumb"></div>
            </div>
        </div>
    </div>
    <div class="row grid" data-columns="2" data-collapse-px="750">
        {#each filteredGroups as group}
            <ExperienceGroup {group} />
        {/each}
    </div>
</div>

<style lang="scss">
    @import "./styles.scss";
</style>
