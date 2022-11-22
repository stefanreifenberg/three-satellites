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
import { heo_orbit } from '../data/DataStore.js';

let count = $heo_orbit.length;
//let count = 10000

let innerRadius = 800;
let outerRadius = 800;

let rotation = 0.0005;

useFrame(
	() => {
	rotation += 0.0002;
	}
)  


const vec3OnSphere = (range) => {
	const length = randInt(range.min, range.max)
	return new Vector3(
		randFloat(-Math.PI, Math.PI),
		randFloat(-0.2, 0.2),
		randFloat(-Math.PI, Math.PI)
	).clampLength(length, length);
}

const A = 1; // equatorial radius
const FE = 1 / 2; // flattening
const B = A * (1 - FE); // polar radius
const C = A * 0.7;
const radius = (A + B + C) / 3; // mean Earth radi

// create an ellipsoid function
const vec3OnEllipsoid = (range) => {
	const length = randInt(range.min, range.max)
	return new Vector3(
		randFloat(-Math.PI , Math.PI ) ,
		randFloat(-0.2 , 0.2 ) ,
		randFloat(-Math.PI, Math.PI) 
	).clampLength(length, length);
}

const geometry = new SphereGeometry(3);
const material = new MeshBasicMaterial({color: 'yellow'});

let instMesh;
function initMesh(c, r) {
instMesh = new InstancedMesh(geometry, material, c)
const matrix = new Matrix4();
	for (let i = 0; i < instMesh.count; i++) {
		matrix.setPosition(vec3OnEllipsoid(r));
		instMesh.setMatrixAt(i, matrix);
	}
}

$: range = {min: innerRadius, max: outerRadius}
$: initMesh(count, range);


</script>

<MeshInstance mesh={instMesh} rotation={{ z: 200}} scale={{x:A / radius, y:B / radius, z: C / radius}} position={{}}/>
  
  