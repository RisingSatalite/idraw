'use client'

import Image from "next/image";
import { Tldraw } from "tldraw";

export default function Home() {
  return (
    <div className="">
      <div>Local drawing app</div>
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw persistenceKey="example" />
      </div>
    </div>
  );
}
