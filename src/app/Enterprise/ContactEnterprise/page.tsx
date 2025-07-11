"use client";
import EnterpriseContactFooter from "@/app/Components/EnterpriseContact-Footer";
import EnterpriseContactForm from "@/app/Components/EnterpriseContact-Form";
import EnterpriseContactNav from "@/app/Components/EnterpriseContact-Nav";

export default function ContactEnterprise() {
    return(
<>
        <div className="bg-black">
            <EnterpriseContactNav/>
            <EnterpriseContactForm/>
            <EnterpriseContactFooter/>
        </div>
</>
    )
}
