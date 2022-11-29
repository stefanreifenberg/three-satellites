<script>
  import { PerspectiveCamera, OrbitControls, DirectionalLight } from '@threlte/core';
  import { Environment } from '@threlte/extras';
  import Earth from './Earth.svelte'
  import GeoSatellites from './GeoSatellites.svelte'
  import LeoSatellites from './LeoSatellites.svelte'
  import MeoSatellites from './MeoSatellites.svelte';
  import HeoSatellites from './HeoSatellites.svelte';
  import SatelliteModel from './SatelliteModel.svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  export let startX = 162;

  let startX_tweened = tweened(0, {
		duration: 2000,
        easing: cubicInOut
	});

  let heoY_tweened = tweened(0, {
    duration: 2000,
        easing: cubicInOut
  });

  let zed_tweened = tweened(0, {
    duration: 2000,
        easing: cubicInOut
  });

  $: $startX_tweened = startX;
  $: $heoY_tweened = heoY;
  $: $zed_tweened = zed;
  
  export let leo;
  export let meo;
  export let geo;
  export let heo;
  export let heoY;
  export let zed;

  $: showLeo = leo;
  $: showMeo = meo;
  $: showGeo = geo;
  $: showHeo = heo;
</script>

<SatelliteModel />
<Earth />

<PerspectiveCamera fov={50} position={{x: $startX_tweened, y: $heoY_tweened, z: $zed_tweened}} lookAt={{ x: 0, y: 0, z: 0 }} near={1} far={5000} >
  <!-- <OrbitControls on:change={callback}/> -->
</PerspectiveCamera>

<DirectionalLight position={{ x: 1, y: 1, z: 1 }} color={0xffffff} intensity={0.5} />

<Environment
  path = './'
  files='hdr-min.png'
  isBackground={true}
/>

{#if showLeo}
  <LeoSatellites />
{/if}


{#if showMeo}
  <MeoSatellites  />
{/if}

{#if showGeo}
  <GeoSatellites/>     
{/if}

{#if showHeo}
  <HeoSatellites/>     
{/if}