new Ext.Application({
  name: 'Video Aggregator',
  
  launch: function() {
    
    var gallery = new Ext.Panel({
      layout:'vbox'
    })
    
    Ext.Ajax.request({
        url: 'https://gdata.youtube.com/feeds/api/videos?author=nonostanteme&v=2&alt=jsonc',
        params: {},
        success: function(transport) {
          var result = Ext.util.JSON.decode(transport.responseText);
          var video1 = result.data.items[0];
          var video2 = result.data.items[1];
          var video3 = result.data.items[2];
          gallery.add({
            html: '<h3>' + video1.title + '</h3>' + '<iframe src="http://www.youtube.com/embed/' + video1.id + '"\
                      width="260" height="120"></iframe>'
            });
          gallery.add({
            html: '<h3>' + video2.title + '</h3>' + '<iframe src="http://www.youtube.com/embed/' + video2.id + '"\
                      width="260" height="120"></iframe>'
            });
          gallery.add({
            html: '<h3>' + video3.title + '</h3>' + '<iframe src="http://www.youtube.com/embed/' + video3.id + '"\
                      width="260" height="120"></iframe>'
            });
            
          gallery.doLayout();
          },
        failure: function() {
          console.log('failure');
        }
      })
    
    this.viewport = new Ext.Panel({
      id: 'viewport',
      fullscreen: true,
      layout: 'card',
      items : [
        gallery
      ],
            
  
    });
  }
  
});
