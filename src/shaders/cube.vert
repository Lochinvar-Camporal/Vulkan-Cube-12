#version 450

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
    vec4 params;
} ubo;

layout(location = 0) in vec3 inPosition;
layout(location = 1) in vec3 inColor; // unused

layout(location = 0) out vec3 worldPos;

void main() {
    vec4 world = ubo.model * vec4(inPosition, 1.0);
    gl_Position = ubo.proj * ubo.view * world;
    worldPos = world.xyz;
}
