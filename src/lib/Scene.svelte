<script>
  import { Canvas, PerspectiveCamera,OrbitControls,DirectionalLight, useThrelte } from '@threlte/core';
  import { Environment } from '@threlte/extras';
  import {TextureLoader, SphereGeometry, MeshStandardMaterial,BackSide} from 'three'
  import Earth from './Earth.svelte'
  import GeoSatellites from './GeoSatellites.svelte'
  import LeoSatellites from './LeoSatellites.svelte'
  import MeoSatellites from './MeoSatellites.svelte';
  import { geo_orbit, leo_orbit, meo_orbit } from '../data/DataStore.js'
  import SatelliteModel from './SatelliteModel.svelte';
  import * as THREE from 'three';

  export let startX = 80.2;
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
    <OrbitControls on:change={callback}/>
</PerspectiveCamera>
<DirectionalLight position={{ x: 1, y: 1, z: 1 }} color={0xffffff} intensity={0.6} />

<Environment
        path = './cube_map/'
        files= {['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        isBackground={true}
      />
<!-- {#if $geo_orbit.length}
{#each $geo_orbit as _, i}
<GeoSatellites />
{/each}
{/if} -->

<!-- {#if $leo_orbit.length}
{#each $leo_orbit as _, i}
<LeoSatellites />
{/each}
{/if} -->

<!-- {#if $meo_orbit.length}
{#each $meo_orbit as _, i}
<MeoSatellites />
{/each}
{/if} -->

<style lang="scss">

</style>