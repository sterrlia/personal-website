<script lang="ts">
    export let ats = false;

    import Tool from "./Tool.svelte";
    import * as assets from "$lib/assets";
    import dayjs from "dayjs";
    import type { WorkInterval } from "$lib/assets";

    const now = dayjs();
    const age = now.diff(dayjs(assets.birthDate), "year");

    function getWorkDurationInYears(intervals: WorkInterval[]): number {
        return Math.round(
            intervals.reduce((total, interval) => {
                const start = dayjs(interval.start);
                const end = dayjs(interval.end);
                const diffYears = end.diff(start, "year", true);
                return total + diffYears;
            }, 0),
        );
    }

    const workTimeInYears = getWorkDurationInYears(assets.phpWorkIntervals);
    const graduatedAtYear = assets.completedCollegeDate.getFullYear();
</script>

{#if !ats}
    <div class="card row">
        <h2>About me</h2>
        <p>
            I&nbsp;am {age}-year-old backend developer with {workTimeInYears}&nbsp;years
            of experience of&nbsp;development in
            <Tool key="php" />. In&nbsp;{graduatedAtYear}, I&nbsp;graduated with honors from a
            vocational college in programming and have been building
            web applications and backend systems ever since.
        </p>
    </div>
{:else}
    <h2>About me</h2>
    <p>
        I am a {age}-year-old backend developer with {workTimeInYears} years of experience
        in PHP development. In {graduatedAtYear}, I graduated with honors from a
        vocational college in programming and have been building web
        applications and backend systems ever since.
    </p>
{/if}
