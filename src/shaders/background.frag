#version 450

layout(location = 0) out vec4 outColor;

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    float n = rand(floor(gl_FragCoord.xy / 20.0));
    outColor = vec4(vec3(n), 1.0);
}
