<script>
    // create a transparent sphere to represent the earth
    import { Mesh, useFrame } from '@threlte/core'
    import { SphereGeometry, MeshBasicMaterial, TextureLoader, MeshPhongMaterial } from 'three'

    let rotation = 0

    useFrame(
        () => {
            rotation += 0.0004;
        }
    )


    // load the cloud texture and add it to the material
    const texture = new TextureLoader().load('clouds.png')
    const material = new MeshPhongMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8
    })

</script>

<Mesh
    position={{ x:0, y: 0, z:0 }}
    geometry={new SphereGeometry(102, 32, 32)}
    rotation= {{ x: 0, y: rotation, z: 0 }}
    material={material}
    scale={1}
/>