<template>
  <transition name="cv-alert-fade">
    <div
      v-show="visible"
      class="cv-alert"
      >
      <div
        class="cv-alert-content"
        :class="typeClass"
        >
        <span
          v-if="message"
          class="cv-alert-title"
          >
          {{ message }}
        </span>
        <span
          class="cv-alert-close"
          @click="close()"
          />
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CvAlert',
    props: {
      message: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'info',
      },
    },
    data() {
      return {
        visible: true,
      };
    },
    computed: {
      typeClass() {
        return `cv-alert-${this.type}`;
      },
    },
    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      },
    },
  };
</script>

<style lang="less" scoped>
  @success-bg-color: #f9f0eb;
  @success-text-color: #67c23a;
  @info-bg-color: #f5f5f5;
  @info-text-color: #909399;
  @error-bg-color: #fef0f0;
  @error-text-color: #f56c6c;
  @warning-bg-color: #fdf6ec;
  @waring-text-color: #e6a23c;

  .cv-alert {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 .5em;
    border-radius: 4px;
    font-weight: 500;
    .cv-alert-icon {
      width: 1.25em;
      height: 1.25em;
      margin: auto 1em;
    }
    .cv-alert-info {
      background-color: @info-bg-color;
      color: @info-text-color;
    }
    .cv-alert-success {
      background-color: @success-bg-color;
      color: @success-text-color;
    }
    .cv-alert-error {
      background-color: @error-bg-color;
      color: @error-text-color;
    }
    .cv-alert-warning {
      background-color: @warning-bg-color;
      color: @waring-text-color;
    }
    .cv-alert-content {
      flex: 1 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: .5em 1em;
      .cv-alert-title {
        flex: 1 0 auto;
        text-align: left;
      }
      .cv-alert-close {
        width: .8em;
        height: .8em;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
        &:before,
        &:after {
          position: absolute;
          content: '';
          height: .8em;
          width: 1px;
          background-color: #c0c4cc;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .cv-alert-fade-enter, .cv-alert-fade-leave-to {
    transition: opacity .5s;
  }

  .cv-alert-fade-enter,
  .cv-alert-fade-leave-active {
    opacity: 0;
  }
</style>
