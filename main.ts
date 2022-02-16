      controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player.isHittingTile(CollisionDirection.Bottom)) {
        player.vy = -170
    }
})
function replaceTile (tile: Image, image2: Image, kind: number) {
    for (let t of tiles.getTilesByType(tile)) {
        sprtie = sprites.create(image2, kind)
        tiles.placeOnTile(sprtie, t)

        //tiles.setTileAt(t, img `playerimagejump`)
    }
}
function firedamage (
     sprites,onOverlap = playersprite, fireimage);
     Life(-1); pause(100)
)

 
function startlevel (level: number) {
    tiles.setTilemap(tilemap`level1`)
    replaceTile(assets.tile`flag`, flagImage, 2)
    replaceTile(assets.tile`fire1`, fireimage, 3)
    player = sprites.create(playersprite, 1)
    player.ay = 400
    scene.cameraFollowSprite(player)
    controller.moveSprite(player, 120, 0)
    player.x = levels[level].startx * 16
    player.y = levels[level].starty * 16
}
let sprtie: Sprite = null
let fireimage: Image = null
let flagImage: Image = null
let playersprite: Image = null
let enemy = null
let player: Sprite = null
let playerspritejump : Image
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
fireimage = img`
    . . . . . . . . . . . 5 5 . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . 5 5 5 . . . . 5 5 5 5 . . . 
    . . 5 5 5 5 . . . 5 5 4 5 5 . . 
    . 5 5 5 4 5 . . 5 5 4 4 4 5 5 . 
    . 5 5 4 4 5 5 5 5 5 4 4 4 5 5 5 
    5 5 4 4 4 5 5 5 5 5 4 4 4 5 5 5 
    5 5 4 4 4 4 5 5 5 4 4 2 4 4 4 5 
    5 4 4 4 4 4 5 5 5 4 4 2 2 4 4 5 
    4 4 4 2 4 4 4 5 4 4 2 2 2 4 4 4 
    4 4 4 2 2 4 4 4 4 4 2 2 2 2 4 4 
    4 4 4 2 2 4 4 4 4 4 2 2 2 2 4 4 
    4 4 2 2 2 4 4 4 4 4 2 2 2 2 4 4 
    4 4 2 2 2 2 4 4 4 2 2 2 2 2 4 4 
    4 4 2 2 2 2 4 4 4 2 2 2 2 2 2 4 
    4 2 2 2 2 2 4 4 2 2 2 2 2 2 2 4 
    `
playerspritejump = assets.image`player-jump`
let enemyimage = assets.image`enemy1`
info.player1.setLife(3)
startlevel(0)
player
