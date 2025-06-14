import { Text } from "./Text";
import { BibliographyEntry } from "./BibliographyEntry";

export const AnnotatedBibliography = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div data-section="bibliography">
        <Text className="text-[16px] font-[400] text-[#171717]">
          Annotated Bibliography
        </Text>
      </div>
      <div className="flex flex-col gap-[32px]">
        <BibliographyEntry
          citation="Garro-Núñez, D., Picado-Martínez, M. J., Espinoza-Campos, E., Ugalde-Araya, D., Macaya, G., Raventós, H., & Chavarría-Soley, G. (2024). Systematic exploration of a decade of publications on psychiatric genetics in Latin America. American journal of medical genetics. Part B, Neuropsychiatric genetics : the official publication of the International Society of Psychiatric Genetics, 195(3), e32960. https://doi.org/10.1002/ajmg.b.32960"
          annotation="This meta-analysis reviews a decade of psychiatric genetics research in Latin America, going into the incentives of the organizations that collect this data, and the need for greater regional collaboration and investment. This source is critical the investigation since it articulates the current issues in psychiatric genetics research in Latin America, and how this research differs from similar endeavors in first-world countries. Note that the Latin American Genomics Consortium began by advancing psychiatric genomics."
        />
        <BibliographyEntry
          citation="Fonseca, L., Sena, B. F., Crossley, N., Lopez-Jaramillo, C., Koenen, K., Freimer, N. B., Bressan, R. A., Belangero, S. I., Santoro, M. L., & Gadelha, A. (2021). Diversity matters: opportunities in the study of the genetics of psychotic disorders in low- and middle-income countries in Latin America. Revista brasileira de psiquiatria (Sao Paulo, Brazil : 1999), 43(6), 631–637. https://doi.org/10.1590/1516-4446-2020-1240"
          annotation="This source, titled “Diversity matters”, elucidates the necessity and importance of a diverse genetic and environmental dataset in research findings on psychotic disorders. This is the very issue that the Latin American Genomics Consortium was established to solve. Hence, understanding the root cause issues within psychotic genomics is critical for this investigation."
        />
        <BibliographyEntry
          citation="Giusti-Rodríguez, P., Okewole, N., Jain, S., Montalvo-Ortiz, J. L., & Peterson, R. E. (2025). Diversifying Psychiatric Genomics: Globally Inclusive Strategies Toward Health Equity. The Psychiatric clinics of North America, 48(2), 241–256. https://doi.org/10.1016/j.psc.2025.01.003"
          annotation="This study underlies how a lack of diverse psychiatric genomic data affects the potential of precision medicine in clinical settings. Unlike other studies in this investigation, it takes a non-Lat-am approach and instead focuses on the lack of diversity at a global scale. It also touches on the environmental factors at play and how these also result in a necessity for more diverse data. This is critical since it lets us extrapolate certain patterns we may find present in Latin American studies."
        />
        <BibliographyEntry
          citation="Brown, J. E. H., Young, J. L., & Martinez-Martin, N. (2022). Psychiatric genomics, mental health equity, and intersectionality: A framework for research and practice. Frontiers in psychiatry, 13, 1061705. https://doi.org/10.3389/fpsyt.2022.1061705"
          annotation="The crux of this study lies in the constant reassertion that mental health cannot be boiled down to genetics alone. In fact, societal factors and closely held cultural beliefs profoundly impact how mental illness manifests in different parts of the globe. Instead, this study pushes for an intersectional framework that models mental illness across several factors. This is critical since diverse populations contain diverse genomics and diverse cultures and systemic injustices. "
        />
        <BibliographyEntry
          citation="Lopes-Cendes, I., & de Oliveira, T. C. (2025). Inequalities and Inclusion in Genomics Applied to Healthcare: A Latin American Perspective. Annual review of genomics and human genetics, 10.1146/annurev-genom-111224-100329. Advance online publication. https://doi.org/10.1146/annurev-genom-111224-100329"
          annotation="This study discusses the distinct challenges in deploying precision medicine in Latin American countries due to the predominance of admixed populations. It proposes ad hock regulatory frameworks necessary for maintaining ethical, legal, and privacy concerns regarding genomic data. This is necessary for the study since it describes the unique challenges posed by conducting this research in Latin America."
        />
        <BibliographyEntry
          citation="Canino, G., & Alegría, M. (2008). Psychiatric diagnosis - is it universal or relative to culture?. Journal of child psychology and psychiatry, and allied disciplines, 49(3), 237–250. https://doi.org/10.1111/j.1469-7610.2007.01854.x"
          annotation="The objective this study proposes strikes at the efficacy and importance of organizations such as the Latin American Genomics Consortium. The study analyzes the extent to which psychiatric diagnosis is universal, indiscriminate of the population in which it occurs, or tied to culture, varying from region to region. If it truly is universal, there is little, if any relevance in collecting a diverse dataset, since it simply isn’t necessary. What applies to one applies to all. Hence, understanding the extent to which psychiatric diagnosis is relative to culture helps us understand how necessary a diverse pool of psychiatric genomics data is."
        />
      </div>
    </div>
  );
};
