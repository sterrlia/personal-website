<script lang="ts">
    export let ats = false;

    import Tool from "./Tool.svelte";

    const tools = [
        "neovim",
        "colemak",
        "linux",
        "phpstorm",
        "jetbrains",
        "ai",
        "artificial intelligence",
    ];
</script>

{#if !ats}
    <div class="card row">
        <h2>Tools I&nbsp;use</h2>

        <section>
            <h3 class="tools-header">🧠 IDE &amp;&nbsp;Editor</h3>
            <ul>
                <li class="tools-list-item">
                    Primarily use <strong><Tool key="neovim" /></strong> for daily
                    development
                </li>
                <li class="tools-list-item">
                    Use JetBrains IDEs (like <strong
                        ><Tool key="phpstorm" /></strong
                    >) for:
                    <ul>
                        <li>Database management</li>
                        <li>Debugging</li>
                        <li>Running tests</li>
                    </ul>
                </li>
            </ul>

            <h3 class="tools-header">🤖 AI&nbsp;Assistance</h3>
            <ul>
                <li class="tools-list-item">
                    Speed up&nbsp;research and documentation lookup
                </li>
                <li class="tools-list-item">
                    Translate ideas into implementations
                </li>
                <li class="tools-list-item">
                    Explore alternative approaches or&nbsp;generate new ideas
                </li>
            </ul>

            <h3 class="tools-header">📝 Note-Taking</h3>
            <ul>
                <li class="tools-list-item">
                    Use <strong><Tool key="emacs" /></strong> with <Tool
                        key="vim"
                        showLogo={false}
                    /> keybindings
                </li>
                <li class="tools-list-item">
                    Notes follow the minimal <strong
                        ><Tool key="roam" />
                    </strong> method (bidirectional linking, simple graph structure)
                </li>
            </ul>

            <h3 class="tools-header">🖥️ Operating System</h3>
            <ul>
                <li class="tools-list-item">
                    Daily driver: <strong><Tool key="linux" /></strong> (comfortable
                    with system-level configuration and DevOps tooling)
                </li>
            </ul>

            <h3 class="tools-header">⌨️ Other</h3>
            <ul>
                <li class="tools-list-item">
                    Typing on&nbsp;a <strong
                        ><Tool key="colemak" showLogo={false} /></strong
                    >
                    keyboard layout
                </li>
                <li class="tools-list-item">
                    Use <strong><Tool key="nushell" /> </strong>
                    as&nbsp;my&nbsp;main shell with
                    <strong><Tool key="atuin" /></strong> for fuzzy search
                </li>
            </ul>
        </section>
        <p class="tools-explanation">
            I&nbsp;know this setup might seem complicated, but&nbsp;I
            haven&rsquo;t needed to&nbsp;change it&nbsp;in&nbsp;a&nbsp;long
            time, it&nbsp;works for&nbsp;me.
        </p>
    </div>

    <style>
        .tools-header {
            padding: 0;
            margin: 0;
        }

        .tools-list-item {
            padding: 0.2rem;
        }

        .tools-explanation {
            margin-top: 0.5rem;
        }
    </style>
{:else}
    <h2>Development tools</h2>

    <p>In my work I use these tools:</p>

    {#each tools as tool (tool)}
        <ul>
            <li>{tool}</li>
        </ul>
    {/each}
{/if}
