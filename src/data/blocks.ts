import { type Block } from "~/types/game";

export const blocks: Block[] = [
  {
    id: 0,
    action_text: "Choose your setting",
    title: "Where the Journey Begins",
    description:
      "It's 2025. Your team is preparing to launch a groundbreaking psychiatric research initiative in Latin America. Two locations stand out: São Paulo, Brazil—an urban hub with rising interest in autism spectrum research, or Nuevo León, Mexico—where access to care for bipolar disorder is urgently needed. Each setting comes with its own social, logistical, and scientific challenges.",
    question:
      "Will your team begin in Brazil to study autism, or in Mexico to focus on bipolar disorder?",
    pointers: [1, 2],
    context: "",
  },
  {
    id: 1,
    action_text: "Start in São Paulo",
    title: "Welcome to São Paulo",
    description:
      "Congratulations! You've just launched the Bipolar Disorder Working Group in São Paulo, led by the renowned Dr. Maria Rita Passos Bueno from the University of São Paulo. Your team is now officially partnered with the Latin American Genetics Consortium. The mission is clear: advance psychiatric genomics with a focus on inclusion and impact. But the road ahead won't be easy—you'll need to secure funding, build trust with local communities, and advocate for the importance of diverse genomic data.",
    question:
      "How will you prioritize your first steps in launching the working group?",
    pointers: [3],
    context:
      "These are actual working groups that partner with the Latin American Genomics Consortium. Check their work out at: https://www.latinamericangenomicsconsortium.org/autism-spectrum-disorder-working-group",
  },
  {
    id: 2,
    action_text: "Start in Nueva León",
    title: "Welcome to Nuevo León",
    description:
      "Congratulations! You've just established the Bipolar Disorder Working Group in Nuevo León, Mexico, under the leadership of Dr. Alfredo Bernardo Cuellar Barbosa from the Universidad Autónoma de Nuevo León. With support from the Latin American Genetics Consortium, your team is ready to tackle one of the region's most pressing mental health challenges. As you begin, three key obstacles come into focus: securing sustainable funding, engaging with local communities, and ensuring that your research promotes genomic diversity and inclusion.",
    question:
      "What will your team focus on first to lay a strong foundation for the project?",
    pointers: [4],
    context:
      "These are actual working groups that partner with the Latin American Genomics Consortium. Check their work out at: https://www.latinamericangenomicsconsortium.org/bipolar-disorder-working-group",
  },
  {
    id: 3,
    action_text: "Decide your data strategy",
    title: "The Data Dilemma",
    description:
      "Your team in São Paulo is ready to begin analyzing the genetics of autism. You face a crucial decision: whether to use existing genomic data—primarily from white populations in the U.S.—or invest in building a new dataset specific to the Brazilian population. Global autism research has historically overlooked social context and genetic diversity, favoring a one-size-fits-all model. You recently read a study highlighting how the absence of psychiatric genomic data from Latin America limits the potential for precision medicine. Yet collecting data locally could delay your work by years and require significant funding. The pressure to produce results is high.",
    question:
      "Will you adapt existing data to the Brazilian population, or build a new, inclusive genomic dataset from scratch?",
    pointers: [5, 6],
    context:
      "Global autism research often relies on data from WEIRD (Western, Educated, Industrialized, Rich, Democratic) populations, limiting insights into underrepresented groups. A recent study emphasized how the lack of Latin American psychiatric genomic data creates major gaps in clinical applicability. However, building a Brazil-specific dataset would require a long-term investment of time and resources. Your decision now will shape the direction and credibility of your project. Paper on the effects of psychiatric genomic data in Latin America: (Giusti-Rodríguez et al., 2025)",
  },
  {
    id: 4,
    action_text: "Decide your data strategy",
    title: "The Data Dilemma",
    description:
      "In Nuevo León, your team is ready to dive into the genetics of bipolar disorder. A major crossroads lies ahead: do you rely on existing genomic datasets—built mostly from U.S. and European populations—or begin the long process of creating a new dataset tailored to the Mexican population? Most psychiatric research has ignored the unique genetic and social landscapes of Latin America. You’ve just reviewed a study highlighting how this gap severely limits precision medicine across the region. Still, developing a localized dataset will take years and significant funding, while adapting current data could fast-track your findings.",
    question:
      "Should your team adapt existing genomic data to fit Mexican populations, or invest in building a new dataset grounded in local diversity?",
    pointers: [7, 8],
    context:
      "Global bipolar disorder research often relies on data from WEIRD (Western, Educated, Industrialized, Rich, Democratic) populations, limiting insights into underrepresented groups. A recent study emphasized how the lack of Latin American psychiatric genomic data creates major gaps in clinical applicability. However, building a Mexico-specific dataset would require a long-term investment of time and resources. Your decision now will shape the direction and credibility of your project. Paper on the effects of psychiatric genomic data in Latin America: (Giusti-Rodríguez et al., 2025)",
  },
  {
    id: 5,
    action_text: "Reuse old data",
    title: "Shortcuts and Consequences",
    description:
      "You choose to adapt existing genomic data from U.S. and European cohorts to the local population. Initially, your results look promising—models are producing publishable findings, and you’re making progress faster than expected. But problems begin to emerge. Community health workers notice inconsistencies between your predictions and clinical realities. Advocacy groups criticize the lack of representation. Trust with local stakeholders begins to erode. Precision medicine, once your promise, now feels like a misfit in practice. The shortcuts come at a cost.",
    question: "Backtrack to last decision and try the other option",
    pointers: [3],
    context: "",
  },
  {
    id: 6,
    action_text: "Build new genomic dataset",
    title: "Investing in the Future",
    description:
      "You decide to build a new genomic dataset tailored to your local population. It’s a long and expensive road, and your first challenge is assembling a multidisciplinary team. You hire geneticists, data scientists, community liaisons, and ethicists from across Brazil to ensure the research reflects both scientific and social realities. Progress is slow, but trust grows. Early pilot studies show promise, and you’re setting the groundwork for more equitable psychiatric care. This is the right foundation—but the hard part is just beginning.",
    question:
      "Should you focus on securing local funding, or pursue global grants from institutions like the WHO?",
    pointers: [],
    context: "",
  },
  {
    id: 7,
    action_text: "Reuse old data",
    title: "Shortcuts and Consequences",
    description:
      "You decide to repurpose existing genomic data from the U.S. and Europe for your research in Mexico. At first, the models yield fast results and your team gains attention. But as implementation begins, discrepancies arise. Clinicians in Nuevo León report mismatches between data predictions and patient responses. The local population grows skeptical. Media and health advocates question the legitimacy of your findings. What once seemed efficient now undermines credibility and trust.",
    question: "Backtrack to last decision and try the other option",
    pointers: [4],
    context: "",
  },
  {
    id: 8,
    action_text: "Build new genomic dataset",
    title: "Investing in the Future",
    description:
      "You commit to developing a genomic dataset specific to Mexico, centered in Nuevo León. You assemble a diverse, local team—geneticists, clinicians, community liaisons, and data scientists—ensuring cultural and scientific integrity. The work is slow and funding is tight, but your community engagement grows stronger by the day. Initial pilot data is promising. You've laid the foundation for more precise, inclusive care. Now comes the challenge of securing funding to sustain the effort.",
    question:
      "Should you focus on securing local funding, or pursue global grants from institutions like the WHO?",
    pointers: [],
    context: "",
  },
];

// Helper function to get a block by ID
export const getBlockById = (id: number): Block | undefined => {
  return blocks.find((block) => block.id === id);
};
