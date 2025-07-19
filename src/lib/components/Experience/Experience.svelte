<script lang="ts">
    export let ats = false;

    import ExperienceGroup from "./ExperienceGroup.svelte";
    import * as groups from "./groups";
    import { type ChoosenLevelType, type GroupItem, LevelGroup } from "./types";

    let choosenLevel: ChoosenLevelType = LevelGroup.All;
    $: filteredGroups = groups.get(choosenLevel);
</script>

{#if !ats}
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
            {#each filteredGroups as group (group.name)}
                <ExperienceGroup {group} />
            {/each}
        </div>
    </div>

    <style lang="scss">
        .radio-slider {
            display: flex;
            background: #141414;
            border: 1px solid;
            border-color: #ffffff;
            border-radius: 100px;
            overflow: hidden;
            width: 20rem;
            position: relative;
            font-family: sans-serif;
        }

        .radio-slider input[type="radio"] {
            display: none;
        }

        .radio-slider label {
            flex: 1;
            text-align: center;
            padding: 0.5rem 0;
            cursor: pointer;
            z-index: 2;
            position: relative;
            font-size: 14px;
            color: #e5e5e5;
        }

        .radio-slider .slider-thumb {
            position: absolute;
            top: 2px;
            bottom: 2px;
            width: calc(100% / 3 - 4px);
            background: #348384;
            border-radius: 9999px;
            transition: left 0.25s ease;
            z-index: 1;
        }

        #option1:checked ~ .slider-thumb {
            left: 2px;
        }

        #option2:checked ~ .slider-thumb {
            left: calc(100% / 3 + 2px);
        }

        #option3:checked ~ .slider-thumb {
            left: calc(2 * (100% / 3) + 2px);
        }

        @media (max-width: 400px) {
            .radio-slider {
                width: 15rem;
            }
        }

        @media (max-width: 340px) {
            .radio-slider {
                width: 12rem;
            }
        }
    </style>
{:else}
    <h2>Skills and Experience</h2>
    <ul>
        {#each groups.get(LevelGroup.All) as group (group.name)}
            <li>
                {group.name}: {group.items
                    .map((item: GroupItem) => item.name)
                    .join(", ")}
            </li>
        {/each}
    </ul>
{/if}
