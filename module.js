var fs= require('fs')


module.exports = function(dir, extension, callback){

    fs.readdir(dir,  function(err, list) {
        if(err) return callback(err);
 list = list.filter(el => el.endsWith('.' + extension))
 callback(null,list)

    })
}
