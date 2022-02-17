controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpcount <= 1) {
        player.vy = -150
        jumpcount += 1
    } else if (jumpcount == 2) {
        player.vy = -100
        jumpcount += 1
    }
    if (player.isHittingTile(CollisionDirection.Bottom)) {
        jumpcount = 0
    }
})
function replaceTile (tile: Image, image2: Image, kind: number) {
    // tiles.setTileAt(t, img `playerimagejump`)
    for (let t of tiles.getTilesByType(tile)) {
        sprtie = sprites.create(image2, kind)
        tiles.placeOnTile(sprtie, t)
    }
}
// animation.runImageAnimation(
// firesprite,
// assets.animation`fire`,
// 200,
// true
// )
function startlevel (level: number) {
    tiles.setTilemap(tilemap`level1`)
    replaceTile(assets.tile`flag`, flagImage, 2)
    replaceTile(assets.tile`fire1`, fireimage, 3)
    player = sprites.create(playersprite, 1)
    player.ay = 400
    scene.cameraFollowSprite(player)
    player.x = levels[level].startx * 16
    player.y = levels[level].starty * 16
    controller.moveSprite(player, 120, 0)
}
let sprtie: Sprite = null
let flagImage: Image = null
let playersprite: Image = null
let jumpcount = 0
let firesprite = null
let fireimage: Image = null
let doublejumpcounter = 0
let enemy = null
let player: Sprite = null
if (true) {
    function firedamage (sprite=player ,overlapsWith = fireimage) {
     info.player1.changeLifeBy(-1)
     pause (100)
}
}
scene.setBackgroundImage(assets.image`night backround`)
let playerspritejump : Image
jumpcount = 0
let levels = [{
    tilemap: tilemap`level1`,
    startx: 1,
    starty: 1
}, {
        tilemap: tilemap`level2`,
        startx: 5,
        starty: 3,
    }]
playersprite = assets.image`player`
flagImage = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f 2 2 2 2 . . . . 
    . . . . . . . f 2 2 2 2 2 2 . . 
    . . . . . . . f 2 2 2 2 2 2 2 . 
    . . . . . . . f 2 2 2 2 2 2 . . 
    . . . . . . . f 2 2 2 2 . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    `
fireimage = assets.image`fire frame 1`
playerspritejump = assets.image`player-jump`
let enemyimage = assets.image`enemy1`
info.player1.setLife(3)
if (info.life() == 0) {
    game.over(false, effects.dissolve)
    game.reset()
}
startlevel(0)
player
