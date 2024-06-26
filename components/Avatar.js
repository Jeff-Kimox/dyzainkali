import Image from "next/image";

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image 
        src={'/avatar.png'} 
        width={500} 
        height={500} 
        alt='' 
        className='tranlate-z-0 w-full h-full' />
    </div>
  );
};

export default Avatar;
