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
  let visible = false;
  $: leo = false;
  $: meo = false;
  $: geo = false;
  $: heo = false;

  onMount(() => {
        ready = true;
        leo = false;
        meo = false;
        geo = false;
        heo = false;
    });


</script>

<div class="canvas-wrapper">
  <Canvas frameloop={"always"}>
    <Scene startX={startX} leo={leo} meo={meo} geo={geo} heo={heo}/>
  </Canvas>
</div>

<!-- 
<div class="hero">
    <section class="introsection">

    {#if ready}
        <div class="big-text">
            <div >
                <span></span>
                <h1 in:fly="{{ y: 150, duration: 1600 }}">Earth's satellites</h1>
            </div>
        </div>    

            <div class="hero-text" in:fly="{{ y: 150, duration: 1800, delay:500 }}">
                <span>The first artificial satellite to be launched into the Earth's orbit was the Soviet Union's Sputnik 1,
                  on 4 October 1957. Since then, thousands of satellites have been launched into orbit around the Earth,
                   and many more have been launched into orbit around other celestial bodies.
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
  }}>
    <p class="scrolly-p">
      Focus on the Satellite model
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 300
      leo = false;
      meo = false
      geo = false
      heo = false
  }}>
    <p class="scrolly-p">
      Text
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      console.log("enter")
      startX = 200
      leo = true
      meo= false
      geo = false
      heo = false
  }}>
    <p class="scrolly-p">
      In the lower earth orbit exist roughly 5000 satellites. Most of them are in the range of (500km) to 2000km.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 550
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
        color="lightgreen"
        type="highlight"
        multiline
        animate={true}
        iterations={3}>
        5000
      </Annotation>
      satellites. Most of them are in the range of (500km) to 2000km.
    </span>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 800
      meo = false
      leo = false
      geo = true
      heo = false
  }}>
    <h3>Section 5</h3>
    <hr>
    <p class="scrolly-p">
      In the geostationary orbit exist roughly 5000 satellites. Most of them are in the range of (500km) to 2000km.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 1200
      meo = false
      leo = false
      geo = false
      heo = true
  }}>
    <h3>Section 6</h3>
    <hr>
    <p class="scrolly-p">
      In the high earth orbit exist roughly 5000 satellites. Most of them are in the range of (500km) to 2000km.
    </p>
  </div>

  <div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 1300
      meo = true
      leo = true
      geo = true
      heo = true
  }}>
    <p class="scrolly-p">
      Text
    </p>
  </div>
</div>

<Footer/> -->

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
	}


.hero {
    height: 50%;
    position: absolute;
    margin-bottom: 12rem;
		display: flex;
		place-items: center;
		flex-direction: column;
		justify-content: center;
		text-align: center;
    z-index: 2;
    top:0;
}

.hero h1 {
    font-family: 'Amiri', serif;
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
  .scrolly-span {
    
  }

</style>