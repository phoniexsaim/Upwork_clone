import Link from "next/link";
export default function EnterpriseSmallNav() {

return (
    <>
 <nav className="fixed md:top-[50px] top-[70px] left-0 w-full md:z-50 z-[100] bg-[#181818] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 flex gap-6 md:gap-6 text-[12px] md:text-[14px] flex-wrap">
        <Link href={"/Enterprise/MainEnterprise"} className="hover:text-[#14a800] hover:underline">Enterprise Suite</Link>
        <Link href={"/Enterprise/ServiceEnterprise"} className="hover:text-[#14a800] hover:underline">Managed Services</Link>
        <Link href={"/Enterprise/FeatureEnterprise"} className="hover:text-[#14a800] hover:underline">Features</Link>
        <Link href={"/Enterprise/ContactEnterprise"} className="hover:text-[#14a800] hover:underline">Contact us</Link>
      </div>
    </nav>
    </>
)

}