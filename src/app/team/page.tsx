import TeamSection from "@/components/team-components/TeamSection"
import Footer from "@/components/common/Footer"
import BackToTop from "@/components/common/BackToTop"
import TeamSidebar from "@/components/team-components/TeamSidebar"

export default function TeamPage() {

  const mentors = [
    {
      name: "Dr. Amit Shah",
      role: "Faculty Advisor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MmaEe0M1h10UOrG-d4UQZeXJJcsuu-LjVaLWzlClg1a6RXjxsuNsELQPSrUQGWFDt4T7kb63Jfp8lCG_Tw-jE44-_R3DhVAR4DJz5VP7spYshVkuv6Z42vbyaguZmrbXn5zKQ67zUWsmjMHj_Be6drNmb8tZY8EvYLNvhWsM_FlUe4n6r4V73x4nkhGNEBrHwqW6K_yCsOVwPY0Sj5bMBrNr466zrLJ4roApwaEN0NTIrTsHvjhWdugSaxaPIJ_VYWYSmNSlCFXn",
    },
    {
      name: "Prof. Sarah Jenkins",
      role: "Technical Advisor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPO2A1UqmlgXyqxe4-iQdIVbl23jNI3dbqN3P5oPD3ODbrKItsi2PrEA3KiUp3xgZewX6Atv-TxDHfIKdo8mV5gSWV0W28ET8y3F93xfD0sMsrj_wuQTqWSL_XbC2glNxeYLD4GTohfXIQDfRx9s58QpTPP5KRbCUlRnrH72V6cXY0mIXXseApBkzO4F2sioYkxSQ4tzVkHodbuLkmS1MH9zeKjTs0_Hy818XNrsBvI11AMPaDXpq4K_3dApbjkBszO_dLmjD9XSYy",
    },
    {
      name: "Dr. Vikrant Roy",
      role: "Research Mentor",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF5BoLHnMCLwIi89rf2RlS23FZZ1XbtLYq-HkHLNpnK1zD9Z1sVya2W11bGrzlg9HOuDvhHRH0R0nWFPnCTOq7bbRGE2G6QdGa_6hiQImLTDo_Rh2p0SepmqN6gkBvxcgZ2IXzA0Q2jHusLO0V8lqDxQZtZvIqgrWj32YMhNBg_Bh2tBiwZ4mc7PqXfgPuKK5Fc7DVrabr0wUImRp9boewOewRXKMX0Wb01K7eJHkD4JXBH9I6PNLgMjTjOz3RvLviRrDGc6V5TLSq",
    },
    {
      name: "Prof. Anita Gupta",
      role: "Industry Liaison",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRDlznegneNwftLN_E9li0VVvzmPgQPXVCrei77gFpw21AXRusDupzPSB3gp9PpvrcE7sY1dA0wQ7wAc9-oU6-Y_wS5sb1uSRV98TwqeVozMmoS6Xq9FKnWxWDcPH-2MkiscSynHV-U2XZ3s-u8_xpjNfVDx_s8biejcyvTcmg3IXwxmfPoTNTHF73ieiKHyWBGE5GkRMNBRsLlzaLgBWI7OBJlSojqnsC8nyI92ko1lZqpOEUYhgQ-wdPENn9RMc9GNM8DiTQ_fws",
    },
  ]

  const heads = [
    {
      name: "Sanya Gupta",
      role: "Overall Coordinator",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPO2A1UqmlgXyqxe4-iQdIVbl23jNI3dbqN3P5oPD3ODbrKItsi2PrEA3KiUp3xgZewX6Atv-TxDHfIKdo8mV5gSWV0W28ET8y3F93xfD0sMsrj_wuQTqWSL_XbC2glNxeYLD4GTohfXIQDfRx9s58QpTPP5KRbCUlRnrH72V6cXY0mIXXseApBkzO4F2sioYkxSQ4tzVkHodbuLkmS1MH9zeKjTs0_Hy818XNrsBvI11AMPaDXpq4K_3dApbjkBszO_dLmjD9XSYy",
    },
    {
      name: "Rohan Mehta",
      role: "Technical Head",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF5BoLHnMCLwIi89rf2RlS23FZZ1XbtLYq-HkHLNpnK1zD9Z1sVya2W11bGrzlg9HOuDvhHRH0R0nWFPnCTOq7bbRGE2G6QdGa_6hiQImLTDo_Rh2p0SepmqN6gkBvxcgZ2IXzA0Q2jHusLO0V8lqDxQZtZvIqgrWj32YMhNBg_Bh2tBiwZ4mc7PqXfgPuKK5Fc7DVrabr0wUImRp9boewOewRXKMX0Wb01K7eJHkD4JXBH9I6PNLgMjTjOz3RvLviRrDGc6V5TLSq",
    },
    {
      name: "Aditi Sharma",
      role: "Events Head",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MmaEe0M1h10UOrG-d4UQZeXJJcsuu-LjVaLWzlClg1a6RXjxsuNsELQPSrUQGWFDt4T7kb63Jfp8lCG_Tw-jE44-_R3DhVAR4DJz5VP7spYshVkuv6Z42vbyaguZmrbXn5zKQ67zUWsmjMHj_Be6drNmb8tZY8EvYLNvhWsM_FlUe4n6r4V73x4nkhGNEBrHwqW6K_yCsOVwPY0Sj5bMBrNr466zrLJ4roApwaEN0NTIrTsHvjhWdugSaxaPIJ_VYWYSmNSlCFXn",
    },
    {
      name: "Vikram Singh",
      role: "Design Head",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD70WJob-bYiOXd3D4kZgVuOavL4zoQDBKQmMfDv4LxHsfAPvIjX8Gh8KvULhi2x05wJu5sQ4A1CbKR_oM4GTYOXwuYwA__MKjiDMlPxAyBxfqAW7WDJVH21CJkPFCcIhNdPaYZVDsmCO-mhf0CPpj3lUpv7awjDA71LItUKQXnyofwluUuyzJS4r9z8buT_5AH4nC-62o-VpwNduKXjwkxQ_esfJRjSULY8DpKMvxz4X0IT3VWhAYYwcvlluKcmtvBQ4E4TeOqesDA",
    },
    {
      name: "Kabir Das",
      role: "Finance Head",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRDlznegneNwftLN_E9li0VVvzmPgQPXVCrei77gFpw21AXRusDupzPSB3gp9PpvrcE7sY1dA0wQ7wAc9-oU6-Y_wS5sb1uSRV98TwqeVozMmoS6Xq9FKnWxWDcPH-2MkiscSynHV-U2XZ3s-u8_xpjNfVDx_s8biejcyvTcmg3IXwxmfPoTNTHF73ieiKHyWBGE5GkRMNBRsLlzaLgBWI7OBJlSojqnsC8nyI92ko1lZqpOEUYhgQ-wdPENn9RMc9GNM8DiTQ_fws",
    },
    {
      name: "Isha Reddy",
      role: "Public Relations",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPO2A1UqmlgXyqxe4-iQdIVbl23jNI3dbqN3P5oPD3ODbrKItsi2PrEA3KiUp3xgZewX6Atv-TxDHfIKdo8mV5gSWV0W28ET8y3F93xfD0sMsrj_wuQTqWSL_XbC2glNxeYLD4GTohfXIQDfRx9s58QpTPP5KRbCUlRnrH72V6cXY0mIXXseApBkzO4F2sioYkxSQ4tzVkHodbuLkmS1MH9zeKjTs0_Hy818XNrsBvI11AMPaDXpq4K_3dApbjkBszO_dLmjD9XSYy",
    },
    {
      name: "Nitin Verma",
      role: "Operations Head",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF5BoLHnMCLwIi89rf2RlS23FZZ1XbtLYq-HkHLNpnK1zD9Z1sVya2W11bGrzlg9HOuDvhHRH0R0nWFPnCTOq7bbRGE2G6QdGa_6hiQImLTDo_Rh2p0SepmqN6gkBvxcgZ2IXzA0Q2jHusLO0V8lqDxQZtZvIqgrWj32YMhNBg_Bh2tBiwZ4mc7PqXfgPuKK5Fc7DVrabr0wUImRp9boewOewRXKMX0Wb01K7eJHkD4JXBH9I6PNLgMjTjOz3RvLviRrDGc6V5TLSq",
    },
    {
      name: "Priya Nair",
      role: "App Head",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MmaEe0M1h10UOrG-d4UQZeXJJcsuu-LjVaLWzlClg1a6RXjxsuNsELQPSrUQGWFDt4T7kb63Jfp8lCG_Tw-jE44-_R3DhVAR4DJz5VP7spYshVkuv6Z42vbyaguZmrbXn5zKQ67zUWsmjMHj_Be6drNmb8tZY8EvYLNvhWsM_FlUe4n6r4V73x4nkhGNEBrHwqW6K_yCsOVwPY0Sj5bMBrNr466zrLJ4roApwaEN0NTIrTsHvjhWdugSaxaPIJ_VYWYSmNSlCFXn",
    },
  ]

  const coreMembers = [
    {
      name: "Ananya Rao",
      role: "Full Stack Dev",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD70WJob-bYiOXd3D4kZgVuOavL4zoQDBKQmMfDv4LxHsfAPvIjX8Gh8KvULhi2x05wJu5sQ4A1CbKR_oM4GTYOXwuYwA__MKjiDMlPxAyBxfqAW7WDJVH21CJkPFCcIhNdPaYZVDsmCO-mhf0CPpj3lUpv7awjDA71LItUKQXnyofwluUuyzJS4r9z8buT_5AH4nC-62o-VpwNduKXjwkxQ_esfJRjSULY8DpKMvxz4X0IT3VWhAYYwcvlluKcmtvBQ4E4TeOqesDA",
    },
    {
      name: "Kabir Das",
      role: "Cloud Architect",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRDlznegneNwftLN_E9li0VVvzmPgQPXVCrei77gFpw21AXRusDupzPSB3gp9PpvrcE7sY1dA0wQ7wAc9-oU6-Y_wS5sb1uSRV98TwqeVozMmoS6Xq9FKnWxWDcPH-2MkiscSynHV-U2XZ3s-u8_xpjNfVDx_s8biejcyvTcmg3IXwxmfPoTNTHF73ieiKHyWBGE5GkRMNBRsLlzaLgBWI7OBJlSojqnsC8nyI92ko1lZqpOEUYhgQ-wdPENn9RMc9GNM8DiTQ_fws",
    },
    {
      name: "Meera Joshi",
      role: "Frontend Expert",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPO2A1UqmlgXyqxe4-iQdIVbl23jNI3dbqN3P5oPD3ODbrKItsi2PrEA3KiUp3xgZewX6Atv-TxDHfIKdo8mV5gSWV0W28ET8y3F93xfD0sMsrj_wuQTqWSL_XbC2glNxeYLD4GTohfXIQDfRx9s58QpTPP5KRbCUlRnrH72V6cXY0mIXXseApBkzO4F2sioYkxSQ4tzVkHodbuLkmS1MH9zeKjTs0_Hy818XNrsBvI11AMPaDXpq4K_3dApbjkBszO_dLmjD9XSYy",
    },
    {
      name: "Rahul Kumar",
      role: "Backend Dev",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF5BoLHnMCLwIi89rf2RlS23FZZ1XbtLYq-HkHLNpnK1zD9Z1sVya2W11bGrzlg9HOuDvhHRH0R0nWFPnCTOq7bbRGE2G6QdGa_6hiQImLTDo_Rh2p0SepmqN6gkBvxcgZ2IXzA0Q2jHusLO0V8lqDxQZtZvIqgrWj32YMhNBg_Bh2tBiwZ4mc7PqXfgPuKK5Fc7DVrabr0wUImRp9boewOewRXKMX0Wb01K7eJHkD4JXBH9I6PNLgMjTjOz3RvLviRrDGc6V5TLSq",
    },
    {
      name: "Siddharth Roy",
      role: "AI Enthusiast",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MmaEe0M1h10UOrG-d4UQZeXJJcsuu-LjVaLWzlClg1a6RXjxsuNsELQPSrUQGWFDt4T7kb63Jfp8lCG_Tw-jE44-_R3DhVAR4DJz5VP7spYshVkuv6Z42vbyaguZmrbXn5zKQ67zUWsmjMHj_Be6drNmb8tZY8EvYLNvhWsM_FlUe4n6r4V73x4nkhGNEBrHwqW6K_yCsOVwPY0Sj5bMBrNr466zrLJ4roApwaEN0NTIrTsHvjhWdugSaxaPIJ_VYWYSmNSlCFXn",
    },
    {
      name: "Sara Khan",
      role: "DevOps Engineer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MmaEe0M1h10UOrG-d4UQZeXJJcsuu-LjVaLWzlClg1a6RXjxsuNsELQPSrUQGWFDt4T7kb63Jfp8lCG_Tw-jE44-_R3DhVAR4DJz5VP7spYshVkuv6Z42vbyaguZmrbXn5zKQ67zUWsmjMHj_Be6drNmb8tZY8EvYLNvhWsM_FlUe4n6r4V73x4nkhGNEBrHwqW6K_yCsOVwPY0Sj5bMBrNr466zrLJ4roApwaEN0NTIrTsHvjhWdugSaxaPIJ_VYWYSmNSlCFXn",
    },
    {
      name: "Arjun Gupta",
      role: "Web3 Dev",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD70WJob-bYiOXd3D4kZgVuOavL4zoQDBKQmMfDv4LxHsfAPvIjX8Gh8KvULhi2x05wJu5sQ4A1CbKR_oM4GTYOXwuYwA__MKjiDMlPxAyBxfqAW7WDJVH21CJkPFCcIhNdPaYZVDsmCO-mhf0CPpj3lUpv7awjDA71LItUKQXnyofwluUuyzJS4r9z8buT_5AH4nC-62o-VpwNduKXjwkxQ_esfJRjSULY8DpKMvxz4X0IT3VWhAYYwcvlluKcmtvBQ4E4TeOqesDA",
    },
    {
      name: "Ishan Sharma",
      role: "Security Lead",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRDlznegneNwftLN_E9li0VVvzmPgQPXVCrei77gFpw21AXRusDupzPSB3gp9PpvrcE7sY1dA0wQ7wAc9-oU6-Y_wS5sb1uSRV98TwqeVozMmoS6Xq9FKnWxWDcPH-2MkiscSynHV-U2XZ3s-u8_xpjNfVDx_s8biejcyvTcmg3IXwxmfPoTNTHF73ieiKHyWBGE5GkRMNBRsLlzaLgBWI7OBJlSojqnsC8nyI92ko1lZqpOEUYhgQ-wdPENn9RMc9GNM8DiTQ_fws",
    },
    {
      name: "Tanmay Singh",
      role: "UI/UX Designer",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBF5BoLHnMCLwIi89rf2RlS23FZZ1XbtLYq-HkHLNpnK1zD9Z1sVya2W11bGrzlg9HOuDvhHRH0R0nWFPnCTOq7bbRGE2G6QdGa_6hiQImLTDo_Rh2p0SepmqN6gkBvxcgZ2IXzA0Q2jHusLO0V8lqDxQZtZvIqgrWj32YMhNBg_Bh2tBiwZ4mc7PqXfgPuKK5Fc7DVrabr0wUImRp9boewOewRXKMX0Wb01K7eJHkD4JXBH9I6PNLgMjTjOz3RvLviRrDGc6V5TLSq",
    },
    {
      name: "Riya Patel",
      role: "Data Scientist",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8MmaEe0M1h10UOrG-d4UQZeXJJcsuu-LjVaLWzlClg1a6RXjxsuNsELQPSrUQGWFDt4T7kb63Jfp8lCG_Tw-jE44-_R3DhVAR4DJz5VP7spYshVkuv6Z42vbyaguZmrbXn5zKQ67zUWsmjMHj_Be6drNmb8tZY8EvYLNvhWsM_FlUe4n6r4V73x4nkhGNEBrHwqW6K_yCsOVwPY0Sj5bMBrNr466zrLJ4roApwaEN0NTIrTsHvjhWdugSaxaPIJ_VYWYSmNSlCFXn",
    },
  ]


  return (
    <>
      <main className="pt-40 pb-32 px-6 grid-background min-h-screen w-full">

        {/* Title */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-[60px] font-bold tracking-tighter text-[#D2A8FF]">
            Our Team
          </h1>

          <div className="mt-6 bg-[#5C2DA0] py-2 px-5 rounded-2xl inline-flex items-center gap-3">
            <p className="text-white font-medium text-xl">Team 2025–26</p>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path
                d="M16.25 1.25L8.75 9.82L1.25 1.25"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Two column layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-[220px_1fr] gap-12">

          <TeamSidebar/>

          {/* Right content */}
          <div className="space-y-28 mr-10">

            <section id="mentors">
              <TeamSection title="Mentors" members={mentors} />
            </section>

            <section id="heads">
              <TeamSection title="Club Heads" members={heads} />
            </section>

            <section id="core">
              <TeamSection title="Core Members" members={coreMembers} />
            </section>

            <section id="uiux">
              <TeamSection title="UI/UX Team" members={coreMembers.slice(0, 4)} />
            </section>

          </div>
        </div>
      </main>

      <BackToTop />
    </>
  )
}
