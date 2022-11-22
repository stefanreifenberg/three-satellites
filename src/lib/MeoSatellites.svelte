<script>
import { MeshInstance, useFrame } from '@threlte/core';
import {
	SphereGeometry,
	MeshBasicMaterial,
	InstancedMesh,
	Matrix4,
	Vector3,
} from 'three';
import { randInt, randFloat } from 'three/src/math/MathUtils';
import { meo_orbit } from '../data/DataStore.js';

let count = $meo_orbit.length;
let innerRadius = 250;
let outerRadius = 270;
let rotation = 1;

useFrame(
	() => {
	rotation += 0.0001;
	}
)  


const vec3OnSphere = (range) => {
const length = randInt(range.min, range.max)
return new Vector3(
	randFloat(-Math.PI, Math.PI),
	randFloat(-Math.PI, Math.PI),
	randFloat(-Math.PI, Math.PI)
).clampLength(length, length);
}

const geometry = new SphereGeometry(0.8);
const material = new MeshBasicMaterial({color: 'red'});

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

<MeshInstance mesh={instMesh} rotation={{y: rotation}} />
  
  