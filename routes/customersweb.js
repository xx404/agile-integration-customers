
/*
 * GET users listing.
 */

exports.listall = function(req, res){

  req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM customerdemo',function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('customers_web_all',{page_title:"Customers",data:rows});


         });

    });

};



exports.details = function(req, res){

  req.getConnection(function(err,connection){

        var id = req.params.id;

        var query = connection.query("SELECT * FROM customerdemo WHERE id = ?",[id],function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.render('customers_web_all',{page_title:"Customers",data:rows});


         });

    });

};
