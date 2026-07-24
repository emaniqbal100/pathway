import Image from "next/image";

export function PinwheelShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 340, height: 340 }}>
      <Image src="/images/wheel.png" alt="" fill sizes="340px" className="object-contain drop-shadow-2xl" />
    </div>
  );
}

export function CylinderShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 200, height: 190 }}>
      <Image src="/images/cylinder.png" alt="" fill sizes="200px" className="object-contain drop-shadow-xl" />
    </div>
  );
}

export function BlobShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 300, height: 300 }}>
      <Image src="/images/diamond.png" alt="" fill sizes="400px" className="object-contain drop-shadow-xl" />
    </div>
  );
}

export function CrossShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 240, height: 240 }}>
      <Image src="/images/3d%20shape.png" alt="" fill sizes="140px" className="object-contain drop-shadow-lg" />
    </div>
  );
}

export function CubeShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 230, height: 220 }}>
      <Image src="/images/cube.png" alt="" fill sizes="430px" className="object-contain drop-shadow-lg" />
    </div>
  );
}

export function StarShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 180, height: 180 }}>
      <Image src="/images/star.png" alt="" fill sizes="280px" className="object-contain drop-shadow-xl" />
    </div>
  );
}

export function SpiralShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 200, height: 250 }}>
      <Image src="/images/sprial.png" alt="" fill sizes="200px" className="object-contain drop-shadow-xl" />
    </div>
  );
}

export function TorusShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 160, height: 160 }}>
      <Image src="/images/circle.png" alt="" fill sizes="200px" className="object-contain drop-shadow-xl" />
    </div>
  );
}

export function CurveShape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 90, height: 130 }}>
      <Image src="/images/semi%20circle.png" alt="" fill sizes="190px" className="object-contain drop-shadow-xl" />
    </div>
  );
}