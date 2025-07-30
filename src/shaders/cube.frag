#version 450

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
    vec4 params;
} ubo;

layout(location = 0) in vec3 worldPos;
layout(location = 0) out vec4 outColor;

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 disp = worldPos.xy - ubo.params.xy;
    float r2 = dot(disp, disp);
    float falloff = max(0.0, 1.0 - r2);
    vec2 refracted = gl_FragCoord.xy + disp * falloff * ubo.params.z * 100.0;
    float n = rand(floor(refracted / 20.0));
    float edge = smoothstep(0.9, 1.0, length(disp));
    outColor = vec4(vec3(n), 0.3) + vec4(edge);
}
