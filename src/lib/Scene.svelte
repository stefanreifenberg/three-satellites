<script>
  import { PerspectiveCamera,OrbitControls,DirectionalLight, useThrelte } from '@threlte/core';
  import { Environment } from '@threlte/extras';
  import Earth from './Earth.svelte'
  import GeoSatellites from './GeoSatellites.svelte'
  import LeoSatellites from './LeoSatellites.svelte'
  import MeoSatellites from './MeoSatellites.svelte';
  import HeoSatellites from './HeoSatellites.svelte';
  import { geo_orbit, leo_orbit, meo_orbit } from '../data/DataStore.js'
  import SatelliteModel from './SatelliteModel.svelte';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  export let startX = 181;
  

  let startX_tweened = tweened(0, {
		duration: 2000,
        easing: cubicInOut
	});

  $: $startX_tweened = startX;

  console.log($startX_tweened)

  
  export let leo;
  export let meo;
  export let geo;
  export let heo;

  $: showLeo = leo;
  $: showMeo = meo;
  $: showGeo = geo;
  $: showHeo = heo;
  $: console.log("showHeo",showHeo);

  let startY = 122;
  let startZ = 1.9;

  $: initialCameraPosition = {x:startX, y:startY, z:startZ};

  // const { camera } = useThrelte()
  // const callback = () => {
  //   console.log($camera.position)
  // }

</script>

<SatelliteModel />
<Earth />

<PerspectiveCamera fov={60} position={{x: $startX_tweened, y: startY, z: startZ}} lookAt={{ x: 0, y: 0, z: 0 }} near={1} far={5000} >
  <!-- <OrbitControls /> -->
</PerspectiveCamera>

<DirectionalLight position={{ x: 1, y: 1, z: 1 }} color={0xffffff} intensity={0.5} />

<Environment
  path = './'
  files='hdr.png'
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


<style lang="scss">

</style>