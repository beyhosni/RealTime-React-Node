/**
 * Created by UpperSkills on 7/7/17.
 */
module.exports = {

  entry : "./appClient.js",
  output:{
      filename : "public/bundle.js"
  },
    module : {
        loaders : [

            {
                exclude : /(node_module|app.js)/,
                loader : 'babel'
            }
        ]
    }


};