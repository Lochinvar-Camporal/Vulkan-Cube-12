#version 450

layout(location = 0) in vec3 worldPos;
layout(location = 0) out vec4 outColor;

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec3 normal = normalize(cross(dFdx(worldPos), dFdy(worldPos)));
    vec2 coord = gl_FragCoord.xy + normal.xy * 10.0;
    float n = rand(floor(coord / 20.0));
    outColor = vec4(vec3(n), 0.3);
}
