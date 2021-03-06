ContactManager.module("Layouts", function(Layouts, ContactManager, Backbone, Marionette, $, _){

  Layouts.MainLayout = Backbone.Marionette.LayoutView.extend({
    el: "body",
    template: JST['layout/main_layout'],

    regions: {
      listRegion: '#list-region',
      groupListRegion: '#group-list-region',
      messageRegion: '#message-region',
      mainRegion: '#main-region'
    },

    events: {
      'click #add-contact': 'addContact',
      'click #add-group': 'addGroup',
      'keypress #search': 'searchContacts',
    },

    addContact: function() {
      console.log('addContact');
      ContactManager.ContactsApp.New.Controller.newContact();
      // var view = new ContactManager.Views.ContactsNew();
      // layout.mainRegion.show(view);
    },

    addGroup: function() {
      console.log('addGroup');
      ContactManager.GroupsApp.New.Controller.newGroup();
      // var view = new ContactManager.Views.ContactsNew();
      // layout.mainRegion.show(view);
    },

    searchContacts: function(e){
      console.log('searchContacts');
      var keyword = $('#search').val();
      if (keyword) {
        if ( e.which === 13 || e.type === 'click') {
          ContactManager.ContactsApp.Search.Controller.searchContacts(keyword);
          // if ( this.$('#group-list').val() === 'All contacts'){
          //   this.searchAll(keyword);
          // } else {
          //   this.searchGroup(keyword);
          // }
        }
      }
    }


  });

});


