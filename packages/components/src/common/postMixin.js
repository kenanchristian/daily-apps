import { truncateTags } from '../truncate';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    menuOpened: {
      type: Boolean,
      default: false,
    },
    showMenu: {
      type: Boolean,
      default: true,
    },
    bookmarksMenuOpened: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      notifying: false,
      notification: '',
    };
  },

  methods: {
    notify(notification) {
      this.notification = notification;
      this.notifying = true;
      setTimeout(() => {
        this.notifying = false;
      }, 1000);
    },

    truncateTags(...args) {
      return truncateTags(this.post.tags, ...args);
    },
  },

  computed: {
    privateSource() {
      if (this.post && this.post.publication) {
        return this.post.publication.public === false;
      }
      return false;
    },
  },
};
