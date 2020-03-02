import React, { FC, useState } from 'react'
import Matter, { Composites, Constraint, Events } from 'matter-js'

interface SceneProps {
  logos: string[]
}

interface SceneState {
  logos: string[]
}

function choose (choices: any[]) {
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

// const Scene2: FC<SceneProps> = (props) => {
//   const [logos, setLogos] = useState<string[]>(props.logos)
//
//
// }

class Scene extends React.Component<SceneProps, SceneState> {
  constructor (props: Readonly<SceneProps>) {
    super(props)
    this.state = {
      logos: props.logos
    }
  }

  componentDidMount () {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint

    const engine = Engine.create()

    const width = window.innerWidth * .9
    const height = window.innerHeight * .9

    const launchPoint = {
      x: 400,
      y: 450
    }

    const render = Render.create({
      element: this.refs.scene as HTMLElement,
      engine: engine,
      options: {
        background: 'lightgrey',
        wireframes: false,
        width,
        height
      }
    })

    // add bodies
    let rockOptions = { density: 0.004 },
      rock = Bodies.polygon(launchPoint.x, launchPoint.y, 80, 20, rockOptions),
      anchor = { x: launchPoint.x, y: launchPoint.y },
      elastic = Constraint.create({
        pointA: anchor,
        bodyB: rock,
        stiffness: 0.01
      })

    const images = this.state.logos

    const ground2 = Bodies.rectangle(width / 1.2, height / 2, 200, 20, {
      isStatic: true, angle: -.075,
      friction: .50
    })
    const pyramid2 = Composites.pyramid(width / 1.2 - 75, height / 3, 5, 10, 0, 0, function (x: number, y: number) {
      const image = choose(images)

      return Bodies.rectangle(x, y, 32, 30, {
        render: {
          sprite: {
            texture: image,
            xScale: .1,
            yScale: .1,
          }
        },
        friction: .50
      })
    })
    World.add(engine.world, ground2)
    World.add(engine.world, pyramid2)
    World.add(engine.world, rock)
    World.add(engine.world, elastic)

    Events.on(engine, 'afterUpdate', function () {
      if (mouseConstraint.mouse.button === -1 && (rock.position.x > launchPoint.x + 20 || rock.position.y < launchPoint.y - 20)) {
        rock = Bodies.polygon(launchPoint.x, launchPoint.y, 80, 20, rockOptions)
        setTimeout(() => {
          World.add(engine.world, rock)
          elastic.bodyB = rock
        }, 10)

      }
    })

    // add mouse control
    let mouse = Mouse.create(render.canvas)
    //@ts-ignore
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    })

    World.add(engine.world, mouseConstraint)

    // keep the mouse in sync with rendering
    // @ts-ignore
    render.mouse = mouse

    Engine.run(engine)

    Render.run(render)
  }

  render () {
    return window.innerWidth > 750 ? <div ref="scene"/> : <p>Your screen is too narrow</p>
  }
}

export default Scene
