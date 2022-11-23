<script>
  import ThreeGlobe from 'three-globe';
  import { Object3DInstance, useFrame } from '@threlte/core';
  import {TextureLoader, Color, Mesh, SphereGeometry, MeshPhongMaterial, MeshBasicMaterial} from 'three';
  import Clouds from './Clouds.svelte';

  let rotation = 1;
  let speed
    // add rotation
  useFrame(
    () => {
      rotation += 0.0002
    }
  )

  let globe = new ThreeGlobe({ animateIn: false })
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .showAtmosphere(false);
      
    // custom globe material
    const globeMaterial = globe.globeMaterial();

    // set globeMaterial bumpScale to 10
    globeMaterial.bumpScale = 5;

    new TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new Color('grey');
      globeMaterial.shininess = 15;
    });

    
</script>

<Clouds />
<Object3DInstance object={globe} rotation={{y: rotation}}/>