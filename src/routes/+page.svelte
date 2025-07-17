<script lang="ts">
    import P5 from "p5-svelte";
    import { sketch } from "$lib/sky/sketch";
    import Experience from "$lib/components/Experience/Index.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import DevelopmentTools from "$lib/components/DevelopmentTools.svelte";
    import About from "$lib/components/About.svelte";
    import Contacts from "$lib/components/Contacts.svelte";
</script>

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
        <div class="row">
            <DevelopmentTools />
        </div>
    </div>
</div>

<div class="footer">
    <Footer />
</div>
<style>
* {
margin: 0;
padding: 0;
         box-sizing: border-box;
}

body {
margin: 0;
}
</style>
