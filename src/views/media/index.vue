<template>
  <div class="cv-media-page">
    <cv-header title="HTML Media" />
    <div class="video-player-container">
      <cv-video-player
        :url="sourceURL"
        />
    </div>
  </div>
</template>

<!--url="https://staging.coverr.co/s3/mp4/Down_by_the_River.mp4"-->
<!--url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"-->

<script>
  import '@/layouts/cv-header';
  import '@/components/cv-video-player';

  export default {
    name: 'HTMLMedia',
    path: 'html-media',
    data() {
      return {
        sourceURL: 'https://staging.coverr.co/s3/mp4/Down_by_the_River.mp4',
      };
    },
    mounted() {
    },
  };
</script>

<style lang="less" scoped>
  .cv-media-page {
    margin: 0;
    padding: 0;
    background-color: #fff;
    .video-player-container {
      margin-top: 44px;
      background-color: white;
      height: 200px;
    }
  }
</style>
