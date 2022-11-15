<script>
  import { Canvas } from '@threlte/core';
  import Scene from './lib/Scene.svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { inview } from "svelte-inview";

  let ready = false;
  let startX

  onMount(() => {
        ready = true;
    });
</script>
<!-- 

<div class="hero">
    <section class="introsection">

    {#if ready}
        <div class="big-text">
            <div >
                <p>Weltraumschrott</p>
                <h1 in:fly="{{ y: 150, duration: 1600 }}">Unser Müll im All</h1>
            </div>
        </div>    

            <div class="hero-text" in:fly="{{ y: 150, duration: 1800, delay:500 }}">
                <p>Kaputte Satelliten und Raketen, Trümmer aus Kollisionen und Angriffen:
                   Eine Wolke aus Schrott kreist um die Erde. Eine Gefahr für die Raumfahrt – und unsere Zivilisation
                </p>
            </div>
        
    {/if}
    </section>
</div>
<div class="scrollysection">
  <div class="first-scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 200
  }}>
    <p>
      The west portal with its lavish furnishings.</p>
  </div>
</div>
<div class="scroll-section"
    use:inview
    on:enter={(event) => {
      startX = 300
  }}>
    <h3>Ecclesia</h3>
    <hr>
    <p>
      Personifying the "church". Often sculpted as a large figure on the side of a church portal.
      Usually young, attractive and generally adorned with a crown, chalice and cross-topped staff,
       looking confidently forward.
    </p>
  </div> -->
<div class="canvas-wrapper">
  <Canvas>
    <Scene startX={startX} />
  </Canvas>
</div>

<style lang="scss">

	// .canvas-wrapper {
	// 	width: 100vw;
	// 	height: 100vh;
  //   position: sticky;
  //   flex: 1 1 60%;
  //   top: 0;
	// }

  .canvas-wrapper {
    position: relative;
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
}

 // .hero::after {
//     content: "";
//     background: url("/images/header-image_comp.jpeg");
//     background-size: cover;
//     background-position: center;
//     opacity: 0.5;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     position: absolute;
//     z-index: -1;
// }


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
    margin-bottom: 100vh;
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
    margin-bottom: 100vh;
    width: 13em;
    padding: 0.5em 0.6em;
    z-index: 10;
  }

</style>