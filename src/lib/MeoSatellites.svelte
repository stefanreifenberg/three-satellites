<script>
    import { Mesh } from '@threlte/core'
    import { BoxGeometry, MeshBasicMaterial } from 'three'

    // create orbit position around earth
    const radius = 200
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    const orbit_position = {
        x: x,
        y: y,
        z: z
    }

    const onPointerMove = (e) => {
        console.log(e.detail)
    }

  </script>

<Mesh
    interactive on:pointermove={onPointerMove}
    position={orbit_position}
    geometry={new BoxGeometry(20, 20, 20)}
    material={new MeshBasicMaterial({ color: "green", wireframe: false })}
    scale={0.05}
  />
  
  