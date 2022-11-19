<script>
  import { PerspectiveCamera,OrbitControls,DirectionalLight, useThrelte } from '@threlte/core';
  import { Environment } from '@threlte/extras';
  import Earth from './Earth.svelte'
  import GeoSatellites from './GeoSatellites.svelte'
  import LeoSatellites from './LeoSatellites.svelte'
  import MeoSatellites from './MeoSatellites.svelte';
  import { geo_orbit, leo_orbit, meo_orbit } from '../data/DataStore.js'
  import SatelliteModel from './SatelliteModel.svelte';

  export let startX = 80.2;
  export let leo;
  export let meo;
  export let geo;

  $: showLeo = leo;
  $: showMeo = meo;
  $: showGeo = geo;
  $: console.log("showGeo",showGeo);

  let startY = 20;
  let startZ = 200;

  $: initialCameraPosition = {x:startX, y:startY, z:startZ};

  const { camera } = useThrelte()
  const callback = () => {
    //console.log($camera.position)
  }

</script>
<SatelliteModel />
<Earth />

<PerspectiveCamera fov={60} position={initialCameraPosition} lookAt={{ x: 0, y: 0, z: 0 }} >
    <!-- <OrbitControls on:change={callback}/> -->
</PerspectiveCamera>
<DirectionalLight position={{ x: 1, y: 1, z: 1 }} color={0xffffff} intensity={0.6} />

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

<style lang="scss">

</style>