import * as utils from '@dcl/ecs-scene-utils'
import { Arissa } from './arissa';
import { getUserData } from "@decentraland/Identity"
import { getCurrentRealm } from "@decentraland/EnvironmentAPI"
import { movePlayerTo } from '@decentraland/RestrictedActions';
import { getPlayersInScene } from "@decentraland/Players"


// Base
const base = new Entity()
base.addComponent(new GLTFShape('models/baseGrass.glb'))
engine.addEntity(base)
executeTask(async () => {
  let data = await getUserData()
  log("Adobe log test local", data)
  executeTask(async () => {
    try {
      let response = await fetch('https://webhook.site/#!/2679b87a-a6d4-4d82-a9e7-07dca965d0eb/de8c4cd8-c945-4f5a-a929-b30ff9afcaa5/1')
      let json = await response.json()
      log('adobe log via http get', json)
    } catch {
      log("failed to reach URL")
    }
  })
})

// Arissa
const arissa = new Arissa(
  new GLTFShape('models/arissa.glb'),
  new Transform({
    position: new Vector3(0, 0.05, -0.1),
    scale: new Vector3(0, 0, 0)
  })
)
arissa.setParent(Attachable.AVATAR)



// Hide avatars
// const hideAvatarsEntity = new Entity()
// hideAvatarsEntity.addComponent(
//   new AvatarModifierArea({
//     area: { box: new Vector3(16, 4, 11) },
//     modifiers: [AvatarModifiers.HIDE_AVATARS]
//   })
// )
// hideAvatarsEntity.addComponent(
//   new Transform({ position: new Vector3(8, 2, 10.5) })
// )
// engine.addEntity(hideAvatarsEntity)

// // Create to show Arissa avatar
// hideAvatarsEntity.addComponent(
//   new utils.TriggerComponent(
//     new utils.TriggerBoxShape(new Vector3(16, 4, 11), Vector3.Zero()),
//     {
//       onCameraEnter: () => {
//         arissa.getComponent(Transform).scale.setAll(1)
//       },
//       onCameraExit: () => {
//         arissa.getComponent(Transform).scale.setAll(0)
//       }
//     }
//   )
// )

// Check if player is moving
const currentPosition = new Vector3()

class CheckPlayerIsMovingSystem implements ISystem {
  update() {
    if (currentPosition.equals(Camera.instance.position)) {
      arissa.playIdle()
    } else {
      currentPosition.copyFrom(Camera.instance.position)
      arissa.playRunning()
    }
  }
}

engine.addSystem(new CheckPlayerIsMovingSystem())
// #1
const myVideoClip = new VideoClip(
  // './assets/master.m3u8'
  'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
)

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new Material()
myMaterial.albedoTexture = myVideoTexture
myMaterial.roughness = 1
myMaterial.specularIntensity = 0
myMaterial.metallic = 0


// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(8, 1, 8),
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    // myVideoTexture.playing = !myVideoTexture.playing
    myVideoTexture.play();
  })
)
engine.addEntity(screen)

// #5
// myVideoTexture.play();

// LINK placement
const entity = new Entity()
entity.addComponent(new BoxShape())
const transform = new Transform({ position: new Vector3(0, 0, 0) })
entity.addComponent(transform)
entity.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://62c562c1f95425008c28e5b7--exquisite-basbousa-ed1450.netlify.app/feedback.html")
    // myVideoTexture.play();
  })
)
engine.addEntity(entity)

// MOVE Player
const respawner = new Entity()
respawner.addComponent(new BoxShape())
respawner.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
respawner.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 1, y: 0, z: 1 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: "Move player" }
  )
)
teleportTo('0,0')

engine.addEntity(respawner)


// Create screenspace component
const canvas = new UICanvas()

// Create a textShape component, setting the canvas as parent
const text = new UIText(canvas)
text.value = "Julia"

// Get all players already in scene
// executeTask(async () => {
//   let players = await getPlayersInScene()
//   players.forEach((player) => {
//     log("player is nearby: ", player.userId)
//   })
// })

// // Event when player enters scene
// onEnterSceneObservable.add((player) => {
//   log("player entered scene: ", player.userId)
// })

// // Event when player leaves scene
// onLeaveSceneObservable.add((player) => {
//   log("player left scene: ", player.userId)
// })

async function fetchPlayerData() {
  const userData = await getUserData()
  const playerRealm = await getCurrentRealm()

  let url = `{playerRealm.domain}/lambdas/profile/{userData.userId}`.toString()
  log("using URL: ", url)

  try {
    let response = await fetch(url)
    let json = await response.json()

    log("full response: ", json)
    log("player is wearing :", json[0].metadata.avatars[0].avatar.wearables)
    log("player owns :", json[0].metadata.avatars[0].inventory)
  } catch {
    log("an error occurred while reaching for player data")
  }
}
