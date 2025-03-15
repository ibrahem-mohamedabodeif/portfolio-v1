import Image from "next/image";

export default function CertificationsSec() {
  return (
    <div className="py-20 px-7 md:py-52 lg:py-20 lg:px-20 bg-[#e5e5e5] rounded-t-[100px]">
        <h1 className="text-center text-3xl text-red-800 font-mono tracking-wider">
          Certifications
        </h1>
        <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
          <div className="max-w-lg">
            <Image
              src={"/certificates/freecodecamp1.png"}
              alt="certificat 1"
              width={500}
              height={200}
            />
          </div>
          <div className="max-w-lg">
            <Image
              src={"/certificates/UC-1a346b0a-5fe3-431f-97ae-04524173f2ff.jpg"}
              alt="certificat 2"
              width={500}
              height={200}
            />
          </div>
          <div className="max-w-lg">
            <Image
              src={"/certificates/UC-4edc3490-7306-40b3-8aa6-d3c8d43f3240.jpg"}
              alt="certificat 3"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
  )
}
