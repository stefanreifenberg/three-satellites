<script>
    import { Mesh } from '@threlte/core'
    import { BoxGeometry, MeshBasicMaterial } from 'three'

    // create orbit position around earth
    const outer_radius = 20
    const inner_radius = 4
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    // create a radius for the outer orbit
    const outer_x = outer_radius * Math.sin(phi) * Math.cos(theta)
    const outer_z = outer_radius * Math.cos(phi)
    // create a radius for the inner orbit
    const inner_x = inner_radius * Math.sin(phi) * Math.cos(theta)
    const inner_z = inner_radius * Math.cos(phi)

    const x = 1-(inner_x + outer_x)
    // y is the height of the orbit from the min_radius to max_radius
    const y = 0
    // z is the radius of the orbit from the min_radius to max_radius
    const z = 1-(inner_z + outer_z)

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
    geometry={new BoxGeometry(1, 1, 1)}
    material={new MeshBasicMaterial({ wireframe: false })}
    scale={0.05}
  />