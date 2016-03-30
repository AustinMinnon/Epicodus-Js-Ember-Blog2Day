import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
        if(confirm('Are you sure?')) {
          this.sendAction('destroyPost', post);
        }
      }
    }
});
