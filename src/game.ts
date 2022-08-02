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
  log("Adobe log test of avatar", data);
  // fetchDataFromURL();
  fetchDataFromURLGet();
  // SENDING TO AEP
  // postDataToURL();
})

const adobeLogo = new Entity()
adobeLogo.addComponent(new GLTFShape('models/adobe.glb'))
adobeLogo.addComponent(
  new Transform({
    position: new Vector3(4, 1, 5),
    rotation:new Quaternion(0, 0, 0, 0),
    scale: new Vector3(4, 4, 1)
  })
)
// engine.addEntity(adobeLogo)

const sunLogo = new Entity()
sunLogo.addComponent(new GLTFShape('models/sun.glb'))
sunLogo.addComponent(
  new Transform({
    position: new Vector3(1, 1, 10),
    scale: new Vector3(4, 4, 1)
  })
)
// engine.addEntity(sunLogo)


const homeLogo = new Entity()
homeLogo.addComponent(new GLTFShape('models/homeloan.glb'))
homeLogo.addComponent(
  new Transform({
    position: new Vector3(2, 2, 2),
    scale: new Vector3(1, 1, 1)
  })
)
// engine.addEntity(homeLogo)


const bannerLogo = new Entity()
bannerLogo.addComponent(new GLTFShape('models/banner.glb'))
bannerLogo.addComponent(
  new Transform({
    position: new Vector3(4, 2, 0),
    // scale: new Vector3( 0, 0, 0 )
  })
)
// const bannerMaterial = new Material()
// bannerMaterial.albedoColor = Color3.Blue()
// bannerMaterial.metallic = 0.9
// bannerMaterial.roughness = 0.1
// bannerLogo.addComponent(bannerMaterial);
engine.addEntity(bannerLogo)



// const adobeScreen = new Entity()
// adobeScreen.addComponent(new PlaneShape())
// adobeScreen.addComponent(
//   new Transform({
//     position: new Vector3(0, 0.2, 0),
//     // scale: new Vector3(4, 4, 10)
//   })
// )
// engine.addEntity(adobeScreen);

// adobeScreen.setParent(adobeLogo);


// Arissa
// const arissa = new Arissa(
//   new GLTFShape('models/arissa.glb'),
//   new Transform({
//     position: new Vector3(0, 0.05, -0.1),
//     scale: new Vector3(0, 0, 0)
//   })
// )
// arissa.setParent(Attachable.AVATAR)

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

// Create to show Arissa avatar
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

// class CheckPlayerIsMovingSystem implements ISystem {
//   update() {
//     if (currentPosition.equals(Camera.instance.position)) {
//       arissa.playIdle()
//     } else {
//       currentPosition.copyFrom(Camera.instance.position)
//       arissa.playRunning()
//     }
//   }
// }

// engine.addSystem(new CheckPlayerIsMovingSystem())
// #1

