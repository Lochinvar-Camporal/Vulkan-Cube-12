use cgmath::Vector3;

#[derive(Clone, Copy, Debug)]
pub struct Aabb {
    pub min: Vector3<f32>,
    pub max: Vector3<f32>,
}

impl Aabb {
    pub fn new(min: Vector3<f32>, max: Vector3<f32>) -> Self {
        Self { min, max }
    }

    pub fn intersects(&self, other: &Aabb) -> bool {
        self.min.x <= other.max.x && self.max.x >= other.min.x &&
        self.min.y <= other.max.y && self.max.y >= other.min.y &&
        self.min.z <= other.max.z && self.max.z >= other.min.z
    }
}

