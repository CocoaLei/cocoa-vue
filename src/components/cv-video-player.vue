<template>
  <div class="cv-video-player">
    <video
      id="cvPlayer"
      class="video-player"
      :src="url"
      :height="playerHeight"
      preload="auto"
      controls
      />
    <!--You can set custom video controls after remove attribute controls from video tag-->
  </div>
</template>

<script>
  import Vue from 'vue';

  const _video_play_states =  Object.freeze({
    PAUSE: 1,
    PLAYING: 2
  });

  export default Vue.component('cv-video-player', {
    props: {
      url: {
        type: String,
        default: undefined,
      },
    },
    data() {
      return {
        videoPS: _video_play_states.PAUSE,
        playerHeight: window.innerWidth * ( 9 / 16),
      };
    },
    computed: {
    },
    mounted() {
      const videoElem = document.querySelector('video');
      if (videoElem) {
        // error handler
        // Media Events : https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
        videoElem.onerror = () => {
          console.log(videoElem.error);
        };
        videoElem.addEventListener('canplay', () => console.log('video can play'), true);
        //
        const stateObserver = new MutationObserver((mutations) => {
          console.log(mutations);
        });
        const mutationConfig = {
          // mutations to target's attributes are to be observed
          attributes: true,
          // if attributes is set to true and target's attribute value before the mutation needs to be recorded
          attributeOldValue: true,
          // additions and removals of the target node's child elements (including text nodes) are to be observed
          childList: true,
          //  mutations to target's data are to be observed
          characterData: true,
          // if characterData is set to true and target's data before the mutation needs to be recorded
          characterDataOldValue: true,
          attributeFilter: ['src']
        };
        stateObserver.observe(videoElem, mutationConfig)
      }
      //
      window.addEventListener('orientationchange', () => {
        const orientation = (/portrait/i).test(window.screen.orientation.type || '') ? 'portrait' : 'landscape';
        console.log(orientation, window.screen.width, window.screen.height);
        if (orientation === 'landscape') this.playerHeight = window.screen.height - 44;
        if (orientation === 'portrait') this.playerHeight = window.screen.width * ( 9 / 16);
        //
        const videoElem = document.querySelector('video');
        if (videoElem) {
          videoElem.pause();
          setTimeout(() => {
            videoElem.play();
          }, 1000);
        }
      });
    },
    methods: {
      videoCannotPlay() {
        console.log('video can not play');
      },
    },
  });
</script>

<style lang="less" scoped>
  .cv-video-player {
    background-color: transparent;

    .video-player {
      width: 100%;
      display: block;
    }
  }
</style>
