<script lang="ts">
    import Tool from "./Tool.svelte";
</script>

<div class="card row">
    <h2>Tools I use</h2>

    <section>
        <h3>🧠 IDE & Editor</h3>
        <ul>
            <li>
                Primarily use <strong><Tool key="neovim" /></strong> for daily development
            </li>
            <li>
                Use <strong>JetBrains IDEs</strong> (like <Tool
                    key="phpstorm"
                />) for:
                <ul>
                    <li>Database management</li>
                    <li>Debugging</li>
                    <li>Running tests</li>
                </ul>
            </li>
        </ul>

        <h3>🤖 AI Assistance</h3>
        <ul>
            <li>Speed up research and documentation lookup</li>
            <li>Translate ideas into implementations</li>
            <li>Explore alternative approaches or generate new ideas</li>
        </ul>

        <h3>📝 Note-Taking</h3>
        <ul>
            <li>
                Use <strong><Tool key="emacs" /></strong> with Vim keybindings
            </li>
            <li>
                Notes follow the minimal <strong><Tool key="roam" /> </strong> method
                (bidirectional linking, simple graph structure)
            </li>
        </ul>

        <h3>🖥️ Operating System</h3>
        <ul>
            <li>
                Daily driver: <strong><Tool key="linux" /></strong> (comfortable
                with system-level configuration and DevOps tooling)
            </li>
        </ul>

        <h3>⌨️ Other</h3>
        <ul>
            <li>
                Typing on a <strong
                    ><Tool key="colemak" showLogo={false} /></strong
                >
                keyboard layout
            </li>
            <li>
                Use <strong><Tool key="nushell" /> </strong> as my main shell
                with <strong><Tool key="atuin" /></strong> for fuzzy search
            </li>
        </ul>
    </section>
    <p class="tools-explanation">
        I know this setup might seem complicated, but I haven’t needed to change
        it in a long time, it works for me.
    </p>
</div>

<style>
    h3 {
        padding: 0;
        margin: 0;
    }

    li {
        padding: 0.2rem;
    }
    
    .tools-explanation {
        margin-top: 0.5rem;
        font-size: 1.2rem;
    }
</style>
