<script>
  import ThreeGlobe from 'three-globe';
  import { Object3DInstance } from '@threlte/core';
  import {TextureLoader, Color} from 'three';

  const Globe = new ThreeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

    // custom globe material
    const globeMaterial = Globe.globeMaterial();

    // set globeMaterial bumpScale to 10
    globeMaterial.bumpScale = 0.5;

    new TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
      globeMaterial.specularMap = texture;
      globeMaterial.specular = new Color('grey');
      globeMaterial.shininess = 15;
    });
     console.log(globeMaterial)

</script>

<Object3DInstance object={Globe} scale={0.05} />

