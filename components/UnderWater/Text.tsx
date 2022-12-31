import * as THREE from "three";
import React, { forwardRef, useCallback, useMemo } from "react";
import { useLoader, extend, Node } from "@react-three/fiber";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

import { EventHandlers } from "@react-three/fiber/dist/declarations/src/core/events";

interface TextProps extends EventHandlers {
  children: string;
  vAlign?: string;
  hAlign?: string;
  size?: number;
  color?: string;
}

const TextObject = forwardRef<THREE.Group, TextProps>(
  (
    {
      children,
      vAlign = "center",
      hAlign = "center",
      size = 1,
      color = "#000000",
      ...props
    },
    ref
  ) => {
    const font = useLoader(FontLoader, "/fonts/hana.json");
    //const font = useLoader(FontLoader, "/underwater/bold.blob");
    const config = useMemo(() => ({ font, size, height: 50 }), [font, size]);

    // after initailizing change position base on vAlign,hAlign
    const meshUpdate = useCallback((self: THREE.Mesh) => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x =
        hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
      self.position.y =
        vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
    }, []);

    return (
      <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
        <mesh onUpdate={meshUpdate}>
          <textGeometry args={[children, config]} />
          <meshNormalMaterial />
        </mesh>
      </group>
    );
  }
);

TextObject.displayName = "TextObject";

export default TextObject;

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Node<TextGeometry, typeof TextGeometry>;
  }
}
