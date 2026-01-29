export default function Cookies() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-16 py-10">
        <div className="w-full flex items-center justify-between top-0 bg-white z-50">
            <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-black">
                    <g>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                </svg>
                <h1 className="text-[22px] font-bold text-black tracking-tight">Cookies Policy</h1>
            </div>
        </div>
        <div className="w-full max-w-[950px] px-4 mt-52">
            <h1 className="text-[140px] font-bold leading-none text-black/90 tracking-tight">How cookies are used on X</h1>
        </div>
        <div className="w-full max-w-full pl-32 mt-32 p-10">
            <p className="text-black/90 mt-4 text-md leading-7">
                Cookies and similar technologies like pixels and local storage provide you with a better, faster, and safer experience on X. Cookies are also used to operate our services, which include our websites, applications, APIs, pixels, embeds, and email communications. Specifically, X uses these technologies to:
            </p>
            <ul className="list-disc pl-5 mt-6 space-y-6 text-black/80 text-[15px] leading-6">
              <li>
                <span className="font-bold text-black">You will see advertising on the platform:</span> In exchange for accessing the Services, X and our third-party providers and partners may display advertising to you.
              </li>
              <li>
                <span className="font-bold text-black">When posting Content and otherwise using the Services, you must comply with this User Agreement and Applicable Law:</span> You are responsible for your use of the Services and your Content. You must comply with the User Agreement, including all applicable policies and rules, and all applicable laws.
              </li>
              <li>
                <span className="font-bold text-black">You must abide by the Services’ acceptable use terms:</span> You may not access the Services in any way other than through the currently available, published interfaces that we provide. For example, this means that you cannot scrape the Services without X’s express written permission, try to work around any technical limitations we impose, or otherwise attempt to disrupt the operation of the Services.
              </li>
              <li>
                <span className="font-bold text-black">We have broad enforcement rights:</span> X reserves the right to take enforcement actions against you if you do violate these terms, such as, for example, removing your Content, limiting visibility, discontinuing your access to X, or taking legal action. Certain jurisdictions, including the European Union and the United Kingdom, also impose obligations on X to enforce against not only illegal content but also categories of content deemed by law to be “harmful” or “unsafe.” As a result, your Content or account may be subject to restrictions in those jurisdictions. We may also suspend or terminate your account for other reasons, such as prolonged inactivity, risk of legal exposure, or commercial inviability.
              </li>
              <li>
                <span className="font-bold text-black">There are intellectual property licenses in these Terms:</span> You retain ownership and rights to any of your Content you post or share, and you provide us with a broad, royalty-free license to make your Content available to the rest of the world and to let others do the same. Conversely, we provide you a license to use the software we provide as part of the Services, such as the X mobile application, solely for the purpose of enabling you to use and enjoy the benefit of the Services.
              </li>
              <li>
                <span className="font-bold text-black">Your use of the Services is at your own risk:</span> We provide the Services on an “AS IS” and “AS AVAILABLE” basis, and we disclaim all warranties, responsibility, and liability to you or others to the extent permitted by law. You may be exposed to offensive or harmful Content posted by other users. The Services may change from time to time, and we may limit or terminate availability of the Services or particular features to you or other users at any time.
              </li>
               <li>
                <span className="font-bold text-black">You have remedies and redress mechanisms, but our liability is limited:</span> You have a right to terminate this agreement at any time by deactivating your account and discontinuing use of the Services. Depending on your country of residence, we may not be liable for certain types of damages as described in the agreement, and in any event, our aggregate liability shall not exceed the greater of $100 USD or the amount you paid us, if any, in the past six months for the Services giving rise to the claim. Further, if you believe that your Content has been displayed on the Services in an unauthorized manner that constitutes copyright infringement, the reporting process is detailed in these Terms.
              </li>
            </ul>
        </div>
    </div>
  );
}