const myVideoClip = new VideoClip(
  // './assets/master.m3u8'
  // 'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
  'video/video1.mp4'
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
let planeScreen = new PlaneShape();
planeScreen.width = 15;
planeScreen.height = 2
screen.addComponent(planeScreen)
screen.addComponent(
  new Transform({
    position: new Vector3(10, 1.5, 3),
    rotation: new Quaternion(0, 90, 0, 90),
    scale: new Vector3(4, 2, 1)
  })
)

screen.addComponent(myMaterial);


screen.addComponent(
  new OnPointerDown(( e ) => {
    log("Event called : " + e);
    log( 'screen hieght : '+ screen.getComponent(PlaneShape).height);
    log( 'screen  : '+ screen.getComponent(PlaneShape).width);

    if(  myVideoTexture.playing ) {
    myVideoTexture.play();
    } else {
      myVideoTexture.pause();
    }
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen);

// screen.getComponent(PlaneShape).height = 2;
// screen.getComponent(PlaneShape).width = 5;


// //Create entities and assign shapes
const box = new BoxShape()
const myEntity = new Entity()
myEntity.addComponent(box)
const mySecondEntity = new Entity()
mySecondEntity.addComponent(box)
const myThirdEntity = new Entity()
myThirdEntity.addComponent(box)

//Create material and configure fields
const myMaterial1 = new Material()
myMaterial1.albedoColor = Color3.Blue()

//Assign same material to all entities
myEntity.addComponent(myMaterial1)
mySecondEntity.addComponent(myMaterial1)
myThirdEntity.addComponent(myMaterial1)

engine.addEntity(myEntity);
engine.addEntity(mySecondEntity);
engine.addEntity(myThirdEntity);

// #5
// myVideoTexture.play();

// // LINK placement
// const entity = new Entity()
// entity.addComponent(new BoxShape())
// const transform = new Transform({ position: new Vector3(10, 2, 5) })
// entity.addComponent(transform)
// entity.addComponent(
//   new OnPointerDown(() => {
//     openExternalURL("https://62c562c1f95425008c28e5b7--exquisite-basbousa-ed1450.netlify.app/feedback.html")
//     // myVideoTexture.play();
//   })
// )
// engine.addEntity(entity);

let sphere = new SphereShape()
const sphereEntity = new Entity()

sphereEntity.addComponent(sphere)
// sphereEntity.addComponent(
//   new OnPointerHoverEnter(( e ) => {
//     myVideoTexture.playing = !myVideoTexture.playing
//     log("Event called : " + e);
//     myVideoTexture.play();
//   })
// )

const myMaterialsphere = new Material()
myMaterialsphere.albedoColor = Color3.Green()

//Assign same material to all entities
sphereEntity.addComponent(myMaterialsphere)
const sphereTransform = new Transform({ position: new Vector3(15, 2, 5) })
sphereEntity.addComponent(sphereTransform)
engine.addEntity(sphereEntity);

// const canvas = new UICanvas()

// const myText = new UIText(canvas)
// myText.value = "Welcome to Adobe"
// myText.font = new Font(Fonts.SansSerif)
// myText.fontSize = 20
// myText.positionX = "15px"
// myText.color = Color4.Blue()
// const textEntity = new Entity()

// const textTransform = new Transform({ position: new Vector3(15, 2, 5) })

// textEntity.addComponent(myText);
// textEntity.addComponent(textTransform);


// let imageAtlas = "images/images.png";
// let imageTree = "images/tree.jpg";

// const imgEntity = new Entity()
// let imageTexture = new Texture(imageAtlas)
// const canvas = new UICanvas()

// const playButton = new UIImage(canvas, imageTexture)
// playButton.sourceLeft = 10
// playButton.sourceTop = 20
// playButton.sourceWidth = 200
// playButton.sourceHeight = 200
// playButton.name = "clickable-image"
// playButton.width = "100px"
// playButton.height = "100px"
// playButton.isPointerBlocker = false
// playButton.onClick = new OnClick(() => {
//   log("OnCLick of Images ");
//   // DO SOMETHING
// })


// const imgTransform = new Transform({ position: new Vector3(0, 0, 0) })
// imgEntity.addComponent(imgTransform);
// imgEntity.addComponent(imageTexture);
// imgEntity.addComponent(playButton);

// engine.addEntity(imgEntity);



// const textEntity = new Entity()

// const canvasUi = new UICanvas()
// const textInput = new UIInputText(canvasUi)
// textInput.width = "200px"
// textInput.height = "25px"
// textInput.vAlign = "bottom"
// textInput.hAlign = "center"
// textInput.fontSize = 10
// textInput.placeholder = "Write message here"
// textInput.color = Color4.Green()
// // textInput.placeholderColor = Color4.Gray()
// textInput.positionY = "200px"
// textInput.isPointerBlocker = false

// textInput.onTextSubmit = new OnTextSubmit((x) => {
//   const text = new UIText(textInput)
//   text.value = "user id " + x.text
//   text.width = "100%"
//   text.height = "20px"
//   text.vAlign = "top"
//   text.hAlign = "left"
// })

// textEntity.addComponent(textInput);
// engine.addEntity(textEntity);



// let avocado = new Entity()
// avocado.addComponent(new GLTFShape("models/avocado.gltf"))
// avocado.addComponent(
//   new Transform({
//     position: new Vector3(3, 1, 3),
//     scale: new Vector3(10, 10, 10),
//   })
// )
// engine.addEntity(avocado)

// MOVE Player
// const respawner = new Entity()
// respawner.addComponent(new BoxShape())
// respawner.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))
// respawner.addComponent(
//   new OnPointerDown(
//     (e) => {
//       movePlayerTo({ x: 1, y: 0, z: 1 }, { x: 8, y: 1, z: 8 })
//     },
//     { hoverText: "Move player" }
//   )
// )
// teleportTo('0,0')

// engine.addEntity(respawner)


// Create screenspace component
// const canvas = new UICanvas()

// Create a textShape component, setting the canvas as parent
// const text = new UIText(canvas)
// text.value = "Ednut#42a4"

// Get all players already in scene
// executeTask(async () => {
//   let players = await getPlayersInScene()
//   players.forEach((player) => {
//     log("player is nearby: ", player.userId)
//   })
// })

// Event when player enters scene
// onEnterSceneObservable.add((player) => {
//   log("player entered scene: ", player.userId)
// })

// // Event when player leaves scene
// onLeaveSceneObservable.add((player) => {
//   log("player left scene: ", player.userId)
// })

// async function fetchPlayerData() {
//   const userData = await getUserData()
//   const playerRealm = await getCurrentRealm()

//   let url = `{playerRealm.domain}/lambdas/profile/{userData.userId}`.toString()
//   log("using URL: ", url)

//   try {
//     let response = await fetch(url)
//     let json = await response.json()

//     log("full response: ", json)
//     log("player is wearing :", json[0].metadata.avatars[0].avatar.wearables)
//     log("player owns :", json[0].metadata.avatars[0].inventory)
//   } catch {
//     log("an error occurred while reaching for player data")
//   }
// }

// fetchDataFromURL();

async function postDataToURL() {
    let url = 'https://webhook.site/2679b87a-a6d4-4d82-a9e7-07dca965d0eb';
    let payloadBody  = {  "key" : "value", "key1" : "value1" };
    try {
      const options = {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body : JSON.stringify( payloadBody)
      };
      let response = await fetch(url, options)
      let json = await response.json()
      log("full response raw url: ", json);
    } catch {
      log("an error occurred while reaching for player data")
    }
  }
  async function fetchDataFromURLGet() {
    let url = 'https://webhook.site/2679b87a-a6d4-4d82-a9e7-07dca965d0eb';
    try {
      const options = {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
      let response = await fetch(url, options )
      let json = await response.json()
      log(json);
      log("full response raw url Get: ", JSON.stringify(json));

    } catch {
      log("an error occurred while reaching for player data")
    }
  }

  function UpdateAvatar() {
    const avatarStyle = new Entity()
    // avatarStyle.addComponent(new AvatarShape().hairColor = '#234244' )
    
    engine.addEntity(base)

    
  }


//   const imageMaterial = new BasicMaterial()
// let myTexture = new Texture("images/images.png", { wrap: 1, samplingMode: 0})
// imageMaterial.texture = myTexture

// const myPlane = new Entity()
// const plane = new PlaneShape()
// myPlane.addComponent(
//   new Transform({
//     position: new Vector3(5, 1.5, 3),
//     rotation: new Quaternion(0, 90, 0, 90),
//     // scale: new Vector3(4, 2, 0)
//   })
// )
// myPlane.addComponent(plane)

// engine.addEntity(myPlane)
// myPlane.addComponent(myMaterial)
// plane.uvs = setUVs(3, 3)

// function setUVs(rows: number, cols: number) {
//   return [
//     // North side of unrortated plane
//     0, //lower-left corner
//     0,

//     cols, //lower-right corner
//     0,

//     cols, //upper-right corner
//     rows,

//     0, //upper left-corner
//     rows,

//     // South side of unrortated plane
//     cols, // lower-right corner
//     0,

//     0, // lower-left corner
//     0,

//     0, // upper-left corner
//     rows,

//     cols, // upper-right corner
//     rows,
//   ]
// }
