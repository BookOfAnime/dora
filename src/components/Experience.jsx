import React from "react";
import { Dora } from "./Dora";
import { Environment, Text3D } from "@react-three/drei";
const Experience = () => {
  return (
    <group>
      <Text3D
        position={[-2, 0.7, 0]}
        style={{ color: "red" }}
        scale={0.5}
        fontSize={0.5}
        font="./Atop_Regular.json"
      >
        Dora3mon
        <meshNormalMaterial />
      </Text3D>
      <Dora />
    </group>
  );
};

export default Experience;
