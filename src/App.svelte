<script>
  import { Canvas } from '@threlte/core';
  import Scene from './lib/Scene.svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { inview } from "svelte-inview";
  import { Annotation } from 'svelte-rough-notation';
  import Footer from './lib/Footer.svelte';

  let ready = false;
  let startX
  let heoY = 15;
  let zed = 1;
  let visible = false;
  let visible1 = false;
  $: leo = false;
  $: meo = false;
  $: geo = false;
  $: heo = false;

  onMount(() => {
        ready = true;
        leo = true;
        meo = true;
        geo = true;
        heo = true;
    });


</script>

<div class="canvas-wrapper">
  <Canvas>
    <Scene startX={startX} heoY={heoY} zed={zed} leo={leo} meo={meo} geo={geo} heo={heo}/>
  </Canvas>
</div>

<div class="hero">
    <section class="">
    {#if ready}
        <div class="big-text">
            <div >
                <h1 in:fly="{{ y: 150, duration: 1600 }}">Earth's satellites</h1>
            </div>
        </div>
        <div class="hero-text" in:fly="{{ y: 150, duration: 1800, delay:500 }}">
            <span>
              Explore the different types of objects orbiting Earth.
            </span>
        </div>
    {/if}
    </section>
</div>
 
<div class="scrollysection">
  <div class="first-scroll-section"
    use:inview
    on:enter={(event) => {
      leo = false;
      meo= false
      geo = false
      heo = false
      startX = 200
      heoY = 15
      zed = 1
  }}>
    <p class="scrolly-p">
      The first artificial satellite to be launched into the Earth's orbit was the Soviet Union's Sputnik 1,
      on 4 October 1957. Since then, thousands of satellites have been launched into orbit around the Earth,
      and many more have been launched into orbit around other celestial bodies.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      visible1 = true
      startX = 300
      heoY = 15
      zed = 1
      leo = true;
      meo = false
      geo = false
      heo = false
  }}>
    <p class="scrolly-p">
      We visualized roughly 9000 objects in orbit around the Earth. Let's focus on the different orbits starting with 
      the
      <Annotation
        bind:visible={visible1}
        color="blue"
        type="highlight"
        multiline
        animate={true}
        iterations={2}>
        lower earth orbit (LEO).
      </Annotation>
      Most of the objects are in the range of 200km to 2000km above the earth's surface.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 700
      heoY = 15
      zed = 1
      visible = true
      leo = false
      meo = true
      geo = false
      heo = false
  }}>
    <span class="scrolly-span">
      In the middle earth orbit exist roughly
      <Annotation
        bind:visible={visible}
        color="red"
        type="highlight"
        multiline
        animate={true}
        iterations={2}>
        250 satellites.
      </Annotation>
       The objects are spread out from 2000km to 35000km above the surface.
    </span>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 900
      heoY = 1058
      zed = -1000
      meo = false
      leo = false
      geo = true
      heo = false
  }}>
    <p class="scrolly-p">
      In the geostationary orbit (GEO) are roughly
      <Annotation
        bind:visible={visible}
        color="green"
        type="highlight"
        multiline
        animate={true}
        iterations={2}>
        1000 satellites.
      </Annotation> 
       All of them are mostly stationary in a height of 36000km.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 950
      heoY = 1058
      zed = -3294
      meo = false
      leo = false
      geo = false
      heo = true
  }}>
    <p class="scrolly-p">
      In the high elliptical orbit (HEO) are circa
      <Annotation
        bind:visible={visible}
        color="yellow"
        type="highlight"
        multiline
        animate={true}
        iterations={2}>
        <span class="dark-text">200 objects.</span>
      </Annotation> Diffent types of elliptical orbits exist,
      for example the
      <Annotation
        bind:visible={visible}
        color="yellow"
        type="highlight"
        multiline
        animate={true}
        iterations={2}>
        <span class="dark-text">Molniya orbit</span>
      </Annotation>, named after the Molniya Soviet communication satellites.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 1000
      heoY = 500
      zed = 300
      meo = true
      leo = true
      geo = true
      heo = true
  }}>
    <p class="scrolly-p">
      All 9000 satellites in their respective orbits.
    </p>
  </div>
</div>

<Footer/>

<style lang="scss">

  .canvas-wrapper {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
  }

  :global(body) {
		overflow-x: hidden;
    background-color: black;
    font-family: 'Pangea', sans-serif;
	}

  .introsection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

.hero {
    height: 50%;
    font-family: 'Pangea', sans-serif;
    position: absolute;
    width: 100%;
    margin: auto;
    margin-bottom: 12rem;
    display: flex;
    place-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    z-index: 2;
    top: 0;
}

.hero h1 {
    font-weight: 200;
    width: 100%;
    margin-top: 0;
    font-size: 6rem;
    color: white;
    z-index:1;
}

.hero p {
    font-weight: 200;
    font-family: 'Pangea', sans-serif;
    font-size: 2rem;
    width: 60%;
    margin: 0 auto;
    color: white;
    @media only screen and (max-width: 768px)  {
        width: 90%;
        font-size: 1.5rem;
    }
}

.big-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero-text {
    width: 100%;
    font-size: 1.5em;
}

.first-scroll-section {
    background: rgba(32,41,49,.4);
    backdrop-filter: blur(15px);
    position: relative;
    font-size: 1.5em;
    font-family: 'Pangea', sans-serif;
    color: white;
    margin-top: 0vh;
    margin-bottom: 90vh;
    width: 13em;
    padding: 0.5em 0.6em;
    z-index: 10;
  }

  .scroll-section {
    background: rgba(32,41,49,.4);
    backdrop-filter: blur(15px);
    position: relative;
    font-family: 'Pangea', sans-serif;
    color: white;
    font-size: 1.5em;
    margin-top: 70vh;
    margin-bottom: 90vh;
    width: 13em;
    padding: 0.5em 0.6em;
    z-index: 10;
  }
  .dark-text {
    color: black;
  }

</style>