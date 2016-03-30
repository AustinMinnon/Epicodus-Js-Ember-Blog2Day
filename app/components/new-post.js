import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    postSave() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('postSave', params);
    }
  }
});
