class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.chain = Constraint.create(options)
        World.add(world, this.chain)
    }
    display() {
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
