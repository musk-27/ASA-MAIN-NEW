import Image from 'next/image';

const Logo = ({ width, height, className }) => (
  <div className={className}>
    <Image src="/asa-black.png" width={width} height={height} />
  </div>
);

export default Logo;
