import {
    autoType,
    csv,
    groups,
    mean,
    sum,
  } from 'd3';

  import { readable } from 'svelte/store';

  export const geo_orbit = readable([], (set) => {
    Promise.all([csv("/data/geo_orbit.csv", autoType)]).then(
      (d) => {
        set(d[0]);
      }
    );
  });


  export const leo_orbit = readable([], (set) => {
    Promise.all([csv("/data/leo_orbit.csv", autoType)]).then(
      (d) => {
        set(d[0]);
      }
    );
  });

  export const meo_orbit = readable([], (set) => {
    Promise.all([csv("/data/meo_orbit.csv", autoType)]).then(
      (d) => {
        set(d[0]);
      }
    );
  });

  export const heo_orbit = readable([], (set) => {
    Promise.all([csv("/data/heo_orbit.csv", autoType)]).then(
      (d) => {
        set(d[0]);
      }
    );
  });