import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";

import Lights from "./Lights";
import IPhone from "./IPhone";
import Loading from "./Loading";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  size,
  setRotationSize,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2} ? right-[-100%] : ''`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls />

      <group>
        <Suspense fallback={<Loading />}>
          <IPhone />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
