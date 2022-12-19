import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] bg-[rgb(225,220,211)] fixed loading z-10">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="mx-24">
          <Image
            src="/logo/logo_no_sub1.png"
            width={289}
            height={222}
            alt="logo"
            priority
          />
        </div>
        <div className="flex mt-4">
          <Image
            className="animate-loading"
            src="/logo/images/Untitled-1_01.gif"
            width={31}
            height={50}
            alt="sbulogo1"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.1s" }}
            src="/logo/images/Untitled-1_02.gif"
            width={25}
            height={50}
            alt="sbulogo2"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.2s" }}
            src="/logo/images/Untitled-1_03.gif"
            width={20}
            height={50}
            alt="sbulogo3"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.3s" }}
            src="/logo/images/Untitled-1_04.gif"
            width={14}
            height={50}
            alt="sbulogo4"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.4s" }}
            src="/logo/images/Untitled-1_05.gif"
            width={17}
            height={50}
            alt="sbulogo5"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.5s" }}
            src="/logo/images/Untitled-1_06.gif"
            width={19}
            height={50}
            alt="sbulogo6"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.6s" }}
            src="/logo/images/Untitled-1_07.gif"
            width={20}
            height={50}
            alt="sbulogo7"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.7s" }}
            src="/logo/images/Untitled-1_08.gif"
            width={16}
            height={50}
            alt="sbulogo8"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.8s" }}
            src="/logo/images/Untitled-1_09.png"
            width={17}
            height={50}
            alt="sbulogo9"
          />
          <Image
            className="animate-loading"
            style={{ animationDelay: "0.9s" }}
            src="/logo/images/Untitled-1_10.gif"
            width={21}
            height={50}
            alt="sbulogo10"
          />
        </div>
        <div className="flex mx-10 mt-6">
          <Image
            src="/logo/logo_no_sub2.png"
            width={572}
            height={71}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
