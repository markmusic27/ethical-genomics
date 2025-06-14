import { Text } from "./Text";
import { Button } from "./Button";
import { Content } from "./Content";
import { AnnotatedBibliography } from "./AnnotatedBibliography";

export const Body = () => {
  return (
    <div className="relative mx-auto w-[600px]">
      <div className="h-[128px]" />
      <Text className="text-left text-[20px] font-[400] text-[#171717]">
        Ethics in Psychiatric Genomics Research in Latin America
      </Text>
      <div className="h-[4px]" />
      <Text className="text-left text-[20px] font-[400] text-[#A8A29E]">
        Justice in Biotechnologies Final Project
      </Text>
      <div className="h-[40px]" />
      <div className="aspect-video w-full overflow-hidden rounded-[6px]">
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          poster="/images/thumbnail.png"
          src="/video/tutorial.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-[24px]" />
      <div className="flex justify-center">
        <Button
          text="Start Gameplay"
          onClick={() => {
            window.location.href = "/gameplay";
          }}
        />
      </div>
      <div className="h-[48px]" />
      <Content
        header="Thesis"
        body="Accurate Latin-American psychiatric genomic databases are essential to achieve Faden & Powers's twin aims of sufficiency and gap-reduction while honoring Daniels's demand for fair equality of opportunity (Daniels, 2008; Faden & Powers, 2013). Reliance on WEIRD datasets entrenches misdiagnosis and perpetuates injustice, making the creation of region-specific cohorts a moral imperative. Because low- and middle-income countries cannot shoulder the cost alone, multiyear funding from the WHO and national governments must be treated as an entitlement akin to essential medicines (Bruxel et al., 2025)."
      />
      <div className="h-[48px]" />
      <Content
        header="Reflection"
        body="Building a scenario-driven game around the Latin American Genomics Consortium (LAGC) forced me to revisit assumptions I carried from Costa Rica. Living under the universal Caja Costarricense de Seguro Social, I mistook free access for equity and dismissed community engagement as a distraction from “real” science. Faden & Powers’s Twin-Aim theory—securing a sufficient level of well-being while shrinking unjust gaps—and Norman Daniels’s fair-equality-of-opportunity principle reveal how wrong that was (Daniels, 2008; Faden & Powers, 2013). My objective through the game is to showcase both justice frameworks, and why they’re pertinent, through an immersive experience."
        data-section="reflection"
      />
      <div className="h-[18px]" />
      <Text
        isSerif
        className="text-[18px] leading-10 font-[300] text-[#404040]"
      >
        The game asks players to steer two psychiatric work groups—one in São
        Paulo, Brazil, and another in Nuevo León, Mexico—each facing distinct
        cultural and psychiatric challenges (Lopes-Cendes & de Oliveira, 2025).
        By translating course theory into decision trees, users can see, in
        real-time, how certain research policy, like who gets funded and how
        this research is conducted, affects communities in Latin America. Each
        decision instils a bit of intuition into the users on why Psychiatric
        Genomics Databases in Latin America should be a part of WHO healthcare
        entitlements / local entitlements.
      </Text>
      <div className="h-[24px]" />
      <div className="ml-8 space-y-6">
        <div className="flex">
          <Text
            isSerif
            className="mr-4 pt-[6px] text-[18px] font-[400] text-[#404040]"
          >
            1.
          </Text>
          <Text
            isSerif
            className="text-[18px] leading-10 font-[300] text-[#404040]"
          >
            <b>Data Strategy:</b> Using large WEIRD datasets delivers speed, yet
            ancestry mismatch skews risk scores and magnifies misdiagnosis
            (Giusti-Rodríguez et al., 2025). Building a regional cohort costs
            more but meets the Twin Aims by providing accurate tools and
            reducing disparity.
          </Text>
        </div>
        <div className="flex">
          <Text
            isSerif
            className="mr-4 pt-[6px] text-[18px] font-[400] text-[#404040]"
          >
            2.
          </Text>
          <Text
            isSerif
            className="text-[18px] leading-10 font-[300] text-[#404040]"
          >
            <b>Funding Source:</b> Reliance on volatile local or private capital
            can collapse mid-trial, breaching the social minimum that Faden &
            Powers treat as an entitlement. Securing multi-year WHO or
            government grants stabilizes research and fulfills Daniels's
            institutional duty to preserve opportunity across the life course.
          </Text>
        </div>
        <div className="flex">
          <Text
            isSerif
            className="mr-4 pt-[6px] text-[18px] font-[400] text-[#404040]"
          >
            3.
          </Text>
          <Text
            isSerif
            className="text-[18px] leading-10 font-[300] text-[#404040]"
          >
            <b>Community Involvement:</b> Hiring a celebrated Boston PI brings
            prestige but, when cultural missteps drive participants away,
            illustrates how top-down models erode sufficiency and widen gaps.
            Empowering a respected local investigator, by contrast, turns
            participants into co-authors and exemplifies robust "empowerment"
            engagement (Massarani et al., 2019).
          </Text>
        </div>
      </div>
      <div className="h-[24px]" />
      <Text
        isSerif
        className="text-[18px] leading-10 font-[300] text-[#404040]"
      >
        Players are shown both outcomes: flourishing clinics and improved
        diagnostics when just choices prevail, or distrust, stalled trials, and
        widening inequities when they do not. This immediate
        positive-and-negative feedback reinforces why sustained public
        investment in region-specific genomics is an ethical necessity, not a
        luxury. Beyond its pedagogical value, the game is simply fun—proof that
        serious justice can wear the playful clothes of design.
      </Text>
      <div className="h-[48px]" />
      <AnnotatedBibliography />
      <div className="h-[256px]" />
    </div>
  );
};
