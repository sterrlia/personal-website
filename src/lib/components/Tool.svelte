<script lang="ts">
    export let key: string;
    export let iconClass: string = "tn-icon"; // you can give a default
    export let textClass: string = "";
    export let showLogo: boolean = true;
    const iconData = assets.getToolData(key);

    export let text = iconData.name;

    import * as assets from "$lib/assets";
</script>

<a href={iconData.link} target="_blank">
    {#if showLogo}
        <img
            class={iconClass}
            src={`icons/${iconData.key}.svg`}
            alt={`${iconData.name} logo`}
        />
    {/if}
    <span class={textClass}>{text}</span>
</a>
