(function(window) {
  'use strict';
  var plugins = namespace('plugins');
  plugins.Laser = function(cockpit) {
    var self = this;
    self.cockpit = cockpit;

  };

  plugins.Laser.prototype.getTelemetryDefintions = function getTelemetryDefintions() {
    return([
      {name: 'claser', description: 'Scaling Laser power 0 to 255'}
    ]);
  }

  //This pattern will hook events in the cockpit and pull them all back
  //so that the reference to this instance is available for further processing
  plugins.Laser.prototype.listen = function listen() {
    var self = this;

    /*
    self.cockpit.extensionPoints.inputController.register(
      [
        {
          name: 'plugin.laser.Toggle',
          description: 'Toggles the lasers on or off.',
          defaults: { keyboard: 'l' },
          down: function () {
            cockpit.rov.emit('plugin.laser.toggle');
          }
        }
      ]);
    */
    /* Forward calls on the COCKPIT emitter to the ROV  */
    self.cockpit.on('plugin.laser.toggle',function(){
        alert("boom");
        cockpit.rov.emit('plugin.laser.toggle');
    });

    self.cockpit.rov.on('plugin.laser.state', function(data){
      cockpit.emit('plugin.laser.state',data);
    });

/*
    if (self.cockpit.extensionPoints.headsUpMenu) {
      self.cockpit.extensionPoints.headsUpMenu.register({
        label: 'Toggle lasers',
        callback: function () {
          cockpit.rov.emit('plugin.laser.toggle');
        }
      });
    }
*/
  };

  window.Cockpit.plugins.push(plugins.Laser);

})(window);