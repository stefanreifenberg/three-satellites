<script>
  import { Canvas, PerspectiveCamera,OrbitControls,DirectionalLight,Mesh } from '@threlte/core';
  import { Environment } from '@threlte/extras';
  import {TextureLoader, SphereGeometry, MeshStandardMaterial,BackSide} from 'three'
  import Earth from './lib/Earth.svelte'
  import GeoSatellites from './lib/GeoSatellites.svelte'
  import LeoSatellites from './lib/LeoSatellites.svelte'
  import MeoSatellites from './lib/MeoSatellites.svelte';
  import { geo_orbit, leo_orbit, meo_orbit } from './data/DataStore.js'
  import SatelliteModel from './lib/SatelliteModel.svelte';

</script>

<div class="canvas-wrapper">
  <Canvas>
      <SatelliteModel />
      <!-- <Environment
        path = './cube_map/'
        files= {['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        isBackground={true}
      /> -->
      <Earth />

      <PerspectiveCamera fov={55} position={{ z: -20 }}>
        <OrbitControls />
      </PerspectiveCamera>
      <DirectionalLight position={{ x: 1, y: 1, z: 1 }} color={0xffffff} intensity={0.6} />

     <!-- {#if $geo_orbit.length}
      {#each $geo_orbit as _, i}
        <GeoSatellites />
        {/each}
      {/if} -->

       {#if $leo_orbit.length}
      {#each $leo_orbit as _, i}
        <LeoSatellites />
        {/each}
      {/if}

     <!--  {#if $meo_orbit.length}
      {#each $meo_orbit as _, i}
        <MeoSatellites />
        {/each}
      {/if} -->

    />
  </Canvas>
</div>

<style>
	.canvas-wrapper {
		width: 100vw;
		height: 100vh;
	}
</style>