window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'rock', 'assets/phaser.png' );
        //game.load.image( 'dude', 'assets/rocket.png' );
    }
    
    var bouncy;
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        game.physics.startSystem(Phaser.Physics.ARCADE);
        cursors = game.input.keyboard.createCursorKeys();
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'rock' );
        //knocker = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        
        //get moving
        bouncy.body.velocity.setTo(200, 200);
        // Make it bounce off of the world bounds.
        bouncy.body.collideWorldBounds = true;
        //  This sets the image bounce energy for the horizontal 
        //  and vertical vectors (as an x,y point). "1" is 100% energy return
        bouncy.body.bounce.setTo(1, 1);
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something cool.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        //bouncy.rotation = game.physics.arcade.angleToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
        //game.physics.arcade.collide(knocker, ball);
        /*if (game.input.activePointer.isDown)
        {
            game.physics.arcade.moveToPointer(bouncy, 300);
        }*/
        if (cursors.up.isDown)
    {
        bouncy.body.acceleration.y = -600;
    }
    else if (cursors.down.isDown)
    {
        bouncy.body.acceleration.y = 600;

    }
    else if (cursors.left.isDown)
    {
        bouncy.body.acceleration.x = -500;
    }
    else if (cursors.right.isDown)
    {
        bouncy.body.acceleration.x = 500;
    }
    else
    {
        bouncy.body.acceleration.setTo(0,0);
    }
    }
};
