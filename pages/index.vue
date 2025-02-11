<template>
  <ClientOnly>
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity
          position="0 0 0"
          scale="10 10 10"
          gltf-model=”src:url(./ents/idle.glb)” 
        ></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>

  </ClientOnly>
</template>

<script setup></script>
