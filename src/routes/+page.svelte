<script lang="ts">
    import P5 from "p5-svelte";
    import { getSketch } from "$lib/sky/sketch";
    import Experience from "$lib/components/Experience/Experience.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import About from "$lib/components/About.svelte";
    import Contacts from "$lib/components/Contacts.svelte";
    import Ats from "$lib/components/Ats.svelte";

    const pageContainerId = "page";
    const sketch = getSketch(pageContainerId);
</script>

<title>Resume</title>

<div class="a_T_s">
    <Ats />
</div>

<div class="page" id="{pageContainerId}">
    <div class="container">
        <div class="canvas-container">
            <P5 {sketch} />
        </div>

        <div class="main-column column md-row-gap no-wrap">
            <div class="row"></div>
            <div class="row">
                <Contacts />
            </div>
            <div class="row">
                <About />
            </div>
            <div class="row">
                <Experience />
            </div>
        </div>
    </div>

    <div class="footer">
        <Footer />
    </div>
</div>
