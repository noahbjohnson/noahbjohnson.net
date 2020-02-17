import React from 'react'
import Matter, { Composites, Constraint, Events } from 'matter-js'

class Scene extends React.Component {
  constructor (props: Readonly<{}>) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint

    const engine = Engine.create({
      // positionIterations: 20
    })

    const width = window.innerWidth * .9
    const height = window.innerHeight * .9

    const render = Render.create({
      element: this.refs.scene as HTMLElement,
      engine: engine,
      options: {
        background: '#010101',
        wireframes: false,
        width,
        height
      }
    })

    // add bodies
    let ground = Bodies.rectangle(width / 2, height, width - 20, 50, { isStatic: true }),
      rockOptions = { density: 0.004 },
      rock = Bodies.polygon(170, 450, 8, 20, rockOptions),
      anchor = { x: 170, y: 450 },
      elastic = Constraint.create({
        pointA: anchor,
        bodyB: rock,
        stiffness: 0.05
      })

    const pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, function (x: number, y: number) {
      return Bodies.rectangle(x, y, 25, 40)
    })

    const ground2 = Bodies.rectangle(610, 250, 200, 20, { isStatic: true })

    const pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x: number, y: number) {
      return Bodies.rectangle(x, y, 25, 40)
    })
    World.add(engine.world, ground)
    World.add(engine.world, pyramid)
    World.add(engine.world, ground2)
    World.add(engine.world, pyramid2)
    World.add(engine.world, rock)
    World.add(engine.world, elastic)

    Events.on(engine, 'afterUpdate', function () {
      if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
        rock = Bodies.polygon(170, 450, 7, 20, rockOptions)
        World.add(engine.world, rock)
        elastic.bodyB = rock
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
    return <div ref="scene"/>
  }
}

export default Scene
