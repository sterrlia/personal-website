<script lang="ts">
    import About from "./About.svelte";
    import Contacts from "./Contacts.svelte";
    import DevelopmentTools from "./DevelopmentTools.svelte";
    import Experience from "./Experience/Experience.svelte";
    import Footer from "./Footer.svelte";
</script>

<header>
    <Contacts ats={true} />
</header>

<section>
    <About ats={true} />
</section>

<section>
    <Experience ats={true} />
</section>

<section>
    <DevelopmentTools ats={true} />
</section>

<section>
    <Footer ats={true} />
</section>
