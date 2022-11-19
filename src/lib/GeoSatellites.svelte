<script>
    import {
		SphereGeometry,
		MeshBasicMaterial,
		InstancedMesh,
		Matrix4,
		Vector3,
	} from 'three';
	import { randInt, randFloat } from 'three/src/math/MathUtils';
	import { MeshInstance, useFrame } from '@threlte/core';
  import { geo_orbit } from '../data/DataStore.js'

let count = $geo_orbit.length;
let innerRadius = 390;
let outerRadius = 400;
let rotation = 0.0005;

  useFrame(
    () => {
      rotation += 0.0001;
    }
  )

  const vec3OnSphere = (range) => {
		const length = randInt(range.min, range.max)
		return new Vector3(
			randFloat(-Math.PI, Math.PI),
			randFloat(-0.1, 0.1),
			randFloat(-Math.PI, Math.PI)
		).clampLength(length, length);
	}
	
	const geometry = new SphereGeometry(0.8);
	const material = new MeshBasicMaterial({color: 'green'});
	
	let instMesh;
	function initMesh(c, r) {
		instMesh = new InstancedMesh(geometry, material, c)
		const matrix = new Matrix4();
		for (let i = 0; i < instMesh.count; i++) {
			matrix.setPosition(vec3OnSphere(r));
			instMesh.setMatrixAt(i, matrix);
		}
	}
	
	$: range = {min: innerRadius, max: outerRadius}
	$: initMesh(count, range);

   

  </script>

<MeshInstance mesh={instMesh} rotation={{y: rotation}}/>
  
