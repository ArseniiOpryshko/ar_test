<template>
  <ClientOnly>
    <a-scene
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
      renderer="antialias: true; alpha: true"
    >
      <a-camera gps-new-camera="gpsMinDistance: 5"></a-camera>
      <a-entity
        material="color: red"
        geometry="primitive: box"
        gps-new-entity-place="latitude: 48.723969; longitude: 21.2582574"
        scale="10 10 10"
      ></a-entity>
    </a-scene>
  </ClientOnly>
</template>

<script setup></script>
