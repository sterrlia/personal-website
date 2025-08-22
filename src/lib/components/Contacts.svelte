<script lang="ts">
    export let ats = false;

    let contacts = [
        {
            key: "github",
            value: "sterrlia",
            alt: "Github logo",
            link: "https://github.com/sterrlia",
        },
        {
            key: "email",
            value: "contact@sterrlia.com",
            alt: "Email",
            link: "mailto:contact@sterrlia.com",
        },
        {
            key: "linkedin",
            value: "sterrlia",
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/sterrlia",
        },
        {
            key: "discord",
            value: "1391465901345476658",
            link: "https://discord.com/users/1391465901345476658",
        }
    ];
</script>

{#if !ats}
    <div class="row">
        <h2>My contacts</h2>

        <div class="row">
            {#each contacts as contact (contact.key)}
                <a href={contact.link} target="_blank">
                    <img
                        class="icon"
                        src="icons/{contact.key}.svg"
                        alt={contact.alt}
                    />
                </a>
            {/each}
        </div>
    </div>
    <style>
        h2 {
            color: white;
        }
    </style>
{:else}
    <h2>Contacts</h2>

    <div itemscope>
        {#each contacts as contact (contact.key)}
            <span itemprop={contact.key}
                ><a href={contact.link}>{contact.value}</a></span
            ><br />
        {/each}
    </div>
{/if}
