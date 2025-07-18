<script lang="ts">
    let contacts = [
        {
            icon: "github",
            alt: "Github logo",
            link: "https://github.com/sterrlia",
        },
        {
            icon: "email",
            alt: "Email",
            link: "mailto:contact@sterrlia.com",
        },
        {
            icon: "linkedin",
            alt: "Linkedin",
            link: "https://www.linkedin.com",
        },
    ];
</script>

<div class="row">
    <h2>My contacts</h2>

    <div class="row">
        {#each contacts as contact (contact.icon) }
            <a href={contact.link} target="_blank">
                <img
                    class="icon"
                    src="icons/{contact.icon}.svg"
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
