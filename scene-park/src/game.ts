
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const cactus = new Entity('cactus')
engine.addEntity(cactus)
cactus.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(8.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cactus.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("ac4bee02-ae33-4788-a041-183781554855/Cactus_01/Cactus_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
cactus.addComponentOrReplace(gltfShape2)

const whiteMediumFence = new Entity('whiteMediumFence')
engine.addEntity(whiteMediumFence)
whiteMediumFence.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(22.5, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("46351f8d-3498-40e7-87c8-70627ba59e81/FencePicketWhiteMedium_01/FencePicketWhiteMedium_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
whiteMediumFence.addComponentOrReplace(gltfShape3)

const whiteMediumFence2 = new Entity('whiteMediumFence2')
engine.addEntity(whiteMediumFence2)
whiteMediumFence2.setParent(_scene)
whiteMediumFence2.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(22.5, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence2.addComponentOrReplace(transform8)

const whiteMediumFence3 = new Entity('whiteMediumFence3')
engine.addEntity(whiteMediumFence3)
whiteMediumFence3.setParent(_scene)
whiteMediumFence3.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(22.5, 0, 18),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence3.addComponentOrReplace(transform9)

const whiteMediumFence4 = new Entity('whiteMediumFence4')
engine.addEntity(whiteMediumFence4)
whiteMediumFence4.setParent(_scene)
whiteMediumFence4.addComponentOrReplace(gltfShape3)
const transform10 = new Transform({
  position: new Vector3(22.5, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence4.addComponentOrReplace(transform10)

const whiteMediumFence5 = new Entity('whiteMediumFence5')
engine.addEntity(whiteMediumFence5)
whiteMediumFence5.setParent(_scene)
whiteMediumFence5.addComponentOrReplace(gltfShape3)
const transform11 = new Transform({
  position: new Vector3(22.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence5.addComponentOrReplace(transform11)

const whiteMediumFence6 = new Entity('whiteMediumFence6')
engine.addEntity(whiteMediumFence6)
whiteMediumFence6.setParent(_scene)
whiteMediumFence6.addComponentOrReplace(gltfShape3)
const transform12 = new Transform({
  position: new Vector3(22.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence6.addComponentOrReplace(transform12)

const whiteMediumFence7 = new Entity('whiteMediumFence7')
engine.addEntity(whiteMediumFence7)
whiteMediumFence7.setParent(_scene)
whiteMediumFence7.addComponentOrReplace(gltfShape3)
const transform13 = new Transform({
  position: new Vector3(22.5, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence7.addComponentOrReplace(transform13)

const whiteMediumFence8 = new Entity('whiteMediumFence8')
engine.addEntity(whiteMediumFence8)
whiteMediumFence8.setParent(_scene)
whiteMediumFence8.addComponentOrReplace(gltfShape3)
const transform14 = new Transform({
  position: new Vector3(22.5, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMediumFence8.addComponentOrReplace(transform14)

const traditionalRoundPavilion = new Entity('traditionalRoundPavilion')
engine.addEntity(traditionalRoundPavilion)
traditionalRoundPavilion.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(8, 0, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
traditionalRoundPavilion.addComponentOrReplace(transform15)
const gltfShape4 = new GLTFShape("d9adde10-9349-49c8-ad6f-3083060fb93f/ChinesePergola_01/ChinesePergola_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
traditionalRoundPavilion.addComponentOrReplace(gltfShape4)

const temple = new Entity('temple')
engine.addEntity(temple)
temple.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(6.5, 0, 6.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
temple.addComponentOrReplace(transform16)
const gltfShape5 = new GLTFShape("d6a75fd6-7adc-431c-913f-6d15156936cf/ChineseHouse_01/ChineseHouse_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
temple.addComponentOrReplace(gltfShape5)

const traditionalStonePagodaLantern = new Entity('traditionalStonePagodaLantern')
engine.addEntity(traditionalStonePagodaLantern)
traditionalStonePagodaLantern.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(10, 0, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
traditionalStonePagodaLantern.addComponentOrReplace(transform17)
const gltfShape6 = new GLTFShape("2fab56bd-6a6e-4418-84e4-72d0528c7646/ChineseFountain_02/ChineseFountain_02.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
traditionalStonePagodaLantern.addComponentOrReplace(gltfShape6)

const archwayOfKindness = new Entity('archwayOfKindness')
engine.addEntity(archwayOfKindness)
archwayOfKindness.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(22.5, 0, 13),
  rotation: new Quaternion(-0.03519348055124283, 0.6438143253326416, -0.06584237515926361, -0.7615309357643127),
  scale: new Vector3(0.7266782522201538, 0.7499999403953552, 0.6060504913330078)
})
archwayOfKindness.addComponentOrReplace(transform18)
const gltfShape7 = new GLTFShape("3d7bd1d2-2aee-470f-b19b-01997fc26da5/ChineseGate_03/ChineseGate_03.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
archwayOfKindness.addComponentOrReplace(gltfShape7)

const steampunkBench = new Entity('steampunkBench')
engine.addEntity(steampunkBench)
steampunkBench.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(16, 0, 29),
  rotation: new Quaternion(-3.617078441912934e-15, -0.9238795638084412, 1.1013500511580787e-7, -0.3826834559440613),
  scale: new Vector3(1.5000011920928955, 1.5, 1.5000011920928955)
})
steampunkBench.addComponentOrReplace(transform19)
const gltfShape8 = new GLTFShape("c17db1de-1c8f-4e30-b8cf-d470d0ca7fcf/Steampunk Bench.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
steampunkBench.addComponentOrReplace(gltfShape8)

const drumms = new Entity('drumms')
engine.addEntity(drumms)
drumms.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(18, 0, 22),
  rotation: new Quaternion(3.7634012659687466e-15, -0.9569402933120728, 1.1407615119196635e-7, -0.29028481245040894),
  scale: new Vector3(1, 1, 1)
})
drumms.addComponentOrReplace(transform20)
const gltfShape9 = new GLTFShape("b6dd0d14-e5bb-444b-9a2e-2c25d3dce874/Drumms.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
drumms.addComponentOrReplace(gltfShape9)

const drummChair = new Entity('drummChair')
engine.addEntity(drummChair)
drummChair.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drummChair.addComponentOrReplace(transform21)
const gltfShape10 = new GLTFShape("bc394619-b279-4333-bc91-4eb1488001b5/Drumm Chair.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
drummChair.addComponentOrReplace(gltfShape10)

const drummChair2 = new Entity('drummChair2')
engine.addEntity(drummChair2)
drummChair2.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(19, 0, 21.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drummChair2.addComponentOrReplace(transform22)
drummChair2.addComponentOrReplace(gltfShape10)
