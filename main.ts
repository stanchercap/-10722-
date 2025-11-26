namespace SpriteKind {
    export const rp = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
    export const enemy1 = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const conver = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile21`, function (sprite, location) {
    if (controller.B.isPressed()) {
    	
    } else {
        l_inst += 1
        if (controller.left.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right))
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left))
        }
        if (controller.down.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top))
        }
        if (l_inst == 1) {
            rp2.sayText("용암에서는 F학점이 새겨질거야!", 2000, true)
            timer.after(2000, function () {
                rp2.sayText("B를 통해 F학점을 흘려내자!", 2000, true)
            })
        }
        statusbar.value = statusbar.value - 10
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.rp, sprites.castle.tileGrass2, function (sprite, location) {
    rp2.ay = 0
    controller.moveSprite(rp2, 135, 135)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`transparency16`, function (sprite, location) {
    rp2.ay = 500
    controller.moveSprite(rp2, 200, 0)
    if (tiles.locationOfSprite(rp2).row >= 95) {
        game.setGameOverMessage(false, "Missing Dream..")
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.rp, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(3, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (index == 1 && rp2.isHittingTile(CollisionDirection.Bottom)) {
        rp2.vy += -350
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight2, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile56`, function (sprite, location) {
    rp2.vy += -700
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile68`, function (sprite, location) {
    inst += 1
    if (inst == 1) {
        rp2.sayText("여정의 끝이 이 위에도 있어..", 2000, false)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (index == 1 == rp2.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        up += 1
        projectile22 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 5 5 b . . . . . . 
            . . . b b b 5 5 1 1 b b b . . . 
            . . . b 5 5 5 5 1 1 5 5 b . . . 
            . . . . b d 5 5 5 5 d b . . . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . c 5 d d d d 5 c . . . . 
            . . . . c 5 d c c d 5 c . . . . 
            . . . . c c c . . c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, rp2, 0, -175)
        projectile22.setKind(SpriteKind.Projectile)
        projectile22.setFlag(SpriteFlag.DestroyOnWall, true)
        projectile22.changeScale(0, ScaleAnchor.Middle)
        rp2.setImage(img`
            . . . . f f f f f f . . . . . . . 
            . . f f e e e e f 2 f . . . . . . 
            . f f e e e e f 2 2 2 f . . . . . 
            . f e e e f f e e e e f . . . c c 
            . f f f f e e 2 2 2 2 e f . c d c 
            . f e 2 2 2 f f f f e 2 f c d d c 
            f f f f f f f e e e f f c d d c . 
            f f e 4 4 e b f 4 4 e c d d c . . 
            f e e 4 d 4 1 f d d e c d c . . . 
            . f e e e 4 d d d e d c c c . . . 
            . . f f e e 4 4 e 4 d d e . . . . 
            . . . f 2 2 2 2 4 4 e e . . . . . 
            . . . f 2 2 2 2 e 2 f . . . . . . 
            . . . f 4 4 4 4 5 5 f . . . . . . 
            . . . . f f f f f f . . . . . . . 
            . . . . . f f f . . . . . . . . . 
            `)
        animation.runImageAnimation(
        projectile22,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 5 5 b . . . . . . 
            . . . b b b 5 5 1 1 b b b . . . 
            . . . b 5 5 5 5 1 1 5 5 b . . . 
            . . . . b d 5 5 5 5 d b . . . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . c 5 d d d d 5 c . . . . 
            . . . . c 5 d c c d 5 c . . . . 
            . . . . c c c . . c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . b . . . . . . . 
            . . . . . . b d d c . . . . . . 
            . . . . . b 1 1 d d c . . . . . 
            . . . . b 1 1 1 d 1 1 b . . . . 
            . . . . c 1 1 1 d 1 1 1 c c . . 
            b b b c d 1 1 c c 1 1 d 1 1 b b 
            b d 1 1 d d b c c c b d 1 1 1 b 
            b 1 1 1 1 c c . . c d d 1 1 1 b 
            b 1 1 1 1 c c . . b 1 1 d d c . 
            . b 1 1 d d b c b b 1 1 b c c . 
            . . c b d d b 1 1 b b d b c . . 
            . . c 1 1 d d 1 1 1 d d d b . . 
            . b d 1 1 1 d 1 1 d 1 1 1 d b . 
            . b d 1 1 1 d b b d 1 1 1 1 b . 
            . . b 1 1 d c c b b d 1 1 d b . 
            . . b b b b . . . b b b b b b . 
            `,img`
            . . . . . b b . . . . . . . . . 
            . . . . b 5 b b . . . . . . . . 
            . . b b 5 5 5 b b b . . . . . . 
            . b 5 5 5 5 5 5 5 b . . b . . . 
            . . b b 5 5 5 b b . . b 5 b . . 
            . . b 5 5 b 5 5 b . b 5 5 5 b . 
            . . b 5 b b b 5 b . . b 5 b . . 
            . . b b . . b b b . . b b b . . 
            . b 5 b b . . . . . b 5 b . . . 
            b 5 5 5 b b . . . b b 5 b b . . 
            . b 5 b b 5 b . b 5 5 5 5 5 b . 
            . b b b 5 5 5 b b b 5 5 5 b b . 
            . . b 5 5 5 5 5 b b 5 b 5 b . . 
            . . . b 5 5 5 b . . b b b . . . 
            . . . b 5 b 5 b . . . . . . . . 
            . . . b b b b b . . . . . . . . 
            `],
        500,
        true
        )
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    } else {
        up1 += 1
        animation.runImageAnimation(
        rp2,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        true
        )
    }
    if (up == 1 && rp2.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
        rp2.sayText("하늘에서는 왼쪽과 오른쪽 방향키로 다니며", 2000, true)
        timer.after(2000, function () {
            rp2.sayText("A 버튼으로 점프가 가능해!", 2000, true)
        })
        timer.after(4000, function () {
            rp2.sayText("윗 방향키와 B 버튼으로는", 2000, true)
        })
        timer.after(6000, function () {
            rp2.sayText("공격이 가능해!", 1000, true)
        })
    }
    if (up1 == 1 && !(rp2.tileKindAt(TileDirection.Center, assets.tile`transparency16`))) {
        rp2.sayText("잔디에서는 방향키로 걷고,", 2000, true)
        timer.after(2000, function () {
            rp2.sayText("B 버튼으로 위험한 장애물을", 1000, true)
        })
        timer.after(3000, function () {
            rp2.sayText("무시하고 지나갈 수 있어!", 2000, true)
        })
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile19`, function (sprite, location) {
    if (controller.B.isPressed()) {
    	
    } else {
        l_inst += 1
        if (controller.left.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right))
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left))
        }
        if (controller.down.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top))
        }
        if (l_inst == 1) {
            rp2.sayText("용암에서는 F학점이 새겨질거야!", 2000, true)
            timer.after(2000, function () {
                rp2.sayText("B를 통해 F학점을 흘려내자!", 2000, true)
            })
        }
        statusbar.value = statusbar.value - 10
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.enemy1, sprites.dungeon.floorLight2, function (sprite, location) {
    sprites.destroy(sprite)
})
controller.combos.attachCombo("dd", function () {
    info.setScore(30)
    if (index == 1 && rp2.tileKindAt(TileDirection.Bottom, assets.tile`myTile60`)) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), false)
        using += 1
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile18`, function (sprite, location) {
    if (controller.B.isPressed()) {
    	
    } else {
        l_inst += 1
        if (controller.left.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right))
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left))
        }
        if (controller.down.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top))
        }
        if (l_inst == 1) {
            rp2.sayText("용암에서는 F학점이 새겨질거야!", 2000, true)
            timer.after(2000, function () {
                rp2.sayText("B를 통해 F학점을 흘려내자!", 2000, true)
            })
        }
        statusbar.value = statusbar.value - 10
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile61`, function (sprite, location) {
    iljin += 1
    if (rp2.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`) && rp2.tileKindAt(TileDirection.Top, assets.tile`myTile61`)) {
        rp2.vy += 350
    }
    if (controller.left.isPressed()) {
        tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right))
    }
    if (controller.right.isPressed()) {
        tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left))
    }
    if (rp2.tileKindAt(TileDirection.Top, assets.tile`transparency16`) && rp2.tileKindAt(TileDirection.Bottom, assets.tile`myTile61`)) {
        rp2.vy += -350
    }
    if (iljin == 1) {
        rp2.sayText("이건 우리의 체력을 빠르게 소모시킬 수 있어!", 2000, true)
    }
    statusbar.value = statusbar.value - 3
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.floorLight2, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.rp, SpriteKind.enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(3, 200)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile20`, function (sprite, location) {
    if (controller.B.isPressed()) {
    	
    } else {
        l_inst += 1
        if (controller.left.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right))
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left))
        }
        if (controller.down.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top))
        }
        if (l_inst == 1) {
            rp2.sayText("용암에서는 F학점이 새겨질거야!", 2000, true)
            timer.after(2000, function () {
                rp2.sayText("B를 통해 F학점을 흘려내자!", 2000, true)
            })
        }
        statusbar.value = statusbar.value - 10
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.rp, SpriteKind.enemy1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(3, 200)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (index == 1 == rp2.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        if (using > 0) {
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
            tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), assets.tile`myTile60`)
            tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), true)
            using += -1
        }
    } else {
        if (!(rp2.tileKindAt(TileDirection.Center, assets.tile`transparency16`))) {
            animation.runImageAnimation(
            rp2,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            500,
            true
            )
        }
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile5`, function (sprite, location) {
    if (controller.B.isPressed()) {
    	
    } else {
        l_inst += 1
        if (controller.left.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right))
        }
        if (controller.right.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left))
        }
        if (controller.down.isPressed()) {
            tiles.placeOnTile(rp2, tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top))
        }
        if (l_inst == 1) {
            rp2.sayText("용암에서는 F학점이 새겨질거야!", 2000, true)
            timer.after(2000, function () {
                rp2.sayText("B를 통해 F학점을 흘려내자!", 2000, true)
            })
        }
        statusbar.value = statusbar.value - 10
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile65`, function (sprite, location) {
    info.changeScoreBy(10)
    rp2.sayText("랜덤 학점 획득! + 15", 2000, true)
    if (rp2.tileKindAt(TileDirection.Left, assets.tile`myTile65`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left), assets.tile`transparency16`)
    }
    if (rp2.tileKindAt(TileDirection.Right, assets.tile`myTile65`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right), assets.tile`transparency16`)
    }
    if (rp2.tileKindAt(TileDirection.Top, assets.tile`myTile65`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top), assets.tile`transparency16`)
    }
    if (rp2.tileKindAt(TileDirection.Bottom, assets.tile`myTile65`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), assets.tile`transparency16`)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`수준3`)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111fff111
        1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff111111111111111fff111
        1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
        1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
        1111fff111ffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111ffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fffffffffffffffffffff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff111111111111111111ffffffffffffffffffffff11111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
        fff1ffffffffffffffffffffffffffffffffff1111111111111f11111111f11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
        fff1ffffffffffff11111111111111111111111111111111111f11111111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111
        fff1ffffffffffff11111111111111111111111111111111111f11111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f111111111111111111111111f1111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111ffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111111111111111111fffff111111111111111111111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffff1111111111fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
        111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffff11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffff1111111111111111111111111111fffff1111111f11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111ffffffffffffffffffffffffff1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111111f111111111111111fff1111111111111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111111f111111111111ffffffffffffffff111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111111f111111111111f11fff111111111f111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffffffffffffffffffffffffffffffffffffff111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffffffffffff11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
        111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff111ffffffffffffffffffffffffffffffffffffffffff111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff1111111111fff11111111111111111111111111111111111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff11111111111111111111111111111111111111111111
        111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffff11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11ffffffffffffffff11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
        11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    sprites.destroy(rp2)
    index += -1
    scene.centerCameraAt(60, 80)
    timer.after(5000, function () {
        scene.centerCameraAt(60, 80)
        game.showLongText("난 고교학점제에 쓰러져버린다..", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            scene.centerCameraAt(60, 80)
            game.setGameOverMessage(false, "Missing Dream..")
            game.gameOver(false)
        }
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (index == 1) {
        animation.runImageAnimation(
        rp2,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile60`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(tiles.locationOfSprite(rp2).column, tiles.locationOfSprite(rp2).row), assets.tile`transparency16`)
    rp2.sayText("특수 학점 획득!", 1000, true)
    timer.after(1000, function () {
        rp2.sayText("특수 학점은 블럭으로 사용 가능하고,", 3500, true)
    })
    timer.after(3500, function () {
        rp2.sayText("다시 철거도 가능해!", 2000, true)
    })
    using = 1
})
scene.onOverlapTile(SpriteKind.projectile2, sprites.dungeon.floorLight2, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.enemy1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (index == 1) {
        animation.runImageAnimation(
        rp2,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile28`, function (sprite, location) {
    rp2.ay = 500
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile74`, function (sprite, location) {
    rp2.ay = 0
    controller.moveSprite(rp2, 135, 135)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile`, function (sprite, location) {
    rp2.ay = 0
    controller.moveSprite(rp2, 135, 135)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile67`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`수준3`)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
        1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111fff111
        1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff111111111111111fff111
        1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
        1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
        1111fff111ffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111ffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
        1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fffffffffffffffffffff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff111111111111111111ffffffffffffffffffffff11111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
        fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
        fff1ffffffffffffffffffffffffffffffffff1111111111111f11111111f11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
        fff1ffffffffffff11111111111111111111111111111111111f11111111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111
        fff1ffffffffffff11111111111111111111111111111111111f11111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f111111111111111111111111f1111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111ffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111111111111111111fffff111111111111111111111f1111111111111111fff1111fff111111111111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffff1111111111fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
        111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffff11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffff1111111111111111111111111111fffff1111111f11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111ffffffffffffffffffffffffff1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
        111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111111f111111111111111fff1111111111111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111111f111111111111ffffffffffffffff111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111111f111111111111f11fff111111111f111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffffffffffffffffffffffffffffffffffffff111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffffffffffff11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
        111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
        111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff111ffffffffffffffffffffffffffffffffffffffffff111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff1111111111fff11111111111111111111111111111111111111111111
        111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff11111111111111111111111111111111111111111111
        111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffff11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11ffffffffffffffff11111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
        11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    sprites.destroy(rp2)
    index += -1
    scene.centerCameraAt(60, 80)
    timer.after(1000, function () {
        scene.centerCameraAt(60, 80)
        game.showLongText("난 모든 걸 포기하고 처음으로 돌아가려 한다..", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            scene.centerCameraAt(60, 80)
            game.setGameOverMessage(false, "ERROR 404 Dream..")
            game.gameOver(false)
        }
    })
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile50`, function (sprite, location) {
    rp2.sayText(game.ask("1%의 확률로 정시?"))
    if (controller.A.isPressed()) {
        if (shil.value != 0) {
            if (Math.percentChance(1)) {
                music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                tiles.setCurrentTilemap(tilemap`수준3`)
                scene.setBackgroundImage(img`
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff11
                    11111111111111111111111111111111111111111111111111ffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff11
                    111111111111111111111111111111111111111111111111fffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff11
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111fff11
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111555555511111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff111111111111111111111111155555555511111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff11111111111111111155555555555511111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111555555555555555551111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11555555555555555555555111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555115555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555511115555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff555555555555fffffff115555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff55555555555ffffffffffff5555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffff5555555511111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffff5555555551111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffff5555555551111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffff5555555551111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffff55555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555551111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff155555555555111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff155555555555111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff1555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff11555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff11555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff11555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffff555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffff555555555511111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffff5555555555ffff1111111111111111111111111111111
                    1111111111111111111111111111111ffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffff11fffffffffffff55555555ffffffff1111111111111111111111111111
                    111111111111111111111111111ffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffff11fffffffffffffffff55555fffffffffffff111111111111111111111111
                    1111111111111111111111111fffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff111111111111111111111
                    1111111111111111111111111fffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffff
                    1111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff
                    111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffff
                    1111111111111111111111fff11fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffff
                    1111111111111111111fffffff1111fffffffffffffffffffffffffffffffffffffffffffffffff1ffffff11fffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffff
                    111111111111111fffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffff
                    111111111111ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffff
                    1111111111fffffffff1111fffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffff111
                    11111111ffffffffff11111fffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffff11111
                    1111ffffffffffff1111111fffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff11111111
                    fffffffffffff111111111fffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffff111111111f
                    fffffffffff1111111111ffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffff111111111111fff
                    fffffffff111111111ffffffffff111fffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffffff11111111111ffffff
                    fffffff11111111fffffffffffff111ffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffffffff111111111111ffffffff
                    ffff111111111fffffffffffffff111fffffffffffffffffffffffffffffffffffff111111111ffffffffffffff1111111111111111111ffffffffffffffffffffffffff11111111111fffffffffffff
                    ffff1111111ffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff111111fffff111111111111111111fffffffffffffffffffffffffffffff1111111111fffffffffffffff
                    ffff11111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffff
                    fffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffff1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111ffffffffffffffffffffff11111111111111111111111111ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                sprites.destroy(rp2)
                sprites.destroy(statusbar)
                sprites.destroy(shil)
                index += -1
                scene.centerCameraAt(60, 80)
                timer.after(1500, function () {
                    game.splash("운이 좋게도 SKY에 합격했다")
                    if (controller.A.isPressed()) {
                        scene.centerCameraAt(60, 80)
                        game.showLongText("하지만 노력이 없어서 힘들다..", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            scene.centerCameraAt(60, 80)
                            game.setGameOverMessage(true, "Broken Dream")
                            game.gameOver(true)
                        }
                    }
                })
            } else {
                music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                tiles.setCurrentTilemap(tilemap`수준3`)
                scene.setBackgroundImage(img`
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
                    1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
                    1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
                    1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111fff111
                    1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff111111111111111fff111
                    1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
                    1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
                    1111fff111ffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111ffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fffffffffffffffffffff111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff111111111111111111ffffffffffffffffffffff11111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
                    fff1ffffffffffffffffffffffffffffffffff1111111111111f11111111f11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
                    fff1ffffffffffff11111111111111111111111111111111111f11111111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111
                    fff1ffffffffffff11111111111111111111111111111111111f11111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f111111111111111111111111f1111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111ffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111111111111111111fffff111111111111111111111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffff1111111111fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffff11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffff1111111111111111111111111111fffff1111111f11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111ffffffffffffffffffffffffff1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111111f111111111111111fff1111111111111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111111f111111111111ffffffffffffffff111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111111f111111111111f11fff111111111f111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffffffffffffffffffffffffffffffffffffff111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffffffffffff11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
                    111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff111ffffffffffffffffffffffffffffffffffffffffff111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff1111111111fff11111111111111111111111111111111111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff11111111111111111111111111111111111111111111
                    111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11ffffffffffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
                    11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    `)
                sprites.destroy(rp2)
                sprites.destroy(statusbar)
                sprites.destroy(shil)
                index += -1
                scene.centerCameraAt(60, 80)
                timer.after(1500, function () {
                    game.splash("결국 5수를 맞이한다..")
                    if (controller.A.isPressed()) {
                        scene.centerCameraAt(60, 80)
                        game.showLongText("만약 다른 선택을 한다면..", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            scene.centerCameraAt(60, 80)
                            game.setGameOverMessage(false, "Pipe Dream..")
                            game.gameOver(false)
                        }
                    }
                })
            }
        } else {
            if (Math.percentChance(20)) {
                music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                tiles.setCurrentTilemap(tilemap`수준3`)
                scene.setBackgroundImage(img`
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff11
                    11111111111111111111111111111111111111111111111111ffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff11
                    111111111111111111111111111111111111111111111111fffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff11
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111fff11
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111555555511111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff111111111111111111111111155555555511111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff11111111111111111155555555555511111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111555555555555555551111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11555555555555555555555111111111111111111111111111fff11
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555115555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555511115555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff555555555555fffffff115555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff55555555555ffffffffffff5555555111111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff5555555555fffffffffffffff5555555511111111111111111111111111fff11
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff555555555fffffffffffffffff5555555551111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffff5555555551111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffff5555555551111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffff55555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555551111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555551111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555511111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff155555555555111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff155555555555111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff1555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff11555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff11555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffff11555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555551111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffff555555555551111111111111111111111111111111111
                    111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffff555555555511111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffff5555555555ffff1111111111111111111111111111111
                    1111111111111111111111111111111ffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffff11fffffffffffff55555555ffffffff1111111111111111111111111111
                    111111111111111111111111111ffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffff11fffffffffffffffff55555fffffffffffff111111111111111111111111
                    1111111111111111111111111fffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffff111111111111111111111
                    1111111111111111111111111fffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffff
                    1111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffff
                    111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffff
                    1111111111111111111111fff11fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffff
                    1111111111111111111fffffff1111fffffffffffffffffffffffffffffffffffffffffffffffff1ffffff11fffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffff
                    111111111111111fffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffff
                    111111111111ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffff
                    1111111111fffffffff1111fffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffff111
                    11111111ffffffffff11111fffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffff11111
                    1111ffffffffffff1111111fffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff11111111
                    fffffffffffff111111111fffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffff111111111f
                    fffffffffff1111111111ffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffff111111111111fff
                    fffffffff111111111ffffffffff111fffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffffff11111111111ffffff
                    fffffff11111111fffffffffffff111ffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffffffff111111111111ffffffff
                    ffff111111111fffffffffffffff111fffffffffffffffffffffffffffffffffffff111111111ffffffffffffff1111111111111111111ffffffffffffffffffffffffff11111111111fffffffffffff
                    ffff1111111ffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffff111111fffff111111111111111111fffffffffffffffffffffffffffffff1111111111fffffffffffffff
                    ffff11111ffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffffffffffff
                    fffffffffffffffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffff1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111ffffffffffffffffffffff11111111111111111111111111ffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                sprites.destroy(rp2)
                sprites.destroy(statusbar)
                sprites.destroy(shil)
                index += -1
                scene.centerCameraAt(60, 80)
                timer.after(1500, function () {
                    game.splash("운이 좋게도 SKY에 합격했다")
                    if (controller.A.isPressed()) {
                        scene.centerCameraAt(60, 80)
                        game.showLongText("그래도 노력을 한 적이 있어서 다행이야..", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            scene.centerCameraAt(60, 80)
                            game.setGameOverMessage(true, "Fruition of Effort")
                            game.gameOver(true)
                        }
                    }
                })
            } else {
                music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
                tiles.setCurrentTilemap(tilemap`수준3`)
                scene.setBackgroundImage(img`
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
                    1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
                    1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffff111
                    1111ffffffffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111fff111
                    1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff111111111111111fff111
                    1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
                    1111fff111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111fff111111111111111fff111
                    1111fff111ffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111ffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fff111111111111111fff111
                    1111fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff1111111111111111111111111111111111111111111f111111111fff11111111fffffffffffffffffffff111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111fffffffffffffffffffff111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f111111111fff11111111f11111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff111111111111111111ffffffffffffffffffffff11111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
                    fff1fff111f11fff111111111111111111111f1111111111111f11111111f11111111fff11111111111111111111fffff1111111111111111111111111111fff11111111111111111111111111111111
                    fff1ffffffffffffffffffffffffffffffffff1111111111111f11111111f11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
                    fff1ffffffffffff11111111111111111111111111111111111f11111111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111
                    fff1ffffffffffff11111111111111111111111111111111111f11111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fff111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111fffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111f1111f111111111111111111111111f1111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f111111111111111111111111f1111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111ffffffffff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111111111111111111111111111111111111111111f11111111f111f111111111111111111111111111111111111111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111111fffffffff11111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111ffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111f1111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111111111111111111fffff111111111111111111111f1111111111111111fff1111fff111111111111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fff111fff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffff1111111111fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f11fffffffff11111111111111111111111f11fffff1111111111111111111111111111fffffffffffff11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffff1111111111111111111111111111fffff1111111f11fffff111111111111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111111111111111111111f11fffffffffffffffffffffffffffffffffffffffffffffffffffff111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111ffffffffffffffffffffffffff1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111fff1111fff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f1111111111111111ffffffffff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffff1111111f1111111111111f11111111111111f111111111111111111111111ff1111fffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f1111111111111111f11111111111111111f111111f1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111
                    111111111f111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111111f111111111111111fff1111111111111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111111f111111111111ffffffffffffffff111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111111f111111111111f11fff111111111f111111f111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffffffffffffffffffffffffffffffffffffff111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111f11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffffffffffff11111111111fff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11fffffffffffffffffffffffffffffffffffffffff111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111111111f1111111111111111111111111111111111111111f111111111111
                    111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
                    111111fffff11111111111f11111111111111f1fffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff1111111111111111111111111111111f111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff111ffffffffffffffffffffffffffffffffffffffffff111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111fff1111111111fff11111111111111111111111111111111111111111111
                    111111ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111f1111111111f1111111ffffffffffffffff11111111111111111111111111111111111111111111
                    111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11ffffffffffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111f111111111111111111111111111111111111111f1111111111f1111f11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
                    11111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    `)
                sprites.destroy(rp2)
                sprites.destroy(statusbar)
                sprites.destroy(shil)
                index += -1
                scene.centerCameraAt(60, 80)
                timer.after(1500, function () {
                    game.splash("결국 5수를 맞이한다..")
                    if (controller.A.isPressed()) {
                        scene.centerCameraAt(60, 80)
                        game.showLongText("만약 다른 선택을 한다면..", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            scene.centerCameraAt(60, 80)
                            game.setGameOverMessage(false, "Pipe Dream..")
                            game.gameOver(false)
                        }
                    }
                })
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (index == 1 && (controller.B.isPressed() && rp2.tileKindAt(TileDirection.Center, assets.tile`transparency16`))) {
        projectile4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 5 5 b . . . . . . 
            . . . b b b 5 5 1 1 b b b . . . 
            . . . b 5 5 5 5 1 1 5 5 b . . . 
            . . . . b d 5 5 5 5 d b . . . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . c 5 d d d d 5 c . . . . 
            . . . . c 5 d c c d 5 c . . . . 
            . . . . c c c . . c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, rp2, -175, 0)
        projectile4.setFlag(SpriteFlag.DestroyOnWall, true)
        projectile4.setKind(SpriteKind.projectile2)
        projectile4.changeScale(0, ScaleAnchor.Middle)
        rp2.setImage(img`
            . . . . . . . f f f f f f . . . . 
            . . . . . . f 2 f e e e e f f . . 
            . . . . . f 2 2 2 f e e e e f f . 
            c c . . . f e e e e f f e e e f . 
            c d c . f e 2 2 2 2 e e f f f f . 
            c d d c f 2 e f f f f 2 2 2 e f . 
            . c d d c f f e e e f f f f f f f 
            . . c d d c e 4 4 f b e 4 4 e f f 
            . . . c d c e d d f 1 4 d 4 e e f 
            . . . c c c d e d d d 4 e e e f . 
            . . . . e d d 4 e 4 4 e e f f . . 
            . . . . . e e 4 4 2 2 2 2 f . . . 
            . . . . . . f 2 e 2 2 2 2 f . . . 
            . . . . . . f 5 5 4 4 4 4 f . . . 
            . . . . . . . f f f f f f . . . . 
            . . . . . . . . . f f f . . . . . 
            `)
        animation.runImageAnimation(
        projectile4,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . b 5 5 b . . . . . . 
            . . . b b b 5 5 1 1 b b b . . . 
            . . . b 5 5 5 5 1 1 5 5 b . . . 
            . . . . b d 5 5 5 5 d b . . . . 
            . . . . c b 5 5 5 5 b c . . . . 
            . . . . c 5 d d d d 5 c . . . . 
            . . . . c 5 d c c d 5 c . . . . 
            . . . . c c c . . c c c . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . b . . . . . . . 
            . . . . . . b d d c . . . . . . 
            . . . . . b 1 1 d d c . . . . . 
            . . . . b 1 1 1 d 1 1 b . . . . 
            . . . . c 1 1 1 d 1 1 1 c c . . 
            b b b c d 1 1 c c 1 1 d 1 1 b b 
            b d 1 1 d d b c c c b d 1 1 1 b 
            b 1 1 1 1 c c . . c d d 1 1 1 b 
            b 1 1 1 1 c c . . b 1 1 d d c . 
            . b 1 1 d d b c b b 1 1 b c c . 
            . . c b d d b 1 1 b b d b c . . 
            . . c 1 1 d d 1 1 1 d d d b . . 
            . b d 1 1 1 d 1 1 d 1 1 1 d b . 
            . b d 1 1 1 d b b d 1 1 1 1 b . 
            . . b 1 1 d c c b b d 1 1 d b . 
            . . b b b b . . . b b b b b b . 
            `,img`
            . . . . . b b . . . . . . . . . 
            . . . . b 5 b b . . . . . . . . 
            . . b b 5 5 5 b b b . . . . . . 
            . b 5 5 5 5 5 5 5 b . . b . . . 
            . . b b 5 5 5 b b . . b 5 b . . 
            . . b 5 5 b 5 5 b . b 5 5 5 b . 
            . . b 5 b b b 5 b . . b 5 b . . 
            . . b b . . b b b . . b b b . . 
            . b 5 b b . . . . . b 5 b . . . 
            b 5 5 5 b b . . . b b 5 b b . . 
            . b 5 b b 5 b . b 5 5 5 5 5 b . 
            . b b b 5 5 5 b b b 5 5 5 b b . 
            . . b 5 5 5 5 5 b b 5 b 5 b . . 
            . . . b 5 5 5 b . . b b b . . . 
            . . . b 5 b 5 b . . . . . . . . 
            . . . b b b b b . . . . . . . . 
            `],
        500,
        true
        )
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile44`, function (sprite, location) {
    rp2.ay = 0
    controller.moveSprite(rp2, 135, 135)
})
scene.onOverlapTile(SpriteKind.enemy2, sprites.dungeon.floorLight2, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile16`, function (sprite, location) {
    info.changeScoreBy(10)
    rp2.sayText("학점 획득! + 10", 2000, true)
    if (rp2.tileKindAt(TileDirection.Left, assets.tile`myTile16`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left), assets.tile`myTile`)
    }
    if (rp2.tileKindAt(TileDirection.Right, assets.tile`myTile16`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right), assets.tile`myTile`)
    }
    if (rp2.tileKindAt(TileDirection.Top, assets.tile`myTile16`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top), assets.tile`myTile`)
    }
    if (rp2.tileKindAt(TileDirection.Bottom, assets.tile`myTile16`)) {
        tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), assets.tile`myTile`)
    }
})
scene.onOverlapTile(SpriteKind.rp, assets.tile`myTile47`, function (sprite, location) {
    if (dan == 1) {
        index = 0
        dan += 1
        tiles.setCurrentTilemap(tilemap`수준4`)
        sprites.destroy(rp2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.conver)
        mySprite2.sayText(game.ask("컷씬을 시청합니까?"))
        sprites.destroy(mySprite2)
        if (controller.A.isPressed()) {
            color.startFade(color.originalPalette, color.originalPalette, 500)
            scene.setBackgroundImage(img`
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888488888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888488888888888888888888888888888888888888888888888884554888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888848888888888888888888888888888888888888888888888888888888884545888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888884888888888888888888888888888888888888888888888888888884888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888845558488888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888445558898888888888888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888888
                8888888888885558889888888888888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888888888888888888888888888888888888888
                8888888888848888888888888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888888888888888888
                8888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999888888888888888888888888888
                8888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888889898888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888cc8888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888ccc888888888ccc888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888881ccc888888888ccc888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888ccccccc888888ccccc88888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888ccccccccc888888888888888888888888888ccccccc888888ccccc888888888888888888888888888888888888888888cccccccccc8888888888888
                88888888888888888888888888888888888888888ccccccccc888888888888888888888888888ccccccc888888ccccc888888888888888888888888888888888888888888cccccccccc8888888888888
                8888888888888888888ccc8888888888888888888c11cccccc888888888888888888888888888c11cccc88888ccccccc88888888888888888888cc8888888888888888888cc1c1ccccc8888888888888
                888888888888888888ccccc888888888888888888ccccccc1c888888888888888888888888888ccccccc88888ccccccc8888888888888888888cccc888888888888888888cccccc11cc8888888888888
                88888888888888888cccccc888888888888888888ccccccccc8888888888c88888888ccccc888c1ccccc88888ccccccc88888888888888888cccccc888888888888888888cccccccccc8888888888888
                88888888888888888ccc1c888888c888888888888ccccccccc888888888cc88888888ccccc888ccccccc88888ccccccc88888888888888888ccc1c888888cc88888888888cccc1ccccc88888888cc888
                88888888888888888cccccc88888c888888888888ccccccc1c888888888cc88888888ccccc888ccccccc88888ccccccc88888888888888888cccccc88888cc88888888888ccccccc1cc88888888cc888
                88888888ccc888888cc11c88888ccc88888888888ccccccccc88cccccc8cc88888888ccccc888ccccccc88888ccccccc888888888cc888888ccc1c88888ccc88888888888cccccccccc8ccccccccc888
                c8cc8888ccccccccccc1ccc888ccccc8888888888ccccccc1c88c11ccc8cc888888888cc1cc88ccccccc888cccccccccc8cc8888ccccccccccccc1c8888cccc8888888888cccccc11cc8c11cccccc888
                cccc88888c1cc1ccccccccc888ccccc8888888888ccccccccc88cccc1c8cc88888888cccccc88cc1cccc888ccccccccccccc8888cc1ccc1cccccccc8888cccc8888888888cccccccccc8cccc1cccc888
                cc1c88888ccc1111ccccccc888ccccc8888888888ccccccccc88cccc1cccc88888888cccccc88ccccccc888ccccccccccc1c8888cccc1c11ccccccc8888cccc8888888888cccccccccc8cccc1cccc888
                cccc8888cccccccccccccccc88cccccc88cc8cc8ccccccccccc8c11cccccc88888888cccccc88ccccccc888ccccccccccccc8888cccccccccccccccc88cccccc888c88ccccccccccccc8c11cccccc888
                cc1c8888cccccccccccccccc88cccccc88ccccccccccccccccc8ccccccccc88c88c88cccccc88ccccccc888ccccccccccc1c8888cccccccccccccccc88cccccc888cccccccccccccccc8ccccccccc888
                ccccc8cc1c1ccccccccccccc88ccccccc8cccc11ccccccccccccc11ccccccccc8ccc88cc1cc88ccccccc888ccccccccccccccc8ccc1ccccccccccccc88ccccccc888c11cccccccccccccc11cccccc8cc
                ccccc8cccccccccccccccccccc1cccccc8cccccccccccccccccccccccccccccc8ccc8cccccc88ccccccc888ccccccccccccccc8cccccccccccccccccccccccccc8ccccccccccccccccccccccccccc8cc
                ccccc8ccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccc888ccccccccccccccc8cccccccccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccc8ccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccc8ccccccccccccccc8cccccccccccccccccccccccccc8c1cccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccccddccccccccccccccccccccccccc8ccccccccddcccccccccccccccccc111ccccccccccccccccccccc8ccccccccccccccccdcdccccccccccccccccccccccc8ccccccccccccccccccccccccccc11c
                ccccccccccccdcccccccccccccccccccc8ccccccccccccccccccccccccccccc11ccccccccccccccccccccc8ccccccccccccccccccccddcccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccc1cccccccccccccc8ccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccdccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccdcccccccccccccccc1c
                ccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccc111cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccc11c
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccc
                ccccccccccccdccccddcccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccddccccddccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccdccccccccccccccccccccccdccccccccccccccccccccccccccdcccdcccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccdccccccccccccccccc
                ccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccdcccccccccdcddccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccddcccccccccccccddddcccccccccccccccdcccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccddccccccccccccccddcdccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb
                bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddd11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd11111111111111111111dddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd1111111111111111111111dddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd1111111111111111111111dddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddd1111111111111111111111dddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd1111111111111111111111ddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                `)
            timer.after(3000, function () {
                color.startFade(color.originalPalette, color.originalPalette, 500)
                scene.setBackgroundImage(img`
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    77777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777
                    77777777777777777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777
                    777777777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777
                    777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777
                    7777777777777777777777777777777777ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd7ddddddd7ddddddddddddddddd77777777777777777777777777777777777
                    7777777777777777777777777777777dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd77dddddd7dddddddddddddddddddddd777777777777777777777777777777
                    777777777777777777777777777ddddddddddddddddddddddddddddddd7dddddddddddddddddddddddddddddddddddddddd77dddddd77d7dddddddddddddddddddddd777777777777777777777777777
                    777777777777777777777777dddddddddddddddddddddddddddddddd7d7ddddddddddddddddddddddddddddd7dddddddddd77ddddd777d7dddddddddddddddddddddddddd77777777777777777777777
                    7777777777777777777ddddddddddddddddddddd7ddddddddddddddd777ddddddddddddddddddddddddddddd7dddddddddd777ddddd77d7dddddddddddddddddddddddddddd777777777777777777777
                    7777777777777777dddddddddddddddddddddddd7ddddd7ddd7ddd7dd77ddd7ddddddddddddddddddddddddd77ddddddddd777ddddded777dd7dddddddd7ddddddddddddddddd7777777777777777777
                    7777777777777ddddddddddddddddddddddddddd7ddddd7ddd7dd7ddd77ddd7ddddddddddddddddddddddddd77dddddddd677666666e6777d77dddddddd7ddddddddddddddddddd77777777777777777
                    77777777777ddddddddddddddddddddddddddd777dddd77dd77dd7ddd7dddd7edddd7ddddddddddddddddddd77ddddd66667e666676e6777677dddddddd77ddddddddddddddddddddd77777777777777
                    777777777ddddddddddddddddddddddddddddd7d77ddd77d7776676666e666766ddd7ddddddddddddddddddd77dd66666667e666676667e777766666dd777dddddddddddddddddddddddd77777777777
                    7777777dddddddddddddddddddddddddddddd77d77dd677677766e6666e66666666677ddddddddddddddddd77766666666666666677666e6777666666d777dddddddddddddddddddddddddd777777777
                    77777dddddddddddddddddddddddddddddddd77d7766677e677666e66666666ff667776dddddddddddddddd77766fff666666666677666e67766666676776ddddddddddddddddddddddddddd77777777
                    777dddddddddddddddddddddddd7ddddd77d677677666e7e6e76666666666ff2f666776dddddddddddddddd7e66f222fff666666777666e677666666766e666dddddddddddddddddddddddddd7777777
                    dddddddddddddddddddddd7dddd7ddddd776677677666e7e6e66666666fff2442f66776dddddddddddddddd6e6f2444422fff666677766666e666667766e66667ddd7ddddddddddddddddddddd777777
                    dddddddddddddddddddddd7dddd777dd6766676677666e6e66e6666fff22441442f6e666dddddddddddddd666f24444444422fff677766666e66666776e66666766d7ddddddddddddddddddddd777777
                    ddddddddddddddddddddd777ddd7776667666e66e666666666666ff224444444442fe666dddddddddddddd666f24445444444422fff666666e66666777e6666677777dddddddddddddddddddddd77777
                    ddddddddddddddddddddd7776677e76676666e66e666666666fff224444444444442fe66ddddddddddddd666f241114445554444222ff6666e66666777e6666677677ddddddddddddddddddddddd7777
                    dddddddddddddddddddd77766777e76676666666e666666fff2244444444444544442e66ddddddddddddd66f555111444515444144422fff6e66666677e66667776766dddddddddddddddddddddd7777
                    dddddddddddddddddddd76776676e766e6666666e6666ff22254444441155545544442f66dddddddddddd6f2551115444555111444444422fef66e66e7666666e667776dddddddddddddddddddddd777
                    dddddddddddddddd7d6776776676e6666666666666fff22444444444411555444444442f6dddfffffffd6ff2555444444444111414144444422ffe66e6666666e6677766ddddddddddddddddddddd777
                    ddddddddddddddd6766776e666e6666666666666ff224444441444455515554444444142fddfccccccfd6f24444444444445551444444444144422fff6666666e66777666ddddddddddddddddddddd77
                    ddddddddddddd6667e7e76666666666666666fff224444444444444555444144444444442ffffffffffdf244444444454555554555454444144444222fff6666666e677667dddddddddddddddddddd77
                    dddd7ddddddd6667777766666666666666f5f2244444444444444445554444451544444442fbbbbbbbff2414441555144445554555444444444444444222fff6666e677667ddddddddddddddddddddd7
                    dddd77ddd7666666776e666666666666ff2224444444411554444454444111455544444444fbfffffbbf44444415511444444445551444444145554444442ff6667e6776676dddddddddddddddddddd7
                    dddd77dd676666776e6e666666666fff22444444444444451115444144111145551544444ffbfcccfbbf4555445551144411144451144411555555444444f2f6667e6e666767ddddddddddddddddddd7
                    dddd7766676666666e6e666666fff222444444414444445551144444441111441155544145bbfcccfbbbf55544111114455555555554411155555155444f22f667766e666777ddddddddddddddddddd7
                    dddd776667766e76666e6666fff2244444444444444444555114444444555444115551444fbfccbcfbbbf55144111441455555555551111111544555444f22f6677666667e7ddddddddddddddddddddd
                    ddd777666e66676666666fff2224444444441445554444555444444444555444445551444fbfccbbbfbbf4444444444445555555555111114444455544f222f6677766666e6ddddddddddddddddddddd
                    dd6676766e666666666fff224444451555555145551114555444555114555444444111444fffffffffffff44444444455144111145551114555441444f2222f6677766666edddddddddddddddddddddd
                    d666e66666666666fff222444444444514411145551144444111555114555155444455544444ff2222ff444444544445554411114555111455541144f22222f667776666e6dddddddddddddddddddddd
                    6666e66666666fff2224444444444444444111444111444441115555144111445444444444ff22777722ff441444444555444111455511145154f444f22222f6677766666ddddddddddddddddddddddd
                    6666e666666fff2244445444445444444444444444444444111144444441114444444444ff227777777722ff1114444414444444441154144444ffff222222f666e666666ddddddddddddddddddddddd
                    66666666fff22244444544444444555114555444444444411111444444444444444444ff227777777771177211f111444444544444111444444fbffff22222f666e6666ddddddffddddddddddddddddd
                    66666ffff2244444444444444444555114555444444444111111444445444444444fff2277777777711777711212ff11444444544444444144fbbbfcff2222f666e666ddddfff2ffdddddddddddddddd
                    666fff22244444444444444411145151115554454111441111444444454444444ff227777777777117777117111122f1444441444544455544fbbbfcccff22f66eeddddfff22ff2fdddddddddddddddd
                    ffff22445544444445111444111411555114444441114455554445444444444ff2277777777771117777711711171111ff444444454445114fbfbbfcccccf2fdddddfff222ff222fdddddddddddddddd
                    f2f2444444544444445554441114115551111444511144555544445444444ff227777777777777d7117777711d71171112ff444444444555fbffbbbfcccccffdffff222.ff22222fdddddddddddddddd
                    f22f4444415144454455544444441155511114445444445555444445444ff227777777777777774777117777731171177712fff444444444fbfcfbbffccccfff222244ff2222222fdddddddddddddddd
                    f22f4444411554444455544444444444411114444444441414444454fff27777777777d77777774777771177737711771177722fff44444fbfcccfbffffff22244444f222222222fdddddddddddddddd
                    f222f4444111444444445514444444441111444441444444444444ff2277777777777747777777477777d711177777117777777722ff444fbfcccfbfffff2444444ff2222222222fdddddddddddddddd
                    f2222f4444441444444444544455544415514444154444444444ff227777777777777747777777777777477771177777777777117722fff4fccccff2221114444ff222222222222fdddddddddddddddd
                    f2222f44444455544444444444555445555144454444444444ff22777777777777777777777d77777777477777711777777711777777722ffcccfbf44411154ff22222222222222fdddddddddddddddd
                    f22222f4444455511144444444555555555145554444444fff277777777777777777777777747777777777777777711777117777777777722fccffb454111ff2222222222222222fddd77dddd7dddddd
                    f222222f4444555115455445551114455114441444444ff227771777777777777777777777747777777777777d77777111777777777777777fcfbf444454f222222222222222222fddd77ddd77dddddd
                    f222222f44441411144444455511444555445144444ff2277777d117777777771111777777777777d777777774777777777777777777777722ffbf4444ff2222222222222222222f666776d777dddddd
                    f2222222f44444444444444555114144455511444ff227777777677117777711177711177777777747777777747777777777777777777722fff4f444ff222222222222222222222f6667666776dddddd
                    f22222222f44444444444444444444444444444ff277777777776777711711777777777177777777477777777777777777777777777722ff444ff4ff22222222222222222222222f666e667676677ddd
                    f222222222f4444454455154444444444444fff2777777777777777777717777777d77771777777777777d7777777777777777777722ff111554ff2222222222222222222222222f666e677e66677ddd
                    f222222222f45444444551544444444444ff2277777777777777777777171177777477777177777777777477777777777777777722ff4411144f222222222222222222222222222f6666776766677ddd
                    f2222222222f44414445551144444444ff2277777777777d77777777771777117774777771777d77777774777777777777777722ff4454111ff2222222222222222222222222222f6766777766667ddd
                    f2222222222fff4454145554111144ff2777777777777776777777777717777711747777717774777777777777777777777722ff1114444ff222222222222222222222222222222f77666e777666eddd
                    f22222222ffcfbf444444444444f1f277777777777777776777777777d777777771777777717747777777777777777777722ff4411554ff22222222222222222222222222222222f7766677776666ddd
                    f222222ffccfbbbff44444444ff227777777d7777777777777777777767777777771177777177777777777777777777722ff41441555f2222222222222222222222222222222222f7766677e76666ddd
                    ffff22fcccfbbbbbbf44444ff227777777776777777777777777777776777777777771177717777777777777777777225554445445552222222222222222222222222222222227f67766677e66666ddd
                    22fffffccfbbbffbbbf44ff277777777777767777777777777777777771777777777777117177777777777777777555555514541ff2222222222222222222222222222222222f77677e6677e66e6dddd
                    442222fffbbbfccfbbfff277777777777777777777777777777777777717777777777777717777777777777777255155555444f12222222222222222222222222222222222ff677777666776e6e6dddd
                    411144222fbfccccfff27777777777771177777777d777777777777d7771177777777777171177777777777722f555511144ff22222222222222222222222222222222222f6667777766677766e6dddd
                    4111444442fbfffcfc7777777777771177177777776777777777777677777111777771117d77117777777722ff455541114f22222222222222222222222222222222722ff66667777776677766e6dddd
                    41115444444ffbbff777777777771177777117777767777777777776777777771111177776777711777722ff555444444ff2222222222222222222222222222222227ff677666777777667e766eddddd
                    4444444455544fbf2ff77777771177777777711777777777777777777777777777777777767777771722ff445511444ff2222222222222222222222222222222222f766677766777776666e666eddddd
                    44441114555114f4422ff7771177777717777771777777777777777777777777777777777777777772ff444455544ff22222222222222222222222222222222222f6776677767777766666e666dddddd
                    445555145551555144422f7177777771111777771177777777d77777777777777777777777777772ff445551444ff22222222222222222222222222222222222ff67776677776767e66666e666dddddd
                    4445551444115555554442ff777777111711177777117777776777777777777777777777777772ff4444155444f22222222222222222222222222222222222ff6667776677776e67e66666e66ddddddd
                    114555444444515555444442ff77111717711177777711777767777777777777777777777772ff4155415554ff22222222222222222222222222222222222f666667776677666e6e666666e6dddddddd
                    11444444155441155144444422ff7177117d71117777771777777777777777777777777772ff4445514444ff22222222222222222222222222222222222ff6666667776676666e6666666666dddddddd
                    1144444455544111441114444422f1711715171717777771177777777777777777777772ff4411155544ff22222222222222222222222222222222222ff666667666776676666e666666666ddddddddd
                    44444441555445554411155544442ff777751117711777777117777777d77777777772f54444111444ff222222222222222222222222222222222222f666666776667666e6666666666666dddddddddd
                    4444441111144555541515151444422ff77177177717777777177777776777777772f555111115554f222222222222222222222222222222222222ff766676677666e666e666666666666ddddddddddd
                    451544111144555544111555444444422f11117771777777117777777767777772ff455544544555ff2222222222222222222222222222222222ff66766676677666e666e66666666666dddddddddddd
                    4555555111515554141111111454444442ff7771177777717fffffff77677772ff1145554444f1552f222222222222222222222222222222222f6667676676676666666666666666666ddddddddddddd
                    415515511155555444411111114444444442ff177ffffffffccccccf777772ff44444444ffff22222f2222222222222222222222222222222ff667676766767e66666666666666666ddddddddddddddd
                    44555551115554445411111111555144454422ff7fcccccccccccccf7772ff41444511ff222222222f22222222222222222222222222222ff66667677666767ee66666666666666ddddddddddddddddd
                    f444444444444455544444151555511544444422ffcccccccccccccf72ff4444ffff2222222222222f222222222222222222222222222ff6666667777676767666666666666666dddddddddddddddddd
                    2f444444444444555444444555555111444444442fccccccccccccff2f44ffff22222222222222222f22222222222222222222222222f6666666677777767776666666666666dddddddddddddddddddd
                    22ff4454445444555444445555111114445444444fccccccccccccfcf4ff222222222222222222222f222222222222222222222772ff6666666666777777777666666666666ddddddddddddddddddddd
                    2222ffffffffffffffffff4444444444444444445fccccccccccccfcff22222222222222222222222f22222222222222222222277f6667766666667767777766666666666ddddddddddddddddddddddd
                    222f222222222222222222fffffffffffffffffffbfccccccccccfccf222222222222222222222222f222222222272222222227f76666776676666776777776666666666dddddddddddddddddddddddd
                    222f222222222222222222222222222222222222fbfccccccccccfccf222222222222222222222222f2222222222722222222f76776667766766667767667766666666dddddddddddddddddddddddddd
                    222f222222222222222222222222222222222222fbfccccccccccfccf222222222222222222222222f22222222227222222ff66777666776e76666e6676676666666dddddddddddddddddddddddddddd
                    222f222222222222222222222222222222222222fbfccccccccccfcccf22222222222222222222222f2222222227722222f6667776666776776666e66e66e666666ddddddddddddddddddddddddddddd
                    222f2222222222222222222222222222222222ffbbbfffffffffffcccf22222222222222222222222f22222222277222ff67667776667e77776666e666e6e66666dddddddddddddddddddddddddddddd
                    222f22222222222222222222222222222222ff6fbbbfbbbbbbbccfcccf22222222222222222222222f222222222772ff6667667776667776776666e66666e666dddddddddddddddddddddddddddddddd
                    222f222222222222222222222222222222ff666fbbfbbbbbbbbccfcccffff22222222222222222222f22222222277f6666776e7776667776776666666666e66ddddddddddddddddddddddddddddddddd
                    222f2222222222222222222222722222f766666fbbfbbbbbbbbbcfcccf666fff22222222222222222f2222222277766667776e7766667e6677666666666666dddddddddddddddddddddddddddddddddd
                    222f22222222222222222722277227ff676666bfbbfbbbbbbbbbccfcccf66666fff22222222222222f2222222ff7766767776e6e66666e66e666666666666ddddddddddddddddddddddddddddddddddd
                    222f222222222222222227222727f766676666ffbbfbbbbbbbbbbcfffff66666766ffff2222222222f22222ff66766677677666e66666e66e6666666666ddddddddddddddddddddddddddddddddddddd
                    222f2222222222222222277227f777666776666dfffbbbbbbbbbffffdd6666677666676fff7222222f2222f6666e6677e677666e66666e66e66666666ddddddddddddddddddddddddddddddddddddddd
                    222f22222222222222222772776777666776666ddddddddddddddddddd66666776666766667ff2222f22ff6666666677e677666e66666e666e66666ddddddddddddddddddddddddddddddddddddddddd
                    222f2222222222722222777777677e776776666ddddddddddddddddddd6666777666777666766fff2fff666666666677e6776666666666666e666ddddddddddddddddddddddddddddddddddddddddddd
                    222f222222222277222f777777677e76677676ddddddddddddddddddddd666777666777766776676ff66666666676777e6776666666666666666dddddddddddddddddddddddddddddddddddddddddddd
                    222f2222222222772ff76777676e6ee6676776ddddddddddddddddddddd66677766677776677667666666666666766e66677666666666666666ddddddddddddddddddddddddddddddddddddddddddddd
                    222f22222222277ff67677776e666e6676e766ddddddddddddddddddddd6667e766677776677667766666666666766e666e66666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
                    222f22222222f7e666667e776e67777776e76ddddddddddddddddddddddd666e666776e76e77767767666676666776e666e666666666666ddddddddddddddddddddddddddddddddddddddddddddddddd
                    222f222222ff767666666e776e666e6666e66ddddddddddddddddddddddd666e66677e6667e67777677666766667766666e6666666666ddddddddddddddddddddddddddddddddddddddddddddddddddd
                    f22f2222fff7777666676e676e666e666666ddddddddddddddddddddddddd66666677766e7e667e7777666766677766666e66666666ddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    6fff72fff667777676676e666e666e66666dddddddddddddddddddddddddd6666666ee6666e667e667766676667766666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    666f7ff66667776676676e6666666666666dddddddddddddddddddddddddd6666666e76666e666e6777667776677666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    666676666677776ee67776e66666666666dddddddddddddddddddddddddddd6666666e6666e6666677766777666e6666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    6666776666776766667e7666666666666dddddddddddddddddddddddddddddd66666666666ee66667e7667776666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    6667776666777766666e666666666666dddddddddddddddddddddddddddddddd6666666666666666776666e766666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    666677666677766666e666666666666dddddddddddddddddddddddddddddddddd6666666666666666e6666e7766666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    6666e666666ee66666e66666666666ddddddddddddddddddddddddddddddddddddd66666666666666e6666e66666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    6666ee66666e666666666666666666dddddddddddddddddddddddddddddddddddddddd6666666666666666e666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    66666666666e6666666666666666ddddddddddddddddddddddddddddddddddddddddddddddd6666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    66666666666e66666666666666dddddddddddddddddddddddddddddddddddddddddddddddddd66666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    66666666666666666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    d66666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    `)
                timer.after(4000, function () {
                    color.startFade(color.originalPalette, color.originalPalette, 500)
                    scene.setBackgroundImage(img`
                        888888888888888ccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        888888888888888ccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        888888888888888cccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        888888888888cc8cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        888888888888cc8cccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
                        888888888888ccdcccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbddbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
                        8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddbbdbbbbbbbbbbbdddddddbbbbbbbbbbbb
                        8888888888ccdccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbbbdddddddddbbbbbbbbbbbbddbdbbbbbb
                        8888888888ccdccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbdbbbbbbbbdddddbbbbdbbbdbbbbbbddd
                        8888888888cccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddbbbbdddddddbbbdddbbbddddd
                        8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddbbbbddddddbbbdd888bdd
                        c888888888cccccccccccc8888ccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddddd8888ddd
                        c888888888cccccccccccc8888ccccc8888888888cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888ddd
                        ccccc88888cccccccccccc8888ccccc8888888888ccccc888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bd
                        ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                        ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                        ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc88888888888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                        ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc888ccc88888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                        ccccc88888ccccccccccccccc8ccccccccccccccccccccc888cccccc888ccc888888ccc88888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                        ccccc88888ccccccccccccccccccccccccccccccccccccc888cccccc888ccc888888cdc88888888888888888888888888888888888888888888888888888788878888888888888888888888888888888
                        ccccc88888ccccccccccccccccccccccccccccccccccccccccccccccccccdc8cc888ccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                        ccccc88888ccccccccccccccccccccccccccccccccccccccccccccddccccdc8cc88cccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                        ccccc88888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8cc888888888878887888888888888888888888888888887788777888888888888888888888888888888
                        cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc8ccbbb88888877787778888888888888888888888888887778777788888fff8888888888888888888888
                        cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccfff222f888887778777888dddddddddddddddddddddd88777877778888214422222fffff888888888888
                        cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccfff2244444444288667776777666dddddddddddddddddddddddd7778787788824144444444444422222fffff88
                        cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccfff224444444445444414f6677667e66dddddddddddddddddddddddddd677776e6882444444444444444444444444422
                        cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccfff2244444444154454444442f66e677766dddddddddddddddddddddddddd677777e68f4444444454444444444444444444
                        cccccccccccccccccccccccccccccccccccccccccccccccccccccccff552444444444444411511444444444f6667776dddddddddddddddddddddddddddd6777766f44444144551144411544444444444
                        cccccccccccccccccccccccccccccccccccccccccccccccccfff2245455414455444441111111444444144444f6777dddddddddddddddddddddddddddddd67776f444445544454444411545544444441
                        ccccccccccccccccccccccccccccccccccccfff22244444444444444441444444444441444414444444444455444fdddddddddddddddddddddddddddddddd6ef44444514411414444445444454114411
                        ccccccccccccccccccccccccccccccfff2224444444444444444444444445444414441444441441144444444444442ddddddddddddddddddddddddddddddd6e411444444444444555444441154454411
                        ccccccccccccccccccccccccfff22244444444444444411444441554444114544445514445444411444154444444444fdddddddddddddddddddddddddddddf4554444444444144455445541144444544
                        ccccccccccccccccccfff2244444444444444445444444444455555444444441454444444444441111445444445544442dddddddddddddddddddddddddddf44554411554455144444445544444444444
                        ccccccccccccfff22444444144544444444444411411555544411411444441414444444441154444444554444444444444fddddddffffbbbbbbbddddddd2444444411554444444444444444441455444
                        cccccccccfff224444444441415444441444444155115555444114114444414444414444411544444445541144444444444fdddddbbbbbbbbffbfdddddf4444444445444444545544444444444455544
                        cccfff224444444444bbf4444444411444154444554444444441444444444411455444444444444555444111444414115544fdddfbbffcccccbbbddddf54444444445115414545544145544455445544
                        224444444441444414bbbbbfff4441444414444444444414444544444555155141444444114144455544444411444444514444ffbbbccccccbbbbfddf444545154444155444114554444444455444444
                        444444444411455544bb1111bbbbff4444444145441144144444444141551144411144441154444444441154111544444414444fbfbcccccbbbbbfdf4444545544544441145114444444451144114444
                        444444444551444544bb11111111bbbbbff4414411444414444445515511444441144554444444444444444444444544444444444fbccccbbbbbbbf44544555551455441144544444441144444114444
                        444444444554445514b11111111111111bbbbfff44444444414114415514114444444554554444144444444444445545411444144ffcccbbbbbbbbf44544451151455444454144444444444144444144
                        411444144445144444b111111111fff1119999bbbbff4444444114411441144445444441554411444444414414445544411445544bfccbbbbbbbbbb4444445.444444411444144444444114444454445
                        44444114441411444bb11111111111f1f111999999bbbbbff44444444441544114444454454415544444414444445111544444444bfcbffffdddffff4444444441455444544445444444114444451444
                        44444554541554444bb11111111111111f1111111999999bbbbff44144414444444444444444455444544444444411445444444ddbfddddddddddddddddd444444451114544445444114444115444444
                        44444551554551444bb12211111111111f111111111999999bbbbff1444444444141144444444444445444441144114444444ddddfdddddddddddddddddddd4444444414444444444114444111444445
                        44445441554411114b112211111111111f11111111111111999999bbbbff4444554114444454444144444144114444444ddddddddddddff22ff2ddddddddddddddd44444444441444455444441444445
                        44445444441155114b11211111111111111818811111111111111999999bbbbff4444441544454444444444444444ddddddddddddff999f222222ff22ddddddddddddddd444444444144444554114554
                        4444415544111444bb122111111111111118111811111111111111111999999bbbbff44411444444444455444ddddddddddddff9999999ff777fffffffff2dddddddddddddddd4444444444554444444
                        4455455544444454bb12211111111111f1111118111111111111111111111999999bf4111144444444444dddddddd11dfff1999999ff777777777777fffffffff2ddddddddddddddd444444444444114
                        4444444414444411bb12222111111111f111111111111111111111111111199999bb441144455444ddddddddd1ddf111111199ff77777777777777777777ffff111fff2ddddddddddddddd4444444444
                        4444444411444444b112122111111111f181111111111111111111111111199999bf444444455dddddddd11dff1111111fff77777777771177777777777777777ff11111ff2dddddddddddddddd44444
                        4444544445444444b1221211111111111181111111111111111111111111999999bf4444dddddddd111dffffff111f177777777777777777771177777777777777777ff1111f1ff2dddddddddddddddd
                        411454554444444bb122221111111111119811811111111111111111111199999bb4ddddddddd11ffffffffffff77717177777777777777777777711177777777777777777ff111111ffdddddddddddd
                        411444554144414bb12222111111111f111981811111111111111111111199999bbdddddddd11ffffffffffff717771771177777777777777777777711177777777777777777ff111111ff2ddddddddd
                        444444444444554bb12222111111111f111111918111111111111111111199999bfdddddff1111fffffff71117771717777711777777777777777777777711777777777777777777ff1111111ffddddd
                        114554144445544b112122111112211f191111111118811111111111111199999bfdff1111111ff7771117777777771777777777177777777777777777777777117777777777777777777ff111111fff
                        111114144441444b1221211111121111188111111111111881111111111999999b21111111f171117777777771117777777777771777777777777777777777777177777777777777777777777ff11111
                        11111114444544bb122221111122111111118911111111111118811111199999bb211ff771117777777771117777777777771177777777777777777777777117777777777777777777777777777777ff
                        11111111114444bb12222112212211f111111811111111111111111811199999bff777771771777711117777777777777117777777777777777777777711777777777777777777777777777777777777
                        11111111111144bb12122112112211f181111111111111111111111111199999bf7777777711111777777777777777177777777777777777777777717777777777777777777777777777777777777777
                        1111111111111bb122221122122111118111111118111111111111111199999bb17777777777777777777771177777777777777777777777117777777777777777777777777777777777777777777777
                        1111111111111bb122221122122111111111811111881111111111111199999bf71777777777777777777717777777777777777777777711717777777777777777777777777777777777777777777777
                        1111111111111bb12222112112211f111111811111111188111111111199999bf77177777777777777117777777777777777777777711777771777777777777777777777777777777777777777777777
                        1111111111111bb12122122112111f118111811111111111118111111199999b777771777777771177777777777777777777777711777777771777777777777777777777777777777777777777777777
                        1111111111111b1121211221221111f1111811111111111111111811199999bb777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777
                        111111111111bb111121122122111fffff1111111111111111111111199999bf777777771777777777777777777777777117777777777777771777777777777777777777777777777777777777777777
                        111111111111bb1f111112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777117777777777777777771777777777777777777777777777777777777777777777
                        111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777177777777777777777777717777777777777777777777777777777777777777777777
                        111111111111b1111111f1112111f7ffffff7ffffff111111111111199999bb7777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777
                        111111111111b1111111111f1111fffffffffff77fffff111111111199999bf7777777777777777777771177777777777777777777777771777777777777777777777777777777777777777777777777
                        11111111111bb11111111111f111fffffffffffff7fffff11111111199999bf7777777777777777777717777777777777777777777777111777777777777777777777777777777777777777777777777
                        11111111111bb1111111111111ffffffffffffffffff7fffff1111119999bb77777777777777771177777717777777777777777777771777777777777777777777777777777777777777777777777777
                        1111111111bbfbb111111111111f7ffffffffffffffff7fffffff1119999bb77777777777771177777777777771177777777711111777777777777777777777777777777777777777777777777777777
                        1111111bbbbbbbfbb1111111111ffffffffffffffffff7ffffffffff9999bf77777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        1111bbbbb1b1bbbbfbb11111111ffffffffffffffffff7ffffffffffff99bf77777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        1bbbbb1bb111b1bbbbfbb1111117ffffffffffffffffffffffffffffff9bb777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        bbbb1b111bb111b1bbbbfbb111ff7fffffffffffffff7fffffffffffff9bf717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        b1bb111b1111b111b1bbbbfbb1ffff7fffffffffffff7fffffffffffff9bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        b1111bb11b1b11b111b1bbbbfbbfffff7fffffffffffffffffffffffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        1111b11b11b1111b111b1bbbbfbbfffff77ffffffffffffffffffffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        11b1b1111b11b1111b111b1bbbbfbbbfffff7ffffff7fffffffffffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        b11b11bb11b1b1b1111b111b1bbbbfbbbfffff7ffffffffffffffffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        11b11bb1b1b1b111bb111b111b1bbbbfbbbffffff77ffffffffffffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffffffffffffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffffffffffffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        1b11111b11b1bb111b1111b1111b111b1bbbbbfbbfffffffffffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                        1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbfffffffffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                        11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                        11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                        1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                        1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777
                        bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777177
                        bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777717777
                        1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777771777777
                        1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111111111111111111111111111111177777777777777777777777777777777777777777777771177777777
                        1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb111111111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777177777777777
                        111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb1111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777771777777777777
                        1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777777777177777777777777
                        11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777717777777777777777
                        11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb1111111111111111111111111111111111111111111111111111111111111111111111777777777777777777777777711777777777777777777
                        111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777771777777777777777777777
                        1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777177777777777777777777777
                        1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777717777777777777777777777777
                        bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777771777777777777777777777777777
                        bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777777
                        bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777
                        bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777
                        1bbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777
                        111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777777
                        1111bbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777
                        11111bbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777
                        111111bbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777
                        11111111bbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777
                        111111111bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777
                        1111111111bbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777
                        11111111111bb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        `)
                    timer.after(2000, function () {
                        color.startFade(color.originalPalette, color.originalPalette, 500)
                        scene.setBackgroundImage(img`
                            888888888888888ccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                            888888888888888ccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                            888888888888888cccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                            888888888888cc8cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                            888888888888cc8cccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
                            888888888888ccdcccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbddbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
                            8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddbbdbbbbbbbbbbbdddddddbbbbbbbbbbbb
                            8888888888ccdccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbbbdddddddddbbbbbbbbbbbbddbdbbbbbb
                            8888888888ccdccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbdbbbbbbbbdddddbbbbdbbbdbbbbbbddd
                            8888888888cccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddbbbbdddddddbbbdddbbbddddd
                            8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddbbbbddddddbbbdd888bdd
                            c888888888cccccccccccc8888ccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddddd8888ddd
                            c888888888cccccccccccc8888ccccc8888888888cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888ddd
                            ccccc88888cccccccccccc8888ccccc8888888888ccccc888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bd
                            ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                            ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                            ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc88888888888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                            ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc888ccc88888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                            ccccc88888ccccccccccccccc8ccccccccccccccccccccc888cccccc888ccc888888ccc88888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                            ccccc88888ccccccccccccccccccccccccccccccccccccc888cccccc888ccc888888cdc88888888888888888888888888888888888888888888888888888788878888888888888888888888888888888
                            ccccc88888ccccccccccccccccccccccccccccccccccccccccccccccccccdc8cc888ccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                            ccccc88888ccccccccccccccccccccccccccccccccccccccccccccddccccdc8cc88cccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                            ccccc88888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8cc888888888878887888888888888888888888888888887788777888888888888888888888888888888
                            cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc8ccbbb88888877787778888888888888888888888888887778777788888fff8888888888888888888888
                            cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccfff222f888887778777888dddddddddddddddddddddd88777877778888214422222fffff888888888888
                            cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccfff2244444444288667776777666dddddddddddddddddddddddd7778787788824144444444444422222fffff88
                            cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccfff224444444445444414f6677667e66dddddddddddddddddddddddddd677776e6882444444444444444444444444422
                            cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccfff2244444444154454444442f66e677766dddddddddddddddddddddddddd677777e68f4444444454444444444444444444
                            cccccccccccccccccccccccccccccccccccccccccccccccccccccccff552444444444444411511444444444f6667776dddddddddddddddddddddddddddd6777766f44444144551144411544444444444
                            cccccccccccccccccccccccccccccccccccccccccccccccccfff2245455414455444441111111444444144444f6777dddddddddddddddddddddddddddddd67776f444445544454444411545544444441
                            ccccccccccccccccccccccccccccccccccccfff22244444444444444441444444444441444414444444444455444fdddddddddddddddddddddddddddddddd6ef44444514411414444445444454114411
                            ccccccccccccccccccccccccccccccfff2224444444444444444444444445444414441444441441144444444444442ddddddddddddddddddddddddddddddd6e411444444444444555444441154454411
                            ccccccccccccccccccccccccfff22244444444444444411444441554444114544445514445444411444154444444444fdddddddddddddddddddddddddddddf4554444444444144455445541144444544
                            ccccccccccccccccccfff2244444444444444445444444444455555444444441454444444444441111445444445544442dddddddddddddddddddddddddddf44554411554455144444445544444444444
                            ccccccccccccfff22444444144544444444444411411555544411411444441414444444441154444444554444444444444fddddddffffbbbbbbbddddddd2444444411554444444444444444441455444
                            cccccccccfff224444444441415444441444444155115555444114114444414444414444411544444445541144444444444fdddddbbbbbbbbffbfdddddf4444444445444444545544444444444455544
                            cccfff224444444444bbf4444444411444154444554444444441444444444411455444444444444555444111444414115544fdddfbbffcccccbbbddddf54444444445115414545544145544455445544
                            224444444441444414bbbbbfff4441444414444444444414444544444555155141444444114144455544444411444444514444ffbbbccccccbbbbfddf444545154444155444114554444444455444444
                            444444444411455544bb1111bbbbff4444444145441144144444444141551144411144441154444444441154111544444414444fbfbcccccbbbbbfdf4444545544544441145114444444451144114444
                            444444444551444544bb11111111bbbbbff4414411444414444445515511444441144554444444444444444444444544444444444fbccccbbbbbbbf44544555551455441144544444441144444114444
                            444444444554445514b11111111111111bbbbfff44444444414114415514114444444554554444144444444444445545411444144ffcccbbbbbbbbf44544451151455444454144444444444144444144
                            411444144445144444b111111111fff1119999bbbbff4444444114411441144445444441554411444444414414445544411445544bfccbbbbbbbbbb4444445.444444411444144444444114444454445
                            44444114441411444bb11111111111f1f111999999bbbbbff44444444441544114444454454415544444414444445111544444444bfcbffffdddffff4444444441455444544445444444114444451444
                            44444554541554444bb11111111111111f1111111999999bbbbff44144414444444444444444455444544444444411445444444ddbfddddddddddddddddd444444451114544445444114444115444444
                            44444551554551444bb12211111111111f111111111999999bbbbff1444444444141144444444444445444441144114444444ddddfdddddddddddddddddddd4444444414444444444114444111444445
                            44445441554411114b112211111111111f11111111111111999999bbbbff4444554114444454444144444144114444444ddddddddddddff22ff2ddddddddddddddd44444444441444455444441444445
                            44445444441155114b11211111111111111818811111111111111999999bbbbff4444441544454444444444444444ddddddddddddff999f222222ff22ddddddddddddddd444444444144444554114554
                            4444415544111444bb122111111111111118111811111111111111111999999bbbbff44411444444444455444ddddddddddddff9999999ff777fffffffff2dddddddddddddddd4444444444554444444
                            4455455544444454bb12211111111111f1111118111111111111111111111999999bf4111144444444444dddddddd11dfff1999999ff777777777777fffffffff2ddddddddddddddd444444444444114
                            4444444414444411bb12222111111111f111111111111111111111111111199999bb441144455444ddddddddd1ddf111111199ff77777777777777777777ffff111fff2ddddddddddddddd4444444444
                            4444444411444444b112122111111111f181111111111111111111111111199999bf444444455dddddddd11dff1111111fff77777777771177777777777777777ff11111ff2dddddddddddddddd44444
                            4444544445444444b1221211111111111181111111111111111111111111999999bf4444dddddddd111dffffff111f177777777777777777771177777777777777777ff1111f1ff2dddddddddddddddd
                            411454554444444bb122221111111111119811811111111111111111111199999bb4ddddddddd11ffffffffffff77717177777777777777777777711177777777777777777ff111111ffdddddddddddd
                            411444554144414bb12222111111111f111981811111111111111111111199999bbdddddddd11ffffffffffff717771771177777777777777777777711177777777777777777ff111111ff2ddddddddd
                            444444444444554bb12222111111111f111111918111111111111111111199999bfdddddff1111fffffff71117771717777711777777777777777777777711777777777777777777ff1111111ffddddd
                            114554144445544b112122111112211f191111111118811111111111111199999bfdff1111111ff7771117777777771777777777177777777777777777777777117777777777777777777ff111111fff
                            111114144441444b1221211111121111188111111111111881111111111999999b21111111f171117777777771117777777777771777777777777777777777777177777777777777777777777ff11111
                            11111114444544bb122221111122111111118911111111111118811111199999bb211ff771117777777771117777777777771177777777777777777777777117777777777777777777777777777777ff
                            11111111114444bb12222112212211f111111811111111111111111811199999bff777771771777711117777777777777117777777777777777777777711777777777777777777777777777777777777
                            11111111111144bb12122112112211f181111111111111111111111111199999bf7777777711111777777777777777177777777777777777777777717777777777777777777777777777777777777777
                            1111111111111bb122221122122111118111111118111111111111111199999bb17777777777777777777771177777777777777777777777117777777777777777777777777777777777777777777777
                            1111111111111bb122221122122111111111811111881111111111111199999bf71777777777777777777717777777777777777777777711717777777777777777777777777777777777777777777777
                            1111111111111bb12222112112211f111111811111111188111111111199999bf77177777777777777117777777777777777777777711777771777777777777777777777777777777777777777777777
                            1111111111111bb12122122112111f118111811111111111118111111199999b777771777777771177777777777777777777777711777777771777777777777777777777777777777777777777777777
                            1111111111111b1121211221221111f1111811111111111111111811199999bb777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777
                            111111111111bb111121122122111fffff1111111111111111111111199999bf777777771777777777777777777777777117777777777777771777777777777777777777777777777777777777777777
                            111111111111bb1f111112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777117777777777777777771777777777777777777777777777777777777777777777
                            111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777177777777777777777777717777777777777777777777777777777777777777777777
                            111111111111b1111111f1112111f7ffffff7ffffff111111111111199999bb7777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777
                            111111111111b1111111111f1111fffffffffff77fffff111111111199999bf7777777777777777777771177777777777777777777777771777777777777777777777777777777777777777777777777
                            11111111111bb11111111111f111fffffffffffff7fffff11111111199999bf7777777777777777777717777777777777777777777777111777777777777777777777777777777777777777777777777
                            11111111111bb1111111111111ffffffffffffffffff7fffff1111119999bb77777777777777771177777717777777777777777777771777777777777777777777777777777777777777777777777777
                            1111111111bbfbb111111111111f7ffffffffffffffff7fffffff1119999bb77777777777771177777777777771177777777711111777777777777777777777777777777777777777777777777777777
                            1111111bbbbbbbfbb1111111111ffffffffffffffffff7ffffffffff9999bf77777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            1111bbbbb1b1bbbbfbb11111111ffffffffffffffffff7ffffffffffff99bf77777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            1bbbbb1bb111b1bbbbfbb1111117ffffffffffffffffffffffffffffff9bb777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            bbbb1b111bb111b1bbbbfbb111ff7fffffffffffffff7fffffffffffff9bf717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            b1bb111b1111b111b1bbbbfbb1ffff7fffffffffffff7fffffffffffff9bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            b1111bb11b1b11b111b1bbbbfbbfffff7fffffffffffffffffffffffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            1111b11b11b1111b111b1bbbbfbbfffff77ffffffffffffffffffffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            11b1b1111b11b1111b111b1bbbbfbbbfffff7ffffff7fffffffffffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            b11b11bb11b1b1b1111b111b1bbbbfbbbfffff7ffffffffffffffffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            11b11bb1b1b1b111bb111b111b1bbbbfbbbffffff77ffffffffffffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffffffffffffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffffffffffffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            1b11111b11b1bb111b1111b1111b111b1bbbbbfbbfffffffffffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                            1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbfffffffffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                            11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                            11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                            1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                            1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777
                            bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777177
                            bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777717777
                            1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777771777777
                            1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111d11111111111111111111111111177777777777777777777777777777777777777777777771177777777
                            1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb11111111111111111111d111111111111111111111111111111111777777777777777777777777777777777777777777177777777777
                            111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb11111111111111111111d111d111d11111111111111111111111111117777777777777777777777777777777777777771777777777777
                            1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb11111111111111111dd11dd11d1111d11111111111111111111111111111177777777777777777777777777777777777177777777777777
                            11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111ddd1ddd11ddd111111111111111111111111111111111111177777777777777777777777777777717777777777777777
                            11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb111111111111111111ddddddd11dddddd1111d11111111111111111111111111111111777777777777777777777777711777777777777777777
                            111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb1111111111111111111ddddddd11dddd1dd11dd111d11111111111111111111111111111111777777777777777777771777777777777777777777
                            1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb11111111111111111111dd1ddddd11dddddd111d11111111111111111111111111111111111111117777777777777777177777777777777777777777
                            1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb1111111111111111111111ddddddd11ddddddd11dddd111111111111111111111111111111111111111117777777777717777777777777777777777777
                            bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb111111111111d1111111111ddddddd11ddddddd111ddddd1d111111111111111111111111111111111111111117777771777777777777777777777777777
                            bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111ddddddd1dddddddd111dd1dddd1111111111111111111111111111111111111111111177777777777777777777777777777777
                            bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111d1111111ddddddd11dd11dddd11ddd1ddd11111111111111111111111111111111111111111111117777777777777777777777777777777
                            bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb11111111111111d11dd111111ddddddd1ddddd11dd11ddddddd111111111111111111111111111111111111111111111111117777777777777777777777777777
                            1bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111dd1ddd11111ddddddd11dddddddd11dddddddd111111111111111111111111111111111111111111111111111117777777777777777777777777
                            111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111ddddddd1111ddddddd1ddddddddd11ddddddddd111111111111111111111111111111111111111111111111111111177777777777777777777777
                            1111bbbbbbbbbbbbbbbbbbbb111111111111111111ddddddd111dddd1ddd1dddddddddd11dd1dddd11111111111111111111111111111111111111111111111111111111111177777777777777777777
                            11111bbbbbbbbbbbbbbbbb1111111111111111111ddddddd111dddd1ddddddddddddd111dddd11d1111d1111111111111111111111111111111111111111111111111111111111777777777777777777
                            111111bbbbbbbbbbbbbb1111111111111111111dddddddd111dddd1ddddddd1ddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111777777777777777
                            11111111bbbbbbbbbb11111111111111111111dd1ddddd111dddd1ddddddd1ddddd11dddddddd111dd111111111111111111111111111111111111111111111111111111111111111117777777777777
                            111111111bbbbbbb1111111111111111111111ddddddd11dddddd1dddddd1ddddd11dddddddd111dddd11111111111111111111111111111111111111111111111111111111111111111117777777777
                            1111111111bbbbb11111111111111111111111ddddddd1dddddddddddddd1ddddddddddddddd11dddddd1111111111111111111111111111111111111111111111111111111111111111111777777777
                            11111111111bb111111111111111111111111dddddddddddddddddddddd1ddddddddddddddd11ddd11d11111111111111111111111111111111111111111111111111111111111111111111111777777
                            1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111111117777
                            1111111111111111111111111111111111111ddddddddddddddddddddddddddddddd1dddd11ddddddd111111111111111111111111111111111111111111111111111111111111111111111111111117
                            1111111111111111111111111111111111111dddddddddddddddddddddddddddddd1ddddddddd1dd11111111111111111111111111111111111111111111111111111111111111111111111111111111
                            111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111
                            `)
                        timer.after(1500, function () {
                            game.showLongText("미래에, 나는 어느 축구 구단의", DialogLayout.Bottom)
                            if (controller.A.isPressed()) {
                                game.showLongText("스포츠 분석가가 된다", DialogLayout.Bottom)
                                if (controller.A.isPressed()) {
                                    game.showLongText("비록 작은 구단이지만", DialogLayout.Bottom)
                                    if (controller.A.isPressed()) {
                                        game.showLongText("이게 내 꿈이자 현실이다.", DialogLayout.Bottom)
                                        if (controller.A.isPressed()) {
                                            game.showLongText("그리고 여정의 끝이다.", DialogLayout.Bottom)
                                            scene.setBackgroundImage(img`
                                                888888888888888ccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                                888888888888888ccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                                888888888888888cccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                                888888888888cc8cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                                888888888888cc8cccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
                                                888888888888ccdcccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbddbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
                                                8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddbbdbbbbbbbbbbbdddddddbbbbbbbbbbbb
                                                8888888888ccdccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbbbdddddddddbbbbbbbbbbbbddbdbbbbbb
                                                8888888888ccdccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbdbbbbbbbbdddddbbbbdbbbdbbbbbbddd
                                                8888888888cccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddbbbbdddddddbbbdddbbbddddd
                                                8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddbbbbddddddbbbdd888bdd
                                                c888888888cccccccccccc8888ccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddddd8888ddd
                                                c888888888cccccccccccc8888ccccc8888888888cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888ddd
                                                ccccc88888cccccccccccc8888ccccc8888888888ccccc888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bd
                                                ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                                                ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                                                ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc88888888888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                                                ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc888ccc88888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                                                ccccc88888ccccccccccccccc8ccccccccccccccccccccc888cccccc888ccc888888ccc88888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                                                ccccc88888ccccccccccccccccccccccccccccccccccccc888cccccc888ccc888888cdc88888888888888888888888888888888888888888888888888888788878888888888888888888888888888888
                                                ccccc88888ccccccccccccccccccccccccccccccccccccccccccccccccccdc8cc888ccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                                                ccccc88888ccccccccccccccccccccccccccccccccccccccccccccddccccdc8cc88cccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                                                ccccc88888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8cc888888888878887888888888888888888888888888887788777888888888888888888888888888888
                                                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc8ccbbb88888877787778888888888888888888888888887778777788888fff8888888888888888888888
                                                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccfff222f888887778777888dddddddddddddddddddddd88777877778888214422222fffff888888888888
                                                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccfff2244444444288667776777666dddddddddddddddddddddddd7778787788824144444444444422222fffff88
                                                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccfff224444444445444414f6677667e66dddddddddddddddddddddddddd677776e6882444444444444444444444444422
                                                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccfff2244444444154454444442f66e677766dddddddddddddddddddddddddd677777e68f4444444454444444444444444444
                                                cccccccccccccccccccccccccccccccccccccccccccccccccccccccff552444444444444411511444444444f6667776dddddddddddddddddddddddddddd6777766f44444144551144411544444444444
                                                cccccccccccccccccccccccccccccccccccccccccccccccccfff2245455414455444441111111444444144444f6777dddddddddddddddddddddddddddddd67776f444445544454444411545544444441
                                                ccccccccccccccccccccccccccccccccccccfff22244444444444444441444444444441444414444444444455444fdddddddddddddddddddddddddddddddd6ef44444514411414444445444454114411
                                                ccccccccccccccccccccccccccccccfff2224444444444444444444444445444414441444441441144444444444442ddddddddddddddddddddddddddddddd6e411444444444444555444441154454411
                                                ccccccccccccccccccccccccfff22244444444444444411444441554444114544445514445444411444154444444444fdddddddddddddddddddddddddddddf4554444444444144455445541144444544
                                                ccccccccccccccccccfff2244444444444444445444444444455555444444441454444444444441111445444445544442dddddddddddddddddddddddddddf44554411554455144444445544444444444
                                                ccccccccccccfff22444444144544444444444411411555544411411444441414444444441154444444554444444444444fddddddffffbbbbbbbddddddd2444444411554444444444444444441455444
                                                cccccccccfff224444444441415444441444444155115555444114114444414444414444411544444445541144444444444fdddddbbbbbbbbffbfdddddf4444444445444444545544444444444455544
                                                cccfff224444444444bbf4444444411444154444554444444441444444444411455444444444444555444111444414115544fdddfbbffcccccbbbddddf54444444445115414545544145544455445544
                                                224444444441444414bbbbbfff4441444414444444444414444544444555155141444444114144455544444411444444514444ffbbbccccccbbbbfddf444545154444155444114554444444455444444
                                                444444444411455544bb1111bbbbff4444444145441144144444444141551144411144441154444444441154111544444414444fbfbcccccbbbbbfdf4444545544544441145114444444451144114444
                                                444444444551444544bb11111111bbbbbff4414411444414444445515511444441144554444444444444444444444544444444444fbccccbbbbbbbf44544555551455441144544444441144444114444
                                                444444444554445514b11111111111111bbbbfff44444444414114415514114444444554554444144444444444445545411444144ffcccbbbbbbbbf44544451151455444454144444444444144444144
                                                411444144445144444b111111111fff1119999bbbbff4444444114411441144445444441554411444444414414445544411445544bfccbbbbbbbbbb4444445.444444411444144444444114444454445
                                                44444114441411444bb11111111111f1f111999999bbbbbff44444444441544114444454454415544444414444445111544444444bfcbffffdddffff4444444441455444544445444444114444451444
                                                44444554541554444bb11111111111111f1111111999999bbbbff44144414444444444444444455444544444444411445444444ddbfddddddddddddddddd444444451114544445444114444115444444
                                                44444551554551444bb12211111111111f111111111999999bbbbff1444444444141144444444444445444441144114444444ddddfdddddddddddddddddddd4444444414444444444114444111444445
                                                44445441554411114b112211111111111f11111111111111999999bbbbff4444554114444454444144444144114444444ddddddddddddff22ff2ddddddddddddddd44444444441444455444441444445
                                                44445444441155114b11211111111111111818811111111111111999999bbbbff4444441544454444444444444444ddddddddddddff999f222222ff22ddddddddddddddd444444444144444554114554
                                                4444415544111444bb122111111111111118111811111111111111111999999bbbbff44411444444444455444ddddddddddddff9999999ff777fffffffff2dddddddddddddddd4444444444554444444
                                                4455455544444454bb12211111111111f1111118111111111111111111111999999bf4111144444444444dddddddd11dfff1999999ff777777777777fffffffff2ddddddddddddddd444444444444114
                                                4444444414444411bb12222111111111f111111111111111111111111111199999bb441144455444ddddddddd1ddf111111199ff77777777777777777777ffff111fff2ddddddddddddddd4444444444
                                                4444444411444444b112122111111111f181111111111111111111111111199999bf444444455dddddddd11dff1111111fff77777777771177777777777777777ff11111ff2dddddddddddddddd44444
                                                4444544445444444b1221211111111111181111111111111111111111111999999bf4444dddddddd111dffffff111f177777777777777777771177777777777777777ff1111f1ff2dddddddddddddddd
                                                411454554444444bb122221111111111119811811111111111111111111199999bb4ddddddddd11ffffffffffff77717177777777777777777777711177777777777777777ff111111ffdddddddddddd
                                                411444554144414bb12222111111111f111981811111111111111111111199999bbdddddddd11ffffffffffff717771771177777777777777777777711177777777777777777ff111111ff2ddddddddd
                                                444444444444554bb12222111111111f111111918111111111111111111199999bfdddddff1111fffffff71117771717777711777777777777777777777711777777777777777777ff1111111ffddddd
                                                114554144445544b112122111112211f191111111118811111111111111199999bfdff1111111ff7771117777777771777777777177777777777777777777777117777777777777777777ff111111fff
                                                111114144441444b1221211111121111188111111111111881111111111999999b21111111f171117777777771117777777777771777777777777777777777777177777777777777777777777ff11111
                                                11111114444544bb122221111122111111118911111111111118811111199999bb211ff771117777777771117777777777771177777777777777777777777117777777777777777777777777777777ff
                                                11111111114444bb12222112212211f111111811111111111111111811199999bff777771771777711117777777777777117777777777777777777777711777777777777777777777777777777777777
                                                11111111111144bb12122112112211f181111111111111111111111111199999bf7777777711111777777777777777177777777777777777777777717777777777777777777777777777777777777777
                                                1111111111111bb122221122122111118111111118111111111111111199999bb17777777777777777777771177777777777777777777777117777777777777777777777777777777777777777777777
                                                1111111111111bb122221122122111111111811111881111111111111199999bf71777777777777777777717777777777777777777777711717777777777777777777777777777777777777777777777
                                                1111111111111bb12222112112211f111111811111111188111111111199999bf77177777777777777117777777777777777777777711777771777777777777777777777777777777777777777777777
                                                1111111111111bb12122122112111f118111811111111111118111111199999b777771777777771177777777777777777777777711777777771777777777777777777777777777777777777777777777
                                                1111111111111b1121211221221111f1111811111111111111111811199999bb777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777
                                                111111111111bb111121122122111fffff1111111111111111111111199999bf777777771777777777777777777777777117777777777777771777777777777777777777777777777777777777777777
                                                111111111111bb1f111112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777117777777777777777771777777777777777777777777777777777777777777777
                                                111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777177777777777777777777717777777777777777777777777777777777777777777777
                                                111111111111b1111111f1112111f7ffffff7ffffff111111111111199999bb7777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777
                                                111111111111b1111111111f1111fffffffffff77fffff111111111199999bf7777777777777777777771177777777777777777777777771777777777777777777777777777777777777777777777777
                                                11111111111bb11111111111f111fffffffffffff7fffff11111111199999bf7777777777777777777717777777777777777777777777111777777777777777777777777777777777777777777777777
                                                11111111111bb1111111111111ffffffffffffffffff7fffff1111119999bb77777777777777771177777717777777777777777777771777777777777777777777777777777777777777777777777777
                                                1111111111bbfbb111111111111f7ffffffffffffffff7fffffff1119999bb77777777777771177777777777771177777777711111777777777777777777777777777777777777777777777777777777
                                                1111111bbbbbbbfbb1111111111ffffffffffffffffff7ffffffffff9999bf77777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                1111bbbbb1b1bbbbfbb11111111ffffffffffffffffff7ffffffffffff99bf77777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                1bbbbb1bb111b1bbbbfbb1111117ffffffffffffffffffffffffffffff9bb777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                bbbb1b111bb111b1bbbbfbb111ff7fffffffffffffff7fffffffffffff9bf717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                b1bb111b1111b111b1bbbbfbb1ffff7fffffffffffff7fffffffffffff9bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                b1111bb11b1b11b111b1bbbbfbbfffff7fffffffffffffffffffffffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                1111b11b11b1111b111b1bbbbfbbfffff77ffffffffffffffffffffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                11b1b1111b11b1111b111b1bbbbfbbbfffff7ffffff7fffffffffffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                b11b11bb11b1b1b1111b111b1bbbbfbbbfffff7ffffffffffffffffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                11b11bb1b1b1b111bb111b111b1bbbbfbbbffffff77ffffffffffffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffffffffffffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffffffffffffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                1b11111b11b1bb111b1111b1111b111b1bbbbbfbbfffffffffffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbfffffffffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                                                11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                                                1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                                                1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777
                                                bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777177
                                                bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777717777
                                                1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777771777777
                                                1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111d11111111111111111111111111177777777777777777777777777777777777777777777771177777777
                                                1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb11111111111111111111d111111111111111111111111111111111777777777777777777777777777777777777777777177777777777
                                                111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb11111111111111111111d111d111d11111111111111111111111111117777777777777777777777777777777777777771777777777777
                                                1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb11111111111111111dd11dd11d1111d11111111111111111111111111111177777777777777777777777777777777777177777777777777
                                                11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111ddd1ddd11ddd111111111111111111111111111111111111177777777777777777777777777777717777777777777777
                                                11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb111111111111111111ddddddd11dddddd1111d11111111111111111111111111111111777777777777777777777777711777777777777777777
                                                111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb1111111111111111111ddddddd11dddd1dd11dd111d11111111111111111111111111111111777777777777777777771777777777777777777777
                                                1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb11111111111111111111dd1ddddd11dddddd111d11111111111111111111111111111111111111117777777777777777177777777777777777777777
                                                1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb1111111111111111111111ddddddd11ddddddd11dddd111111111111111111111111111111111111111117777777777717777777777777777777777777
                                                bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb111111111111d1111111111ddddddd11ddddddd111ddddd1d111111111111111111111111111111111111111117777771777777777777777777777777777
                                                bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111ddddddd1dddddddd111dd1dddd1111111111111111111111111111111111111111111177777777777777777777777777777777
                                                bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111d1111111ddddddd11dd11dddd11ddd1ddd11111111111111111111111111111111111111111111117777777777777777777777777777777
                                                bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb11111111111111d11dd111111ddddddd1ddddd11dd11ddddddd111111111111111111111111111111111111111111111111117777777777777777777777777777
                                                1bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111dd1ddd11111ddddddd11dddddddd11dddddddd111111111111111111111111111111111111111111111111111117777777777777777777777777
                                                111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111ddddddd1111ddddddd1ddddddddd11ddddddddd111111111111111111111111111111111111111111111111111111177777777777777777777777
                                                1111bbbbbbbbbbbbbbbbbbbb111111111111111111ddddddd111dddd1ddd1dddddddddd11dd1dddd11111111111111111111111111111111111111111111111111111111111177777777777777777777
                                                11111bbbbbbbbbbbbbbbbb1111111111111111111ddddddd111dddd1ddddddddddddd111dddd11d1111d1111111111111111111111111111111111111111111111111111111111777777777777777777
                                                111111bbbbbbbbbbbbbb1111111111111111111dddddddd111dddd1ddddddd1ddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111777777777777777
                                                11111111bbbbbbbbbb11111111111111111111dd1ddddd111dddd1ddddddd1ddddd11dddddddd111dd111111111111111111111111111111111111111111111111111111111111111117777777777777
                                                111111111bbbbbbb1111111111111111111111ddddddd11dddddd1dddddd1ddddd11dddddddd111dddd11111111111111111111111111111111111111111111111111111111111111111117777777777
                                                1111111111bbbbb11111111111111111111111ddddddd1dddddddddddddd1ddddddddddddddd11dddddd1111111111111111111111111111111111111111111111111111111111111111111777777777
                                                11111111111bb111111111111111111111111dddddddddddddddddddddd1ddddddddddddddd11ddd11d11111111111111111111111111111111111111111111111111111111111111111111111777777
                                                1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111111117777
                                                1111111111111111111111111111111111111ddddddddddddddddddddddddddddddd1dddd11ddddddd111111111111111111111111111111111111111111111111111111111111111111111111111117
                                                1111111111111111111111111111111111111dddddddddddddddddddddddddddddd1ddddddddd1dd11111111111111111111111111111111111111111111111111111111111111111111111111111111
                                                111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                                `)
                                            timer.after(1000, function () {
                                                game.setGameOverMessage(true, "Your Life is On The Game")
                                                game.setGameOverEffect(true, effects.confetti)
                                                game.gameOver(true)
                                            })
                                        }
                                    }
                                }
                            }
                        })
                    })
                })
            })
        }
        if (controller.B.isPressed()) {
            color.startFade(color.originalPalette, color.originalPalette, 500)
            scene.setBackgroundImage(img`
                888888888888888ccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                888888888888888ccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                888888888888888cccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                888888888888cc8cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                888888888888cc8cccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
                888888888888ccdcccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbddbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
                8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddbbdbbbbbbbbbbbdddddddbbbbbbbbbbbb
                8888888888ccdccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbbbdddddddddbbbbbbbbbbbbddbdbbbbbb
                8888888888ccdccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbdbbbbbbbbdddddbbbbdbbbdbbbbbbddd
                8888888888cccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddbbbbdddddddbbbdddbbbddddd
                8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddbbbbddddddbbbdd888bdd
                c888888888cccccccccccc8888ccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddddd8888ddd
                c888888888cccccccccccc8888ccccc8888888888cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888ddd
                ccccc88888cccccccccccc8888ccccc8888888888ccccc888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bd
                ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc88888888888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc888ccc88888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                ccccc88888ccccccccccccccc8ccccccccccccccccccccc888cccccc888ccc888888ccc88888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                ccccc88888ccccccccccccccccccccccccccccccccccccc888cccccc888ccc888888cdc88888888888888888888888888888888888888888888888888888788878888888888888888888888888888888
                ccccc88888ccccccccccccccccccccccccccccccccccccccccccccccccccdc8cc888ccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                ccccc88888ccccccccccccccccccccccccccccccccccccccccccccddccccdc8cc88cccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                ccccc88888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8cc888888888878887888888888888888888888888888887788777888888888888888888888888888888
                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc8ccbbb88888877787778888888888888888888888888887778777788888fff8888888888888888888888
                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccfff222f888887778777888dddddddddddddddddddddd88777877778888214422222fffff888888888888
                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccfff2244444444288667776777666dddddddddddddddddddddddd7778787788824144444444444422222fffff88
                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccfff224444444445444414f6677667e66dddddddddddddddddddddddddd677776e6882444444444444444444444444422
                cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccfff2244444444154454444442f66e677766dddddddddddddddddddddddddd677777e68f4444444454444444444444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccff552444444444444411511444444444f6667776dddddddddddddddddddddddddddd6777766f44444144551144411544444444444
                cccccccccccccccccccccccccccccccccccccccccccccccccfff2245455414455444441111111444444144444f6777dddddddddddddddddddddddddddddd67776f444445544454444411545544444441
                ccccccccccccccccccccccccccccccccccccfff22244444444444444441444444444441444414444444444455444fdddddddddddddddddddddddddddddddd6ef44444514411414444445444454114411
                ccccccccccccccccccccccccccccccfff2224444444444444444444444445444414441444441441144444444444442ddddddddddddddddddddddddddddddd6e411444444444444555444441154454411
                ccccccccccccccccccccccccfff22244444444444444411444441554444114544445514445444411444154444444444fdddddddddddddddddddddddddddddf4554444444444144455445541144444544
                ccccccccccccccccccfff2244444444444444445444444444455555444444441454444444444441111445444445544442dddddddddddddddddddddddddddf44554411554455144444445544444444444
                ccccccccccccfff22444444144544444444444411411555544411411444441414444444441154444444554444444444444fddddddffffbbbbbbbddddddd2444444411554444444444444444441455444
                cccccccccfff224444444441415444441444444155115555444114114444414444414444411544444445541144444444444fdddddbbbbbbbbffbfdddddf4444444445444444545544444444444455544
                cccfff224444444444bbf4444444411444154444554444444441444444444411455444444444444555444111444414115544fdddfbbffcccccbbbddddf54444444445115414545544145544455445544
                224444444441444414bbbbbfff4441444414444444444414444544444555155141444444114144455544444411444444514444ffbbbccccccbbbbfddf444545154444155444114554444444455444444
                444444444411455544bb1111bbbbff4444444145441144144444444141551144411144441154444444441154111544444414444fbfbcccccbbbbbfdf4444545544544441145114444444451144114444
                444444444551444544bb11111111bbbbbff4414411444414444445515511444441144554444444444444444444444544444444444fbccccbbbbbbbf44544555551455441144544444441144444114444
                444444444554445514b11111111111111bbbbfff44444444414114415514114444444554554444144444444444445545411444144ffcccbbbbbbbbf44544451151455444454144444444444144444144
                411444144445144444b111111111fff1119999bbbbff4444444114411441144445444441554411444444414414445544411445544bfccbbbbbbbbbb4444445.444444411444144444444114444454445
                44444114441411444bb11111111111f1f111999999bbbbbff44444444441544114444454454415544444414444445111544444444bfcbffffdddffff4444444441455444544445444444114444451444
                44444554541554444bb11111111111111f1111111999999bbbbff44144414444444444444444455444544444444411445444444ddbfddddddddddddddddd444444451114544445444114444115444444
                44444551554551444bb12211111111111f111111111999999bbbbff1444444444141144444444444445444441144114444444ddddfdddddddddddddddddddd4444444414444444444114444111444445
                44445441554411114b112211111111111f11111111111111999999bbbbff4444554114444454444144444144114444444ddddddddddddff22ff2ddddddddddddddd44444444441444455444441444445
                44445444441155114b11211111111111111818811111111111111999999bbbbff4444441544454444444444444444ddddddddddddff999f222222ff22ddddddddddddddd444444444144444554114554
                4444415544111444bb122111111111111118111811111111111111111999999bbbbff44411444444444455444ddddddddddddff9999999ff777fffffffff2dddddddddddddddd4444444444554444444
                4455455544444454bb12211111111111f1111118111111111111111111111999999bf4111144444444444dddddddd11dfff1999999ff777777777777fffffffff2ddddddddddddddd444444444444114
                4444444414444411bb12222111111111f111111111111111111111111111199999bb441144455444ddddddddd1ddf111111199ff77777777777777777777ffff111fff2ddddddddddddddd4444444444
                4444444411444444b112122111111111f181111111111111111111111111199999bf444444455dddddddd11dff1111111fff77777777771177777777777777777ff11111ff2dddddddddddddddd44444
                4444544445444444b1221211111111111181111111111111111111111111999999bf4444dddddddd111dffffff111f177777777777777777771177777777777777777ff1111f1ff2dddddddddddddddd
                411454554444444bb122221111111111119811811111111111111111111199999bb4ddddddddd11ffffffffffff77717177777777777777777777711177777777777777777ff111111ffdddddddddddd
                411444554144414bb12222111111111f111981811111111111111111111199999bbdddddddd11ffffffffffff717771771177777777777777777777711177777777777777777ff111111ff2ddddddddd
                444444444444554bb12222111111111f111111918111111111111111111199999bfdddddff1111fffffff71117771717777711777777777777777777777711777777777777777777ff1111111ffddddd
                114554144445544b112122111112211f191111111118811111111111111199999bfdff1111111ff7771117777777771777777777177777777777777777777777117777777777777777777ff111111fff
                111114144441444b1221211111121111188111111111111881111111111999999b21111111f171117777777771117777777777771777777777777777777777777177777777777777777777777ff11111
                11111114444544bb122221111122111111118911111111111118811111199999bb211ff771117777777771117777777777771177777777777777777777777117777777777777777777777777777777ff
                11111111114444bb12222112212211f111111811111111111111111811199999bff777771771777711117777777777777117777777777777777777777711777777777777777777777777777777777777
                11111111111144bb12122112112211f181111111111111111111111111199999bf7777777711111777777777777777177777777777777777777777717777777777777777777777777777777777777777
                1111111111111bb122221122122111118111111118111111111111111199999bb17777777777777777777771177777777777777777777777117777777777777777777777777777777777777777777777
                1111111111111bb122221122122111111111811111881111111111111199999bf71777777777777777777717777777777777777777777711717777777777777777777777777777777777777777777777
                1111111111111bb12222112112211f111111811111111188111111111199999bf77177777777777777117777777777777777777777711777771777777777777777777777777777777777777777777777
                1111111111111bb12122122112111f118111811111111111118111111199999b777771777777771177777777777777777777777711777777771777777777777777777777777777777777777777777777
                1111111111111b1121211221221111f1111811111111111111111811199999bb777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777
                111111111111bb111121122122111fffff1111111111111111111111199999bf777777771777777777777777777777777117777777777777771777777777777777777777777777777777777777777777
                111111111111bb1f111112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777117777777777777777771777777777777777777777777777777777777777777777
                111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777177777777777777777777717777777777777777777777777777777777777777777777
                111111111111b1111111f1112111f7ffffff7ffffff111111111111199999bb7777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777
                111111111111b1111111111f1111fffffffffff77fffff111111111199999bf7777777777777777777771177777777777777777777777771777777777777777777777777777777777777777777777777
                11111111111bb11111111111f111fffffffffffff7fffff11111111199999bf7777777777777777777717777777777777777777777777111777777777777777777777777777777777777777777777777
                11111111111bb1111111111111ffffffffffffffffff7fffff1111119999bb77777777777777771177777717777777777777777777771777777777777777777777777777777777777777777777777777
                1111111111bbfbb111111111111f7ffffffffffffffff7fffffff1119999bb77777777777771177777777777771177777777711111777777777777777777777777777777777777777777777777777777
                1111111bbbbbbbfbb1111111111ffffffffffffffffff7ffffffffff9999bf77777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                1111bbbbb1b1bbbbfbb11111111ffffffffffffffffff7ffffffffffff99bf77777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                1bbbbb1bb111b1bbbbfbb1111117ffffffffffffffffffffffffffffff9bb777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                bbbb1b111bb111b1bbbbfbb111ff7fffffffffffffff7fffffffffffff9bf717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                b1bb111b1111b111b1bbbbfbb1ffff7fffffffffffff7fffffffffffff9bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                b1111bb11b1b11b111b1bbbbfbbfffff7fffffffffffffffffffffffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                1111b11b11b1111b111b1bbbbfbbfffff77ffffffffffffffffffffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                11b1b1111b11b1111b111b1bbbbfbbbfffff7ffffff7fffffffffffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                b11b11bb11b1b1b1111b111b1bbbbfbbbfffff7ffffffffffffffffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                11b11bb1b1b1b111bb111b111b1bbbbfbbbffffff77ffffffffffffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffffffffffffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffffffffffffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                1b11111b11b1bb111b1111b1111b111b1bbbbbfbbfffffffffffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbfffffffffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777
                bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777177
                bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777717777
                1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777771777777
                1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111111111111111111111111111111177777777777777777777777777777777777777777777771177777777
                1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb111111111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777177777777777
                111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb1111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777771777777777777
                1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777777777177777777777777
                11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777717777777777777777
                11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb1111111111111111111111111111111111111111111111111111111111111111111111777777777777777777777777711777777777777777777
                111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777771777777777777777777777
                1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777177777777777777777777777
                1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777717777777777777777777777777
                bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777771777777777777777777777777777
                bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777777
                bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777
                bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777
                1bbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777
                111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777777
                1111bbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777
                11111bbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777
                111111bbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777
                11111111bbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777
                111111111bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777
                1111111111bbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777
                11111111111bb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `)
            timer.after(1500, function () {
                color.startFade(color.originalPalette, color.originalPalette, 200)
                scene.setBackgroundImage(img`
                    888888888888888ccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    888888888888888ccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    888888888888888cccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    888888888888cc8cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    888888888888cc8cccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
                    888888888888ccdcccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbddbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
                    8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddbbdbbbbbbbbbbbdddddddbbbbbbbbbbbb
                    8888888888ccdccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbbbdddddddddbbbbbbbbbbbbddbdbbbbbb
                    8888888888ccdccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbdbbbbbbbbdddddbbbbdbbbdbbbbbbddd
                    8888888888cccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddbbbbdddddddbbbdddbbbddddd
                    8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddbbbbddddddbbbdd888bdd
                    c888888888cccccccccccc8888ccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddddd8888ddd
                    c888888888cccccccccccc8888ccccc8888888888cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888ddd
                    ccccc88888cccccccccccc8888ccccc8888888888ccccc888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bd
                    ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc88888888888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                    ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc888ccc88888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                    ccccc88888ccccccccccccccc8ccccccccccccccccccccc888cccccc888ccc888888ccc88888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                    ccccc88888ccccccccccccccccccccccccccccccccccccc888cccccc888ccc888888cdc88888888888888888888888888888888888888888888888888888788878888888888888888888888888888888
                    ccccc88888ccccccccccccccccccccccccccccccccccccccccccccccccccdc8cc888ccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                    ccccc88888ccccccccccccccccccccccccccccccccccccccccccccddccccdc8cc88cccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                    ccccc88888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8cc888888888878887888888888888888888888888888887788777888888888888888888888888888888
                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc8ccbbb88888877787778888888888888888888888888887778777788888fff8888888888888888888888
                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccfff222f888887778777888dddddddddddddddddddddd88777877778888214422222fffff888888888888
                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccfff2244444444288667776777666dddddddddddddddddddddddd7778787788824144444444444422222fffff88
                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccfff224444444445444414f6677667e66dddddddddddddddddddddddddd677776e6882444444444444444444444444422
                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccfff2244444444154454444442f66e677766dddddddddddddddddddddddddd677777e68f4444444454444444444444444444
                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccff552444444444444411511444444444f6667776dddddddddddddddddddddddddddd6777766f44444144551144411544444444444
                    cccccccccccccccccccccccccccccccccccccccccccccccccfff2245455414455444441111111444444144444f6777dddddddddddddddddddddddddddddd67776f444445544454444411545544444441
                    ccccccccccccccccccccccccccccccccccccfff22244444444444444441444444444441444414444444444455444fdddddddddddddddddddddddddddddddd6ef44444514411414444445444454114411
                    ccccccccccccccccccccccccccccccfff2224444444444444444444444445444414441444441441144444444444442ddddddddddddddddddddddddddddddd6e411444444444444555444441154454411
                    ccccccccccccccccccccccccfff22244444444444444411444441554444114544445514445444411444154444444444fdddddddddddddddddddddddddddddf4554444444444144455445541144444544
                    ccccccccccccccccccfff2244444444444444445444444444455555444444441454444444444441111445444445544442dddddddddddddddddddddddddddf44554411554455144444445544444444444
                    ccccccccccccfff22444444144544444444444411411555544411411444441414444444441154444444554444444444444fddddddffffbbbbbbbddddddd2444444411554444444444444444441455444
                    cccccccccfff224444444441415444441444444155115555444114114444414444414444411544444445541144444444444fdddddbbbbbbbbffbfdddddf4444444445444444545544444444444455544
                    cccfff224444444444bbf4444444411444154444554444444441444444444411455444444444444555444111444414115544fdddfbbffcccccbbbddddf54444444445115414545544145544455445544
                    224444444441444414bbbbbfff4441444414444444444414444544444555155141444444114144455544444411444444514444ffbbbccccccbbbbfddf444545154444155444114554444444455444444
                    444444444411455544bb1111bbbbff4444444145441144144444444141551144411144441154444444441154111544444414444fbfbcccccbbbbbfdf4444545544544441145114444444451144114444
                    444444444551444544bb11111111bbbbbff4414411444414444445515511444441144554444444444444444444444544444444444fbccccbbbbbbbf44544555551455441144544444441144444114444
                    444444444554445514b11111111111111bbbbfff44444444414114415514114444444554554444144444444444445545411444144ffcccbbbbbbbbf44544451151455444454144444444444144444144
                    411444144445144444b111111111fff1119999bbbbff4444444114411441144445444441554411444444414414445544411445544bfccbbbbbbbbbb4444445.444444411444144444444114444454445
                    44444114441411444bb11111111111f1f111999999bbbbbff44444444441544114444454454415544444414444445111544444444bfcbffffdddffff4444444441455444544445444444114444451444
                    44444554541554444bb11111111111111f1111111999999bbbbff44144414444444444444444455444544444444411445444444ddbfddddddddddddddddd444444451114544445444114444115444444
                    44444551554551444bb12211111111111f111111111999999bbbbff1444444444141144444444444445444441144114444444ddddfdddddddddddddddddddd4444444414444444444114444111444445
                    44445441554411114b112211111111111f11111111111111999999bbbbff4444554114444454444144444144114444444ddddddddddddff22ff2ddddddddddddddd44444444441444455444441444445
                    44445444441155114b11211111111111111818811111111111111999999bbbbff4444441544454444444444444444ddddddddddddff999f222222ff22ddddddddddddddd444444444144444554114554
                    4444415544111444bb122111111111111118111811111111111111111999999bbbbff44411444444444455444ddddddddddddff9999999ff777fffffffff2dddddddddddddddd4444444444554444444
                    4455455544444454bb12211111111111f1111118111111111111111111111999999bf4111144444444444dddddddd11dfff1999999ff777777777777fffffffff2ddddddddddddddd444444444444114
                    4444444414444411bb12222111111111f111111111111111111111111111199999bb441144455444ddddddddd1ddf111111199ff77777777777777777777ffff111fff2ddddddddddddddd4444444444
                    4444444411444444b112122111111111f181111111111111111111111111199999bf444444455dddddddd11dff1111111fff77777777771177777777777777777ff11111ff2dddddddddddddddd44444
                    4444544445444444b1221211111111111181111111111111111111111111999999bf4444dddddddd111dffffff111f177777777777777777771177777777777777777ff1111f1ff2dddddddddddddddd
                    411454554444444bb122221111111111119811811111111111111111111199999bb4ddddddddd11ffffffffffff77717177777777777777777777711177777777777777777ff111111ffdddddddddddd
                    411444554144414bb12222111111111f111981811111111111111111111199999bbdddddddd11ffffffffffff717771771177777777777777777777711177777777777777777ff111111ff2ddddddddd
                    444444444444554bb12222111111111f111111918111111111111111111199999bfdddddff1111fffffff71117771717777711777777777777777777777711777777777777777777ff1111111ffddddd
                    114554144445544b112122111112211f191111111118811111111111111199999bfdff1111111ff7771117777777771777777777177777777777777777777777117777777777777777777ff111111fff
                    111114144441444b1221211111121111188111111111111881111111111999999b21111111f171117777777771117777777777771777777777777777777777777177777777777777777777777ff11111
                    11111114444544bb122221111122111111118911111111111118811111199999bb211ff771117777777771117777777777771177777777777777777777777117777777777777777777777777777777ff
                    11111111114444bb12222112212211f111111811111111111111111811199999bff777771771777711117777777777777117777777777777777777777711777777777777777777777777777777777777
                    11111111111144bb12122112112211f181111111111111111111111111199999bf7777777711111777777777777777177777777777777777777777717777777777777777777777777777777777777777
                    1111111111111bb122221122122111118111111118111111111111111199999bb17777777777777777777771177777777777777777777777117777777777777777777777777777777777777777777777
                    1111111111111bb122221122122111111111811111881111111111111199999bf71777777777777777777717777777777777777777777711717777777777777777777777777777777777777777777777
                    1111111111111bb12222112112211f111111811111111188111111111199999bf77177777777777777117777777777777777777777711777771777777777777777777777777777777777777777777777
                    1111111111111bb12122122112111f118111811111111111118111111199999b777771777777771177777777777777777777777711777777771777777777777777777777777777777777777777777777
                    1111111111111b1121211221221111f1111811111111111111111811199999bb777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777
                    111111111111bb111121122122111fffff1111111111111111111111199999bf777777771777777777777777777777777117777777777777771777777777777777777777777777777777777777777777
                    111111111111bb1f111112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777117777777777777777771777777777777777777777777777777777777777777777
                    111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777177777777777777777777717777777777777777777777777777777777777777777777
                    111111111111b1111111f1112111f7ffffff7ffffff111111111111199999bb7777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777
                    111111111111b1111111111f1111fffffffffff77fffff111111111199999bf7777777777777777777771177777777777777777777777771777777777777777777777777777777777777777777777777
                    11111111111bb11111111111f111fffffffffffff7fffff11111111199999bf7777777777777777777717777777777777777777777777111777777777777777777777777777777777777777777777777
                    11111111111bb1111111111111ffffffffffffffffff7fffff1111119999bb77777777777777771177777717777777777777777777771777777777777777777777777777777777777777777777777777
                    1111111111bbfbb111111111111f7ffffffffffffffff7fffffff1119999bb77777777777771177777777777771177777777711111777777777777777777777777777777777777777777777777777777
                    1111111bbbbbbbfbb1111111111ffffffffffffffffff7ffffffffff9999bf77777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1111bbbbb1b1bbbbfbb11111111ffffffffffffffffff7ffffffffffff99bf77777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1bbbbb1bb111b1bbbbfbb1111117ffffffffffffffffffffffffffffff9bb777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    bbbb1b111bb111b1bbbbfbb111ff7fffffffffffffff7fffffffffffff9bf717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    b1bb111b1111b111b1bbbbfbb1ffff7fffffffffffff7fffffffffffff9bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    b1111bb11b1b11b111b1bbbbfbbfffff7fffffffffffffffffffffffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1111b11b11b1111b111b1bbbbfbbfffff77ffffffffffffffffffffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b1b1111b11b1111b111b1bbbbfbbbfffff7ffffff7fffffffffffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    b11b11bb11b1b1b1111b111b1bbbbfbbbfffff7ffffffffffffffffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b11bb1b1b1b111bb111b111b1bbbbfbbbffffff77ffffffffffffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffffffffffffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffffffffffffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1b11111b11b1bb111b1111b1111b111b1bbbbbfbbfffffffffffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbfffffffffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                    1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                    1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777
                    bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777177
                    bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777717777
                    1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777771777777
                    1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111d11111111111111111111111111177777777777777777777777777777777777777777777771177777777
                    1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb11111111111111111111d111111111111111111111111111111111777777777777777777777777777777777777777777177777777777
                    111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb11111111111111111111d111d111d11111111111111111111111111117777777777777777777777777777777777777771777777777777
                    1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb11111111111111111dd11dd11d1111d11111111111111111111111111111177777777777777777777777777777777777177777777777777
                    11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111ddd1ddd11ddd111111111111111111111111111111111111177777777777777777777777777777717777777777777777
                    11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb111111111111111111ddddddd11dddddd1111d11111111111111111111111111111111777777777777777777777777711777777777777777777
                    111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb1111111111111111111ddddddd11dddd1dd11dd111d11111111111111111111111111111111777777777777777777771777777777777777777777
                    1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb11111111111111111111dd1ddddd11dddddd111d11111111111111111111111111111111111111117777777777777777177777777777777777777777
                    1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb1111111111111111111111ddddddd11ddddddd11dddd111111111111111111111111111111111111111117777777777717777777777777777777777777
                    bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb111111111111d1111111111ddddddd11ddddddd111ddddd1d111111111111111111111111111111111111111117777771777777777777777777777777777
                    bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111ddddddd1dddddddd111dd1dddd1111111111111111111111111111111111111111111177777777777777777777777777777777
                    bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111d1111111ddddddd11dd11dddd11ddd1ddd11111111111111111111111111111111111111111111117777777777777777777777777777777
                    bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb11111111111111d11dd111111ddddddd1ddddd11dd11ddddddd111111111111111111111111111111111111111111111111117777777777777777777777777777
                    1bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111dd1ddd11111ddddddd11dddddddd11dddddddd111111111111111111111111111111111111111111111111111117777777777777777777777777
                    111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111ddddddd1111ddddddd1ddddddddd11ddddddddd111111111111111111111111111111111111111111111111111111177777777777777777777777
                    1111bbbbbbbbbbbbbbbbbbbb111111111111111111ddddddd111dddd1ddd1dddddddddd11dd1dddd11111111111111111111111111111111111111111111111111111111111177777777777777777777
                    11111bbbbbbbbbbbbbbbbb1111111111111111111ddddddd111dddd1ddddddddddddd111dddd11d1111d1111111111111111111111111111111111111111111111111111111111777777777777777777
                    111111bbbbbbbbbbbbbb1111111111111111111dddddddd111dddd1ddddddd1ddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111777777777777777
                    11111111bbbbbbbbbb11111111111111111111dd1ddddd111dddd1ddddddd1ddddd11dddddddd111dd111111111111111111111111111111111111111111111111111111111111111117777777777777
                    111111111bbbbbbb1111111111111111111111ddddddd11dddddd1dddddd1ddddd11dddddddd111dddd11111111111111111111111111111111111111111111111111111111111111111117777777777
                    1111111111bbbbb11111111111111111111111ddddddd1dddddddddddddd1ddddddddddddddd11dddddd1111111111111111111111111111111111111111111111111111111111111111111777777777
                    11111111111bb111111111111111111111111dddddddddddddddddddddd1ddddddddddddddd11ddd11d11111111111111111111111111111111111111111111111111111111111111111111111777777
                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111111117777
                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddd1dddd11ddddddd111111111111111111111111111111111111111111111111111111111111111111111111111117
                    1111111111111111111111111111111111111dddddddddddddddddddddddddddddd1ddddddddd1dd11111111111111111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    `)
                game.showLongText("미래에, 나는 어느 축구 구단의", DialogLayout.Bottom)
                if (controller.A.isPressed()) {
                    game.showLongText("스포츠 분석가가 된다", DialogLayout.Bottom)
                    if (controller.A.isPressed()) {
                        game.showLongText("비록 작은 구단이지만", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            game.showLongText("이게 내 꿈이자 현실이다.", DialogLayout.Bottom)
                            if (controller.A.isPressed()) {
                                game.showLongText("그리고 여정의 끝이다.", DialogLayout.Bottom)
                                scene.setBackgroundImage(img`
                                    888888888888888ccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                    888888888888888ccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                    888888888888888cccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                    888888888888cc8cccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                    888888888888cc8cccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dbbbbbddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb
                                    888888888888ccdcccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bbbddbddbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbb
                                    8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddbbdbbbbbbbbbbbdddddddbbbbbbbbbbbb
                                    8888888888ccdccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbbbdddddddddbbbbbbbbbbbbddbdbbbbbb
                                    8888888888ccdccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddbdbbbbbbbbdddddbbbbdbbbdbbbbbbddd
                                    8888888888cccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddbbbbdddddddbbbdddbbbddddd
                                    8888888888cccccccccccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddddddddddbbbbddddddbbbdd888bdd
                                    c888888888cccccccccccc8888ccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888dddddddddddddddd8888ddd
                                    c888888888cccccccccccc8888ccccc8888888888cccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ddd888888888888ddd
                                    ccccc88888cccccccccccc8888ccccc8888888888ccccc888888cccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888bd
                                    ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                                    ccccc88888ccccccccccccccc8ccccc88888888ccccccc888888cccc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                                    ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc88888888888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                                    ccccc88888ccccccccccccccc8cccccccccccccccccccc8888cccccc888ccc88888888888888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                                    ccccc88888ccccccccccccccc8ccccccccccccccccccccc888cccccc888ccc888888ccc88888888888888888888888888888888888888888888888888888888878888888888888888888888888888888
                                    ccccc88888ccccccccccccccccccccccccccccccccccccc888cccccc888ccc888888cdc88888888888888888888888888888888888888888888888888888788878888888888888888888888888888888
                                    ccccc88888ccccccccccccccccccccccccccccccccccccccccccccccccccdc8cc888ccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                                    ccccc88888ccccccccccccccccccccccccccccccccccccccccccccddccccdc8cc88cccc8ccc8888888888888878887888888888888888888888888888887788877888888888888888888888888888888
                                    ccccc88888cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc8cc888888888878887888888888888888888888888888887788777888888888888888888888888888888
                                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc8ccbbb88888877787778888888888888888888888888887778777788888fff8888888888888888888888
                                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccfff222f888887778777888dddddddddddddddddddddd88777877778888214422222fffff888888888888
                                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccfff2244444444288667776777666dddddddddddddddddddddddd7778787788824144444444444422222fffff88
                                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdccccccccccfff224444444445444414f6677667e66dddddddddddddddddddddddddd677776e6882444444444444444444444444422
                                    cccccccc88cccccccccccccccccccccccccccccccccccccccccccdcccccccfff2244444444154454444442f66e677766dddddddddddddddddddddddddd677777e68f4444444454444444444444444444
                                    cccccccccccccccccccccccccccccccccccccccccccccccccccccccff552444444444444411511444444444f6667776dddddddddddddddddddddddddddd6777766f44444144551144411544444444444
                                    cccccccccccccccccccccccccccccccccccccccccccccccccfff2245455414455444441111111444444144444f6777dddddddddddddddddddddddddddddd67776f444445544454444411545544444441
                                    ccccccccccccccccccccccccccccccccccccfff22244444444444444441444444444441444414444444444455444fdddddddddddddddddddddddddddddddd6ef44444514411414444445444454114411
                                    ccccccccccccccccccccccccccccccfff2224444444444444444444444445444414441444441441144444444444442ddddddddddddddddddddddddddddddd6e411444444444444555444441154454411
                                    ccccccccccccccccccccccccfff22244444444444444411444441554444114544445514445444411444154444444444fdddddddddddddddddddddddddddddf4554444444444144455445541144444544
                                    ccccccccccccccccccfff2244444444444444445444444444455555444444441454444444444441111445444445544442dddddddddddddddddddddddddddf44554411554455144444445544444444444
                                    ccccccccccccfff22444444144544444444444411411555544411411444441414444444441154444444554444444444444fddddddffffbbbbbbbddddddd2444444411554444444444444444441455444
                                    cccccccccfff224444444441415444441444444155115555444114114444414444414444411544444445541144444444444fdddddbbbbbbbbffbfdddddf4444444445444444545544444444444455544
                                    cccfff224444444444bbf4444444411444154444554444444441444444444411455444444444444555444111444414115544fdddfbbffcccccbbbddddf54444444445115414545544145544455445544
                                    224444444441444414bbbbbfff4441444414444444444414444544444555155141444444114144455544444411444444514444ffbbbccccccbbbbfddf444545154444155444114554444444455444444
                                    444444444411455544bb1111bbbbff4444444145441144144444444141551144411144441154444444441154111544444414444fbfbcccccbbbbbfdf4444545544544441145114444444451144114444
                                    444444444551444544bb11111111bbbbbff4414411444414444445515511444441144554444444444444444444444544444444444fbccccbbbbbbbf44544555551455441144544444441144444114444
                                    444444444554445514b11111111111111bbbbfff44444444414114415514114444444554554444144444444444445545411444144ffcccbbbbbbbbf44544451151455444454144444444444144444144
                                    411444144445144444b111111111fff1119999bbbbff4444444114411441144445444441554411444444414414445544411445544bfccbbbbbbbbbb4444445.444444411444144444444114444454445
                                    44444114441411444bb11111111111f1f111999999bbbbbff44444444441544114444454454415544444414444445111544444444bfcbffffdddffff4444444441455444544445444444114444451444
                                    44444554541554444bb11111111111111f1111111999999bbbbff44144414444444444444444455444544444444411445444444ddbfddddddddddddddddd444444451114544445444114444115444444
                                    44444551554551444bb12211111111111f111111111999999bbbbff1444444444141144444444444445444441144114444444ddddfdddddddddddddddddddd4444444414444444444114444111444445
                                    44445441554411114b112211111111111f11111111111111999999bbbbff4444554114444454444144444144114444444ddddddddddddff22ff2ddddddddddddddd44444444441444455444441444445
                                    44445444441155114b11211111111111111818811111111111111999999bbbbff4444441544454444444444444444ddddddddddddff999f222222ff22ddddddddddddddd444444444144444554114554
                                    4444415544111444bb122111111111111118111811111111111111111999999bbbbff44411444444444455444ddddddddddddff9999999ff777fffffffff2dddddddddddddddd4444444444554444444
                                    4455455544444454bb12211111111111f1111118111111111111111111111999999bf4111144444444444dddddddd11dfff1999999ff777777777777fffffffff2ddddddddddddddd444444444444114
                                    4444444414444411bb12222111111111f111111111111111111111111111199999bb441144455444ddddddddd1ddf111111199ff77777777777777777777ffff111fff2ddddddddddddddd4444444444
                                    4444444411444444b112122111111111f181111111111111111111111111199999bf444444455dddddddd11dff1111111fff77777777771177777777777777777ff11111ff2dddddddddddddddd44444
                                    4444544445444444b1221211111111111181111111111111111111111111999999bf4444dddddddd111dffffff111f177777777777777777771177777777777777777ff1111f1ff2dddddddddddddddd
                                    411454554444444bb122221111111111119811811111111111111111111199999bb4ddddddddd11ffffffffffff77717177777777777777777777711177777777777777777ff111111ffdddddddddddd
                                    411444554144414bb12222111111111f111981811111111111111111111199999bbdddddddd11ffffffffffff717771771177777777777777777777711177777777777777777ff111111ff2ddddddddd
                                    444444444444554bb12222111111111f111111918111111111111111111199999bfdddddff1111fffffff71117771717777711777777777777777777777711777777777777777777ff1111111ffddddd
                                    114554144445544b112122111112211f191111111118811111111111111199999bfdff1111111ff7771117777777771777777777177777777777777777777777117777777777777777777ff111111fff
                                    111114144441444b1221211111121111188111111111111881111111111999999b21111111f171117777777771117777777777771777777777777777777777777177777777777777777777777ff11111
                                    11111114444544bb122221111122111111118911111111111118811111199999bb211ff771117777777771117777777777771177777777777777777777777117777777777777777777777777777777ff
                                    11111111114444bb12222112212211f111111811111111111111111811199999bff777771771777711117777777777777117777777777777777777777711777777777777777777777777777777777777
                                    11111111111144bb12122112112211f181111111111111111111111111199999bf7777777711111777777777777777177777777777777777777777717777777777777777777777777777777777777777
                                    1111111111111bb122221122122111118111111118111111111111111199999bb17777777777777777777771177777777777777777777777117777777777777777777777777777777777777777777777
                                    1111111111111bb122221122122111111111811111881111111111111199999bf71777777777777777777717777777777777777777777711717777777777777777777777777777777777777777777777
                                    1111111111111bb12222112112211f111111811111111188111111111199999bf77177777777777777117777777777777777777777711777771777777777777777777777777777777777777777777777
                                    1111111111111bb12122122112111f118111811111111111118111111199999b777771777777771177777777777777777777777711777777771777777777777777777777777777777777777777777777
                                    1111111111111b1121211221221111f1111811111111111111111811199999bb777777777771177777777777777777777777717777777777777777777777777777777777777777777777777777777777
                                    111111111111bb111121122122111fffff1111111111111111111111199999bf777777771777777777777777777777777117777777777777771777777777777777777777777777777777777777777777
                                    111111111111bb1f111112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777117777777777777777771777777777777777777777777777777777777777777777
                                    111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777177777777777777777777717777777777777777777777777777777777777777777777
                                    111111111111b1111111f1112111f7ffffff7ffffff111111111111199999bb7777777777777777777777771177777777777777777777777717777777777777777777777777777777777777777777777
                                    111111111111b1111111111f1111fffffffffff77fffff111111111199999bf7777777777777777777771177777777777777777777777771777777777777777777777777777777777777777777777777
                                    11111111111bb11111111111f111fffffffffffff7fffff11111111199999bf7777777777777777777717777777777777777777777777111777777777777777777777777777777777777777777777777
                                    11111111111bb1111111111111ffffffffffffffffff7fffff1111119999bb77777777777777771177777717777777777777777777771777777777777777777777777777777777777777777777777777
                                    1111111111bbfbb111111111111f7ffffffffffffffff7fffffff1119999bb77777777777771177777777777771177777777711111777777777777777777777777777777777777777777777777777777
                                    1111111bbbbbbbfbb1111111111ffffffffffffffffff7ffffffffff9999bf77777777771777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111bbbbb1b1bbbbfbb11111111ffffffffffffffffff7ffffffffffff99bf77777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1bbbbb1bb111b1bbbbfbb1111117ffffffffffffffffffffffffffffff9bb777711777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    bbbb1b111bb111b1bbbbfbb111ff7fffffffffffffff7fffffffffffff9bf717777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    b1bb111b1111b111b1bbbbfbb1ffff7fffffffffffff7fffffffffffff9bf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    b1111bb11b1b11b111b1bbbbfbbfffff7fffffffffffffffffffffffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111b11b11b1111b111b1bbbbfbbfffff77ffffffffffffffffffffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b1b1111b11b1111b111b1bbbbfbbbfffff7ffffff7fffffffffffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    b11b11bb11b1b1b1111b111b1bbbbfbbbfffff7ffffffffffffffffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b11bb1b1b1b111bb111b111b1bbbbfbbbffffff77ffffffffffffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffffffffffffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffffffffffffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1b11111b11b1bb111b1111b1111b111b1bbbbbfbbfffffffffffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbfffffffffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                                    1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777
                                    bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777777177
                                    bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777717777
                                    1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777771777777
                                    1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111d11111111111111111111111111177777777777777777777777777777777777777777777771177777777
                                    1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb11111111111111111111d111111111111111111111111111111111777777777777777777777777777777777777777777177777777777
                                    111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb11111111111111111111d111d111d11111111111111111111111111117777777777777777777777777777777777777771777777777777
                                    1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb11111111111111111dd11dd11d1111d11111111111111111111111111111177777777777777777777777777777777777177777777777777
                                    11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111ddd1ddd11ddd111111111111111111111111111111111111177777777777777777777777777777717777777777777777
                                    11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb111111111111111111ddddddd11dddddd1111d11111111111111111111111111111111777777777777777777777777711777777777777777777
                                    111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb1111111111111111111ddddddd11dddd1dd11dd111d11111111111111111111111111111111777777777777777777771777777777777777777777
                                    1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb11111111111111111111dd1ddddd11dddddd111d11111111111111111111111111111111111111117777777777777777177777777777777777777777
                                    1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb1111111111111111111111ddddddd11ddddddd11dddd111111111111111111111111111111111111111117777777777717777777777777777777777777
                                    bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb111111111111d1111111111ddddddd11ddddddd111ddddd1d111111111111111111111111111111111111111117777771777777777777777777777777777
                                    bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111ddddddd1dddddddd111dd1dddd1111111111111111111111111111111111111111111177777777777777777777777777777777
                                    bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111d1111111ddddddd11dd11dddd11ddd1ddd11111111111111111111111111111111111111111111117777777777777777777777777777777
                                    bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb11111111111111d11dd111111ddddddd1ddddd11dd11ddddddd111111111111111111111111111111111111111111111111117777777777777777777777777777
                                    1bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111dd1ddd11111ddddddd11dddddddd11dddddddd111111111111111111111111111111111111111111111111111117777777777777777777777777
                                    111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111ddddddd1111ddddddd1ddddddddd11ddddddddd111111111111111111111111111111111111111111111111111111177777777777777777777777
                                    1111bbbbbbbbbbbbbbbbbbbb111111111111111111ddddddd111dddd1ddd1dddddddddd11dd1dddd11111111111111111111111111111111111111111111111111111111111177777777777777777777
                                    11111bbbbbbbbbbbbbbbbb1111111111111111111ddddddd111dddd1ddddddddddddd111dddd11d1111d1111111111111111111111111111111111111111111111111111111111777777777777777777
                                    111111bbbbbbbbbbbbbb1111111111111111111dddddddd111dddd1ddddddd1ddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111777777777777777
                                    11111111bbbbbbbbbb11111111111111111111dd1ddddd111dddd1ddddddd1ddddd11dddddddd111dd111111111111111111111111111111111111111111111111111111111111111117777777777777
                                    111111111bbbbbbb1111111111111111111111ddddddd11dddddd1dddddd1ddddd11dddddddd111dddd11111111111111111111111111111111111111111111111111111111111111111117777777777
                                    1111111111bbbbb11111111111111111111111ddddddd1dddddddddddddd1ddddddddddddddd11dddddd1111111111111111111111111111111111111111111111111111111111111111111777777777
                                    11111111111bb111111111111111111111111dddddddddddddddddddddd1ddddddddddddddd11ddd11d11111111111111111111111111111111111111111111111111111111111111111111111777777
                                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11ddddddd11111111111111111111111111111111111111111111111111111111111111111111111117777
                                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddd1dddd11ddddddd111111111111111111111111111111111111111111111111111111111111111111111111111117
                                    1111111111111111111111111111111111111dddddddddddddddddddddddddddddd1ddddddddd1dd11111111111111111111111111111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                    `)
                                timer.after(1000, function () {
                                    game.setGameOverMessage(true, "Your Life is On The Game")
                                    game.setGameOverEffect(true, effects.confetti)
                                    game.gameOver(true)
                                })
                            }
                        }
                    }
                }
            })
        }
    }
    if (dan == 2) {
        index = 0
        dan += 1
        tiles.setCurrentTilemap(tilemap`수준4`)
        sprites.destroy(rp2)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.conver)
        mySprite2.sayText(game.ask("컷씬을 시청합니까?"))
        sprites.destroy(mySprite2)
        if (controller.A.isPressed()) {
            color.startFade(color.originalPalette, color.originalPalette, 500)
            scene.setBackgroundImage(img`
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888488888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888555888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888488888888888888888888888888888888888888888888888884554888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888848888888888888888888888888888888888888888888888888888888884545888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888884888888888888888888888888888888888888888888888888888884888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888845558488888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888445558898888888888888888888888888888888888888888888888888888888888888888888888888888888889888888888888888888888888888888888888888888888888888888888888
                8888888888885558889888888888888888888888888888888888888888888888888888888888888888888888888888888888988888888888888888888888888888888888888888888888888888888888
                8888888888848888888888888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888888888888888888
                8888888888888888888848888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999888888888888888888888888888
                8888888888888988888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888888888888888889898888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888cc8888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888ccc888888888ccc888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888881ccc888888888ccc888888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888888888888888888888888888888888888888ccccccc888888ccccc88888888888888888888888888888888888888888888888888888888888888888
                88888888888888888888888888888888888888888ccccccccc888888888888888888888888888ccccccc888888ccccc888888888888888888888888888888888888888888cccccccccc8888888888888
                88888888888888888888888888888888888888888ccccccccc888888888888888888888888888ccccccc888888ccccc888888888888888888888888888888888888888888cccccccccc8888888888888
                8888888888888888888ccc8888888888888888888c11cccccc888888888888888888888888888c11cccc88888ccccccc88888888888888888888cc8888888888888888888cc1c1ccccc8888888888888
                888888888888888888ccccc888888888888888888ccccccc1c888888888888888888888888888ccccccc88888ccccccc8888888888888888888cccc888888888888888888cccccc11cc8888888888888
                88888888888888888cccccc888888888888888888ccccccccc8888888888c88888888ccccc888c1ccccc88888ccccccc88888888888888888cccccc888888888888888888cccccccccc8888888888888
                88888888888888888ccc1c888888c888888888888ccccccccc888888888cc88888888ccccc888ccccccc88888ccccccc88888888888888888ccc1c888888cc88888888888cccc1ccccc88888888cc888
                88888888888888888cccccc88888c888888888888ccccccc1c888888888cc88888888ccccc888ccccccc88888ccccccc88888888888888888cccccc88888cc88888888888ccccccc1cc88888888cc888
                88888888ccc888888cc11c88888ccc88888888888ccccccccc88cccccc8cc88888888ccccc888ccccccc88888ccccccc888888888cc888888ccc1c88888ccc88888888888cccccccccc8ccccccccc888
                c8cc8888ccccccccccc1ccc888ccccc8888888888ccccccc1c88c11ccc8cc888888888cc1cc88ccccccc888cccccccccc8cc8888ccccccccccccc1c8888cccc8888888888cccccc11cc8c11cccccc888
                cccc88888c1cc1ccccccccc888ccccc8888888888ccccccccc88cccc1c8cc88888888cccccc88cc1cccc888ccccccccccccc8888cc1ccc1cccccccc8888cccc8888888888cccccccccc8cccc1cccc888
                cc1c88888ccc1111ccccccc888ccccc8888888888ccccccccc88cccc1cccc88888888cccccc88ccccccc888ccccccccccc1c8888cccc1c11ccccccc8888cccc8888888888cccccccccc8cccc1cccc888
                cccc8888cccccccccccccccc88cccccc88cc8cc8ccccccccccc8c11cccccc88888888cccccc88ccccccc888ccccccccccccc8888cccccccccccccccc88cccccc888c88ccccccccccccc8c11cccccc888
                cc1c8888cccccccccccccccc88cccccc88ccccccccccccccccc8ccccccccc88c88c88cccccc88ccccccc888ccccccccccc1c8888cccccccccccccccc88cccccc888cccccccccccccccc8ccccccccc888
                ccccc8cc1c1ccccccccccccc88ccccccc8cccc11ccccccccccccc11ccccccccc8ccc88cc1cc88ccccccc888ccccccccccccccc8ccc1ccccccccccccc88ccccccc888c11cccccccccccccc11cccccc8cc
                ccccc8cccccccccccccccccccc1cccccc8cccccccccccccccccccccccccccccc8ccc8cccccc88ccccccc888ccccccccccccccc8cccccccccccccccccccccccccc8ccccccccccccccccccccccccccc8cc
                ccccc8ccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccc888ccccccccccccccc8cccccccccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccc8ccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccc8ccccccccccccccc8cccccccccccccccccccccccccc8c1cccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccccddccccccccccccccccccccccccc8ccccccccddcccccccccccccccccc111ccccccccccccccccccccc8ccccccccccccccccdcdccccccccccccccccccccccc8ccccccccccccccccccccccccccc11c
                ccccccccccccdcccccccccccccccccccc8ccccccccccccccccccccccccccccc11ccccccccccccccccccccc8ccccccccccccccccccccddcccccccccccccccccccc8cccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccc1cccccccccccccc8ccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccdccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccdcccccccccccccccc1c
                ccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccc111cccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccc11c
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccc
                ccccccccccccdccccddcccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccddccccddccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccdccccccccccccccccccccccdccccccccccccccccccccccccccdcccdcccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccdccccccccccccccccc
                ccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccdcccccccccdcddccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccddcccccccccccccddddcccccccccccccccdcccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccddccccccccccccccddcdccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                bddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb
                bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddd11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddd11111111111111111111dddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddd1111111111111111111111dddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd1111111111111111111111dddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddd1111111111111111111111dddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd1111111111111111111111ddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                `)
            timer.after(3000, function () {
                color.startFade(color.originalPalette, color.originalPalette, 200)
                scene.setBackgroundImage(img`
                    4444445444444444444444444445444544444444444447774445444444444447444447744447777744445554444444444477777444447444444544444777477774444744477774677776666677766666
                    5544444444444454444444555444444444444555444447774444444447774447744477744447777774455554477744544777777444447744454444457777777774444774477776677777766677776666
                    5544445554444445554444555554444444455555544447774444444447777447744477744477777774445554777744444777777444477744454444447777777774477777677776777777766777776666
                    5544445554444445554444555554444555555555444477774544474447777477744477744477777744444444777744444777777444477744466766667777777776677777777776677777767777776666
                    4444445554444445554554455554444555555555444777774444474777777477744477774777777744666644777446666677766666677766666776667777776e66677777777777677777677777777666
                    44544444444444444444555455544545555554444447777744444777777774777747777777777777e6666666777666766677766666677766667776667777e66e6666e777777777667777777777777676
                    44444444455444445444555455544444444454444447777744444777777774777744777777777777776677766e666676666e666666677766667777666ee777e6666e666e777777666e667777ee777776
                    44445554444444444444555444544445444444444447777777744777777744777666777777e6e777776677766e666677666e666666666e66677776666e777766666e666e777776666e66777ee6777777
                    445455544744444445444444444444444444444447777777777477777777666e6666777776e6e777777777766e666777666e6666e6666e666666e66667777777666e666e777766666e66e66667777777
                    4444555447444544554474445444444447444474477777777777777766e66666e676777666e6e666e677777666e66777666e6666e6666e666666e6667777777766e666e66e6666666e66e66777777777
                    44444444474444444444744444447444477444744777777777777777666e6666e6766e6666ee6666e67776e666666777666666666e666e6666666e6677777777666666666e666666e666e67777777777
                    444544444747445554447444444474447774777444777e6677777776666e6666e7766e666e666e66e66e66e66666666e666666666666666666666666777777666e66666666e66666666e6677777776e6
                    444454444747445554477745454477447774777446766e66777777666666e66667776ee666666e66e66e66e66666666e6666666666666555666666667777e6666e666666666666666666666e66e7e6e6
                    444444444777445554477744444777747774777677766e666e677766666666e667776ee666666e6e666e666e66644444e444444444444555444444444477e44444e44445554666666666666e666ee6e6
                    444444444777444444777744447777777776777777776e666e6666e666666666677766e6666666666666e444444444544444445554444555445444444444e4444444544555444444666666666666e6e6
                    4447444477774477757777447777776677767777777766666e6666666666666666e666e6666444444444544444444444444454555555444455555444444e455544444445554544444444444466666e66
                    444744447777477777777744777776666e667777777776666e6666666666666666e664e44444444444445555444445555454555555554444555554444444455544544444444444444454455554444666
                    444774447777477777777747777776666e666e6777777766666666666664464444e444e44445444444445555444444555445555445554444555554455444455544444455544444454444455554444446
                    444774777777477777777767777777766e666e6777767666666666666644444444e444444444444544445555444444555444555444444444444444444444544444444455544444444444455554444444
                    444774777777477777777667777777766e666e66777666666666655544444444444544444455544444544444445444444444444544444444444444544444444444444455544444555444444444455554
                    4477747777777777777776666777777666e666666e666666666645554555444445454444455555544444444444444444444444444444444dddddddddddddd44444444444444544555555445444455554
                    4477747777777777777e6666e67777766666666666e66666644445554555444444445444445554444444444dddddddddddddddddddddddddddddddddddddddddddd55444444444555555444444455555
                    447774777777777777766666e6777776666666666666444444445444455554444444454444444d5ddddddddddddddddd11111111111111111111111111111ddddddddddd444444555555445444455555
                    4477777777777777777666666677777666666666655544444444455444555445444444444ddddddddddddddddd111111111111111111111111111111111111111bddddddddddd4544444444444544455
                    477777777777777e66676666677777666666666445554455544444444455544444ddddddddddddddddddd11111111111111111111111111111111111111111111bbbbbddddddddddd544444444444444
                    477777777777777e66777666677776666666444445554455544444444444444ddddddddddddddddd111111111111111111111111111111111111111111111111111bbbbbbddddddddddddd4444444444
                    47777777777777ee667776666777766666455544444444555444444545ddddddddddddddddddd1111111111111111111111111111111111111111111111111111111bbbbbbbddddddddddd5ddd544544
                    47777777777777ee66777766666e6664444555444444444455544ddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111bbbbbbddddddddddddddddd444
                    47777777777766e6e6777766666e66444445554445444444555dddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111bbbbbbbddddddddddddddddd4
                    77777767777766e666777766666e44454444444444444ddd555dddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbddddddddddddddddd
                    77777767776e66e666777766666e44444444444444dddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbdddddddddddddddd
                    77777667776e66666677766664e454444454444ddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbdddddddddddddddd
                    7777766e666e6666666e66444444444444ddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111f11111111111111111111111bbbbbbbbddddddddddddddd
                    7777776e666e666666666444544444ddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbddddddddddddddd
                    7777776e666e666666644444444ddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111f111111111111111111111bbbbbbbbbdddddddddddddd
                    7777776e66666666664444444dddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111f111111111111111111111bbbbbbbbbdddddddddddddd
                    7777766666666666644444ddddddddddddddddddddddddddd111f111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbd7dddddddddddd
                    77777666666666664444ddddddddddddddddddddddddddd111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbd7dddddddddddd
                    777766666666666444ddddddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111bbbbbbbbbbd77dddddd7dddd
                    677766666666bbbddddddddddddddddddddddddddddd1111f11111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111bbbbbbbbbbb77dd7ddd7dddd
                    677766666666dddddddddddddddddddddddddddddd111ff11111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111bbbbbbbbbbb778d7ddd7dddd
                    66e666666666dddddddddddddddddddddddddddd111ff111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111bbbbbbbbbbb7778877dd7dddd
                    66e66666666dddddddddddddddddddddddddddd11fff1111111111111111111111111111111111111111111111111111111111111fff11111111111111111111111111bbbbbbbbbbbbbe78777d77dddd
                    66e666666dddddddddddddddddddddddddddd111ff1111111111111111111111111111111111111111111111111111111111111fff1111111111111111111111111111bbbbbbbbbbbbbe88777d777ddd
                    66e6666dddddddddddddddddddddddddddd111f1111111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111bbbbbbbbbbbbbb8e88778777ddd
                    66e666dddddddddddddddddddddddddddd111f111111111111111111111111111111111111111111111111111111111111fff11111111111111111111111111111111bbbbbbbbbbbbfb8e85e88777ddd
                    66e66ddddddddddddddddddddddddddd111f11111111111111111111111111111111111111111111111111111111111fff1111111111111111111111111111111111bbbbbbbbbbbbfbb8e88e88777ddd
                    6e66ddddddddddddddddddddddddddd111f1111111111111111111111111111111111111111111111111111111111fff111111111111111111111111111111111111bbbbbbbbbbbfbbb8e88ee88e7ddd
                    666ddddddddddddddddddddddddddd111f1111111111111111f11111111111111111111111111111111111111fffff1111111111111111111111111111111111111bbbbbbbbbbffbbbb8888588878ddd
                    666dddddddddddddddddddddddddd11ff11111111111111111f11111111111111111111111111111111111ffff1111111111111111111111111111111111111111bbbbbbbbbfffbbbbbe788788878ddd
                    66dddddddddddddddddddddddddd11ff111111111111111111ff1111111111111111111111111111111ffff111111111111111111111111111111111111111111bbbbbbbbffbbbbbbbbe7887888e78dd
                    6dddddddddddddddddddddddddd1fff111111111111111111111ff1111111111111111111111111fffff11111111111111111111111111111111111111111111bbbbbbbfffbbbbbbbbbe7787888e77dd
                    dddddddddddddddddddddddddd11f1111111111111111111111111ffff111111111111111111ffff11111111111111111111111111111111111111111111111bbbbffffbbbbbbbbbbbb877777887778d
                    ddddddddddddddddddddddddd11f11111111111111111111111111111fffffffffffffffffff111111111111111111111111111111111111111111111111bbbbfffffbbbbbbbbbbbbbb877777787778d
                    ddddddddddddddddddddddddd1f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111bbbfffffbbbbbbbbbbbbbbbb877777787778d
                    dddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111bffffbbbbbbbbbbbbbbbbbbb777777787778d
                    ddddddddddddddddddddddd11f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffbbbbbbbbbbbbbbbbbbbb8777777888777d
                    ddddddddddddddddddddddd1f111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffbbbbbbbbbbbbbbbbbbbbbb8778777888778d
                    dddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffbbbbbbbbbbbbbbbbbbbbbbbb88e8777888e78d
                    ddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff111bbbbbbbbbbbbbbbbbbbbbbbb88e88e8788e88d
                    ddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111bbbbbbbbbbbbbbbbbbbbbbbbb88e88e8885ee8d
                    ddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff1111111bbbbbbbbbbbbbbbbbbbbbbb7888e88e8788ee8d
                    ddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff111111111bbbbbbbbbbbbbbbbbbbbbbbb7888888e8788ee8d
                    dddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111bbbbbbbbbbbbbbbbbbbbbbbbb7758888e7788e8ed
                    ddddddddddddddddddddd1f111111111111111111111111111111111111111111111111111111111111111111111111111111fff111111111111111bbbbbbbbbbbbbbbbbbbbbbbb87778888e5788e8ed
                    ddddddddddddddddddddd11f11111111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbb87778858e777888ed
                    ddddddddddddddddddddd11ff111111111111111111111111111111111111111111111111111111111111111111111ff111111111111111111111bbbbbbbbbbbbbbbbbb7bbbbbb887778888877788ded
                    ddddddddddddddddddddd1111f111111111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111bbbbbbbbbbbbbbbbbbb7bbbbb887e777888877788ddd
                    ddddddddddddddddddddd111ffff11111111111111111111111111111111111111111111111111111111fff1111111111111111111111111111bbbbbbbbbbbbbbbbbbbb77bb58888ee77888777788ddd
                    ddddddddddddddddddddd111111fff11111111111111111111111111111111111111111111111111f111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbb777b88887e877878777788ddd
                    dddddddddddddddddddddd1111111ff1111111111111111111111111111111111111111111fffff1111111111111111111111111111111111bbbbbbbbbbbbbbbbb7bbbb777b88887e8e787887e788ddd
                    dddddddddddddddddddddd11111111fff1111111111111111111111111111111111111fffffffff111111111111111111111111111111111bbbbbbbbbbbbbbbbbb77bbb77b878877877777888e88dddd
                    dddddddddddddddddddddd1111111111ff1111111111111111111111111111111ffffffff1111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbb77bbb778878877877777788e88dddd
                    ddddddddddddddddddddddd11111111111ff111111111111111111111111ffffffff11111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbb777bb777877887778e777788e88dddd
                    ddddddddddddddddddddddd11111111111111fff111111111111111fffffff111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbb777bb777877887788e887788eeddddd
                    ddddddddddddddddddddddd11111111111111111ffffffffffffffff1111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbb77777877778778e788e8878888eddddd
                    ddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb7778877788778e788788e8888eddddd
                    dddddddddddddddddddddddd11111111111111111111111111111111111111111111111111111111111111111111199911111bbbbbbbbbbbbbbbbbbbbbbbbbbbb7e8887e8877787788788e888ddddddd
                    ddddddddddddddddddddd11d111111111111111111111111111111111111111111111111111111111111111199999ff9111bbbbbbbbbbbbbbbbbbbbbbbbbbb8888e8888e887e8777887788588ddddddd
                    dddddddddddddddddddd1111f111111111111111111111111111111111111111111111111111111111199999f9fffff911bbbbbb7bbbbbbbbbbbbbbbbbbb788888e8888e888e87e887778888dddddddd
                    ddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111199999ff9fff9f999911bbbbbbb7bbbbbbbbbbbbbbbbbb878887e58888e888e77e887788888dddddddd
                    ddddddddddddddddddd111111f1111111111111111111111111111111111111111111111199999ff9ffff999999ff9bbbbbbbbbb7bbbbbbbbbbbbbbbb88778887e88888e888e777788e7888ddddddddd
                    ddddddddddddddddddd1111111f1111111111111111111111111111111111111111199999fff9ff999999fff9f9999bbbbbbbbbb77bbbbbbbbb7bb78888877887e888888e588777888e858dddddddddd
                    ddddddddddddddddddddd111111f1111111111111111111111111111111111191999ff9ff99999979ff9f999997f97bbbbbbbbbb77bbbbbbbbb788788888778877888888888877e888e888dddddddddd
                    dddddddddddddddddddddd111111f1111111111111111111111111111111119ffff999999ff9fff799999ff9ff79b7bbbbbbbbb777bbbbbb788788775878e78777888887888887e88888dddddddddddd
                    ddddddddddddddddddddddd1111bbf1111111111111111111111111111111199999ff9fffff999977f97fff9ff77bb7b7bbbbbb777b78888788778778878e8877788887788888ee8888ddddddddddddd
                    dddddddddddddddddddddddddbbbbbbf111111111171111111111111111119ffffff9f99999fff977f97ff999977bb7b7bbbbbb77887888877778877887887877788887778888ee588dddddddddddddd
                    dddddddddddddddddddddddddddbbbbbff111111117111111111111111119ffff99999fff9fff9777797799ff777bb777b8888887887588777778777877877877787888e885888e88ddddddddddddddd
                    dddddddddddddddddddddddddddddbbbffff1111117111111111111111119f999ff9999999999f7777f779999977bb7778878888e88788877777787787778e8777877eee8888888ddddddddddddddddd
                    dddddddddddddddddddddddddddddddbbbb6676111771111111711111119ff99999fffff9f999977779779999977887778878888e8877788e877787787e78e8e8877787888887ddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddd66676666771111111711711119ffffff9ff99799fff9f7ff977988887888e87787e88888777788e87788e8887788ee88878888877ddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddd66676566776667611777111bb99999999999979997999e9977788888e888e77777e888887778888e8788e8887788e8888e86666ddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd6666776677766676677776666788888888888878887887e7887788877e88e8877778885887778888e8e88ee88e886e6666e666ddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd66667766677666776777766667688788888788778878877788e877877888e78ee77888888777888888e888e66e66e6666666ddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd66667776676666776777766667766766678788778877877788e87787e888878e77788e8888e8888866e666666e66e6666dddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd666777666e6666776677776667766766676776777877877788e777778888778e7777888888e8666666e66666666666ddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd6666e5666e676777677777667776676667777677767777776667777e666677767776666666e6666666666666666dddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd6666e6666e67677777e6776667766776677776777677777776777776e6666776ee66666666565666666566666dddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd666566666e67777776e6776567766776777777777777777776776e7676677776e7666666666566666666666dddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddd66666666667777777677776667767776777777e77777767766676e7676677776e7666666666566666666ddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddd6666666677777e7766676666e666777777e77ee667777e7666e6e7677666e666e56666666666666ddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddd666665667766e66666e6666e666777776e76ee677777e6666e6e66e6666e666e6666666666ddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddd6666666e66e66666e6666e6667666e6e76ee657667e6656666e6e6666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddddd666666e6e66666e66666666e666e6e66e66ee66766666666e6666666665666656dddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddddddd6666e6666665e66656666e666e6e66e66ee66666666666e666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddd666666666666666666e666e6666e666e66666666566e66666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddddddddddddddddd66666666665e666e6666e666e66666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd666666e66666656e66666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd6666666666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    `)
                timer.after(4000, function () {
                    color.startFade(color.originalPalette, color.originalPalette, 200)
                    scene.setBackgroundImage(img`
                        6666666699966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669996
                        6666666699966666666666666666666666666666666666666666665556666666666666666666666666666666666666666666666666666666666666666699966666666999666666666666666666669996
                        6666666999966666999666666666669996666665556666666666665556666666666666666666666655556666666666666666666666666666666666666699966666666999666666666666666566669996
                        6666669959966666999699966666669996666665556666666665555556666666666666566666566655556666666666666666656666666666666666655599966666666999666666666666666666666666
                        6666695999665666999699966665559996666665556666666665556666666665556666666666666655555666666666666999666666666666666666655566666666666665556666666666666666666666
                        6666999996666666666699966665556666666696666666669995559666666555556666666666666666666666666565666999666665556566666656655566666656666665559666566656666666666666
                        5566555966655566666555566695556666666666666666669999966566666555556699599966666666666666666566666999666695556666666666666666666669666665556666696666699966666666
                        5566555666655566666555566666666666666696666699969996666666666555566699999966666666666666666666666666966665556666666666666666656666665556666666666666699966666666
                        5599555666655566666555566666655955566666696699955566666666666666666699999955595566666999966666666666666965956655596999666666666666665556666666666666659966666566
                        6699966665666666666666666669955555599966666699955566666666666665666699966655555566666999666566666666666965556655569999666666656666665956666666566666666666666666
                        6699965666666666666556666669955555599966666666655556666666666666666666666655555566666959666666966666666665556955566999666555656666666999666666666666566655566666
                        6666665666666666999665666669999559699966666666666666665666666666999666666659969665666665556666666666566666666666666666666555665966666999666666666999555655569996
                        6666555666666666999666666555666666666666666666666666666666566666999666666666666666666665556666669666566666665666666666666555665566666999666999669999555655569996
                        9996555699966666999666666595566666699966666666666666666656666666999666999966666666666665556666699966566666666666666666666666666656966669696959666999555666669996
                        9996555699955566666666666595566666699966666666666666669669996666999666999966669666666666666666699966666696696666666656655566666666665666666999666666999666669996
                        9995666699955566666659665555566566699965556666699565556669996666999666999966666666666669696666695966999666696666666666655566666666666666655966666666999666666666
                        6566666699955599966566665555666666666655556666699965556669996666666666666666666999666666956666666666999666696666666666655566999555666666655566666666666666666666
                        6666666655969999966566665556666666666665556999659965556669666666555695566666666999666666666666666696995556696666666666666666999555666666655566666666666666666666
                        6666566699969999955566669996669996666666666999655566666666665556555699999666666999666666666666666666665596999666666666666666999555666666666666666666666666666666
                        6666699999966666655555669996669996666656666959655566666666665556555699999996666666666666666666666566665556999696666565556599666666666666656666666566555665666666
                        6666699966666666655555996669999996666966666666655566666666665556666669999999666666666665556666666655666666999666666665555666966665666666666666666666555666666999
                        6555699999666666655555996669996666666655599966699966666666666666666665559999666666666665559966669996599665556666665665556666666669996669666666666666555666666999
                        f55566699996595666655999666999666656665559996666666666666666666666666555999999666666666555966666999699999555656666669666666666566999666666566666666666666666699f
                        f55566699999955666669996666666666566665559996666666665665556666666666555966999666666999695556666999699999555666666666666666666656999666666699966666666666669995f
                        6f666666999955569996666666666666666666669996666666666666555666666666666666699966666699999555666666666699966666666669555666666666566665666669996666665666666599f6
                        66f6666555996666999999996666666666666666999666666666566655565556666666966666666666669999655566666966666666666666666655566666666669666666666999666666666666699f66
                        666f66655566666699999999666699669666666699966666666699966666555666666696666666699966699966666666666666666666666666695556665666555666656666666699959666666666f566
                        6696f5959566666666699999699966666666666666666669666699966669555699966696666666695555666666666666666666666696655566666666666666555666666666665559999996666666f566
                        6666f555666666566666666669996666666666669996666666669996666999669995559665666669996666669996669996696666666665556665666666665655566999666666555599999966656f6566
                        6666655596666656666666666999656655666669999666696666666666699966999555966666665669996666999666999666666669999555566699956966666666699966666655996999996666f66566
                        66666f666966669996666666666966666655566999966666666666666666666666655596666655556999666699955599966666665999666665559956696666666695596666966555666999666f999666
                        666666f6666666999666665556666666665556699965666666666666666666666666666666665555699966666665556666666666699966666666999999655566665556655595666665666666f6999666
                        6656999f666656999699965556666666665956666666655566669996696666666666666566665555666666666665556666659555556666666666666999695599995556655555566666666666f6999666
                        66669996f5956666669996595666666669955566666655556666959666666966696666566555696666666666666666699595555556666666656666699965555599966695555556666666666f65556666
                        666699966555666666999669996666696995556666666555699999966666666666666666655566666666666666666666555559555666666666666666999695555556666966555666666666f665556666
                        66666666655566666666666999666666699555666666666669996555666665556666666bb555bbbbbbb999bbbb66666655555666666666666666666699966555555666666695666666666f5665556666
                        66669666666f6696966666699959669666666666666666666999955566666555bb9bbbbffffffffffff999ffffbbbbbb9bbbbbbb66666666666666669996666655966666666666666566f66666699966
                        699966655566ff6646666666666666666666666566666666666695555bbbb555f99ffff6666666666669996666fff5fff999ffffbbbbbbbbbbb666666666666666666666666666666566f99966699966
                        69999995556666f6666656666666966666595666666666666666b5559ffff666669666666665555666666666666666566999996fffffffff5ffbbb66666666666666666666699966656f655566699566
                        699959955566666f6666665666665669665556666666666bbbffff5556666666666666656665555669999666666666666999996666666556666f999b66666666666699966659996666ff655566699966
                        6666999666999666ff666666666666669555596666bbbbffff666666666695566666666566655556699996666696666666999966666656666666999fbbb6656666669996666999666ff6955566699566
                        666665556699966666f66666666659969555666b5bffff6666959566666596666666665556666666659996669666666666666666666666699966599555fbb6665556999666599969f555599666566666
                        666665556699966666f659995555556695556bbfff666566665555696665596699969655566666646656466666665666666666666666666999666665556ffbb6555666696666666ff555599666666666
                        6656655566666665669ff99955555566666bbff96666666666555956666966559996665556666666666646669966666665666666666666699966666555666ffb55566666666666ff5955566669996666
                        6566666666666666666669995555556666bff666666665666955556666666666999666646665554999666466696666656669666695556666999666666666666ffb6666666666fff66666666669996566
                        5999666666655599666666ff55566666bbf659566666566666666555666666695966666666655569444666665666666666646999955566669996666566666666ffb66666666f66699566655569996659
                        699966699965559699966666ff6665bbf5559556666666666566694566666665996666466565559949644446469654669646699995556666999666666666666666ff95596ff666699999955566566699
                        69995469996555969996666666ff6b5f6555595666999666666465556466555999666666666559994466566666666666696669596555666666666699966655566666555ff66666699999955556566699
                        6999669999666664999666665666ff6665556666669596666666699965665456664646664666999666665666664559466666666564559554566666999666555669955556666966596699966666666699
                        66666699966666666646666555bf6ff566666666969996666666699946655456666666666666666666566666666699945666666665559555549966999666555666f55559666666666655666666666666
                        66666699945565666666666555f66665ff666666666665666546664666646644466664666664444666646664466699966666666669999555599966466666666ff9555959b66666666666699999966666
                        6666666669555665666666655999996666ff65596666664664666644464666464464444646466444444496466666446644666466466666999999646666666ff669996966999666666666699999955666
                        6666666665559966666666bff66999996666f55566666666666464666646646664666666666646666466666446466664646664664666466464666466666ff46669995996999666666665559959966666
                        666666666555996666666bf69995996695596595f9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4f444ff4ffff4ffffff6664649999996999b66666999669995656666
                        55566466666949656666b96699966666555666466ff9999999999999999999999999999999999999999999999999999999999999999999999999999999f6644666999996665fb6666999669996666666
                        5556699966666666666b46969996666655566666f9f999999999999999999999999ffffffffffffffffffffffffffff99999999999999999999999999f9f64666664666666555bb56999669596999566
                        555669955566666666b555665666656665466466f9f99999999999999999999999f111111111111111111111111111f9999999999999999999999999f99f66646566665666555ffb6995669555559666
                        6666995555666666bbf55566556665666649456f99f99999999999999999999999ff99ffffffffff99999fff9999f1f9999999999999999999999999f999f664666666959655565fb665669955599666
                        666699555566669bff65556665666999664646f9999f9999999999999999999999f1f99999999999ffffffffff9f11f999999999999999999999999f99999f666669999996699966fb65666655596666
                        666659555669969f669666666666699964666f99999f999999999999999999999f11f9fffffffffff99f9999f99f11f99999999999999999999999f999999f6646694995966999666fb6666666556666
                        6666566659646b96699956666665559964466f99999f999999999999999999999f1f1f999ffff999fffffffffff1ff1f9999999999999999999999f9999999f6649595666669999666fb666666666666
                        966666669999999996555669666555645966f9999999f9999999999999999999f1ff1f9ff99999ff99999f9999f1f91f999999999999999999999f999999999f6699555566669996555fb65666666666
                        66666666666b99555655569666655546966f99999999fffffffffffffffffffff1ff1ffffffffffffffffffffff1ff1ffffffffffffffffffffff9999999999f66645545666599965556fb6666669995
                        6966966669ff6655566499666666646664f99999999f66777777771777777777f17f111111111111111111111111771f777777777717777777777f9999999999f64955596665666655565fbb66655596
                        66665666bf649996666999666664666466f9999999f667777777771777771777f1f17fffffffffffffffffffffff171f7771777777717777777777f9999999999f64966969666666666666ffb6669956
                        6666666b4969996666699446545466646f99999999f667777777717777771777f11f777777777777777777777777f11f7777177777717777777777f9999999999f669666666666666699966ffb666666
                        666555bf966999669666666955466696f99999999f6677777777717777717777f1f777777777777ff777777777777f1f77771777777717777777777f9999999999f6646466455666959995555fb66666
                        555595f666666666666666695546466f99999999f66677777777177777717777ff7777777777777dd777777777777ff7777771777777177777777777f9999999999f6466666655599999955566fb6666
                        5555595569666666656666694954666f99999999f6677777777177777717777777777777777777855877777777777777777777177777177777777777f9999999999f646664999555999665556999b666
                        559555556555966646699956664646f99999999f667777777771777777177777777777777777777557777777777777777777771777777177777777777f9999999999446469495559955666666999fb56
                        6bf69595954596666669996466466f99999999f6667777777717777771111111111111111111111dd11111111111111111111117777771777777777777f9999999999f66599465549556666669996fb6
                        bf66669995559666656999994466f99999999f66677777777717777777777777777777777777777dd77777777777777777777777777777177777777777f9999999999f664466655559566666656666fb
                        f666664994996666665559464464f99999999f6667777777717777777777777777777777777777777777777777777777777777777777771777777777777f9999999999f666464999559566656666666f
                        666666666999665556554644646f99999999f666777777777111111111111111111111111111111111111111111111111111111111111111777777777777f9999999999f466664995595666556566666
                        99566666699966555655464664f99999999f66667777777777777777777777771777777777777777777777777777777177777777777777777777777777777f9999999999f65669495545666566666655
                        9996696966666655566999466f999999999f6667777777777777777777777777177777777777ff77777777777777777177777777777777777777777777777f9999999999f49645646696995566666655
                        9996666666466966666494664f99999999f666777777777777ff777777777777177777777777dd777777777777777771777777777777777777777777777777f9999999999f6466546666959595966655
                        666666666566555466699466f99999999f6666777777777777dd777777777777177777777777337777777777777777717777777ff7777777777777777777777f9999999999f666664669549599966666
                        66666666699955566666466499999999f666677777777777773377777777777771777777777d13d777777777777777177777777dd7777777777777777777777f9999999999f664664666666699965666
                        5555666669955556646466f999999999f6666777777777777d33d77777777777717777777777d177777777777777771777777773377777777777777777777777f9999999999f66465666656665666666
                        5556666669996666666666f99999999f6666777777777777771177777777777771177777777d7d777777777777777117777777d33d77777777777777777777777f9999999999f6666666666566666666
                        555666999666665666696f99999999f6666677777777777777dd77777777777777117777777777777777777777777177777777711777777777777777777777777f9999999999f6644466946666699565
                        66666699946666664664f999999999f666677777777777777777777777777777777111777777777777777777777711777777777dd7777777777777777777777777f9999999999f694956599555699966
                        6666669944666666446f999999999f66666777777777777777777777777777777777711117777777777777777111777777777777777777777777777777777777777f9999999999f94545959555699966
                        6666666666666666666f99999999f666667777777777777777777777777777777777777711111111111111111177777777777777777777777777777777777777777f9999999999f64555959555699966
                        999666666566646446f99999999f66666777777777777777777777777ff7777777777777777777777777777777777777777777777777777777777777777777777777f9999999999f6944599996666666
                        99966666666646646f999999999f6666677777777777777777777777ddf7777777777777777777777777777ff77777777777777777777777777777777777777777777f9999999999f655599996666556
                        9955555646664666f999999999f666667777777777777777777777777337777777777777777777777777777dd777777777777777777777777777777777777777777777f999999999f644665666666566
                        6655555996666444f99999999f666666777777777777777777777777733d77777777777777777777777777733777777777777777777777777777777777777777777777f9999999999f46664666955566
                        665555599646664f999999999f666667777777777777777777777777711777777777777777777777777777d31d777777777777777777777777777777777777777777777f9999999999f6466666955565
                        66666699964666f999999999f666666777777ff777777777777777777dd77777777777777777777777777771d77777777777777777777777777777777777777777777777f9999999999f665466955565
                        6666456666644f999999999f6666667777777fd777777777777777777777777777777777777777777777777d7d777777777777777777777777ff77777777777777777777f99999999999666646556566
                        6666666664444f99999999f6666667777777733d77777777777777777777777777777777777777777777777777777777777777777777777777dd777777777777777777777f9999999999f46664966666
                        666666664646f999999999f6666667777777d3377777777777777777777777777777777777777777777777777777777777777777777777777733d777777777777777777777f9999999999f4644496656
                        66669646466f999999999f666666777777777f377777777777777777777777777777777777777777777777777777777777777777777777777d337777777777777777777777f9999999999f4666445656
                        6546964446f999999999f6666666777777777117777777777777777777777777777777777777777777777777777777777777777777777777771177777777777777777777777f9999999999f645645996
                        5664994466f999999999f6666667777777777dd777777777777777777777777777777777777777777777777777777777777777777777777777dd777777777777777777777777f9999999999f46544999
                        666466446f999999999f6666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f999999999f66664996
                        66499446f999999999f66666667777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f999999999ff6469466
                        6649946f999999999f6666666777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f9999999999f444666
                        6499446f999999999f66666667777777777777777777777777777777777777777777777777111111111111117777777777777777777777777777777777777777777777777777777f999999999f644646
                        466666f999999999f666666677777777777777777777777777777777777777777777711111177777777777711111777777777777777777777777777777777777777777777777777f9999999999f64666
                        66646f999999999f66666666777777777777777777777777777777777777777771111177777777777777777777771111777777777777777777777777777777777777777777777777f9999999999f6946
                        6666f9999999999f6666666777777777777777777777777777777777777777771117777777777ff777777777777777711777777777777777777777777777777777777777777777777f999999999f4466
                        6646f999999999f66666666777777777777777777777777777777777777777111777777777777dd777777777777777777117777777777777777777777777777777777777777777777f9999999999f666
                        666f999999999f66666666777777777777777777777777777777777777777117777777777777333d777777777777777777117777777777777777777777777777777777777777777777f9999999999f46
                        66f999999999f66666666677777777777777777777777777777777ff7777117777777777777d73377777777777777777777117777777777777777777777777777777777777777777777f999999999f64
                        6f9999999999f66666666777777777777777777777777777777777dd7771177777777777777771177777777777777777777717777777777777777777777777777777777777777777777f9999999999f6
                        6f999999999f66666666777777777777777777777777777777777733777177777777777777777dd777777777777777777777117777777777777777777777777777777777777777777777f9999999999f
                        f999999999f666666666777777777777777777777777777777777d33d7717777777777777777d7d7777777777777777777777177777777777777777777777777777777777777777777777f9999999999
                        9999999999f6666666677777777777777777777777777777777777117711777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777f999999999
                        999999999f66666666677777777777777777777777777777777777dd7717777777777777777777777777777777777777777777177777777777777777777777777777777777777777777777f999999999
                        99999999f6666666667777777777777777777777777777777777777777177777777777777777777777777777777777777777771777777777777777777777777777777777777777777777777f99999999
                        9999999f666666666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f9999999
                        9999999f66666111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111117f9999999
                        999999f6666666667777777777777777777777777777777777777777777777777777777777777a77777777777777777777777777777777777777777777777d7dd777777777777777777777777f999999
                        99999f66666666667777777777777777777777777777777777777777771777777777777777777aa777777777777777777777771777771f77777777777777773337777777777777777777777777f99999
                        99999f66666666677777777777777777777777777777777777777777771777777777777777777aa77777777777777777777777177777f17777777777777777733d777777777777777777777777f99999
                        9999f666666666677777777777777777777777777777777777777777771777777777777777777ffd777777777777777777777717777777777777777777777771177777777777777777777777777f9999
                        999f666666666677777777777777777777777777777777777777777777117777777777777777dff777777777777777777777711777777777777777777777777dd777777777777777777777777777f999
                        `)
                    timer.after(2000, function () {
                        color.startFade(color.originalPalette, color.originalPalette, 200)
                        scene.setBackgroundImage(img`
                            666666666666666666666666666555666666655596555666666666666666666666666666666666666666666ffffffffffffffff6666666666666666666666666666f6666666666666666666666666666
                            699966666666666666666666666555999666655596555666666666666666666666669996666fff6666666666ffccffffffffffffff66666666669996999566655566666699966666666f6666f6666666
                            699965556699966666666666666555955565555596555666669666566666666666669996666ffff6666666666ffcbfffffffffffffff666669669996999666655566666699555999666f666f66666666
                            6999655566999655566655555666669555655566666666666666666666fff66655569999966f1ff6666656666666cbbfffffffffffffff6666669955599666655566666699555999666f666f666666f6
                            6666655566999655569955999666555555999566666666666666666666ffff665556669996661fff6655566666666bbbcccfffffffffffff66666655569996666666f666665559996666666666666f66
                            6666666666555655569955999666555666999666666666666666696666ffff665556669996661fff665556666666666bbbcccfffffffffffff6666555699966666666666666666669996666666666666
                            99666666665556666699959996665556669996669555666ff6666666666fff6666666999666611ff665556666666666bbbbbccccfffffffffff666666555966655566f6666699996999666666666f666
                            99666666665556666666655566666666666666669555666ff66666696661ff6666666999666661ff666666665666666666bbbbbccccfffffbbfb66666555666655566f666969996699966f6666666666
                            996699966666666666666555666669666666666695556661ff6666666661ff6699966999666661fff6666666666966666666ffbbcfffffffbbbccc666555666655566f69666999666665f65666666666
                            666699966666666696666666666666666666666666666661fff666666661fff69996666666666ffff66666666666666666666ffffffffffbbccffcff6666666666666666666666669696f66666666666
                            666699966666666666666696666666ff11111f6666666611fff966666661fff699966666666666fff655566666666666666666fffffffffbcfffffff666966999666696666ff666a6669666666f66666
                            66666666666966666666666666fff1111fff1f666666661ff6ff666666611ff6666666666999661ff6555666669996566666666ffffffffcffffffcf6666669996669666faaf666aa666996666f66666
                            69666666666666666fff6666ffffffffffffff666666661f66fff66666661ff666696666699966fff655566666999666656666666ffffffcfffffffccf6666999666666faacf66fbf66666956f666666
                            66669666666611111ffff666fffffffff66ffff66666661f666ff66666661ff666666666699966fff6666666669999966666666666ffffffffffffffccf66666666f666faccf6cfbf6f666666f666666
                            666666fff1111ffffffff666fffff666666ffff66666661f666fff6666661ff666666666666666fff66666666666995556696566666ffffffffffffffcc6666666fa66aacbbfaabbf6cf666696669996
                            66666ffffffffffffffff6666fff6666666ffff66656661ff66ffff66666ffff66666966666666666666666666669955566666666666fffffcffffffffff696666af6fccbbbcacbbfcbf6aa669669996
                            669661ffffffff6666fff666666666666666ffff6666611fffffffff6666ffff6666666666666666666666666666665556666666666666ffcffffffffffff6666caa6acbbbbaacbbfbbaaac666659996
                            666661fff66666666666666666fff6666666ffff66666fffffffffff6666f1fff6666666fff666666666999666666666666666666666666fcfffffffffffff666facccbbbbccccbbfbcbfc6666655566
                            6666611ff66666666666666666ff16666666ffff66666ffffff666fff666611ffffffffffff66666fff9995556666666666666669666566ffbffffffffffff666faccbbbbcccbfbfbbcbc66666659566
                            66666f1ff66666666fffff6666ff166666666ffff66661ff6666666ff666611ffffffffffff66666fff99955566666666666666666666666fbbffffffffffff6fcccfbbbbccbfbbfbbbaf66f66666696
                            6666661ff66666fffffffff666ff116666666ffff66661ff6666666fff6666fffffffffffff66666fff99955566666666666666666666696ffbbfffffffffff6fbcfbbbbcfbbfbfbbbbaf6ffc6666696
                            6666661fff6666fffffffff666ff116666666ffff6666fff66696666fff666fffff6666666666666669999666666666655566666666666666ffbbbffffffffffcbcbffbbbfbbbffbbbcaff6666ffc666
                            6555661fff6666fffff6fff6666ff166666666ffff66ffff666666666ff666666666666666666666666999666999666655566666655566666fffccccfffffffffbcffbbbbbbbbfbbbbaabaaacffc6666
                            65556611ff6666666666ffff666ff1666661111fff66ffff666666666666669996665596666665556666666669996666555666666555966666fffffffffffffffbbfbbbbbbbbbaabbcacaaabfccc6666
                            65556661ff66666666666fff666ff1166111ffffff66ffff666695566666669996665556666665556666666669996666666666696555966566ffffffffffffbbcbbbbbcbbcbbaacbbacbabbbbff69666
                            66666661ff66666666666fff666ff11fffffffffff666666666655566665559996665556666665556666666666666696666666666699966666fffffffffbbbbcccbbbbabaabaabbbbcfbbbbfff666666
                            66666661fff6666666666fff6666ff1ffffffff6666666666666555666655566666665556966666666666699966666666666666666669666566fcfffffbbbcccffffbbababaacccbbbbbfff666666666
                            6669996ffff66666ffffffff6666ffffffff6666666666655566699956655566696665556666666666655599966666666655599666666666966fbcfbfbbcccffff1fbbccacaccbbbbbff666666666666
                            6669996f11ffffffffffffff6666ffff666666665999666555666999566666666666655566699966666555999666666666555996666696566666bbbbcfffffffff11fbbcccbcbbbbffff666656665556
                            6669996611fffffffffffff666666566666666666999666599966999566666666666669666699966666555666669666666555996666665666666bccffbfffffffffffbbcbbbbbfbddff6669666665556
                            66666666fffffffffff666666666666666669666699966669995566966555665556666666669996666666666666666666666666966666666666fcfffbbcffffffff1fbbbbbbbffdddf66666666665556
                            66666666ffff6666666666665556666666666666666666669995599966555665556666666666666666666566666666666666666666696666cccc1fffbbcffffffff1ffbbbbcffddddf6665666f666666
                            66666699966666666699966655566666666666656666666666555955565556655566666966666666666666666666666665666666666666ccccc111fbbbffffffffff1fffbbcdddddff666666f6666666
                            699966999666666666999666555999666966966666696666666999555669996666666666666666669666666ffffffffff666666656666ccccf111ffbbbffffffffff11fffbdddddff6665666f6666966
                            699966999665556666999666666999666666666666666666666999555669996666666ffffffffffffffffff11111111116666666666ccccff111fc1bccfffffffffffdffdddddddf66666666f6656666
                            69996666666555666666666666699966666666666666666666fffffffffffffffffff11111111111111111111111111111111666666cccf11111cc1ccffffffffffffdfdddddddff6696666666666666
                            6666666666655566666666666666666fffffffffffffffffff1111111111111111111111111111111111111111111111111111f66bbbbf111111c11cffffffffffff11dfdddddf666666666666666666
                            6666666666666ffffffffffffffffff1111111111111111111111111111111111111111111111111111116666666666611111f.bbbbbff11ccc1c111fffffffffff1cf1fdddff6666666566f666666f6
                            666ffffffffff1111111111111111111111111111111111111111111111111166666666666666666666666666666666611111fbbbbff111fc11111ff111fffff11cc111ffff66666f666666f666566f6
                            66f1111111111111111111111111111111111111166666666666666666f66666666666666666666f6666666f6666f66661111bbbbff111111111111ffccccccccf1cc111f66665566656666666666666
                            66f11111111111111116666666666666666666666666666666f66666666666666f666666f666666f66666fffffffffff611bbbbffff111111111111111111111ccccf11ff66566666666666666666f66
                            66f1111166666666666666666f66666666f666666f666666666f666666f66666fffffffffffffffffffff66f6666f66666bbbbfcc11111111fffff111ff1ffffcff1111f666666666666666999999999
                            66f1111166666665666666666f66666666f666666f66ffffffffffffffffffff6f666666f666666f6666666f66666666ffbfff1cf111111fffffffff11ff1111111111ff666666699999999999999999
                            65ff111166666666f666666fffffffffffffffffffff6666666f666666f666666f666666f666666f6666666f66666f66bbff111c1111111fff1111fff11ff11111111111f6999999999fff999999f999
                            666f11111666fffffffffff66f66666666f6666666f66666666f666666f666666f666666f666666f6666669f999999fbbffbbbc1111111fff1111111fff1ff1111111111ff999999999fdff9999f9999
                            666f111116666666f66666666f66666666f6666666f66666666f666666f999999f999999f999999f9999999f99999fffffbbbbbf111111ff1111111111f11111111111111ff9999999fdfdf9999f9999
                            666f111111666666f66666666666666666f9999999f99999999f999999f999999f999999f99999fffffffffffff99ffffcbbbbc1111111ff1111111111ff111111111111ff9999999ffddfdf99999999
                            666f1111116666666f666699999f9999999f999999f99999999fffffffffffffffffffffffffff99f999999f9999ffffcbbbccc1f11111ff111111111111111111ffffff99999999ffddfdff99999999
                            666f1111111999999999999999ffffffffffffffffffffffffff999999f999999f9999999f999999f999999f999fffff11b1ccf1111111fff111111111111111fff99f999999999ffffddddf99999ff9
                            6666f111111f9fffffffffffff9f9999999f9999999f9999999f999999f999999f9999999f999999f999999f99fffff11bb1c1111111111ff1111111111111ffff99999999999ffffffffdf99999f999
                            6999f111111f999999999999999f9999999f9999999f9999999f9999999999999f9999999f999999f99999999fff1111cc1111111111111fff1111111111ffffff999999999ffffffffffff999999999
                            9999f1111111f9999999999999999999999f99999999f99999999999999999999f9999999f999999f9999999fff11111f1111111111111fffff11111111ffffff9999999ffffffffffffff9999999999
                            9999f1111111f9999f999999999999999999f9999999999999999999999999999f9999fffffffffffffffff9ff1111111111111111111ffff1f1111111ffffffff9fffffffffffffffffff9999999999
                            9999f11111111f999f99999999999999f99999999999999999999fffffffffffffffff999f999999f999999ff111111111111111111ffff111fff111fffffffffffffffffffffffffffff99999999999
                            99999f111f111f9999f9fff999f9ffff999999fffff99999999999999999999999f999999f999999f99999ff111111111111111111ffff11111ff111ffffffffffffffffffffffcfff99999f99999999
                            99999f111f111f99ffff9999999fffff99ffffff99999fff9ffffff9999999999999999999f999999f999ff111111111111111111fff11111111111fffffccffffffffffffffcccf999999f999999f99
                            99999f111f1111f999f999999fff111ff999911111199999999999ffffff99999f999999999999999999ff1111111111ffffffffffffffff111111ff9ffcccffffffffffffcccf99999999f99999f999
                            99999f1111f111f9999f9999fff11111f9111fffff1111fffffffff99ffffffff99ffffffff999999999f1111111ffffffffffffffffffff1111fff999ffbccfffffffffccc999999999999999f99999
                            99999f1111f1111f999f9999fff11111ff9fffff11111111111ffffffffff9999911111999999fffff9ff11111fffffffffffffffffffffff11fff99999fbbbcccccffff99999999999999999f999999
                            999999f1119f111f9999f999fff11111ff99ff11fffff1111111111111ffffff1ffffffff111111199ff1111ffcccfffffffffffffffffffff1ff99999999bbbbcffff99999999999999999999999999
                            999999f1119f1111f999f9999fff111fffff119111111999fffffff999111ffff11fffffffffff9999ff11fff1ccffffffffffffffffffffffff99999999999fff999999999999f99999999999999999
                            999999f1119f11119999f999999fffff9999999999999999999999999fff991ff111fffffff11ff11ff.fffffbccffffffffffffffffffffffff99999999999999999999999999ff9999f999999999ff
                            999999f11119f11199999f999999fff999999999999999999999999999999ffff991111ffffff1199f.fffff1bcffffffffffffffffffffffff99999999999999999999f99999fff99fff99999f99f99
                            999999f11119f11119999f99999999999f99999999999f9999999f99999999999ffff9911ffffff11fffffff1bcffffffffffffffffffffffff9999fff99999f99999999f99fffffffff99999f999999
                            9999999f11199f11199999f9999999999999999999999f9999999f999999999999999fffff99ffffffffffff1bffffffffffffffffffffffffff9ff111ff9999ff9999999fffffff111ff1ffffff9999
                            9999999f11199f11119999f9999999999999999999999f9999999f9999999999999999999ffffff999fffff11bfcfffffffffffffffffffffffff1f1111ff99999f999999ffff111111111fff1ff9999
                            9999999f11199f11119999f9999999999999f99999999f9999999f99ffffffff999999999999999ff99ffff1bcccfffffffffffffffffffffffff1111111ff9999999f99fff11ff11111111fff777777
                            9999999f111999f11119999f999999999999f999ffffffffffffffff999999999999999999999999999ffff1bbccffffffffffffffffffff111ccff1111111f99999ffffff11ff1111111111fff77777
                            9999999f111199f11119999f99999999ffffffff99999f99999999f99999999999999999999999999999fffccbbcffffffffffffffffff111cbcffcf111111f999777ffff1fff11111111111ffff7777
                            99999999f111999f11199999f999999999999f99999999f99999999999999999999999ffffffffff999999ffcccccffffffffffff11f1111bbbcfc1c111111f77777777f11ff111111111f11ffff7777
                            99999999f111999f11119999999999999999999999999999fffffffffffffffffffffff11111111111111111cccccffffffff11111fff11bbbc1fc1cf111111f7777777f1ff1111111111ff1fffff777
                            99999999f111999f111199999fffffffffffffffffffffff111111111111111111111111111111111111111ff1111f11c111111111fff11bbc1f1cc1c111111f777777ff1f111111111111f1fffffff7
                            99999999f11199fff1111111111111111111111111111111111111111111111111111111111111111111111f1111f11ccc1111111ffff11bbcf111c1c111111f7fff77ff1f11111111111111ffffff77
                            999999fff111ff111111111111111111111111111111111111111111111111111111111fffffffffffffffff11fff11c1111111f1ffff111bbf1f1c1cf11111f7777777f1111111111111111ffff7777
                            99ffff666f111111111111111111111111111ffffffffffffffffffffffffffffffffff777777777777777f11ffff111111bbbcf1ffff1111f11f1c11f11111f777777771111111111111111ffff7777
                            ff7777666f11111111fffffffffffffffffff7777777777777777777777777777777777777777777777777f11ffff111bbbbccc11ffff1111111f1c1111111ff77777777f1f11111111111111fff7777
                            777777766f111111ff77777777777777777777777777777777777777777777777766666666666666666666f1ffff111bbbcccc111ffff111111111f1111111f77777777ff1ff1111111111111f1f7777
                            777777776f1111ff7777766666666666666666666666666666666666666666666666666666666666666666f1ffff11bbcffcc1111fffff1111111111111111f777777f77ff1fff1111111111ffff7777
                            777777776f11ff77666666666666666666666666666666666666666666666666666666666677777777777f11ffff1f1ffffc111111fffff111111111111111f7777ff777ffff11f1111111fffff77777
                            7777777776ff6666666666777777777777777777777777777777777777777777777777777777777777777f11fff111111fcc111111fffffff1111111111111f77ff777777ffff1111111ffff777f7777
                            7777777777766666777777777777777777777777777777777777777777777777777777777777777777777f11fff111111cc11111111fffffff11111111111fff77777777ffffffffffffff7f77777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f11ffff11111c1111111111ffffffffff1111111ffff7777777ff777ffffffff77777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f11ffff11111f111111111111ffffffffffff11ffffff77777ff77777ffff77777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f11ffff1111111f111111111111fffffffffffffffffff777777777777fff77777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111ffff111111fb11111111111111ffffffffffffffff777f77777777ff7777f7777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111ffff1111111bbb1c1f111111111111fffffffffffff77777777777777777f7777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111ffff1111111cbbccfcf11111111111ffffffffffff777777777777777777f777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111fffff11111111bbcccc11111111111fffffffffffff7777777777f7777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1111fffff1111fffcbbccc1111111111ffffffffffffff7777777777f7777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111ffffffff11111fccccccff111fffffffffffffffff7777777777f7777777f77777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff111fffffffff111111111ffffffff111ffffffffffff7777777777f77777777f7777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffff111ffffff1111111111ffffffffff7777777777f77777777f7777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111fffffffffffffccccccf11111111111ffffffff77777777777f777777777777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111111111111ffcccc11111f111111111111fffff777777777777f777777777f77777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111111111ffffcc11111111ffff111111111ffff777777777777f777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111111ffffcc11111111111111ff1111111f6666777777777777777777777777777
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1111ffffc111111111111111111f1111111f66667777777777777777777777f7777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111cccc11111111111111111111ff1111fff6666777f77777777f7777777777f777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1cccffff11111111111111111111f11fff66666677f777777f77f7777777777f777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffff1ffff111111111111111ffff66666666677f777777f77777777777777f77
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff111111fff1111111fffffffffff666666777f7777777777777777766666667
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1ff1111111111fff111ffffffffffff66666777f77777777777777777666666666
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1ff111111f1fff111fffffffffffffff66667777777777777777777776666666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff11111ff11fff1111ffffffffffff6666677777777777777777777776666666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1f1111ff11f1fff1111fffffff666666666677777777777777777777776666666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111ff11ffff1f111111fffff666666666667777777777777f7777f7776666666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111f11ff1ffff1111f1111ffff66666666777777777777777f777777776666666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1111f1ffff1111ff1111111ffff667777777777777777777f77777f777666666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1fff11ff111ffff111f1fff111fffffff777777777777777777777f777766666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1fff1f1111ffff11ff11fff1fffff1111ffffff777777777777777f777777666666
                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff1111ffff11fff111fff1fffff1111111111fff7777777777777777777777666
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff11111ffff11fff11ff1111ff11f111111f1111fff777777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff111f1ff11ff111ff11ff1f111f11f1fff1111111f77777777777f77777777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff1111111ff1f1fff1fff1fffff1fff1ff11fffff1ff777777777f77777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff1111f11111ff11ff1111111ffff1ff1fff1f1f1f777777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff1111fff1111ff111ff111fff1ff11ff1111f11f77777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff1111f1f11111111fff11fff11ff11ff1111f111ff777777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffff1fffffff111fff11ffff1fff11ff1111f1111ff77777777777777777
                            77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffff11fff1f111ff111fff1fff111f11111f1f1f11f7777777777777777
                            777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffff11f111f11ff111ffff1ff11111fffff1fff1111f777777777777777
                            `)
                        scene.cameraShake(3, 500)
                        timer.after(1500, function () {
                            color.startFade(color.originalPalette, color.originalPalette, 200)
                            scene.setBackgroundImage(img`
                                6666666666666666666666666666666666666666666666666666666666666655566666666555666666666666666666666666666666666f6666665556666666699966666666666666666ccccccfffffff
                                66666666666666666666666666666666666666666666666666665556666666555666666665556666666666666666666666666666655566f666665556666666699966666666666666666cccccffffffff
                                66665556666666666666666666666666666666666656666666665556666666555566966665556666696666666666966665666666655566f66655555666966669996666696666666666bccccfffffffff
                                66665556665556666666665556666666665655566696666666665556666666665666566666666666656666555666666666666666655566f6665556666666666666566666666999666ccccccfffffffff
                                66665556665556666666665556666966666655566666665666666666666666666666669666999666669666555666666666666966666666f6665556666666665556666666666999555bcccccfffffffff
                                66666666665556665556665556666666666655566666666699966666666666666696666666999556666666555999655566666666666666f666666666555666555666699966699955bbccccffffffffff
                                66566666666666665556666699966666666666666666665599966666666999655566666566999556666666666999655566666666966666f66669996655566655566655996666665cbcccccffffffffff
                                66666999666666665556666699966666656999666666665599966669666999655556666666665555666666555999655566555666666666f6666999665556666666655999666666bcccccccffffffffff
                                66666999666666666666666699966666666999666666665556666666666999655556666666666666666666555666666699955666666666f6665999666666666966666665556666bcccccccffffffffff
                                66666999666666666666666655566666666999666966666666666666666666665556666666666666666656555666666699955699966666f666666666666666666666666555666bbccccccfffffffffff
                                66666666665556666666655555566665556666666666666666665666656666666666666655566655666666666666666699966699965666f66666666666666666669995655566bbcccccccfffffffffff
                                666666666655566666666555555665655566666666666666666666666666666666666666555666665566666666666666666666999666666f666665559996665666999666666bbbcccccccfffffffffff
                                666655566655566669666555666666655566999666666666666666666666669996665966555665566666656666696666666666665556666f666665559996666666999666666bbcccccccffffffffffff
                                66665556666666665666655566666656666699966666665666666666666666999666666566666666666666666666655566696666555666656666655599966555665555ffffbbbcccccccffffffffffff
                                666655566666666666666559996666666666999655566666666555666666669996666666666665559999666966666555666566665556666f669666666666655ffffffffffbbbcfffffffffffffffffff
                                666666666666666666666669996666666666666655566666666599966666666666666666666665559999666666666555666665666666566f666666666666fffffffffffffbbbcfffffffffffffffffff
                                656666666966666665666669996666666666666655566669699999966666666966555666666665999999666666656666666696666666666f666666669666ffffffffffffffbbcff7777fffffffffffff
                                666666666666655566666666666666665556666666666666699999966655566666555666596666999666666666666666666699999666666f665556666696fffffffffffffffbcff77777fddccccfffff
                                666666666666655566999666966665665556666666666666699966666655566666555666566666999666666999666666566699999666666f665556666666ffffffffffffffffcff77777fdddcccccccc
                                666555966666655556999666656666665556999666666666699966666655566666666666666666666666666599666966666699999666666f665556666666ffffffffffffffffcff77777fdddcddccccc
                                666555666666665556999666666666666666999666966696696666666666666666695669996666666666666999666666666666666666666f666666666966fffffffffffffffffff7777fddddcddccccc
                                6665556666656655566666666666666666999996666666666666555666555666666666699966666666666666666666666666666666ffffffffffff666666fffffffffffffffffff7777ffdddcdcccccc
                                6666666666666666666666669666666666999666666656666966555665555556666666599966666666666665666665ffffffffffff66666f666666fffffffffffffffffffffffff77777fddddccccccc
                                65669996966666696666555666666666959996666666666666665556655555966666666666666666666ffffffffffff6666666666666666f6666666666666ffffffffffffffffff77777fddddffccccf
                                6666999666666666666655566666666665555666666666999666666665555556666666666666fffffff6666666666666555666666669666f6965699966666ffffffffffffffffff77777ffffddddffff
                                6666999666666665696655566666666666666666666665999666666696666666666666ffffffff669996666666666666555999666666666f6666699966656ffffffffffffffffff77777777ffdbbbbff
                                6666666666555666666665666699966666666666666665999666666666666666ffffffff666999669996666566666666555999566666666f6666699966666ffffffffffffffffff777777777fbbbff11
                                666555666655566666666666669996666666966666666555666666666666ffffff666666666999669996666666666555666999666666566f6665556666666ffffffffffffffffff77777777ffff11111
                                66655566665556666566666656999666966666569666666666666fffffff666666666666666999666666666666966555656666666666666f6665556666666ffffffffffffffffff77777fff111111111
                                66655566666666666666666666555666666666666666666fffffff6666656666699965556666665556666666666665559996666665556666f665999666566fffffffffffffffff7777ff11111111111b
                                66666666666666666666666666555665666666666fff55566666666699966666699965556666665556666655566666669996666699956666f6669996666665ffffffffffffffff7777fff1111111111b
                                66669666666669996669666666555666666ffffff66655566666666699966696699565556666699959996655566666669996566699956666f6669996699966ffffffffffffffff777bbcf1111111111b
                                66696666966669996666656666666ffffff66666666655566669995699966666666666666666699969996655566666665556666699966666f6666666699966ffffffffffffffff77bbccff111111111b
                                6666656666666999666666fffffff66666666666666666666669995666666666665666666666699969996666666555665556666666666666f6666666699966ffffffffffffffff7fbccfff111111111b
                                6666666666666666ffffff666666666666669666666666666669995666665555666669999666666655566666666555665556666666666656f6699966655566fffffffffffffffffbbcfffff1111111bb
                                666666666fffffff6666666666666655566666999665556666666666666655566666669996665556555666656699956666665696666666666f699966655566fffffffffffffffffccfffff111bbff111
                                666fffffff66666666bbf66666665655566666999665559995665556666655959666569996665556555666666699956666666666699966666f699966666666fffffffffffffffffffffffff1bb111f11
                                ffff66666666666666bbbbbfff666655566666999665559996665556699966999666666666665556666669666699955566666665599946666f666666666666fffffffffff556ffffffff77bb11111f11
                                666666666699966699bb1111bbbbff66666666666666669996665556699966999666655565666666666566566565555599966665599966455f6646666466666ffffff6665555fffbff7777b11111ff11
                                666555665599966699bb11111111bbbbbff666666666666666666666699966666666655566666669996666666666655599964665556446455f6664664465556ff66666565555ffbc7777777f111ff111
                                666555665599966699b1111111f111111bbbbfff6666666666656666666666666666655566666669996666666666666599946666644444444f44446664645464466666666665ff777777777f11fff111
                                699955665556666666b111111111fff1119999bbbbff666666666966666666666666666666555669995556666666666454666466664444666fffff4444445566666666666666ffffff777777fff11f11
                                69995666666999666bb11111111111f1f111999999bbbbbff6666666655566665556666666555666665556646696666545464644446ffffffdddffffff64444466466646666ffffffffffffffff11f11
                                69995666666999666bb11111111111111f1111111999999bbbbff66665556666555566699955564666555666664664666444446ffffdddddddddddddddfffff6444446444646644464ffffffffffffff
                                66666665666999666bb12211111111111ff11111111999999bbbbff6655566665556666999666666666646666666444446fffffddddddddffffffdddddddddfffff664444644654544664666466fffff
                                66666966665556666b112211111111111f11111111111111999999bbbbff6666666666699966666666646646644446ffffdddddddddffff99f999ffffddddddddddfffff644444666646664464665556
                                69996666665556666b112111111111111f1212211111111111111999999bbbbff666666646666646646664444fffffdddddddddffff999999f9999999fffffddddddddddfffff6444446646644645556
                                6999666666555666bb122111111111111f12111211111111111111111999999bbbbff6646646666644444ffffddddddddddffff9999999fffffff999999999ffffdddddddddddffff664444446444456
                                6999655566666666bb12211111111111ff111112111111111111111111111999999bf666664644446ffffddddddd111ffff9999999ffff777777ffff9999999999fffffddddddddddfffff6444444466
                                6666655566666566bb12222111111111f111111111111111111111111111199999bb66464444fffffddddddd1111ff19999999ffff77777777777777ffffff999999999ffffdddddddddddffff666444
                                6666655569996666b112122111111111f181111111111111111111111111199999bf6444ffffdddddddd1111ff9999199fffff77777777111777777777777ffffff99999999fffffddddddddddfff666
                                6666666669996666b122121111111111f181111111111111111111111111999999bfffffdddddddd1111ff9999999f1ff777777777777777711177777777777777fffff999999999ffffdddddddddfff
                                666666666999566bb122221111111111f19811811111111111111111111199999bbdddddddddd111ff9999999ffff71711777777777777777777111117777777777777fffff999999999fffffddddddd
                                656696666655566bb12222111111111f111981811111111111111111111199999bbdddddddff1f9999999ffff11777177111177777777777777777771117777777777777777ffff9999999999ffffddd
                                666666666655566bb12222111111111f111111918111111111111111111199999bfdddffff91199ffffff1111771171777771117777777777777777777711177777777777777777fffff999999999fff
                                166666566666666b112122111112211f191111111118811111111111111199999bffff9999119ff111111777777711177777777117777777777777777777771111777777777777777777fffff9999999
                                111666666666666b122121111112111f188111111111111881111111111999999bf9999991f1f1117777777711117777777777711777777777777777777777771177777777777777777777777ffff999
                                11111166666666bb12222111112211f111118911111111111118811111199999bbf99ffff111177777771111777777777771111777777777777777777777711177777777777777777777777777777fff
                                11111111116666bb12222112212211f111111811111111111111111811199999bffff7771171777111117777777777771117777777777777777777777111177777777777777777777777777777777777
                                11111111111166bb12122112112211f121111111111111111111111111199999bf7777777711111777777777777711117777777777777777777777111777777777777777777777777777777777777777
                                1111111111111bb12222112212211f112111111118111111111111111199999bb17777777777177777777771111177777777777777777777117111777777777777777777777777777777777777777777
                                1111111111111bb12222112212211f111111211111881111111111111199999bf71777777777777777777711177777777777777777777711111777777777777777777777777777777777777777777777
                                1111111111111bb12222112112211f111111211111111188111111111199999bf77117777777777777111177777777777777777777711111771777777777777777777777777777777777777777777777
                                1111111111111bb12122122112111f112111211111111111118111111199999b777771777777771111777777777777777777777711117777771777777777777777777777777777777777777777777777
                                1111111111111b11212112212211f1f1111211111111111111111811199999bb777777117771111777777777777777777777711117777777777177777777777777777777777777777777777777777777
                                111111111111bb11112112212211ffffff1111111111111111111111199999bf777777771117777777777777777777777111117777777777771777777777777777777777777777777777777777777777
                                111111111111bb1ff11112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777111117777777777777771777777777777777777777777777777777777777777777
                                111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777111177777777777777777717777777777777777777777777777777777777777777777
                                111111111111b111111ff111211ff7ffffff7ffffff111111111111199999bb7777777777777777777777771111177777777777777777777717777777777777777777777777777777777777777777777
                                111111111111b11111111fff111ffff99ffffff77fffff111111111199999bf7777777777777777777771111177777777777777777777771177777777777777777777777777777777777777777777777
                                11111111111bb1111111111ff11fffff9999fffff7fffff11111111199999bf7777777777777777777711177777777777777777777777111777777777777777777777777777777777777777777777777
                                11111111111bb111111111111fffffffffff999fffff7fffff1111119999bb77777777777777771111177717777777777777777777711777777777777777777777777777777777777777777777777777
                                1111111111bbfbb111111111111f7fffffffff99fffff7fffffff1119999bb77777777777771111777777771111177777777711111177777777777777777777777777777777777777777777777777777
                                1111111bbbbbbbfbb1111111111ffff9fffffff99ffff7ffffffffff9999bf77777777771111777777777777771111111111117777777777777777777777777777777777777777777777777777777777
                                1111bbbbb1b1bbbbfbb11111111fffff999fffffffff77ffffffffffff99bf77777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                1bbbbb1bb111b1bbbbfbb1111117ffffff999fffffff7fff99ffffffff9bb777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                bbbb1b111bb111b1bbbbfbb111ff77fffffff99999ff7ff999fff9ffff9bf711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                b1bb111b1111b111b1bbbbfbb1ffff77fffffffff9f77ffff9ff999fff9bf117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                b1111bb11b1b11b111b1bbbbfbbfffff77fffffffff7fffff9ff9fffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                1111b11b11b1111b111b1bbbbfbbfffff777fffffff7fff99fff9ffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                11b1b1111b11b1111b111b1bbbbfbbbfffff77ffff77fff9ffff9ffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                b11b11bb11b1b1b1111b111b1bbbbfbbbfffff77ff7ffff9fff9fffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                11b11bb1b1b1b111bb111b111b1bbbbfbbbfffff777ffff9fff9fffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffff99ff9fffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffff9ff99fffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                1b11111b11b1bb111b1111b1111b111b1bbbbbfbbffffffff9ffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbffffff9ffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                                11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                                11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                                1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                                1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777711
                                bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777771177
                                bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777117777
                                1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777711777777
                                1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111111111111111111111111111111177777777777777777777777777777777777777777777771177777777
                                1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb111111111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777117777777777
                                111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb1111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777711777777777777
                                1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777777771177777777777777
                                11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777117777777777777777
                                11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb1111111111111111111111111111111111111111111111111111111111111111111111777777777777777777777777711777777777777777777
                                111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777771177777777777777777777
                                1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777117777777777777777777777
                                1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777711777777777777777777777777
                                bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777771177777777777777777777777777
                                bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177117777777777777777777777777777
                                bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777
                                bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777
                                1bbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777
                                111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777777
                                1111bbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777
                                11111bbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777
                                111111bbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777
                                11111111bbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777
                                111111111bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777
                                1111111111bbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777
                                11111111111bb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777
                                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777
                                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117
                                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                `)
                            game.showLongText("미래에, 나는 어느 축구 구단의", DialogLayout.Bottom)
                            if (controller.A.isPressed()) {
                                game.showLongText("스포츠 분석가가 된다", DialogLayout.Bottom)
                                if (controller.A.isPressed()) {
                                    game.showLongText("노력한 덕에 서울대를 졸업하고", DialogLayout.Bottom)
                                    if (controller.A.isPressed()) {
                                        game.showLongText("매우 유명한 구단의", DialogLayout.Bottom)
                                        if (controller.A.isPressed()) {
                                            game.showLongText("스포츠 분석가가 된다.", DialogLayout.Bottom)
                                            if (controller.A.isPressed()) {
                                                game.showLongText("그리고 이것이 내 여정의 마무리다.", DialogLayout.Bottom)
                                                scene.setBackgroundImage(img`
                                                    6666666666666666666666666666666666666666666666666666666666666655566666666555666666666666666666666666666666666f6666665556666666699966666666666666666ccccccfffffff
                                                    66666666666666666666666666666666666666666666666666665556666666555666666665556666666666666666666666666666655566f666665556666666699966666666666666666cccccffffffff
                                                    66665556666666666666666666666666666666666656666666665556666666555566966665556666696666666666966665666666655566f66655555666966669996666696666666666bccccfffffffff
                                                    66665556665556666666665556666666665655566696666666665556666666665666566666666666656666555666666666666666655566f6665556666666666666566666666999666ccccccfffffffff
                                                    66665556665556666666665556666966666655566666665666666666666666666666669666999666669666555666666666666966666666f6665556666666665556666666666999555bcccccfffffffff
                                                    66666666665556665556665556666666666655566666666699966666666666666696666666999556666666555999655566666666666666f666666666555666555666699966699955bbccccffffffffff
                                                    66566666666666665556666699966666666666666666665599966666666999655566666566999556666666666999655566666666966666f66669996655566655566655996666665cbcccccffffffffff
                                                    66666999666666665556666699966666656999666666665599966669666999655556666666665555666666555999655566555666666666f6666999665556666666655999666666bcccccccffffffffff
                                                    66666999666666666666666699966666666999666666665556666666666999655556666666666666666666555666666699955666666666f6665999666666666966666665556666bcccccccffffffffff
                                                    66666999666666666666666655566666666999666966666666666666666666665556666666666666666656555666666699955699966666f666666666666666666666666555666bbccccccfffffffffff
                                                    66666666665556666666655555566665556666666666666666665666656666666666666655566655666666666666666699966699965666f66666666666666666669995655566bbcccccccfffffffffff
                                                    666666666655566666666555555665655566666666666666666666666666666666666666555666665566666666666666666666999666666f666665559996665666999666666bbbcccccccfffffffffff
                                                    666655566655566669666555666666655566999666666666666666666666669996665966555665566666656666696666666666665556666f666665559996666666999666666bbcccccccffffffffffff
                                                    66665556666666665666655566666656666699966666665666666666666666999666666566666666666666666666655566696666555666656666655599966555665555ffffbbbcccccccffffffffffff
                                                    666655566666666666666559996666666666999655566666666555666666669996666666666665559999666966666555666566665556666f669666666666655ffffffffffbbbcfffffffffffffffffff
                                                    666666666666666666666669996666666666666655566666666599966666666666666666666665559999666666666555666665666666566f666666666666fffffffffffffbbbcfffffffffffffffffff
                                                    656666666966666665666669996666666666666655566669699999966666666966555666666665999999666666656666666696666666666f666666669666ffffffffffffffbbcff7777fffffffffffff
                                                    666666666666655566666666666666665556666666666666699999966655566666555666596666999666666666666666666699999666666f665556666696fffffffffffffffbcff77777fddccccfffff
                                                    666666666666655566999666966665665556666666666666699966666655566666555666566666999666666999666666566699999666666f665556666666ffffffffffffffffcff77777fdddcccccccc
                                                    666555966666655556999666656666665556999666666666699966666655566666666666666666666666666599666966666699999666666f665556666666ffffffffffffffffcff77777fdddcddccccc
                                                    666555666666665556999666666666666666999666966696696666666666666666695669996666666666666999666666666666666666666f666666666966fffffffffffffffffff7777fddddcddccccc
                                                    6665556666656655566666666666666666999996666666666666555666555666666666699966666666666666666666666666666666ffffffffffff666666fffffffffffffffffff7777ffdddcdcccccc
                                                    6666666666666666666666669666666666999666666656666966555665555556666666599966666666666665666665ffffffffffff66666f666666fffffffffffffffffffffffff77777fddddccccccc
                                                    65669996966666696666555666666666959996666666666666665556655555966666666666666666666ffffffffffff6666666666666666f6666666666666ffffffffffffffffff77777fddddffccccf
                                                    6666999666666666666655566666666665555666666666999666666665555556666666666666fffffff6666666666666555666666669666f6965699966666ffffffffffffffffff77777ffffddddffff
                                                    6666999666666665696655566666666666666666666665999666666696666666666666ffffffff669996666666666666555999666666666f6666699966656ffffffffffffffffff77777777ffdbbbbff
                                                    6666666666555666666665666699966666666666666665999666666666666666ffffffff666999669996666566666666555999566666666f6666699966666ffffffffffffffffff777777777fbbbff11
                                                    666555666655566666666666669996666666966666666555666666666666ffffff666666666999669996666666666555666999666666566f6665556666666ffffffffffffffffff77777777ffff11111
                                                    66655566665556666566666656999666966666569666666666666fffffff666666666666666999666666666666966555656666666666666f6665556666666ffffffffffffffffff77777fff111111111
                                                    66655566666666666666666666555666666666666666666fffffff6666656666699965556666665556666666666665559996666665556666f665999666566fffffffffffffffff7777ff11111111111b
                                                    66666666666666666666666666555665666666666fff55566666666699966666699965556666665556666655566666669996666699956666f6669996666665ffffffffffffffff7777fff1111111111b
                                                    66669666666669996669666666555666666ffffff66655566666666699966696699565556666699959996655566666669996566699956666f6669996699966ffffffffffffffff777bbcf1111111111b
                                                    66696666966669996666656666666ffffff66666666655566669995699966666666666666666699969996655566666665556666699966666f6666666699966ffffffffffffffff77bbccff111111111b
                                                    6666656666666999666666fffffff66666666666666666666669995666666666665666666666699969996666666555665556666666666666f6666666699966ffffffffffffffff7fbccfff111111111b
                                                    6666666666666666ffffff666666666666669666666666666669995666665555666669999666666655566666666555665556666666666656f6699966655566fffffffffffffffffbbcfffff1111111bb
                                                    666666666fffffff6666666666666655566666999665556666666666666655566666669996665556555666656699956666665696666666666f699966655566fffffffffffffffffccfffff111bbff111
                                                    666fffffff66666666bbf66666665655566666999665559995665556666655959666569996665556555666666699956666666666699966666f699966666666fffffffffffffffffffffffff1bb111f11
                                                    ffff66666666666666bbbbbfff666655566666999665559996665556699966999666666666665556666669666699955566666665599946666f666666666666fffffffffff556ffffffff77bb11111f11
                                                    666666666699966699bb1111bbbbff66666666666666669996665556699966999666655565666666666566566565555599966665599966455f6646666466666ffffff6665555fffbff7777b11111ff11
                                                    666555665599966699bb11111111bbbbbff666666666666666666666699966666666655566666669996666666666655599964665556446455f6664664465556ff66666565555ffbc7777777f111ff111
                                                    666555665599966699b1111111f111111bbbbfff6666666666656666666666666666655566666669996666666666666599946666644444444f44446664645464466666666665ff777777777f11fff111
                                                    699955665556666666b111111111fff1119999bbbbff666666666966666666666666666666555669995556666666666454666466664444666fffff4444445566666666666666ffffff777777fff11f11
                                                    69995666666999666bb11111111111f1f111999999bbbbbff6666666655566665556666666555666665556646696666545464644446ffffffdddffffff64444466466646666ffffffffffffffff11f11
                                                    69995666666999666bb11111111111111f1111111999999bbbbff66665556666555566699955564666555666664664666444446ffffdddddddddddddddfffff6444446444646644464ffffffffffffff
                                                    66666665666999666bb12211111111111ff11111111999999bbbbff6655566665556666999666666666646666666444446fffffddddddddffffffdddddddddfffff664444644654544664666466fffff
                                                    66666966665556666b112211111111111f11111111111111999999bbbbff6666666666699966666666646646644446ffffdddddddddffff99f999ffffddddddddddfffff644444666646664464665556
                                                    69996666665556666b112111111111111f1212211111111111111999999bbbbff666666646666646646664444fffffdddddddddffff999999f9999999fffffddddddddddfffff6444446646644645556
                                                    6999666666555666bb122111111111111f12111211111111111111111999999bbbbff6646646666644444ffffddddddddddffff9999999fffffff999999999ffffdddddddddddffff664444446444456
                                                    6999655566666666bb12211111111111ff111112111111111111111111111999999bf666664644446ffffddddddd111ffff9999999ffff777777ffff9999999999fffffddddddddddfffff6444444466
                                                    6666655566666566bb12222111111111f111111111111111111111111111199999bb66464444fffffddddddd1111ff19999999ffff77777777777777ffffff999999999ffffdddddddddddffff666444
                                                    6666655569996666b112122111111111f181111111111111111111111111199999bf6444ffffdddddddd1111ff9999199fffff77777777111777777777777ffffff99999999fffffddddddddddfff666
                                                    6666666669996666b122121111111111f181111111111111111111111111999999bfffffdddddddd1111ff9999999f1ff777777777777777711177777777777777fffff999999999ffffdddddddddfff
                                                    666666666999566bb122221111111111f19811811111111111111111111199999bbdddddddddd111ff9999999ffff71711777777777777777777111117777777777777fffff999999999fffffddddddd
                                                    656696666655566bb12222111111111f111981811111111111111111111199999bbdddddddff1f9999999ffff11777177111177777777777777777771117777777777777777ffff9999999999ffffddd
                                                    666666666655566bb12222111111111f111111918111111111111111111199999bfdddffff91199ffffff1111771171777771117777777777777777777711177777777777777777fffff999999999fff
                                                    166666566666666b112122111112211f191111111118811111111111111199999bffff9999119ff111111777777711177777777117777777777777777777771111777777777777777777fffff9999999
                                                    111666666666666b122121111112111f188111111111111881111111111999999bf9999991f1f1117777777711117777777777711777777777777777777777771177777777777777777777777ffff999
                                                    11111166666666bb12222111112211f111118911111111111118811111199999bbf99ffff111177777771111777777777771111777777777777777777777711177777777777777777777777777777fff
                                                    11111111116666bb12222112212211f111111811111111111111111811199999bffff7771171777111117777777777771117777777777777777777777111177777777777777777777777777777777777
                                                    11111111111166bb12122112112211f121111111111111111111111111199999bf7777777711111777777777777711117777777777777777777777111777777777777777777777777777777777777777
                                                    1111111111111bb12222112212211f112111111118111111111111111199999bb17777777777177777777771111177777777777777777777117111777777777777777777777777777777777777777777
                                                    1111111111111bb12222112212211f111111211111881111111111111199999bf71777777777777777777711177777777777777777777711111777777777777777777777777777777777777777777777
                                                    1111111111111bb12222112112211f111111211111111188111111111199999bf77117777777777777111177777777777777777777711111771777777777777777777777777777777777777777777777
                                                    1111111111111bb12122122112111f112111211111111111118111111199999b777771777777771111777777777777777777777711117777771777777777777777777777777777777777777777777777
                                                    1111111111111b11212112212211f1f1111211111111111111111811199999bb777777117771111777777777777777777777711117777777777177777777777777777777777777777777777777777777
                                                    111111111111bb11112112212211ffffff1111111111111111111111199999bf777777771117777777777777777777777111117777777777771777777777777777777777777777777777777777777777
                                                    111111111111bb1ff11112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777111117777777777777771777777777777777777777777777777777777777777777
                                                    111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777111177777777777777777717777777777777777777777777777777777777777777777
                                                    111111111111b111111ff111211ff7ffffff7ffffff111111111111199999bb7777777777777777777777771111177777777777777777777717777777777777777777777777777777777777777777777
                                                    111111111111b11111111fff111ffff99ffffff77fffff111111111199999bf7777777777777777777771111177777777777777777777771177777777777777777777777777777777777777777777777
                                                    11111111111bb1111111111ff11fffff9999fffff7fffff11111111199999bf7777777777777777777711177777777777777777777777111777777777777777777777777777777777777777777777777
                                                    11111111111bb111111111111fffffffffff999fffff7fffff1111119999bb77777777777777771111177717777777777777777777711777777777777777777777777777777777777777777777777777
                                                    1111111111bbfbb111111111111f7fffffffff99fffff7fffffff1119999bb77777777777771111777777771111177777777711111177777777777777777777777777777777777777777777777777777
                                                    1111111bbbbbbbfbb1111111111ffff9fffffff99ffff7ffffffffff9999bf77777777771111777777777777771111111111117777777777777777777777777777777777777777777777777777777777
                                                    1111bbbbb1b1bbbbfbb11111111fffff999fffffffff77ffffffffffff99bf77777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    1bbbbb1bb111b1bbbbfbb1111117ffffff999fffffff7fff99ffffffff9bb777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    bbbb1b111bb111b1bbbbfbb111ff77fffffff99999ff7ff999fff9ffff9bf711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    b1bb111b1111b111b1bbbbfbb1ffff77fffffffff9f77ffff9ff999fff9bf117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    b1111bb11b1b11b111b1bbbbfbbfffff77fffffffff7fffff9ff9fffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    1111b11b11b1111b111b1bbbbfbbfffff777fffffff7fff99fff9ffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    11b1b1111b11b1111b111b1bbbbfbbbfffff77ffff77fff9ffff9ffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    b11b11bb11b1b1b1111b111b1bbbbfbbbfffff77ff7ffff9fff9fffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    11b11bb1b1b1b111bb111b111b1bbbbfbbbfffff777ffff9fff9fffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffff99ff9fffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffff9ff99fffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    1b11111b11b1bb111b1111b1111b111b1bbbbbfbbffffffff9ffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbffffff9ffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                                                    11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                                                    1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                                                    1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777711
                                                    bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777771177
                                                    bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777117777
                                                    1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777711777777
                                                    1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb11111111111111111d1111d11111111111111111111111111177777777777777777777777777777777777777777777771177777777
                                                    1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb1111111111111111d111d111111111111111111111111111111111777777777777777777777777777777777777777777117777777777
                                                    111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb11111111111111111111d111d111d11111111111111111111111111117777777777777777777777777777777777777711777777777777
                                                    1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb11111111111111111dd11dd11d1111d11111111111111111111111111111177777777777777777777777777777777771177777777777777
                                                    11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111ddd1ddd11ddd111111111111111111111111111111111111177777777777777777777777777777117777777777777777
                                                    11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb111111111111111111ddddddd11dddddd1111d11111111111111111111111111111111777777777777777777777777711777777777777777777
                                                    111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb1111111111111111111ddddddd11dddd1dd11dd111d11111111111111111111111111111111777777777777777777771177777777777777777777
                                                    1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb11111111111111111111dd1ddddd11555ddd111d11111111111111111111111111111111111111117777777777777777117777777777777777777777
                                                    1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb1111111111111111111111ddddddd1155555dd11dddd111111111111111111111111111111111111111117777777777711777777777777777777777777
                                                    bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb111111111111d1111111111ddddddd11dddd555111ddddd1d111111111111111111111111111111111111111117777771177777777777777777777777777
                                                    bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111ddddddd1ddddddd5111dd1dddd1111111111111111111111111111111111111111111177117777777777777777777777777777
                                                    bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111d1111111ddddddd11dd11dddd11ddd1ddd11111111111111111111111111111111111111111111117777777777777777777777777777777
                                                    bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb11111111111111d11dd111111ddddddd1ddddd11dd11ddddddd111111111111111111111111111111111111111111111111117777777777777777777777777777
                                                    1bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111dd1ddd11111ddddddd11dddddddd11dddddddd111111111111111111111111111111111111111111111111111117777777777777777777777777
                                                    111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111ddddddd1111ddddddd1ddddddddd11ddddddddd111111111111111111111111111111111111111111111111111111177777777777777777777777
                                                    1111bbbbbbbbbbbbbbbbbbbb111111111111111111ddddddd111dddd1ddd1dddddddddd11dd1dddd11111111111111111111111111111111111111111111111111111111111177777777777777777777
                                                    11111bbbbbbbbbbbbbbbbb1111111111111111111ddddddd111dddd1ddddddddddddd111dddd11d1111dd111111111111111111111111111111111111111111111111111111111777777777777777777
                                                    111111bbbbbbbbbbbbbb1111111111111111111dddddddd111dddd1ddddddd1ddddd11ddddddd11111d1dd11111111111111111111111111111111111111111111111111111111111777777777777777
                                                    11111111bbbbbbbbbb11111111111111111111dd1ddddd111dddd1ddddddd1ddddd11dddddddd111dd11d111111111111111111111111111111111111111111111111111111111111117777777777777
                                                    111111111bbbbbbb1111111111111111111111ddddddd11dddddd1dddddd1ddddd11dddddddd111ddddd1111111111111111111111111111111111111111111111111111111111111111117777777777
                                                    1111111111bbbbb11111111111111111111111ddddddd1dddddddddddddd1ddddddddddddddd1155dddd1111111111111111111111111111111111111111111111111111111111111111111777777777
                                                    11111111111bb111111111111111111111111dddddddddddddddddddddd1ddddddddddddddd1155551d11111111111111111111111111111111111111111111111111111111111111111111111777777
                                                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11dd5555d11111111111111111111111111111111111111111111111111111111111111111111111117777
                                                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddd1dddd11ddddd55111111111111111111111111111111111111111111111111111111111111111111111111111117
                                                    1111111111111111111111111111111111111dddddddddddddddddddddddddddddd1ddddddddd1dd11111111111111111111111111111111111111111111111111111111111111111111111111111111
                                                    111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                                    `)
                                                timer.after(1000, function () {
                                                    game.setGameOverMessage(true, "Your Life is On The Game")
                                                    game.setGameOverEffect(true, effects.confetti)
                                                    game.gameOver(true)
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    })
                })
            })
        }
        if (controller.B.isPressed()) {
            color.startFade(color.originalPalette, color.originalPalette, 500)
            scene.setBackgroundImage(img`
                666666666666666666666666666555666666655596555666666666666666666666666666666666666666666ffffffffffffffff6666666666666666666666666666f6666666666666666666666666666
                699966666666666666666666666555999666655596555666666666666666666666669996666fff6666666666ffccffffffffffffff66666666669996999566655566666699966666666f6666f6666666
                699965556699966666666666666555955565555596555666669666566666666666669996666ffff6666666666ffcbfffffffffffffff666669669996999666655566666699555999666f666f66666666
                6999655566999655566655555666669555655566666666666666666666fff66655569999966f1ff6666656666666cbbfffffffffffffff6666669955599666655566666699555999666f666f666666f6
                6666655566999655569955999666555555999566666666666666666666ffff665556669996661fff6655566666666bbbcccfffffffffffff66666655569996666666f666665559996666666666666f66
                6666666666555655569955999666555666999666666666666666696666ffff665556669996661fff665556666666666bbbcccfffffffffffff6666555699966666666666666666669996666666666666
                99666666665556666699959996665556669996669555666ff6666666666fff6666666999666611ff665556666666666bbbbbccccfffffffffff666666555966655566f6666699996999666666666f666
                99666666665556666666655566666666666666669555666ff66666696661ff6666666999666661ff666666665666666666bbbbbccccfffffbbfb66666555666655566f666969996699966f6666666666
                996699966666666666666555666669666666666695556661ff6666666661ff6699966999666661fff6666666666966666666ffbbcfffffffbbbccc666555666655566f69666999666665f65666666666
                666699966666666696666666666666666666666666666661fff666666661fff69996666666666ffff66666666666666666666ffffffffffbbccffcff6666666666666666666666669696f66666666666
                666699966666666666666696666666ff11111f6666666611fff966666661fff699966666666666fff655566666666666666666fffffffffbcfffffff666966999666696666ff666a6669666666f66666
                66666666666966666666666666fff1111fff1f666666661ff6ff666666611ff6666666666999661ff6555666669996566666666ffffffffcffffffcf6666669996669666faaf666aa666996666f66666
                69666666666666666fff6666ffffffffffffff666666661f66fff66666661ff666696666699966fff655566666999666656666666ffffffcfffffffccf6666999666666faacf66fbf66666956f666666
                66669666666611111ffff666fffffffff66ffff66666661f666ff66666661ff666666666699966fff6666666669999966666666666ffffffffffffffccf66666666f666faccf6cfbf6f666666f666666
                666666fff1111ffffffff666fffff666666ffff66666661f666fff6666661ff666666666666666fff66666666666995556696566666ffffffffffffffcc6666666fa66aacbbfaabbf6cf666696669996
                66666ffffffffffffffff6666fff6666666ffff66656661ff66ffff66666ffff66666966666666666666666666669955566666666666fffffcffffffffff696666af6fccbbbcacbbfcbf6aa669669996
                669661ffffffff6666fff666666666666666ffff6666611fffffffff6666ffff6666666666666666666666666666665556666666666666ffcffffffffffff6666caa6acbbbbaacbbfbbaaac666659996
                666661fff66666666666666666fff6666666ffff66666fffffffffff6666f1fff6666666fff666666666999666666666666666666666666fcfffffffffffff666facccbbbbccccbbfbcbfc6666655566
                6666611ff66666666666666666ff16666666ffff66666ffffff666fff666611ffffffffffff66666fff9995556666666666666669666566ffbffffffffffff666faccbbbbcccbfbfbbcbc66666659566
                66666f1ff66666666fffff6666ff166666666ffff66661ff6666666ff666611ffffffffffff66666fff99955566666666666666666666666fbbffffffffffff6fcccfbbbbccbfbbfbbbaf66f66666696
                6666661ff66666fffffffff666ff116666666ffff66661ff6666666fff6666fffffffffffff66666fff99955566666666666666666666696ffbbfffffffffff6fbcfbbbbcfbbfbfbbbbaf6ffc6666696
                6666661fff6666fffffffff666ff116666666ffff6666fff66696666fff666fffff6666666666666669999666666666655566666666666666ffbbbffffffffffcbcbffbbbfbbbffbbbcaff6666ffc666
                6555661fff6666fffff6fff6666ff166666666ffff66ffff666666666ff666666666666666666666666999666999666655566666655566666fffccccfffffffffbcffbbbbbbbbfbbbbaabaaacffc6666
                65556611ff6666666666ffff666ff1666661111fff66ffff666666666666669996665596666665556666666669996666555666666555966666fffffffffffffffbbfbbbbbbbbbaabbcacaaabfccc6666
                65556661ff66666666666fff666ff1166111ffffff66ffff666695566666669996665556666665556666666669996666666666696555966566ffffffffffffbbcbbbbbcbbcbbaacbbacbabbbbff69666
                66666661ff66666666666fff666ff11fffffffffff666666666655566665559996665556666665556666666666666696666666666699966666fffffffffbbbbcccbbbbabaabaabbbbcfbbbbfff666666
                66666661fff6666666666fff6666ff1ffffffff6666666666666555666655566666665556966666666666699966666666666666666669666566fcfffffbbbcccffffbbababaacccbbbbbfff666666666
                6669996ffff66666ffffffff6666ffffffff6666666666655566699956655566696665556666666666655599966666666655599666666666966fbcfbfbbcccffff1fbbccacaccbbbbbff666666666666
                6669996f11ffffffffffffff6666ffff666666665999666555666999566666666666655566699966666555999666666666555996666696566666bbbbcfffffffff11fbbcccbcbbbbffff666656665556
                6669996611fffffffffffff666666566666666666999666599966999566666666666669666699966666555666669666666555996666665666666bccffbfffffffffffbbcbbbbbfbddff6669666665556
                66666666fffffffffff666666666666666669666699966669995566966555665556666666669996666666666666666666666666966666666666fcfffbbcffffffff1fbbbbbbbffdddf66666666665556
                66666666ffff6666666666665556666666666666666666669995599966555665556666666666666666666566666666666666666666696666cccc1fffbbcffffffff1ffbbbbcffddddf6665666f666666
                66666699966666666699966655566666666666656666666666555955565556655566666966666666666666666666666665666666666666ccccc111fbbbffffffffff1fffbbcdddddff666666f6666666
                699966999666666666999666555999666966966666696666666999555669996666666666666666669666666ffffffffff666666656666ccccf111ffbbbffffffffff11fffbdddddff6665666f6666966
                699966999665556666999666666999666666666666666666666999555669996666666ffffffffffffffffff11111111116666666666ccccff111fc1bccfffffffffffdffdddddddf66666666f6656666
                69996666666555666666666666699966666666666666666666fffffffffffffffffff11111111111111111111111111111111666666cccf11111cc1ccffffffffffffdfdddddddff6696666666666666
                6666666666655566666666666666666fffffffffffffffffff1111111111111111111111111111111111111111111111111111f66bbbbf111111c11cffffffffffff11dfdddddf666666666666666666
                6666666666666ffffffffffffffffff1111111111111111111111111111111111111111111111111111116666666666611111f.bbbbbff11ccc1c111fffffffffff1cf1fdddff6666666566f666666f6
                666ffffffffff1111111111111111111111111111111111111111111111111166666666666666666666666666666666611111fbbbbff111fc11111ff111fffff11cc111ffff66666f666666f666566f6
                66f1111111111111111111111111111111111111166666666666666666f66666666666666666666f6666666f6666f66661111bbbbff111111111111ffccccccccf1cc111f66665566656666666666666
                66f11111111111111116666666666666666666666666666666f66666666666666f666666f666666f66666fffffffffff611bbbbffff111111111111111111111ccccf11ff66566666666666666666f66
                66f1111166666666666666666f66666666f666666f666666666f666666f66666fffffffffffffffffffff66f6666f66666bbbbfcc11111111fffff111ff1ffffcff1111f666666666666666999999999
                66f1111166666665666666666f66666666f666666f66ffffffffffffffffffff6f666666f666666f6666666f66666666ffbfff1cf111111fffffffff11ff1111111111ff666666699999999999999999
                65ff111166666666f666666fffffffffffffffffffff6666666f666666f666666f666666f666666f6666666f66666f66bbff111c1111111fff1111fff11ff11111111111f6999999999fff999999f999
                666f11111666fffffffffff66f66666666f6666666f66666666f666666f666666f666666f666666f6666669f999999fbbffbbbc1111111fff1111111fff1ff1111111111ff999999999fdff9999f9999
                666f111116666666f66666666f66666666f6666666f66666666f666666f999999f999999f999999f9999999f99999fffffbbbbbf111111ff1111111111f11111111111111ff9999999fdfdf9999f9999
                666f111111666666f66666666666666666f9999999f99999999f999999f999999f999999f99999fffffffffffff99ffffcbbbbc1111111ff1111111111ff111111111111ff9999999ffddfdf99999999
                666f1111116666666f666699999f9999999f999999f99999999fffffffffffffffffffffffffff99f999999f9999ffffcbbbccc1f11111ff111111111111111111ffffff99999999ffddfdff99999999
                666f1111111999999999999999ffffffffffffffffffffffffff999999f999999f9999999f999999f999999f999fffff11b1ccf1111111fff111111111111111fff99f999999999ffffddddf99999ff9
                6666f111111f9fffffffffffff9f9999999f9999999f9999999f999999f999999f9999999f999999f999999f99fffff11bb1c1111111111ff1111111111111ffff99999999999ffffffffdf99999f999
                6999f111111f999999999999999f9999999f9999999f9999999f9999999999999f9999999f999999f99999999fff1111cc1111111111111fff1111111111ffffff999999999ffffffffffff999999999
                9999f1111111f9999999999999999999999f99999999f99999999999999999999f9999999f999999f9999999fff11111f1111111111111fffff11111111ffffff9999999ffffffffffffff9999999999
                9999f1111111f9999f999999999999999999f9999999999999999999999999999f9999fffffffffffffffff9ff1111111111111111111ffff1f1111111ffffffff9fffffffffffffffffff9999999999
                9999f11111111f999f99999999999999f99999999999999999999fffffffffffffffff999f999999f999999ff111111111111111111ffff111fff111fffffffffffffffffffffffffffff99999999999
                99999f111f111f9999f9fff999f9ffff999999fffff99999999999999999999999f999999f999999f99999ff111111111111111111ffff11111ff111ffffffffffffffffffffffcfff99999f99999999
                99999f111f111f99ffff9999999fffff99ffffff99999fff9ffffff9999999999999999999f999999f999ff111111111111111111fff11111111111fffffccffffffffffffffcccf999999f999999f99
                99999f111f1111f999f999999fff111ff999911111199999999999ffffff99999f999999999999999999ff1111111111ffffffffffffffff111111ff9ffcccffffffffffffcccf99999999f99999f999
                99999f1111f111f9999f9999fff11111f9111fffff1111fffffffff99ffffffff99ffffffff999999999f1111111ffffffffffffffffffff1111fff999ffbccfffffffffccc999999999999999f99999
                99999f1111f1111f999f9999fff11111ff9fffff11111111111ffffffffff9999911111999999fffff9ff11111fffffffffffffffffffffff11fff99999fbbbcccccffff99999999999999999f999999
                999999f1119f111f9999f999fff11111ff99ff11fffff1111111111111ffffff1ffffffff111111199ff1111ffcccfffffffffffffffffffff1ff99999999bbbbcffff99999999999999999999999999
                999999f1119f1111f999f9999fff111fffff119111111999fffffff999111ffff11fffffffffff9999ff11fff1ccffffffffffffffffffffffff99999999999fff999999999999f99999999999999999
                999999f1119f11119999f999999fffff9999999999999999999999999fff991ff111fffffff11ff11ff.fffffbccffffffffffffffffffffffff99999999999999999999999999ff9999f999999999ff
                999999f11119f11199999f999999fff999999999999999999999999999999ffff991111ffffff1199f.fffff1bcffffffffffffffffffffffff99999999999999999999f99999fff99fff99999f99f99
                999999f11119f11119999f99999999999f99999999999f9999999f99999999999ffff9911ffffff11fffffff1bcffffffffffffffffffffffff9999fff99999f99999999f99fffffffff99999f999999
                9999999f11199f11199999f9999999999999999999999f9999999f999999999999999fffff99ffffffffffff1bffffffffffffffffffffffffff9ff111ff9999ff9999999fffffff111ff1ffffff9999
                9999999f11199f11119999f9999999999999999999999f9999999f9999999999999999999ffffff999fffff11bfcfffffffffffffffffffffffff1f1111ff99999f999999ffff111111111fff1ff9999
                9999999f11199f11119999f9999999999999f99999999f9999999f99ffffffff999999999999999ff99ffff1bcccfffffffffffffffffffffffff1111111ff9999999f99fff11ff11111111fff777777
                9999999f111999f11119999f999999999999f999ffffffffffffffff999999999999999999999999999ffff1bbccffffffffffffffffffff111ccff1111111f99999ffffff11ff1111111111fff77777
                9999999f111199f11119999f99999999ffffffff99999f99999999f99999999999999999999999999999fffccbbcffffffffffffffffff111cbcffcf111111f999777ffff1fff11111111111ffff7777
                99999999f111999f11199999f999999999999f99999999f99999999999999999999999ffffffffff999999ffcccccffffffffffff11f1111bbbcfc1c111111f77777777f11ff111111111f11ffff7777
                99999999f111999f11119999999999999999999999999999fffffffffffffffffffffff11111111111111111cccccffffffff11111fff11bbbc1fc1cf111111f7777777f1ff1111111111ff1fffff777
                99999999f111999f111199999fffffffffffffffffffffff111111111111111111111111111111111111111ff1111f11c111111111fff11bbc1f1cc1c111111f777777ff1f111111111111f1fffffff7
                99999999f11199fff1111111111111111111111111111111111111111111111111111111111111111111111f1111f11ccc1111111ffff11bbcf111c1c111111f7fff77ff1f11111111111111ffffff77
                999999fff111ff111111111111111111111111111111111111111111111111111111111fffffffffffffffff11fff11c1111111f1ffff111bbf1f1c1cf11111f7777777f1111111111111111ffff7777
                99ffff666f111111111111111111111111111ffffffffffffffffffffffffffffffffff777777777777777f11ffff111111bbbcf1ffff1111f11f1c11f11111f777777771111111111111111ffff7777
                ff7777666f11111111fffffffffffffffffff7777777777777777777777777777777777777777777777777f11ffff111bbbbccc11ffff1111111f1c1111111ff77777777f1f11111111111111fff7777
                777777766f111111ff77777777777777777777777777777777777777777777777766666666666666666666f1ffff111bbbcccc111ffff111111111f1111111f77777777ff1ff1111111111111f1f7777
                777777776f1111ff7777766666666666666666666666666666666666666666666666666666666666666666f1ffff11bbcffcc1111fffff1111111111111111f777777f77ff1fff1111111111ffff7777
                777777776f11ff77666666666666666666666666666666666666666666666666666666666677777777777f11ffff1f1ffffc111111fffff111111111111111f7777ff777ffff11f1111111fffff77777
                7777777776ff6666666666777777777777777777777777777777777777777777777777777777777777777f11fff111111fcc111111fffffff1111111111111f77ff777777ffff1111111ffff777f7777
                7777777777766666777777777777777777777777777777777777777777777777777777777777777777777f11fff111111cc11111111fffffff11111111111fff77777777ffffffffffffff7f77777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f11ffff11111c1111111111ffffffffff1111111ffff7777777ff777ffffffff77777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f11ffff11111f111111111111ffffffffffff11ffffff77777ff77777ffff77777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f11ffff1111111f111111111111fffffffffffffffffff777777777777fff77777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111ffff111111fb11111111111111ffffffffffffffff777f77777777ff7777f7777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111ffff1111111bbb1c1f111111111111fffffffffffff77777777777777777f7777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111ffff1111111cbbccfcf11111111111ffffffffffff777777777777777777f777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111fffff11111111bbcccc11111111111fffffffffffff7777777777f7777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1111fffff1111fffcbbccc1111111111ffffffffffffff7777777777f7777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111ffffffff11111fccccccff111fffffffffffffffff7777777777f7777777f77777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff111fffffffff111111111ffffffff111ffffffffffff7777777777f77777777f7777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffff111ffffff1111111111ffffffffff7777777777f77777777f7777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111fffffffffffffccccccf11111111111ffffffff77777777777f777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111111111111ffcccc11111f111111111111fffff777777777777f777777777f77777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111111111ffffcc11111111ffff111111111ffff777777777777f777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111111ffffcc11111111111111ff1111111f6666777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1111ffffc111111111111111111f1111111f66667777777777777777777777f7777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111cccc11111111111111111111ff1111fff6666777f77777777f7777777777f777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1cccffff11111111111111111111f11fff66666677f777777f77f7777777777f777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffff1ffff111111111111111ffff66666666677f777777f77777777777777f77
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff111111fff1111111fffffffffff666666777f7777777777777777766666667
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1ff1111111111fff111ffffffffffff66666777f77777777777777777666666666
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1ff111111f1fff111fffffffffffffff66667777777777777777777776666666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff11111ff11fff1111ffffffffffff6666677777777777777777777776666666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1f1111ff11f1fff1111fffffff666666666677777777777777777777776666666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f1111ff11ffff1f111111fffff666666666667777777777777f7777f7776666666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f111f11ff1ffff1111f1111ffff66666666777777777777777f777777776666666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1111f1ffff1111ff1111111ffff667777777777777777777f77777f777666666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1fff11ff111ffff111f1fff111fffffff777777777777777777777f777766666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ff1fff1f1111ffff11ff11fff1fffff1111ffffff777777777777777f777777666666
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff1111ffff11fff111fff1fffff1111111111fff7777777777777777777777666
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff11111ffff11fff11ff1111ff11f111111f1111fff777777777777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff111f1ff11ff111ff11ff1f111f11f1fff1111111f77777777777f77777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff1111111ff1f1fff1fff1fffff1fff1ff11fffff1ff777777777f77777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffff1111f11111ff11ff1111111ffff1ff1fff1f1f1f777777777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff1111fff1111ff111ff111fff1ff11ff1111f11f77777777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffff1111f1f11111111fff11fff11ff11ff1111f111ff777777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffff1fffffff111fff11ffff1fff11ff1111f1111ff77777777777777777
                77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ffffffffff11fff1f111ff111fff1fff111f11111f1f1f11f7777777777777777
                777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fffffffff11f111f11ff111ffff1ff11111fffff1fff1111f777777777777777
                `)
            scene.cameraShake(3, 500)
            timer.after(1500, function () {
                scene.setBackgroundImage(img`
                    6666666666666666666666666666666666666666666666666666666666666655566666666555666666666666666666666666666666666f6666665556666666699966666666666666666ccccccfffffff
                    66666666666666666666666666666666666666666666666666665556666666555666666665556666666666666666666666666666655566f666665556666666699966666666666666666cccccffffffff
                    66665556666666666666666666666666666666666656666666665556666666555566966665556666696666666666966665666666655566f66655555666966669996666696666666666bccccfffffffff
                    66665556665556666666665556666666665655566696666666665556666666665666566666666666656666555666666666666666655566f6665556666666666666566666666999666ccccccfffffffff
                    66665556665556666666665556666966666655566666665666666666666666666666669666999666669666555666666666666966666666f6665556666666665556666666666999555bcccccfffffffff
                    66666666665556665556665556666666666655566666666699966666666666666696666666999556666666555999655566666666666666f666666666555666555666699966699955bbccccffffffffff
                    66566666666666665556666699966666666666666666665599966666666999655566666566999556666666666999655566666666966666f66669996655566655566655996666665cbcccccffffffffff
                    66666999666666665556666699966666656999666666665599966669666999655556666666665555666666555999655566555666666666f6666999665556666666655999666666bcccccccffffffffff
                    66666999666666666666666699966666666999666666665556666666666999655556666666666666666666555666666699955666666666f6665999666666666966666665556666bcccccccffffffffff
                    66666999666666666666666655566666666999666966666666666666666666665556666666666666666656555666666699955699966666f666666666666666666666666555666bbccccccfffffffffff
                    66666666665556666666655555566665556666666666666666665666656666666666666655566655666666666666666699966699965666f66666666666666666669995655566bbcccccccfffffffffff
                    666666666655566666666555555665655566666666666666666666666666666666666666555666665566666666666666666666999666666f666665559996665666999666666bbbcccccccfffffffffff
                    666655566655566669666555666666655566999666666666666666666666669996665966555665566666656666696666666666665556666f666665559996666666999666666bbcccccccffffffffffff
                    66665556666666665666655566666656666699966666665666666666666666999666666566666666666666666666655566696666555666656666655599966555665555ffffbbbcccccccffffffffffff
                    666655566666666666666559996666666666999655566666666555666666669996666666666665559999666966666555666566665556666f669666666666655ffffffffffbbbcfffffffffffffffffff
                    666666666666666666666669996666666666666655566666666599966666666666666666666665559999666666666555666665666666566f666666666666fffffffffffffbbbcfffffffffffffffffff
                    656666666966666665666669996666666666666655566669699999966666666966555666666665999999666666656666666696666666666f666666669666ffffffffffffffbbcff7777fffffffffffff
                    666666666666655566666666666666665556666666666666699999966655566666555666596666999666666666666666666699999666666f665556666696fffffffffffffffbcff77777fddccccfffff
                    666666666666655566999666966665665556666666666666699966666655566666555666566666999666666999666666566699999666666f665556666666ffffffffffffffffcff77777fdddcccccccc
                    666555966666655556999666656666665556999666666666699966666655566666666666666666666666666599666966666699999666666f665556666666ffffffffffffffffcff77777fdddcddccccc
                    666555666666665556999666666666666666999666966696696666666666666666695669996666666666666999666666666666666666666f666666666966fffffffffffffffffff7777fddddcddccccc
                    6665556666656655566666666666666666999996666666666666555666555666666666699966666666666666666666666666666666ffffffffffff666666fffffffffffffffffff7777ffdddcdcccccc
                    6666666666666666666666669666666666999666666656666966555665555556666666599966666666666665666665ffffffffffff66666f666666fffffffffffffffffffffffff77777fddddccccccc
                    65669996966666696666555666666666959996666666666666665556655555966666666666666666666ffffffffffff6666666666666666f6666666666666ffffffffffffffffff77777fddddffccccf
                    6666999666666666666655566666666665555666666666999666666665555556666666666666fffffff6666666666666555666666669666f6965699966666ffffffffffffffffff77777ffffddddffff
                    6666999666666665696655566666666666666666666665999666666696666666666666ffffffff669996666666666666555999666666666f6666699966656ffffffffffffffffff77777777ffdbbbbff
                    6666666666555666666665666699966666666666666665999666666666666666ffffffff666999669996666566666666555999566666666f6666699966666ffffffffffffffffff777777777fbbbff11
                    666555666655566666666666669996666666966666666555666666666666ffffff666666666999669996666666666555666999666666566f6665556666666ffffffffffffffffff77777777ffff11111
                    66655566665556666566666656999666966666569666666666666fffffff666666666666666999666666666666966555656666666666666f6665556666666ffffffffffffffffff77777fff111111111
                    66655566666666666666666666555666666666666666666fffffff6666656666699965556666665556666666666665559996666665556666f665999666566fffffffffffffffff7777ff11111111111b
                    66666666666666666666666666555665666666666fff55566666666699966666699965556666665556666655566666669996666699956666f6669996666665ffffffffffffffff7777fff1111111111b
                    66669666666669996669666666555666666ffffff66655566666666699966696699565556666699959996655566666669996566699956666f6669996699966ffffffffffffffff777bbcf1111111111b
                    66696666966669996666656666666ffffff66666666655566669995699966666666666666666699969996655566666665556666699966666f6666666699966ffffffffffffffff77bbccff111111111b
                    6666656666666999666666fffffff66666666666666666666669995666666666665666666666699969996666666555665556666666666666f6666666699966ffffffffffffffff7fbccfff111111111b
                    6666666666666666ffffff666666666666669666666666666669995666665555666669999666666655566666666555665556666666666656f6699966655566fffffffffffffffffbbcfffff1111111bb
                    666666666fffffff6666666666666655566666999665556666666666666655566666669996665556555666656699956666665696666666666f699966655566fffffffffffffffffccfffff111bbff111
                    666fffffff66666666bbf66666665655566666999665559995665556666655959666569996665556555666666699956666666666699966666f699966666666fffffffffffffffffffffffff1bb111f11
                    ffff66666666666666bbbbbfff666655566666999665559996665556699966999666666666665556666669666699955566666665599946666f666666666666fffffffffff556ffffffff77bb11111f11
                    666666666699966699bb1111bbbbff66666666666666669996665556699966999666655565666666666566566565555599966665599966455f6646666466666ffffff6665555fffbff7777b11111ff11
                    666555665599966699bb11111111bbbbbff666666666666666666666699966666666655566666669996666666666655599964665556446455f6664664465556ff66666565555ffbc7777777f111ff111
                    666555665599966699b1111111f111111bbbbfff6666666666656666666666666666655566666669996666666666666599946666644444444f44446664645464466666666665ff777777777f11fff111
                    699955665556666666b111111111fff1119999bbbbff666666666966666666666666666666555669995556666666666454666466664444666fffff4444445566666666666666ffffff777777fff11f11
                    69995666666999666bb11111111111f1f111999999bbbbbff6666666655566665556666666555666665556646696666545464644446ffffffdddffffff64444466466646666ffffffffffffffff11f11
                    69995666666999666bb11111111111111f1111111999999bbbbff66665556666555566699955564666555666664664666444446ffffdddddddddddddddfffff6444446444646644464ffffffffffffff
                    66666665666999666bb12211111111111ff11111111999999bbbbff6655566665556666999666666666646666666444446fffffddddddddffffffdddddddddfffff664444644654544664666466fffff
                    66666966665556666b112211111111111f11111111111111999999bbbbff6666666666699966666666646646644446ffffdddddddddffff99f999ffffddddddddddfffff644444666646664464665556
                    69996666665556666b112111111111111f1212211111111111111999999bbbbff666666646666646646664444fffffdddddddddffff999999f9999999fffffddddddddddfffff6444446646644645556
                    6999666666555666bb122111111111111f12111211111111111111111999999bbbbff6646646666644444ffffddddddddddffff9999999fffffff999999999ffffdddddddddddffff664444446444456
                    6999655566666666bb12211111111111ff111112111111111111111111111999999bf666664644446ffffddddddd111ffff9999999ffff777777ffff9999999999fffffddddddddddfffff6444444466
                    6666655566666566bb12222111111111f111111111111111111111111111199999bb66464444fffffddddddd1111ff19999999ffff77777777777777ffffff999999999ffffdddddddddddffff666444
                    6666655569996666b112122111111111f181111111111111111111111111199999bf6444ffffdddddddd1111ff9999199fffff77777777111777777777777ffffff99999999fffffddddddddddfff666
                    6666666669996666b122121111111111f181111111111111111111111111999999bfffffdddddddd1111ff9999999f1ff777777777777777711177777777777777fffff999999999ffffdddddddddfff
                    666666666999566bb122221111111111f19811811111111111111111111199999bbdddddddddd111ff9999999ffff71711777777777777777777111117777777777777fffff999999999fffffddddddd
                    656696666655566bb12222111111111f111981811111111111111111111199999bbdddddddff1f9999999ffff11777177111177777777777777777771117777777777777777ffff9999999999ffffddd
                    666666666655566bb12222111111111f111111918111111111111111111199999bfdddffff91199ffffff1111771171777771117777777777777777777711177777777777777777fffff999999999fff
                    166666566666666b112122111112211f191111111118811111111111111199999bffff9999119ff111111777777711177777777117777777777777777777771111777777777777777777fffff9999999
                    111666666666666b122121111112111f188111111111111881111111111999999bf9999991f1f1117777777711117777777777711777777777777777777777771177777777777777777777777ffff999
                    11111166666666bb12222111112211f111118911111111111118811111199999bbf99ffff111177777771111777777777771111777777777777777777777711177777777777777777777777777777fff
                    11111111116666bb12222112212211f111111811111111111111111811199999bffff7771171777111117777777777771117777777777777777777777111177777777777777777777777777777777777
                    11111111111166bb12122112112211f121111111111111111111111111199999bf7777777711111777777777777711117777777777777777777777111777777777777777777777777777777777777777
                    1111111111111bb12222112212211f112111111118111111111111111199999bb17777777777177777777771111177777777777777777777117111777777777777777777777777777777777777777777
                    1111111111111bb12222112212211f111111211111881111111111111199999bf71777777777777777777711177777777777777777777711111777777777777777777777777777777777777777777777
                    1111111111111bb12222112112211f111111211111111188111111111199999bf77117777777777777111177777777777777777777711111771777777777777777777777777777777777777777777777
                    1111111111111bb12122122112111f112111211111111111118111111199999b777771777777771111777777777777777777777711117777771777777777777777777777777777777777777777777777
                    1111111111111b11212112212211f1f1111211111111111111111811199999bb777777117771111777777777777777777777711117777777777177777777777777777777777777777777777777777777
                    111111111111bb11112112212211ffffff1111111111111111111111199999bf777777771117777777777777777777777111117777777777771777777777777777777777777777777777777777777777
                    111111111111bb1ff11112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777111117777777777777771777777777777777777777777777777777777777777777
                    111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777111177777777777777777717777777777777777777777777777777777777777777777
                    111111111111b111111ff111211ff7ffffff7ffffff111111111111199999bb7777777777777777777777771111177777777777777777777717777777777777777777777777777777777777777777777
                    111111111111b11111111fff111ffff99ffffff77fffff111111111199999bf7777777777777777777771111177777777777777777777771177777777777777777777777777777777777777777777777
                    11111111111bb1111111111ff11fffff9999fffff7fffff11111111199999bf7777777777777777777711177777777777777777777777111777777777777777777777777777777777777777777777777
                    11111111111bb111111111111fffffffffff999fffff7fffff1111119999bb77777777777777771111177717777777777777777777711777777777777777777777777777777777777777777777777777
                    1111111111bbfbb111111111111f7fffffffff99fffff7fffffff1119999bb77777777777771111777777771111177777777711111177777777777777777777777777777777777777777777777777777
                    1111111bbbbbbbfbb1111111111ffff9fffffff99ffff7ffffffffff9999bf77777777771111777777777777771111111111117777777777777777777777777777777777777777777777777777777777
                    1111bbbbb1b1bbbbfbb11111111fffff999fffffffff77ffffffffffff99bf77777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1bbbbb1bb111b1bbbbfbb1111117ffffff999fffffff7fff99ffffffff9bb777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    bbbb1b111bb111b1bbbbfbb111ff77fffffff99999ff7ff999fff9ffff9bf711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    b1bb111b1111b111b1bbbbfbb1ffff77fffffffff9f77ffff9ff999fff9bf117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    b1111bb11b1b11b111b1bbbbfbbfffff77fffffffff7fffff9ff9fffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1111b11b11b1111b111b1bbbbfbbfffff777fffffff7fff99fff9ffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b1b1111b11b1111b111b1bbbbfbbbfffff77ffff77fff9ffff9ffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    b11b11bb11b1b1b1111b111b1bbbbfbbbfffff77ff7ffff9fff9fffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b11bb1b1b1b111bb111b111b1bbbbfbbbfffff777ffff9fff9fffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffff99ff9fffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffff9ff99fffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1b11111b11b1bb111b1111b1111b111b1bbbbbfbbffffffff9ffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbffffff9ffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                    11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                    1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                    1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777711
                    bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777771177
                    bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777117777
                    1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777711777777
                    1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb1111111111111111111111111111111111111111111111111177777777777777777777777777777777777777777777771177777777
                    1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb111111111111111111111111111111111111111111111111111111777777777777777777777777777777777777777777117777777777
                    111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb1111111111111111111111111111111111111111111111111111111117777777777777777777777777777777777777711777777777777
                    1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777777771177777777777777
                    11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111111111111111111111111111111111111111111111111111177777777777777777777777777777117777777777777777
                    11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb1111111111111111111111111111111111111111111111111111111111111111111111777777777777777777777777711777777777777777777
                    111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777771177777777777777777777
                    1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777117777777777777777777777
                    1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777711777777777777777777777777
                    bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777771177777777777777777777777777
                    bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177117777777777777777777777777777
                    bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777777
                    bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777777
                    1bbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777777777777777
                    111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777777
                    1111bbbbbbbbbbbbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777777777777
                    11111bbbbbbbbbbbbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777777
                    111111bbbbbbbbbbbbbb11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777777777
                    11111111bbbbbbbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777777
                    111111111bbbbbbb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777777777
                    1111111111bbbbb1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777777
                    11111111111bb111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111777777
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117777
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111117
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    `)
                game.showLongText("미래에, 나는 어느 축구 구단의", DialogLayout.Bottom)
                if (controller.A.isPressed()) {
                    game.showLongText("스포츠 분석가가 된다", DialogLayout.Bottom)
                    if (controller.A.isPressed()) {
                        game.showLongText("비록 작은 구단이지만", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            game.showLongText("이게 내 꿈이자 현실이다.", DialogLayout.Bottom)
                            if (controller.A.isPressed()) {
                                game.showLongText("그리고 여정의 끝이다.", DialogLayout.Bottom)
                                scene.setBackgroundImage(img`
                                    6666666666666666666666666666666666666666666666666666666666666655566666666555666666666666666666666666666666666f6666665556666666699966666666666666666ccccccfffffff
                                    66666666666666666666666666666666666666666666666666665556666666555666666665556666666666666666666666666666655566f666665556666666699966666666666666666cccccffffffff
                                    66665556666666666666666666666666666666666656666666665556666666555566966665556666696666666666966665666666655566f66655555666966669996666696666666666bccccfffffffff
                                    66665556665556666666665556666666665655566696666666665556666666665666566666666666656666555666666666666666655566f6665556666666666666566666666999666ccccccfffffffff
                                    66665556665556666666665556666966666655566666665666666666666666666666669666999666669666555666666666666966666666f6665556666666665556666666666999555bcccccfffffffff
                                    66666666665556665556665556666666666655566666666699966666666666666696666666999556666666555999655566666666666666f666666666555666555666699966699955bbccccffffffffff
                                    66566666666666665556666699966666666666666666665599966666666999655566666566999556666666666999655566666666966666f66669996655566655566655996666665cbcccccffffffffff
                                    66666999666666665556666699966666656999666666665599966669666999655556666666665555666666555999655566555666666666f6666999665556666666655999666666bcccccccffffffffff
                                    66666999666666666666666699966666666999666666665556666666666999655556666666666666666666555666666699955666666666f6665999666666666966666665556666bcccccccffffffffff
                                    66666999666666666666666655566666666999666966666666666666666666665556666666666666666656555666666699955699966666f666666666666666666666666555666bbccccccfffffffffff
                                    66666666665556666666655555566665556666666666666666665666656666666666666655566655666666666666666699966699965666f66666666666666666669995655566bbcccccccfffffffffff
                                    666666666655566666666555555665655566666666666666666666666666666666666666555666665566666666666666666666999666666f666665559996665666999666666bbbcccccccfffffffffff
                                    666655566655566669666555666666655566999666666666666666666666669996665966555665566666656666696666666666665556666f666665559996666666999666666bbcccccccffffffffffff
                                    66665556666666665666655566666656666699966666665666666666666666999666666566666666666666666666655566696666555666656666655599966555665555ffffbbbcccccccffffffffffff
                                    666655566666666666666559996666666666999655566666666555666666669996666666666665559999666966666555666566665556666f669666666666655ffffffffffbbbcfffffffffffffffffff
                                    666666666666666666666669996666666666666655566666666599966666666666666666666665559999666666666555666665666666566f666666666666fffffffffffffbbbcfffffffffffffffffff
                                    656666666966666665666669996666666666666655566669699999966666666966555666666665999999666666656666666696666666666f666666669666ffffffffffffffbbcff7777fffffffffffff
                                    666666666666655566666666666666665556666666666666699999966655566666555666596666999666666666666666666699999666666f665556666696fffffffffffffffbcff77777fddccccfffff
                                    666666666666655566999666966665665556666666666666699966666655566666555666566666999666666999666666566699999666666f665556666666ffffffffffffffffcff77777fdddcccccccc
                                    666555966666655556999666656666665556999666666666699966666655566666666666666666666666666599666966666699999666666f665556666666ffffffffffffffffcff77777fdddcddccccc
                                    666555666666665556999666666666666666999666966696696666666666666666695669996666666666666999666666666666666666666f666666666966fffffffffffffffffff7777fddddcddccccc
                                    6665556666656655566666666666666666999996666666666666555666555666666666699966666666666666666666666666666666ffffffffffff666666fffffffffffffffffff7777ffdddcdcccccc
                                    6666666666666666666666669666666666999666666656666966555665555556666666599966666666666665666665ffffffffffff66666f666666fffffffffffffffffffffffff77777fddddccccccc
                                    65669996966666696666555666666666959996666666666666665556655555966666666666666666666ffffffffffff6666666666666666f6666666666666ffffffffffffffffff77777fddddffccccf
                                    6666999666666666666655566666666665555666666666999666666665555556666666666666fffffff6666666666666555666666669666f6965699966666ffffffffffffffffff77777ffffddddffff
                                    6666999666666665696655566666666666666666666665999666666696666666666666ffffffff669996666666666666555999666666666f6666699966656ffffffffffffffffff77777777ffdbbbbff
                                    6666666666555666666665666699966666666666666665999666666666666666ffffffff666999669996666566666666555999566666666f6666699966666ffffffffffffffffff777777777fbbbff11
                                    666555666655566666666666669996666666966666666555666666666666ffffff666666666999669996666666666555666999666666566f6665556666666ffffffffffffffffff77777777ffff11111
                                    66655566665556666566666656999666966666569666666666666fffffff666666666666666999666666666666966555656666666666666f6665556666666ffffffffffffffffff77777fff111111111
                                    66655566666666666666666666555666666666666666666fffffff6666656666699965556666665556666666666665559996666665556666f665999666566fffffffffffffffff7777ff11111111111b
                                    66666666666666666666666666555665666666666fff55566666666699966666699965556666665556666655566666669996666699956666f6669996666665ffffffffffffffff7777fff1111111111b
                                    66669666666669996669666666555666666ffffff66655566666666699966696699565556666699959996655566666669996566699956666f6669996699966ffffffffffffffff777bbcf1111111111b
                                    66696666966669996666656666666ffffff66666666655566669995699966666666666666666699969996655566666665556666699966666f6666666699966ffffffffffffffff77bbccff111111111b
                                    6666656666666999666666fffffff66666666666666666666669995666666666665666666666699969996666666555665556666666666666f6666666699966ffffffffffffffff7fbccfff111111111b
                                    6666666666666666ffffff666666666666669666666666666669995666665555666669999666666655566666666555665556666666666656f6699966655566fffffffffffffffffbbcfffff1111111bb
                                    666666666fffffff6666666666666655566666999665556666666666666655566666669996665556555666656699956666665696666666666f699966655566fffffffffffffffffccfffff111bbff111
                                    666fffffff66666666bbf66666665655566666999665559995665556666655959666569996665556555666666699956666666666699966666f699966666666fffffffffffffffffffffffff1bb111f11
                                    ffff66666666666666bbbbbfff666655566666999665559996665556699966999666666666665556666669666699955566666665599946666f666666666666fffffffffff556ffffffff77bb11111f11
                                    666666666699966699bb1111bbbbff66666666666666669996665556699966999666655565666666666566566565555599966665599966455f6646666466666ffffff6665555fffbff7777b11111ff11
                                    666555665599966699bb11111111bbbbbff666666666666666666666699966666666655566666669996666666666655599964665556446455f6664664465556ff66666565555ffbc7777777f111ff111
                                    666555665599966699b1111111f111111bbbbfff6666666666656666666666666666655566666669996666666666666599946666644444444f44446664645464466666666665ff777777777f11fff111
                                    699955665556666666b111111111fff1119999bbbbff666666666966666666666666666666555669995556666666666454666466664444666fffff4444445566666666666666ffffff777777fff11f11
                                    69995666666999666bb11111111111f1f111999999bbbbbff6666666655566665556666666555666665556646696666545464644446ffffffdddffffff64444466466646666ffffffffffffffff11f11
                                    69995666666999666bb11111111111111f1111111999999bbbbff66665556666555566699955564666555666664664666444446ffffdddddddddddddddfffff6444446444646644464ffffffffffffff
                                    66666665666999666bb12211111111111ff11111111999999bbbbff6655566665556666999666666666646666666444446fffffddddddddffffffdddddddddfffff664444644654544664666466fffff
                                    66666966665556666b112211111111111f11111111111111999999bbbbff6666666666699966666666646646644446ffffdddddddddffff99f999ffffddddddddddfffff644444666646664464665556
                                    69996666665556666b112111111111111f1212211111111111111999999bbbbff666666646666646646664444fffffdddddddddffff999999f9999999fffffddddddddddfffff6444446646644645556
                                    6999666666555666bb122111111111111f12111211111111111111111999999bbbbff6646646666644444ffffddddddddddffff9999999fffffff999999999ffffdddddddddddffff664444446444456
                                    6999655566666666bb12211111111111ff111112111111111111111111111999999bf666664644446ffffddddddd111ffff9999999ffff777777ffff9999999999fffffddddddddddfffff6444444466
                                    6666655566666566bb12222111111111f111111111111111111111111111199999bb66464444fffffddddddd1111ff19999999ffff77777777777777ffffff999999999ffffdddddddddddffff666444
                                    6666655569996666b112122111111111f181111111111111111111111111199999bf6444ffffdddddddd1111ff9999199fffff77777777111777777777777ffffff99999999fffffddddddddddfff666
                                    6666666669996666b122121111111111f181111111111111111111111111999999bfffffdddddddd1111ff9999999f1ff777777777777777711177777777777777fffff999999999ffffdddddddddfff
                                    666666666999566bb122221111111111f19811811111111111111111111199999bbdddddddddd111ff9999999ffff71711777777777777777777111117777777777777fffff999999999fffffddddddd
                                    656696666655566bb12222111111111f111981811111111111111111111199999bbdddddddff1f9999999ffff11777177111177777777777777777771117777777777777777ffff9999999999ffffddd
                                    666666666655566bb12222111111111f111111918111111111111111111199999bfdddffff91199ffffff1111771171777771117777777777777777777711177777777777777777fffff999999999fff
                                    166666566666666b112122111112211f191111111118811111111111111199999bffff9999119ff111111777777711177777777117777777777777777777771111777777777777777777fffff9999999
                                    111666666666666b122121111112111f188111111111111881111111111999999bf9999991f1f1117777777711117777777777711777777777777777777777771177777777777777777777777ffff999
                                    11111166666666bb12222111112211f111118911111111111118811111199999bbf99ffff111177777771111777777777771111777777777777777777777711177777777777777777777777777777fff
                                    11111111116666bb12222112212211f111111811111111111111111811199999bffff7771171777111117777777777771117777777777777777777777111177777777777777777777777777777777777
                                    11111111111166bb12122112112211f121111111111111111111111111199999bf7777777711111777777777777711117777777777777777777777111777777777777777777777777777777777777777
                                    1111111111111bb12222112212211f112111111118111111111111111199999bb17777777777177777777771111177777777777777777777117111777777777777777777777777777777777777777777
                                    1111111111111bb12222112212211f111111211111881111111111111199999bf71777777777777777777711177777777777777777777711111777777777777777777777777777777777777777777777
                                    1111111111111bb12222112112211f111111211111111188111111111199999bf77117777777777777111177777777777777777777711111771777777777777777777777777777777777777777777777
                                    1111111111111bb12122122112111f112111211111111111118111111199999b777771777777771111777777777777777777777711117777771777777777777777777777777777777777777777777777
                                    1111111111111b11212112212211f1f1111211111111111111111811199999bb777777117771111777777777777777777777711117777777777177777777777777777777777777777777777777777777
                                    111111111111bb11112112212211ffffff1111111111111111111111199999bf777777771117777777777777777777777111117777777777771777777777777777777777777777777777777777777777
                                    111111111111bb1ff11112112211ff7ffffff1111111111111111111199999bf777777777777777777777777777777111117777777777777771777777777777777777777777777777777777777777777
                                    111111111111bb111ff112112111fffff7ffffff111111111111111119999bb7777777777777777777777777777111177777777777777777717777777777777777777777777777777777777777777777
                                    111111111111b111111ff111211ff7ffffff7ffffff111111111111199999bb7777777777777777777777771111177777777777777777777717777777777777777777777777777777777777777777777
                                    111111111111b11111111fff111ffff99ffffff77fffff111111111199999bf7777777777777777777771111177777777777777777777771177777777777777777777777777777777777777777777777
                                    11111111111bb1111111111ff11fffff9999fffff7fffff11111111199999bf7777777777777777777711177777777777777777777777111777777777777777777777777777777777777777777777777
                                    11111111111bb111111111111fffffffffff999fffff7fffff1111119999bb77777777777777771111177717777777777777777777711777777777777777777777777777777777777777777777777777
                                    1111111111bbfbb111111111111f7fffffffff99fffff7fffffff1119999bb77777777777771111777777771111177777777711111177777777777777777777777777777777777777777777777777777
                                    1111111bbbbbbbfbb1111111111ffff9fffffff99ffff7ffffffffff9999bf77777777771111777777777777771111111111117777777777777777777777777777777777777777777777777777777777
                                    1111bbbbb1b1bbbbfbb11111111fffff999fffffffff77ffffffffffff99bf77777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1bbbbb1bb111b1bbbbfbb1111117ffffff999fffffff7fff99ffffffff9bb777711111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    bbbb1b111bb111b1bbbbfbb111ff77fffffff99999ff7ff999fff9ffff9bf711117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    b1bb111b1111b111b1bbbbfbb1ffff77fffffffff9f77ffff9ff999fff9bf117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    b1111bb11b1b11b111b1bbbbfbbfffff77fffffffff7fffff9ff9fffff9b1777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111b11b11b1111b111b1bbbbfbbfffff777fffffff7fff99fff9ffff9bb1117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b1b1111b11b1111b111b1bbbbfbbbfffff77ffff77fff9ffff9ffff9bb1111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    b11b11bb11b1b1b1111b111b1bbbbfbbbfffff77ff7ffff9fff9fffff9bf1111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b11bb1b1b1b111bb111b111b1bbbbfbbbfffff777ffff9fff9fffff9bf1111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    111bb1111b1111bb11b1b11b111b1bbbbffbbfffffffff99ff9fffff9bb11111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    bb1b1b1bb11b1111b1b1b111bb111b1bbbbbfbbfffffff9ff99fffff9bf11111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1b11111b11b1bb111b1111b1111b111b1bbbbbfbbffffffff9ffffff9bf11111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111b111b1b1111b111b1b11b1b1b1111b1bbbbbfbbffffff9ffffff9b111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b111b111b11b11b11b1b11b11111b1111b1bbbbbfbbffffffffff9bb111111111111111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777
                                    11b11111b11bb1b11bb111bb11b11b1b1111b1bbbbbfbbfffffffff9bb111111111111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777
                                    1111b1b1b11b1111b11b1b11b11bb1111b1111b1bbbbbfbbbffffff9bf111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777777777
                                    1b11bb111b1111bb1b11bb111b1111b1b11b1111b1bbbbbfbbbffff9bf111111111111111111111111111111111777777777777777777777777777777777777777777777777777777777777777777711
                                    bb11b111b11b1111bb111bb1b111bb1111b11b1b1111b1bbbbbfbbbbf1111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777777771177
                                    bbb1b1b111b111b1111bb1b111b1111b11bbb1111b1111b1bbbbbfbbf1111111111111111111111111111111111111111117777777777777777777777777777777777777777777777777777777117777
                                    1bb1111bb11bb111b1b11b11b111b111b11111b11b1b1111bbbbbbbfb1111111111111111111111111111111111111111111177777777777777777777777777777777777777777777777777711777777
                                    1b1b1bb111b11b11bb1111b111b11bb111b111b1b1111b1b1bbbbb11111111111111111d1111d11111111111111111111111111177777777777777777777777777777777777777777777771177777777
                                    1111bbb1b1b111b1111bb111b11b111b1111b1111111b11bbbbb1111111111111111d111d111111111111111111111111111111111777777777777777777777777777777777777777777117777777777
                                    111b1bbb111b1b1b111b11111bb1b111b1bb1b11111b1bbbbbb11111111111111111111d111d111d11111111111111111111111111117777777777777777777777777777777777777711777777777777
                                    1111b1bb111bb1111b111b11b11111b1b1b111111b1bbbbbb11111111111111111dd11dd11d1111d11111111111111111111111111111177777777777777777777777777777777771177777777777777
                                    11111111bbb111bb11b11bb11111bbb11111111b1bbbbbb11111111111111111ddd1ddd11ddd111111111111111111111111111111111111177777777777777777777777777777117777777777777777
                                    11111b1bbbb11b1b111bb111b11b11b11b11b11bbbbbb111111111111111111ddddddd11dddddd1111d11111111111111111111111111111111777777777777777777777777711777777777777777777
                                    111b1bbbbbbb1b111b111b11b1b1111111b1bbbbbbb1111111111111111111ddddddd11dddd1dd11dd111d11111111111111111111111111111111777777777777777777771177777777777777777777
                                    1b1bbbbbbbbbbb1111b111bb111b1111b1bbbbbb11111111111111111111dd1ddddd11555ddd111d11111111111111111111111111111111111111117777777777777777117777777777777777777777
                                    1bbbbbbbbbbbbbb1b11b1111b1111bb1bbbbbb1111111111111111111111ddddddd1155555dd11dddd111111111111111111111111111111111111111117777777777711777777777777777777777777
                                    bbbbbbbbbbbbbbbbbb111b11111b1bbbbbbb111111111111d1111111111ddddddd11dddd555111ddddd1d111111111111111111111111111111111111111117777771177777777777777777777777777
                                    bbbbbbbbbbbbbbbbbb1b11111b1bbbbbbb111111111111111111111111ddddddd1ddddddd5111dd1dddd1111111111111111111111111111111111111111111177117777777777777777777777777777
                                    bbbbbbbbbbbbbbbbbbb11111b1bbbbbbb1111111111111111d1111111ddddddd11dd11dddd11ddd1ddd11111111111111111111111111111111111111111111117777777777777777777777777777777
                                    bbbbbbbbbbbbbbbbbbbb1bb1bbbbbbb11111111111111d11dd111111ddddddd1ddddd11dd11ddddddd111111111111111111111111111111111111111111111111117777777777777777777777777777
                                    1bbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111dd1ddd11111ddddddd11dddddddd11dddddddd111111111111111111111111111111111111111111111111111117777777777777777777777777
                                    111bbbbbbbbbbbbbbbbbbbbbbbb1111111111111111ddddddd1111ddddddd1ddddddddd11ddddddddd111111111111111111111111111111111111111111111111111111177777777777777777777777
                                    1111bbbbbbbbbbbbbbbbbbbb111111111111111111ddddddd111dddd1ddd1dddddddddd11dd1dddd11111111111111111111111111111111111111111111111111111111111177777777777777777777
                                    11111bbbbbbbbbbbbbbbbb1111111111111111111ddddddd111dddd1ddddddddddddd111dddd11d1111dd111111111111111111111111111111111111111111111111111111111777777777777777777
                                    111111bbbbbbbbbbbbbb1111111111111111111dddddddd111dddd1ddddddd1ddddd11ddddddd11111d1dd11111111111111111111111111111111111111111111111111111111111777777777777777
                                    11111111bbbbbbbbbb11111111111111111111dd1ddddd111dddd1ddddddd1ddddd11dddddddd111dd11d111111111111111111111111111111111111111111111111111111111111117777777777777
                                    111111111bbbbbbb1111111111111111111111ddddddd11dddddd1dddddd1ddddd11dddddddd111ddddd1111111111111111111111111111111111111111111111111111111111111111117777777777
                                    1111111111bbbbb11111111111111111111111ddddddd1dddddddddddddd1ddddddddddddddd1155dddd1111111111111111111111111111111111111111111111111111111111111111111777777777
                                    11111111111bb111111111111111111111111dddddddddddddddddddddd1ddddddddddddddd1155551d11111111111111111111111111111111111111111111111111111111111111111111111777777
                                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddd11dd5555d11111111111111111111111111111111111111111111111111111111111111111111111117777
                                    1111111111111111111111111111111111111ddddddddddddddddddddddddddddddd1dddd11ddddd55111111111111111111111111111111111111111111111111111111111111111111111111111117
                                    1111111111111111111111111111111111111dddddddddddddddddddddddddddddd1ddddddddd1dd11111111111111111111111111111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                    `)
                                timer.after(1000, function () {
                                    game.setGameOverMessage(true, "Your Life is On The Game")
                                    game.setGameOverEffect(true, effects.confetti)
                                    game.gameOver(true)
                                })
                            }
                        }
                    }
                }
            })
        }
    }
})
let projectile5: Sprite = null
let projectile3: Sprite = null
let projectile6: Sprite = null
let mySprite2: Sprite = null
let projectile4: Sprite = null
let shil: StatusBarSprite = null
let up1 = 0
let projectile22: Sprite = null
let up = 0
let dan = 0
let seouldae = 0
let iljin = 0
let l_inst = 0
let using = 0
let mini = 0
let statusbar: StatusBarSprite = null
let rp2: Sprite = null
let inst = 0
let index = 0
scene.setBackgroundImage(img`
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111ffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111111111111ff111111111111111111111111111
    ............................................................11111111f11111111f111111111111ffffff11111111111fff11111111ffff111111111fff11111111111111111111111111
    ............................................................11111111f11111111f111111111111ffffffff111111111fff1111111fffff1111111111ff11111111111111111111111111
    ............................................................11111111f11111111f11111111111111fffffff11111111fff1111111fffffff11111111ff11111111111111111111111111
    ............................................................11111111f11111111f111111111111111111fff11111111fff111111fff11ffff1111111ff11111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111ffff1111fff11111ffff111fff1111111fff1111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111fffff1111ffff1111fff1111fff1111111fff1111111111111111111111111
    ............................................................11111111f11111111f11111111111ffffffffffffff1111ffff1111fff11111ff1111111fff1111111111111111111111111
    ............................................................11111111f11111111f111111111fffffffffffffff1111111ff1111fff11111ff1111ffffff1111111111111111111111111
    ............................................................11111111f11111111f11111111fffffffff111ffff1111111ff1111fff11111ff11ffffffff1111111111111111111111111
    ............................................................11111111f11111111f111111111111111111fff1111111111ff1111ff11111fff1111111fff1111111111111111111111111
    ............................................................11111111f11111111f11111111111111111ffff1111111111ff1111fff1111fff1111111fff111111111111111111f111111
    ............................................................11111111f11111111f111111111111111fffff11111111111ff1111fff111ffff1111111fff111111111111111111f111111
    ............................................................11111111f11111111f11111111111111fffff11fff1111111ff1111fffffffff11111111fff11111fffffff1111111f11111
    ............................................................11111111f11111111f1111111111111ffff1111fffff11111ff111111ffffff111111111fff1111ff11111ff111111f11111
    ............................................................11111111f11111111f111111111111ffff11111ffffff1111ff111111111111111111111fff1111f1111111f111111f11111
    ............................................................11111111f11111111f11111111111fff1111111111fff1111ff111111111111111111111fff1111f1111111ff11111f11111
    ............................................................11111111f11111111f11111111111fff111111111111fffffff111111111111111111111fff1111f11111111f11111f11111
    ............................................................11111111f11111111f11111111111ff111111111fffffffffff11111111111111111ff11fff1111f11111111f11111f11111
    ............................................................11111111f11111111f1111111111111111111ffffffffffffff11111111111111111ff111111111ff1111111f11111ff1111
    ............................................................11111111f11111111f11111111111111ffffffffff1111111ff111111111ff111111ff1111111111fffff11ff111111f1111
    ............................................................11111111f11111111f111111111111ffffffff11111111111ff111111111ff111111ff11111111111111ffff1111111f1111
    ............................................................11111111f11111111f111111fffffff11111ff11111111111ff111111111ffffffffff1111111111111111111111111f1111
    ............................................................11111111f11111111f111111fff111111111ff11111111111ff111111111ffffffffff1111111111111111111111111f1111
    ............................................................11111111f11111111f111111ff1111111111ff111111111ffff111111111ffffffffff1111111111111111111111111f1111
    ............................................................11111111f11111111f111111111111111111ff111111111fff1111111111ff111111ff11111111111111111ffff1111f1111
    ............................................................11111111f11111111f111111111111111111ff111111111fff111111111fff111111ff111111111ffffffff11111111f1111
    ............................................................11111111f11111111f111111111111111111ff111111111fff111111111fff111111ff1111111ff1111111111111111f1111
    ............................................................11111111f11111111f111111111111111111ff111111111fff11111111fff1111111ff1111111111111111111111111f1111
    ............................................................11111111f11111111f111111111111111111ff111111111fff11111111fffff11111ff1111111111111111111111111f1111
    ............................................................11111111f11111111f111111111111111111ff111111111fff11111111ffffffffffff111111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111fff111111111fff111111111fffffffffff111111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111fff11111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111ff111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111fff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111fff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111fff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111fff111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffffffff11fff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111fffffffffffff11fff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111ffffffffffffffff11fff111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111ffffffffffffff11ffff11fff111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111ffffffffff111111ffff11fff111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111fffffff11111111fffff11fff111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111111111ffff111fff111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111111ffff1111fff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111fffff111ffff111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111111ffffff111ffff111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111ffffff1111fff1111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffff1111ffff1111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111fffff11111ffff1111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111fffff11111fffff1111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111ffffff11111ffff11111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111ffffff11111fffff11111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111fffff111111ffff111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111ffff1111111ffff111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111fff111111111111111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111111fffff111111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffffffff11111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffffffff11111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffffffff11111111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111111111fffff11111111111111111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111111ffffff1111111111ffff111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111ffffff111111111fffff1111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111111fffff111111111fffffff1111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffff11111111fffffffff1111111111111111
    ............................................................11111111f11111111f11111111111111111111111111111111111111111111fffff111111fffffffff111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111fffff111111ffffffff11111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111ffff111111fffffff1111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111fffff111fffffff111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111ffffffffffffff1111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111fffffffffffff11111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111111fffffffff1111111111111111111111111111
    ............................................................11111111f11111111f111111111111111111111111111111111111111111111111fffff11111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111199111111111991111111111111111111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111199991111199999991111119999999999911111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111199991111199999991111119999999999991111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111199111111111199991111199999999999991111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111199111111111199991111199999999999991111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111999111111111119991111199111111111999111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111111991111111111119991111199111111111999111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111119991111111111119991111199911111111999911111111111111
    ............................................................11111111f11111111f1111111111111111111111111111119991111111111119991111199999111111199911111111111111
    ............................................................11111111f11111111f1111111111111111111111111111119911111199999119991111119999991111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111119911119999991199991111111999999111111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111119911999999911199991111111199999999111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111119911999999911199991111111199999999111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111999999999911111999911111111111119999111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111111999199991111119999911111199111111999111111111111111111
    ............................................................11111111f11111111f1111111111111111111111111119999111111111199999911119999111111999911111111111111111
    ............................................................11111111f11111111f1111111111111111111111111119991111111119999911111999991111111999911111111111111111
    ............................................................11111111f11111111f1111111111111111111111111119991111111199999111111999911111111199991111111111111111
    ............................................................11111111f11111111f1111111111111111111111111119991111111199999111111999911111111199991111111111111111
    ............................................................11111111f11111111f1111111111111111111111111119991111111999911111111999911111111199991111111111111111
    ............................................................11111111f11111111f1111111111111111111111111119991111111999911111111999911111111199991111fffff1111111
    ............................................................11111111f11111111f111111111111111111111111119999111111999991111111199991111111119999111f11f11f111111
    ............................................................11111111f11111111f111111111111111111111111119911111199999111111111199999111111199999111f1f1f1f111111
    ............................................................11111111f11111111f111111111111111111111111199911111199991111111111199999911111999999111f1f111f111111
    ............................................................11111111f11111111f111111111111111111111119999111111111911111111111111999999999999911111f1f1f1f111111
    ............................................................11111111f11111111f111111111111111111111111199111111111111111111111111119999999991111111f11f11f111111
    ............................................................11111111ffffffffff1111111111111111111111111111111111111111111111111111119999999111111111fffff1111111
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    ............................................................1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
game.showLongText("Press A to start", DialogLayout.Left)
if (controller.A.isPressed()) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    color.startFade(color.Adventure, color.originalPalette)
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fff1111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111ffffffffff111111111111111111ffffff1111111111111fffffff111111111111111fffff11111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111ffffffffff111111111111111111ffffff1111111111111fffffff111111111111111fffff11111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111fffffffffffff111111111111111ffffff11111111111fffffffff1111111111111111ffff11111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111ffffffffffff1111111111111ffffff11111111111ffffffffffff1111111111111ffff11111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111ffffffffffff1111111111111ffffff11111111111ffffffffffff1111111111111ffff11111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111fffff1111111111111ffffff1111111111fffff111fffffff11111111111ffff11111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111fffffff111111ffffff11111111fffffff11111fffff11111111111ffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111fffffffff111111fffffff1111111fffff1111111fffff11111111111ffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111fffffffff111111fffffff1111111fffff1111111fffff11111111111ffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111ffffffffffffffffffffffff111111fffffff1111111fffff11111111ffff11111111111ffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111fffffffffffffffffffffffff111111111111fff1111111fffff11111111ffff111111fffffffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111fffffffffffffffffffffffff111111111111fff1111111fffff11111111ffff111111fffffffffff111111111111111111111111111111111111111111111111111111
        11111111111111111111111fffffffffffffff11111fffffff111111111111fff1111111fffff11111111ffff111ffffffffffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111fffff11111111111111111fff1111111fff111111111fffff11111111111ffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111fffff11111111111111111fff1111111fff111111111fffff11111111111ffffff111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111fffffff11111111111111111fff1111111fffff1111111fffff11111111111ffffff111111111111111111111111111111f11111111111111111111111
        11111111111111111111111111111111111ffffffff1111111111111111111fff1111111fffff11111fffffff11111111111ffffff111111111111111111111111111111f11111111111111111111111
        11111111111111111111111111111111111ffffffff1111111111111111111fff1111111fffff11111fffffff11111111111ffffff1111111111ffffff11111111111111f11111111111111111111111
        111111111111111111111111111111111fffffffff111fffff111111111111fff1111111fffffffffffffff1111111111111ffffff11111111ffffffffffff11111111111ff111111111111111111111
        11111111111111111111111111111111ffffff1111111ffffffff111111111fff1111111111ffffffffff111111111111111ffffff111111ffff11111111fff1111111111ff111111111111111111111
        111111111111111111111111111111fffffff11111111ffffffffff1111111fff11111111111111111111111111111111111ffffff111111ff111111111111f1111111111ff111111111111111111111
        111111111111111111111111111111fffffff11111111ffffffffff1111111fff11111111111111111111111111111111111ffffff111111ff111111111111f1111111111ff111111111111111111111
        1111111111111111111111111111fffff11111111111111111fffff1111111fff11111111111111111111111111111111111ffffff111111ff111111111111fff11111111ff111111111111111111111
        1111111111111111111111111111fffff11111111111111111111ffffffffffff11111111111111111111111111111111111ffffff111111ff1111111111111ff11111111ff111111111111111111111
        1111111111111111111111111111fffff11111111111111111111ffffffffffff11111111111111111111111111111111111ffffff111111ff1111111111111ff11111111ff111111111111111111111
        1111111111111111111111111111ffff111111111111111ffffffffffffffffff11111111111111111111111111111fff111ffffff111111ff1111111111111ff11111111ff111111111111111111111
        111111111111111111111111111111111111111111fffffffffffffffffffffff11111111111111111111111111111fff111111111111111ffff11111111111ff11111111ffff1111111111111111111
        111111111111111111111111111111111111111111fffffffffffffffffffffff11111111111111111111111111111fff111111111111111ffff11111111111ff11111111ffff1111111111111111111
        111111111111111111111111111111111fffffffffffffffff111111111111fff111111111111111ffff1111111111fff11111111111111111ffffffff1111fff1111111111ff1111111111111111111
        111111111111111111111111111111fffffffffffff1111111111111111111fff111111111111111ffff1111111111fff111111111111111111111111ffffff111111111111ff1111111111111111111
        111111111111111111111111111111fffffffffffff1111111111111111111fff111111111111111ffff1111111111fff111111111111111111111111ffffff111111111111ff1111111111111111111
        11111111111111111111ffffffffffff11111111fff1111111111111111111fff111111111111111fffffffffffffffff111111111111111111111111111111111111111111ff1111111111111111111
        11111111111111111111fffff111111111111111fff1111111111111111111fff111111111111111fffffffffffffffff111111111111111111111111111111111111111111ff1111111111111111111
        11111111111111111111fff11111111111111111fff111111111111111fffffff111111111111111fffffffffffffffff111111111111111111111111111111111111111111ff1111111111111111111
        11111111111111111111fff11111111111111111fff111111111111111fffffff111111111111111fffffffffffffffff111111111111111111111111111111111111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff1111111111111111ffff1111111111fff11111111111111111111111111111ffffff1111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff111111111111111fffff1111111111fff111111111111111fffffffffffffffff1111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff111111111111111fffff1111111111fff111111111111111ffffffffffffff1111111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff111111111111111fffff1111111111fff111111111111fff111111111111111111111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff1111111111111fffff111111111111fff111111111111111111111111111111111111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff1111111111111fffff111111111111fff111111111111111111111111111111111111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff1111111111111ffffffff111111111fff111111111111111111111111111111111111111111ff1111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff1111111111111ffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111fff111111111111111ffffff1111111111111ffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111fffff111111111111111ffffff111111111111111ffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff111fffff11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffff111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffff111fffff11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff111fffffff111fffff11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff1111111111fffffff111fffff11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff1111111111fffffff111fffff11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111ffffffffffff1111111111111fffffffff111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11111fffff11111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffff1111111fffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111fffffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111fffffff11111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff11111fffffff11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff111111ffffff111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111fffffff111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111fffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111fffffff111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff11111111fffffffff111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff11111111fffffffff111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff11111111fffffff11111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff11111111fffffffff11111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff11111111fffffffff11111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111111fffffff1111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11111111111fffffff1111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111fffffff11111111111fffffff1111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff11111111111111111ffffff11111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff11111111111111111ffffff11111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffff111111111111111fffffffff111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111111111ffffffffffff111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff111111111111111ffffffffffff111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111111111111fffffffffffffff111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111111fffffffffffffff1111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111111ffffffffffffff1111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff1111111111ffffffffffffff1111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff1111111111ffffffffffff1111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111ffffffffffff11111111111111111111111111111111111111fffff1111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffff11111ffffffffffff1111111111111111111111111111111111111f11f11f111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff11111111111111111111111111111111111111f1f1f1f111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff1111111111111111111111111111111111111111f1f111f111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff1111111111111111111111111111111111111111f1f1f1f111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffff11111111111111111111111111111111111111111111f11f11f111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffff1111111111111111111111111111111111111111111111fffff1111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    timer.after(3000, function () {
        index = 0
        inst = 0
        scene.centerCameraAt(80, 60)
        color.startFade(color.Black, color.originalPalette)
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
            111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111
            11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111
            111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111
            111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111
            11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111
            11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
            11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
            1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
            1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
            1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
            111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
            111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
            111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111
            11111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111
            11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
            11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
            11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
            1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
            1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
            111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
            111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
            111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
            111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
            111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
            111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
            111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
            11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
            11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
            11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
            11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
            1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
            111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
            `)
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.showLongText("계산고등학교 3학년 홍길동..", DialogLayout.Bottom)
        if (controller.A.isPressed()) {
            scene.setBackgroundImage(img`
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111
                111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111
                111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111
                11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111
                11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
                11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
                1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
                1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
                1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
                111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
                111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
                111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111
                11111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111
                11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
                11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
                11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
                1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
                1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
                111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
                111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                `)
            game.showLongText(" 졸업까지 1년..", DialogLayout.Bottom)
            if (controller.A.isPressed()) {
                scene.setBackgroundImage(img`
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111
                    11111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111
                    1111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111
                    111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
                    11111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
                    1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111
                    1111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
                    1111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
                    111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111
                    111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111
                    11111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111
                    11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
                    11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
                    11111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111
                    1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
                    1111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
                    111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111
                    111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                    111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                    111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                    111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                    11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111
                    11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                    11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                    11111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                    1111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                    111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    11111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111
                    `)
                game.showLongText("졸업이 다가오고 현실은 냉정하다.", DialogLayout.Bottom)
                if (controller.A.isPressed()) {
                    scene.setBackgroundImage(img`
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff111ffffff111111111111111111ffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff111111111111111111111111111111fffff111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff11111ff111111ffffffffffffffffffff11111111111ffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff111ff111111fffffffffffffffffffffffffffff111111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffffffffff111ff11111ffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff111ffffff111ffffffffffffffffffffffffffffffffffffffffff1f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff111f111f11fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffff1111f111111fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffff111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffff111ff11111ffffffffffffffffffffffffffffffffffffffffffffff11111fffffffff111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffff111fffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff11111fff111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff111111ff111fffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff111fffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11111f1111ffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff1111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff111ffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff1111ff111f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111fff111f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111fff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111fffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111fffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11f111fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11f111f111fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11f111f111fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff111111fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff111ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff111f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffff111ffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffff1fff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f11111111ffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f11111fffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffff1ff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffff111ff111fff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffff111ffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffff111fff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffff1ffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffff1fff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffff1ffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111fff11111111111111ffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff111f111111111fffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffff111fffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffff111fff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffff111fffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffff111fffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffff111f1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffff111fffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffff111ffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffffffff111ff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffff111ffffffffffffffffffff
                        ffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffff11111ffffffffffffffffffff
                        fffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffff1111f11111ffffffffffffffffffff
                        ffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffff1111f111ffffffffffffffffffffff
                        fffffffffffffffffffffff1fffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ff1111f1111ffffffffffffffffffffffffff
                        fffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111f1111fffff1111ffffffffffffffffffffff
                        ffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111f1111fff111111111fffffffffffffffffff
                        ffffffffffffffffffffffff111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111111111fffffffffffffffffff
                        ffffffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111111111fffffffffffffffffff
                        ffffffffffffffffffffffff111ff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ff111111fff111fffffffffffffffffff
                        ffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111f111111111fffffffffffffffffffffffff
                        ffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffff
                        fffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffff
                        fffffffffffffff1fffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ff111fffffffffffffffffffffffff
                        ffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
                        ffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffff1ffffffffffffffffffff
                        fffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ff111fffffffffffffffffffffffff
                        fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ff11111fffffffffffffffffffffff
                        fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffff111ffffffffffff
                        fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffff111ffffffffffff
                        ffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffff111ffffffffffff
                        ffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111f111111fffffffffffffffffffff
                        ffffffffffffffffffff111f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffff
                        fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff
                        fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffff
                        fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffff
                        fffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffff
                        fffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffff
                        ffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffff
                        ffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffff
                        ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffff1ffffffffff
                        ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffff111ffffffffffffff
                        ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffff111ffffffffffffff
                        ffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ff1111111f111ffffffffffffff
                        ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111f11111111ffffffffffffffffff
                        ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff11111111ffffffffffffffffff
                        ffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff111fffffffffffffffffffffff
                        ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                        ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                        ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                        fffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                        `)
                    game.showLongText("그럴수록 길동은 불안하다.", DialogLayout.Bottom)
                    if (controller.A.isPressed()) {
                        scene.setBackgroundImage(img`
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff111ffffff111111111111111111ffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff111111111111111111111111111111fffff111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffff11111ff111111ffffffffffffffffffff11111111111ffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffff111ff111111fffffffffffffffffffffffffffff111111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffffffffff111ff11111ffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffff111ffffff111ffffffffffffffffffffffffffffffffffffffffff1f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffffffffff111f111f11fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffff1111f111111fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffff111fffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffff111ff11111ffffffffffffffffffffffffffffffffffffffffffffff11111fffffffff111fffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffff111fffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff11111fff111fffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff111111ff111fffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffff111fffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11111f1111ffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffff11ffffffffffffffff1111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ff111ffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffff1111ffffffffffffffff1111ff111f1ffffffffffffffffffffff2ff222222fffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffff1111111fffffffffffffffff111fff111f1fffffffffffffffffff111111122222222ffffffffffffffffffffffff11111ffffffffffffffffffff111fffffffffffffffffffffffff
                            fffffffffff1111111111fffffffffffffffffffffff11111ffffffffffffffffff1222221111111112222fffffffffffffffffffff111111fffffffffffffffffff11111fffffffffffffffffffffff
                            ffffffffff11222221111fffffffffffffffff111fff11111fffffffffffffffff1222221222122211111112fffffffffffffffffff111111ffffffffffffffffffff1111111ffffffffffffffffffff
                            ffffffffff12111112111fffffffffffffffff111fffff11ffffffffffffffff212222212222212122212221fffffffffffffffffff111111ffffffffffffffffffff1111111111fffffffffffffffff
                            ffffffffff12112222111fffffffffffffffff111fffff11fffffffffffffff22122221211111111122212221ffffffffffffffffff111ffffffffffffffffffffffff1111111111ffffffffffffffff
                            fffffffff112112122111fffffffffffffffffffffffff11fffffffffffffff2212221212122211121222122122ffffffffffffffff111ffffffffffffffffffffffff11122222111fffffffffffffff
                            fffffffff11211222211fffffffffffffffffffffffff111ffffffffffffff222122212121222111212221221222ffffffffffffffff11ffffffffffffffffffffffff112111112111ffffffffffffff
                            ffffffff111211111211ffffffffffffffffffffff111111fffffffffffff22221222121212221112122212212222fffffffffffffff11111fffffffffffffffffffff112122212111ffffffffffffff
                            ffffffff11112222211fffffffffffffffffffffff111111ffffffffff222222212221212122211121222122122222ffffffffffffff11111fffffffffffffffffffff112121212111ffffffffffffff
                            ffffffff1111111fffffffffffffffffffffffffff111111fffffffff22222222122212121222111212221221222222fffffffffffff11111ffffffffffffffffffffff12122212111ffffffffffffff
                            ffffffff11111ffffffffffffffffffffffffffff1111111fffffffffff22222221221212122121121222122122222222fffffffffff11fffffffffffffffffffffffff12111112111ffffffffffffff
                            fffffff1111ffffffffffffffffffffffffffffff1111111fffffffffffff22222212121212122212122212122222222ffffffffffff11ffffffffffffffffffffffffff12222211111fffffffffffff
                            fffffffffffffffffffffffffffffffffffffffff111111fffffffffffffff22222211111111111111111112222222ffffffffffffff111fffffffffffffffffffffffff11111111111fffffffffffff
                            fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffff2222221222222222222222122222ffffffffffffffffff11f111fffffffffffffffffffffff111111111fffffffffffff
                            fffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffff2222221222222222222212222ffffffffffffffffffff11f111f111ffffffffffffffffffff11111111fffffffffffff
                            fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffff2222221222222222221222ffffffffffffffffffffff11f111f111ffffffffffffffffffffff111111fffffffffffff
                            fffffffffff11ffffffffffffffffffffffffff11111111ffffffffffffffffffff222221222222222122ffffffffffffffffffffffff11ff111111ffffffffffffffffffffffff1111fffffffffffff
                            fffffffffff1ffffffffffffffffffffffffff111f11111ffffffffffffffffffffff222211111111122fffffffffffffffffffffffff11ff111ffffffffffffffffffffffffffffff1fffffffffffff
                            ffffffffff11ffffffffffffffffffffffffff111f11111ffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff
                            ffffffff1111ffffffffffffffffffffffffff111f11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff
                            ffffff1111111fffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                            fffff11111111fffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                            fffff11111111fffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                            ffff112222211ffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffff111ffffffffffffffffffffffffffffffffffffff
                            fff1121111121ffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffff
                            fff1121222121ffffffffffffffffffffffff1fff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f11111111ffffffffffffffffffffffffffffffffffffff
                            fff1121212121ffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111f11111fffffffffffffffffffffffffffffffffffffffff
                            ff1112122212ffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                            ff1112111112ffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                            ff111122222fffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                            fff11111111fffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                            fff1111111fffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                            fff1111111fffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                            fff111111fffffffffffffffffffffffff1ff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                            ffff1111ffffffffffffffffffffffffffff111ff111fff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffff
                            ffff11ffffffffffffffffffffffffffffff111ffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffff111fff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff11111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff11111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffff111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffff111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffff1ffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffff1fff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffff1ffffffffffff
                            fffffffffffffffffffffffffffffffff1ffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffff11fffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffff1111ffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff111fff11111111111111ffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffff1111ffffffffff
                            ffffffffffffffffffffffffffffffffffffffffff111f111111111fffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffff11111fffffffff
                            fffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffff111111fffffffff
                            fffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffff22222211ffffffff
                            ffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffff21112121ffffffff
                            fffffffffffffffffffffffffffffffff111fffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffff21212121ffffffff
                            fffffffffffffffffffffffffffffffff111fff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffff111fffffffff21112121ffffffff
                            fffffffffffffffffffffffffffffffff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffff111fffffffff222221211fffffff
                            fffffffffffffffffffffffffffffffff111f1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffff111fffffffff211111211fffffff
                            ffffffffffffffffffffffffffffff111ffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffff22222111fffffff
                            ffffffffffffffffffffffffffffff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffff11111111fffffff
                            ffffffffffffffffffffffffffffff111ff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffff111111ffffffff
                            fffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffff111ffffff111111ffffffff
                            ffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffff11111fffffff1111fffffffff
                            fffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffff1111f11111ffffffff111fffffffff
                            ffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffff1111f111fffffffffff11fffffffff
                            fffffffffffffffffffffff1fffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ff1111f1111ffffffffffffffffffffffffff
                            fffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111f1111fffff1111ffffffffffffffffffffff
                            ffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111f1111fff111111111fffffffffffffffffff
                            ffffffffffffffffffffffff111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111111111fffffffffffffffffff
                            ffffffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111111111fffffffffffffffffff
                            ffffffffffffffffffffffff111ff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ff111111fff111fffffffffffffffffff
                            ffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111f111111111fffffffffffffffffffffffff
                            ffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffff
                            fffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffff
                            fffffffffffffff1fffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ff111fffffffffffffffffffffffff
                            ffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffff1ffffffffffffffffffff
                            fffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ff111fffffffffffffffffffffffff
                            fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ff11111fffffffffffffffffffffff
                            fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffff111ffffffffffff
                            fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffff111ffffffffffff
                            ffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffff111ffffffffffff
                            ffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111f111111fffffffffffffffffffff
                            ffffffffffffffffffff111f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffff
                            fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff
                            fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffff
                            fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffff
                            fffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffff
                            fffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffff
                            ffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffff
                            ffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffff
                            ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffff1ffffffffff
                            ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffff111ffffffffffffff
                            ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffff111ffffffffffffff
                            ffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ff1111111f111ffffffffffffff
                            ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111f11111111ffffffffffffffffff
                            ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff11111111ffffffffffffffffff
                            ffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff111fffffffffffffffffffffff
                            ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                            ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                            ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                            fffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                            `)
                        game.showLongText("SNS 속 '성공한 누군가'와 비교되며 매일같이 자책한다.", DialogLayout.Bottom)
                        if (controller.A.isPressed()) {
                            scene.setBackgroundImage(img`
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff111ffffff111111111111111111ffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffffff111ffff111111111111111111111111111111fffff111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffff11111ff111111ffffffffffffffffffff11111111111ffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffff111ff111111fffffffffffffffffffffffffffff111111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffffffffff111ff11111ffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffff111ffffff111ffffffffffffffffffffffffffffffffffffffffff1f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffffffffff111f111f11fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffff1111f111111fffffffffffffffffffffffffffffffffffffffffffff1111ffffffffff111fffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffff111ff11111ffffffffffffffffffffffffffffffffffffffffffffff11111fffffffff111fffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffff111fffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff11111fff111fffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff111111ff111fffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffff111fffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffff11111f1111ffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffff11ffffffffffffffff1111ff111ffffffffffffffffffffffffffffff55ffffffffffffffffffffffffff1111ff111ffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffff1111ffffffffffffffff1111ff111f1ffffffffffffffffffffffffffff55ffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffff1111111fffffffffffffffff111fff111f1ffffffffffffffffffffffffffff55ffffffffffffffffffffffffffff11111ffffffffffffffffffff111fffffffffffffffffffffffff
                                fffffffffff1111111111fffffffffffffffffffffff11111ffffffffffffffffffffffffffff55ffffffffffffffffffffffffffff111111fffffffffffffffffff11111fffffffffffffffffffffff
                                ffffffffff11222221111fffffffffffffffff111fff11111fffffffffffffffffffffffffff555ffffffffffffffffffffffffffff111111ffffffffffffffffffff1111111ffffffffffffffffffff
                                ffffffffff12111112111fffffffffffffffff111fffff11ffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff111111ffffffffffffffffffff1111111111fffffffffffffffff
                                ffffffffff12112222111fffffffffffffffff111fffff11ffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff111ffffffffffffffffffffffff1111111111ffffffffffffffff
                                fffffffff112112122111fffffffffffffffffffffffff11ffffffffffffffffffffffffffff5555fffffffffffffffffffffffffff111ffffffffffffffffffffffff11122222111fffffffffffffff
                                fffffffff11211222211fffffffffffffffffffffffff111ffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffff11ffffffffffffffffffffffff112111112111ffffffffffffff
                                ffffffff111211111211ffffffffffffffffffffff111111ffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffff11111fffffffffffffffffffff112122212111ffffffffffffff
                                ffffffff11112222211fffffffffffffffffffffff111111ffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffff11111fffffffffffffffffffff112121212111ffffffffffffff
                                ffffffff1111111fffffffffffffffffffffffffff111111ffffffffffffffffffffffffffff55555fffffffffffffffffffffffffff11111ffffffffffffffffffffff12122212111ffffffffffffff
                                ffffffff11111ffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffff555555fffffffffffffffffffffffffff11fffffffffffffffffffffffff12111112111ffffffffffffff
                                fffffff1111ffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffff5555555ffffffffffffffffffffffffff11ffffffffffffffffffffffffff12222211111fffffffffffff
                                fffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffff555555555fffffffffffffffffffffffff111fffffffffffffffffffffffff11111111111fffffffffffff
                                fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffff55555555555fffffffffffffffffffffffff11f111fffffffffffffffffffffff111111111fffffffffffff
                                fffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffff5555555555555ffffffffffffffffffffffff11f111f111ffffffffffffffffffff11111111fffffffffffff
                                fffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffff555555555555555fffffffffffffffffffffff11f111f111ffffffffffffffffffffff111111fffffffffffff
                                fffffffffff11ffffffffffffffffffffffffff11111111fffffffffffffffffffffff55555555555555555ffffffffffffffffffffff11ff111111ffffffffffffffffffffffff1111fffffffffffff
                                fffffffffff1ffffffffffffffffffffffffff111f11111fffffffffffffffffffff55555555555555555555fffffffffffffffffffff11ff111ffffffffffffffffffffffffffffff1fffffffffffff
                                ffffffffff11ffffffffffffffffffffffffff111f11111fffffffffffffffffff55555555555555555555555555fffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff
                                ffffffff1111ffffffffffffffffffffffffff111f11111ffffffffffffffff5555555555555555555555555555555555ffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffff
                                ffffff1111111fffffffffffffffffffffffffffff11111fffffffffffffffffffff555555555555555555555555fffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                                fffff11111111fffffffffffffffffffffffffffff11111ffffffffffffffffffffff5555555555555555555fffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                                fffff11111111fffffffffffffffffffffffffffff11111fffffffffffffffffffffffff5555555555555ffffffffffffffffffffffff111111f111fffffffffffffffffffffffffffffffffffffffff
                                ffff112222211ffffffffffffffffffffffffffff111111fffffffffffffffffffffffffff5555555555fffffffffffffffffffffffff111111ffff111ffffffffffffffffffffffffffffffffffffff
                                fff1121111121ffffffffffffffffffffffffffff111111fffffffffffffffffffffffffff555555555ffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffffffff
                                fff1121222121ffffffffffffffffffffffff1fff111111ffffffffffffffffffffffffffff5555555fffffffffffffffffffffffffff1111f11111111ffffffffffffffffffffffffffffffffffffff
                                fff1121212121ffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffff555555fffffffffffffffffffffffffff1111f11111fffffffffffffffffffffffffffffffffffffffff
                                ff1112122212ffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                                ff1112111112ffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                                ff111122222fffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                                fff11111111fffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffff
                                fff1111111fffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                                fff1111111fffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                                fff111111fffffffffffffffffffffffff1ff111111111111fffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
                                ffff1111ffffffffffffffffffffffffffff111ff111fff11fffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffff
                                ffff11ffffffffffffffffffffffffffffff111ffffffff11fffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffff111fff11111111ffffffffffffffffffffffffffff5fffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff11111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff11111f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffff111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffff111111fff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffffffff1ffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffff1fff1111111111111fffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffff1ffffffffffff
                                fffffffffffffffffffffffffffffffff1ffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffff11fffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffffffff1111ffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff111fff11111111111111ffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffff1111ffffffffff
                                ffffffffffffffffffffffffffffffffffffffffff111f111111111fffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffffff11111fffffffff
                                fffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffff111111fffffffff
                                fffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffffffffff22222211ffffffff
                                ffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffff21112121ffffffff
                                fffffffffffffffffffffffffffffffff111fffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffff21212121ffffffff
                                fffffffffffffffffffffffffffffffff111fff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffff111fffffffff21112121ffffffff
                                fffffffffffffffffffffffffffffffff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffff111fffffffff222221211fffffff
                                fffffffffffffffffffffffffffffffff111f1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffff111fffffffff211111211fffffff
                                ffffffffffffffffffffffffffffff111ffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffff22222111fffffff
                                ffffffffffffffffffffffffffffff111fff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffff11111111fffffff
                                ffffffffffffffffffffffffffffff111ff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ffffffffffffffffffff111111ffffffff
                                fffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffff111ffffff111111ffffffff
                                ffffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffff11111fffffff1111fffffffff
                                fffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffff1111f11111ffffffff111fffffffff
                                ffffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffff1111f111fffffffffff11fffffffff
                                fffffffffffffffffffffff1fffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ff1111f1111ffffffffffffffffffffffffff
                                fffffffffffffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111f1111fffff1111ffffffffffffffffffffff
                                ffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111f1111fff111111111fffffffffffffffffff
                                ffffffffffffffffffffffff111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111111111fffffffffffffffffff
                                ffffffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffff111111111fffffffffffffffffff
                                ffffffffffffffffffffffff111ff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ff111111fff111fffffffffffffffffff
                                ffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111f111111111fffffffffffffffffffffffff
                                ffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffff
                                fffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffff
                                fffffffffffffff1fffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ff111fffffffffffffffffffffffff
                                ffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffffff
                                ffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffff1ffffffffffffffffffff
                                fffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ff111fffffffffffffffffffffffff
                                fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ff11111fffffffffffffffffffffff
                                fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffff111ffffffffffff
                                fffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffff111ffffffffffff
                                ffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffff111ffffffffffff
                                ffffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111f111111fffffffffffffffffffff
                                ffffffffffffffffffff111f111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffff
                                fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffff
                                fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffff
                                fffffffffffffffffff111f1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffff
                                fffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111ffffffffffffffffffff
                                fffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffff
                                ffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffff
                                ffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffff
                                ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffff1ffffffffff
                                ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffff111ffffffffffffff
                                ffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffff111ffffffffffffff
                                ffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ff1111111f111ffffffffffffff
                                ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111f11111111ffffffffffffffffff
                                ffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff11111111ffffffffffffffffff
                                ffffffffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff111fffffffffffffffffffffff
                                ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                                ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                                ffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                                fffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffff
                                `)
                            game.showLongText("나도 무언가 해야해.", DialogLayout.Bottom)
                            if (controller.A.isPressed()) {
                                scene.setBackgroundImage(img`
                                    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111
                                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111
                                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111
                                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111
                                    11111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111
                                    11111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111
                                    1111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffff11111111111111
                                    11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffff111111111111111
                                    1111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffff1111111111111111
                                    11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111
                                    111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111
                                    1111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111
                                    111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111
                                    11fffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111
                                    11f11111111111111111111111111111111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111
                                    11f11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111
                                    11f11111111111f11111111111111111111111f111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffff11111111111111111111111111
                                    11fffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffff11111111111111111111111111
                                    11111111111111f111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffff1111111111111111111111111111
                                    11111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111
                                    11111111111111111111111111111111111111111111ffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111
                                    111111111111111111111111111111111111111111111ffffffffffffffff111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
                                    111111111111111111111111111111111111111111111ffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                                    111111111111111111111111111111111111111111111ffffffffffffffff11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    1111111111111111111111111111111111111111111111fffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    11111111111111111111111111111111111111111111111ffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    11111111111111111111111111111111111111111111111fffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    111111111111111111111111111111111111111111111111fffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    111111111111111111111111111111111111111111111111fffffffffffffff111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    1111111111111111111111111111111111111111111111111fffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111
                                    111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    111111111111f11111111111111111111111111111111f1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    111111111111111111111111111111111111111111111f11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    1111ffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    1111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111
                                    1111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
                                    1111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffff111111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffff111111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffff111111111111111111111111111111111
                                    1111ffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffff1111111111111111111111111111111111
                                    1111f11111111111111111111111111111111f11111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffff11111111111111fffff111111111111111
                                    1111ffffffffffffffffffffffffffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffff111111111111ffffffffff111111111111
                                    1111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffff111111111111
                                    1111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffff111111111111
                                    111111111111111111111111111111ffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffff111111111111
                                    111111111111111111111111111111f11111111111111111111f11111fffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffff111111111111
                                    111111111111111111111111111111ffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffff111111111111
                                    111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffff111111111111
                                    11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffff111111111111
                                    11111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffff1111111111111ffffffffffffffffffffffffffffffffff111111111111
                                    1111111111111111111111111fffffff1111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffffffffffffffff111111111111
                                    111111111111111111111111ffffffff1111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111ffffffffffffffffffffffff1111111111111
                                    1111111111111111111111fffffffffff11111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffff1111111111111111
                                    111111111111111111111ffffffffffff11111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                                    11111111111111111111ffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                                    1111111111111111111fffffffffffffff111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                                    111111111111111111ffffffffffffffff11111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                                    11111111111111111ffffffffffffffffff111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                                    1111111111111111fffffffffffffffffff11111111111111fffffffffffffffffff11111ffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    111111111111111fffffffffffffffffffff1111111111111fffffffffffffffffff111111111ffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    11111111111111ffffffffffffffffffffff111111111111fffffffffffffffffff1111111111111fffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    11111111111111fffffffffffffffffffffff1111111111ffffffffffffffffffff11111111111111ffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    1111111111111fffffffffffffffffffffffff11111111ffffffffffffffffffff11111111111111111111fffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    111111111111fffffffffffffffffffffffffff111111fffffffffffffffffffff111111111111111111111ffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    111111111111ffffffffffffffffffffffffffff11111ffffffffffffffffffff1111111111111111111111ffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    111111111111fffffffffffffffffffffffffffff11ffffffffffffffffffffff11111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111fffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111fffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111ffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    11111111111111fffffffff11ffffffffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    11111111111111fffffffff111ffffffffffffffffffffffffffffffff1111111111111111111111111111111fffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111ffffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111ffffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    1111111111111111111111111111fffffffffffffffffffffffffffff11111111111111111111111111111111ffffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    1111111111111111111111111111ffffffffffffffffffffffffffff1111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111fffffffffffffffffffffffffff1111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111fffffffffffffffffffffffff111111111111111111111111111111111111ffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    1111111111111111111111111111111fffffffffffffffffffffff1111111111111111111111111111111111111ffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111111fffffffffffffffffffff11111111111111111111111111111111111111ffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111111fffffffffffffffffff11111111111111111111111111111111111111111fffffffffffff1111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111111111fffffffffffffff11111111111111111111111111111111111111111ffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111fffffffffffff11111111111111111111111111111111111111111fffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111fffffffffffff1111111111111111111111111111111111111111ffffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    1111111111111111111111111111111111111111ffffffff1111111111111111111111111111111111111111fffffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffff1111111111111111111111111111111111111111111111111111111
                                    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
                                    111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111
                                    11111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111
                                    1111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111111111
                                    11111111111ffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111
                                    ffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111ffffffffffffffffffffffff111fffffff11111111111111111111111111111111111111111111111111111111
                                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffff111fffffffffffffffffffffffff111111111111111111111111111111111ffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffff11111fffffffffffffffffffffffffffffff11111111111111111111fffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    `)
                                game.showLongText("그렇게 길동은 자신의 인생을 걸고,", DialogLayout.Bottom)
                                if (controller.A.isPressed()) {
                                    game.showLongText("'미래'라는 역대 최대의 미션에 도전장을 내민다.", DialogLayout.Bottom)
                                    if (controller.A.isPressed()) {
                                        color.startFade(color.Black, color.originalPalette)
                                        scene.setBackgroundImage(img`
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                                            9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
                                            9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
                                            9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
                                            9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
                                            9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
                                            9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
                                            9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
                                            9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
                                            9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
                                            9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
                                            9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
                                            9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
                                            9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
                                            9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
                                            9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
                                            9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
                                            9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
                                            9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
                                            1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
                                            1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
                                            1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
                                            11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
                                            11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
                                            11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
                                            1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
                                            111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
                                            11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
                                            11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
                                            11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
                                            11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
                                            d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
                                            dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
                                            dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
                                            dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
                                            dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
                                            ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
                                            ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
                                            ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
                                            ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
                                            dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
                                            dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
                                            dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
                                            dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
                                            dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
                                            dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
                                            dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
                                            dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
                                            dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                                            dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
                                            dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                                            dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                                            bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbcccccbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                            bbbbbbbbbbbbbbbbcbbbcbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                            bbbbbbbbbbbccccccccccbbbbbbbbbbbbbbdbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                            bbbbbbbbbbbccccccccccbbbbbdbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbdbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbb
                                            bbbbbbbbbbbccccccccccbbbbbdddbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbddbdbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbb
                                            bbbccccccccccccccccccbbbbbbbbbbbbbbdbbbbbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbb
                                            bbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbb
                                            bbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcbbcbcbccccccbcbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbccbbbbcbbbcbbccbbbbbbbb
                                            bbbccccccccccccccccccbbbbbbbcccbbbbbbbbbbbbcbbccccccccccbcbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbccbbbccbcbccbbbcccbbbbbbbbbbbbbbbbbbbbbbccbbbccbbbccbccbbbbbbbb
                                            bbbccccccccccccccbcccbbbbbbbcbcbbbbbccccccccbbccccccccccbcbbbbbbbbbbbbbbbbbccccbbccccbbbbbbbbbbbbcccbccbbcbccbcbcccbbbbbbbbbbbbbbbbbbbbbbcccbcccbbbccbccbbbbbbbb
                                            bbbccccccccccccccccccbbbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbb
                                            bbbccccccccccccccccccbbbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbb
                                            bbbccccccccccccccccccbbbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbb
                                            bbbccccccccccccccccccbbbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbb
                                            bbbcccccccccccccccccccbbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccccbbbbbbbb
                                            bbbcccccccccccccccccccbbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc
                                            bbbccccccccccccccccccccbcccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc
                                            bbbccccccccccccccccccccccccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            bbbccccccccccccccccccccccccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            bbbccccccccccccccccccccccccccccccbbbccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccbbbbbbbbccccccccccccccccccbbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            bbbccccccccccccccccccccccccccccccbbbccccccccccccccccccccccbbbbbbcccccccccccccccccccccccccbbbbbbbbccccccccccccccccccbbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccccccccccc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbccccccccccccccccccccccccccc7cc
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbccccccccccccccccccccc77cccc77c
                                            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbccccccccccccccccccccc77cc7777c
                                            ccccccccccccccccccccccccccccc7ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccbbbbbbcccccccccccccccccccccc77777777
                                            ccccccccccccccc7cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc77777777
                                            ccccccccccccccc77ccc7cccccccccc77ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc77777c77
                                            ccccccccccc7cc777c777cc7ccccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7777777
                                            ccccccccccc7c7777777cc77ccccc777c77cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7cccccccccccccccccccccccccc77777777
                                            ccccccccc777c7777777cc777c7cc777c7c7ccccccccc7cccccc7cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc7c77ccccccccccccccccccccccccc77777777
                                            7ccccccccc7777777777c7777777c777c777ccccccccc7c7cccc77ccc7ccccccccccccccc77ccccccccccccccccccccccccccccccccccccccccccccccccc7777ccccccccccccccccccc7cc7777777777
                                            77ccccccccc77777777777777777c777777ccc77cccc77777ccc777777ccccccccccccccc77cc7ccccccccccccccccccccccccccccccccccccccccccccc77cc7cc7cc7ccccccccccccc7cc7777777777
                                            77ccc7ccc77777777777777777777777777cc777ccc7777c7cc777777cccccccccccccc777c7c7cccccccccccccccccccccccccccc7ccccccc7ccccccc7777cc7ccc77ccccccc7cccc77c77777777777
                                            77ccccccc77777777777777777777777777c7c777cc777777cc77777777cccccccccccccc77c7ccccc7ccccc77cccccccccccc7cc77ccccccc77c77cc77777c777cc777cccc777cc7777777777777777
                                            7777c77cc77777777777777777777777777777777c77777777777777777777ccccccccccc77777cccc77cccc77ccccc77ccccc777777cccccc77c777777777777777777cc7777cc7c777777777777777
                                            7777c77c77777777777777777777777777777777777777777777777777777777cccccccc777777ccc7c7c77777c7cccc77777777777ccccccc77777777777777777777777c7777777777777777777777
                                            777777777777777777777777777777777777777777777777777777777777777777ccccc7777777777777cc7777ccc777777777777777cccccc7777777777777777777777777777777777777777777777
                                            777777777777777777777777777777777777777777777777777777777777777777cc7777777777777777777777777777777777777777cccc777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                                            `)
                                        tiles.setCurrentTilemap(tilemap`수준`)
                                        rp2 = sprites.create(img`
                                            . . . . . . f f f f . . . . . . 
                                            . . . . f f f 2 2 f f f . . . . 
                                            . . . f f f 2 2 2 2 f f f . . . 
                                            . . f f f e e e e e e f f f . . 
                                            . . f f e 2 2 2 2 2 2 e e f . . 
                                            . . f e 2 f f f f f f 2 e f . . 
                                            . . f f f f e e e e f f f f . . 
                                            . f f e f b f 4 4 f b f e f f . 
                                            . f e e 4 1 f d d f 1 4 e e f . 
                                            . . f e e d d d d d d e e f . . 
                                            . . . f e e 4 4 4 4 e e f . . . 
                                            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                                            . . . . . f f f f f f . . . . . 
                                            . . . . . f f . . f f . . . . . 
                                            `, SpriteKind.rp)
                                        animation.runImageAnimation(
                                        rp2,
                                        [img`
                                            . . . . . . f f f f . . . . . . 
                                            . . . . f f f 2 2 f f f . . . . 
                                            . . . f f f 2 2 2 2 f f f . . . 
                                            . . f f f e e e e e e f f f . . 
                                            . . f f e 2 2 2 2 2 2 e e f . . 
                                            . . f e 2 f f f f f f 2 e f . . 
                                            . . f f f f e e e e f f f f . . 
                                            . f f e f b f 4 4 f b f e f f . 
                                            . f e e 4 1 f d d f 1 4 e e f . 
                                            . . f e e d d d d d d e e f . . 
                                            . . . f e e 4 4 4 4 e e f . . . 
                                            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                                            . . . . . f f f f f f . . . . . 
                                            . . . . . f f . . f f . . . . . 
                                            `,img`
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . f f f f . . . . . . 
                                            . . . . f f f 2 2 f f f . . . . 
                                            . . . f f f 2 2 2 2 f f f . . . 
                                            . . f f f e e e e e e f f f . . 
                                            . . f f e 2 2 2 2 2 2 e e f . . 
                                            . f f e 2 f f f f f f 2 e f f . 
                                            . f f f f f e e e e f f f f f . 
                                            . . f e f b f 4 4 f b f e f . . 
                                            . . f e 4 1 f d d f 1 4 e f . . 
                                            . . . f e 4 d d d d 4 e f e . . 
                                            . . f e f 2 2 2 2 e d d 4 e . . 
                                            . . e 4 f 2 2 2 2 e d d e . . . 
                                            . . . . f 4 4 5 5 f e e . . . . 
                                            . . . . f f f f f f f . . . . . 
                                            . . . . f f f . . . . . . . . . 
                                            `,img`
                                            . . . . . . f f f f . . . . . . 
                                            . . . . f f f 2 2 f f f . . . . 
                                            . . . f f f 2 2 2 2 f f f . . . 
                                            . . f f f e e e e e e f f f . . 
                                            . . f f e 2 2 2 2 2 2 e e f . . 
                                            . . f e 2 f f f f f f 2 e f . . 
                                            . . f f f f e e e e f f f f . . 
                                            . f f e f b f 4 4 f b f e f f . 
                                            . f e e 4 1 f d d f 1 4 e e f . 
                                            . . f e e d d d d d d e e f . . 
                                            . . . f e e 4 4 4 4 e e f . . . 
                                            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                                            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                                            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                                            . . . . . f f f f f f . . . . . 
                                            . . . . . f f . . f f . . . . . 
                                            `,img`
                                            . . . . . . . . . . . . . . . . 
                                            . . . . . . f f f f . . . . . . 
                                            . . . . f f f 2 2 f f f . . . . 
                                            . . . f f f 2 2 2 2 f f f . . . 
                                            . . f f f e e e e e e f f f . . 
                                            . . f e e 2 2 2 2 2 2 e f f . . 
                                            . f f e 2 f f f f f f 2 e f f . 
                                            . f f f f f e e e e f f f f f . 
                                            . . f e f b f 4 4 f b f e f . . 
                                            . . f e 4 1 f d d f 1 4 e f . . 
                                            . . e f e 4 d d d d 4 e f . . . 
                                            . . e 4 d d e 2 2 2 2 f e f . . 
                                            . . . e d d e 2 2 2 2 f 4 e . . 
                                            . . . . e e f 5 5 4 4 f . . . . 
                                            . . . . . f f f f f f f . . . . 
                                            . . . . . . . . . f f f . . . . 
                                            `],
                                        500,
                                        true
                                        )
                                        scene.cameraFollowSprite(rp2)
                                        tiles.placeOnTile(rp2, tiles.getTileLocation(4, 0))
                                        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
                                        statusbar.value = 100
                                        statusbar.setColor(7, 2)
                                        statusbar.attachToSprite(rp2)
                                        statusbar.setLabel("HP")
                                        statusbar.setBarBorder(1, 15)
                                        index += 1
                                        mini = 0
                                        using = 0
                                        l_inst = 0
                                        iljin = 0
                                        seouldae = 0
                                        dan = 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}
forever(function () {
    if (index == 1 && tiles.locationOfSprite(rp2).column > 200) {
        if (shil.value <= 10) {
            seouldae += 1
        }
        if (seouldae >= 1) {
            dan = 2
        } else {
            dan = 1
        }
    }
})
forever(function () {
    if (index == 1 && (controller.B.isPressed() && !(rp2.tileKindAt(TileDirection.Center, assets.tile`transparency16`)))) {
        rp2.startEffect(effects.bubbles, 500)
    }
    if (index == 1 && rp2.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight2)) {
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Bottom), true)
    }
    if (index == 1 && rp2.tileKindAt(TileDirection.Top, sprites.dungeon.floorLight2)) {
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Top), true)
    }
    if (index == 1 && rp2.tileKindAt(TileDirection.Right, sprites.dungeon.floorLight2)) {
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Right), true)
    }
    if (index == 1 && rp2.tileKindAt(TileDirection.Left, sprites.dungeon.floorLight2)) {
        tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(rp2), CollisionDirection.Left), true)
    }
})
game.onUpdateInterval(100, function () {
    if (index == 1) {
        projectile6 = sprites.createProjectileFromSide(img`
            . . f f f f f f f f f f f f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 f f f f f f f f . . 
            . . f 2 2 2 f f f f f f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 f f f f f f . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `, 100, 0)
        tiles.placeOnTile(projectile6, tiles.getTileLocation(87, randint(26, 63)))
        projectile6.setScale(1.1, ScaleAnchor.Middle)
        projectile6.setKind(SpriteKind.enemy2)
        projectile6.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(200, function () {
    if (index == 1) {
        projectile3 = sprites.createProjectileFromSide(img`
            . . f f f f f f f f f f f f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 f f f f f f f f . . 
            . . f 2 2 2 f f f f f f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 f f f f f f . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `, 0, 125)
        tiles.placeOnTile(projectile3, tiles.getTileLocation(randint(99, 142), 21))
        projectile3.setScale(1.1, ScaleAnchor.Middle)
        projectile3.setKind(SpriteKind.Enemy)
        projectile3.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(200, function () {
    if (index == 1) {
        projectile5 = sprites.createProjectileFromSide(img`
            . . f f f f f f f f f f f f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 f f f f f f f f . . 
            . . f 2 2 2 f f f f f f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 2 2 2 2 2 f . . . . 
            . . f 2 2 2 f f f f f f . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f 2 2 2 f . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `, 100, 0)
        tiles.placeOnTile(projectile5, tiles.getTileLocation(9, randint(21, 45)))
        projectile5.setScale(1.1, ScaleAnchor.Middle)
        projectile5.setKind(SpriteKind.enemy1)
        projectile5.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
